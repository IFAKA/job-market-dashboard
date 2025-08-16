'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileUpload } from '@/components/ui/file-upload';
import { HistoryManager } from '@/components/ui/history-manager';
import { Job, JobMarketData } from '@/types/job';
import { 
  calculateMetrics, 
  calculateCategoryStats, 
  calculateTopOpportunities, 
  calculateTechnologyInsights, 
  generateRecommendations 
} from '@/lib/data-utils';
import { Upload, History, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguageContext } from '@/components/providers/language-provider';
import { useCountry } from '@/components/providers/country-provider';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { CountrySelector } from '@/components/ui/country-selector';
import { t } from '@/lib/i18n';
import { 
  getHistory, 
  saveHistory, 
  setCurrentDataId, 
  saveDataById, 
  removeDataById,
  getCurrentDataId,
  getDataById,
  initializeDefaultData,
  HistoryItem
} from '@/lib/default-data';

// Constants moved to default-data.ts utility

export default function UploadPage() {
  const router = useRouter();
  const { language } = useLanguageContext();
  const { selectedCountry, setSelectedCountry } = useCountry();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);

  // Load history from localStorage on component mount and ensure default data is available
  useEffect(() => {
    const loadHistoryAndDefaultData = async () => {
      // Always ensure default data is available by loading it
      try {
        const response = await fetch('/api/jobs');
        const jobMarketData = await response.json();
        initializeDefaultData(jobMarketData);
      } catch (error) {
        console.error('Error loading default data:', error);
      }
      
      // Then load the history
      const savedHistory = getHistory();
      setHistory(savedHistory);
    };
    
    loadHistoryAndDefaultData();
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    saveHistory(history);
  }, [history]);

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('country', selectedCountry);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const result = await response.json();
      const { jobs, fileName, fileType, jobCount, country } = result;

      // Validate that we got some jobs
      if (!jobs || jobs.length === 0) {
        throw new Error('No valid job data found in the file');
      }

      // Process the jobs data
      const metrics = calculateMetrics(jobs);
      const categoryStats = calculateCategoryStats(jobs);
      const topOpportunities = calculateTopOpportunities(jobs);
      const technologyInsights = calculateTechnologyInsights(jobs);
      const recommendations = generateRecommendations(metrics, categoryStats);

      const jobMarketData: JobMarketData = {
        jobs,
        metrics,
        categoryStats,
        topOpportunities,
        technologyInsights,
        recommendations
      };

      // Save data to localStorage with unique ID
      const dataId = Date.now().toString();
      saveDataById(dataId, jobMarketData);
      setCurrentDataId(dataId);

      // Add to history
      const newHistoryItem: HistoryItem = {
        id: dataId,
        fileName,
        fileType: fileType as 'txt' | 'csv',
        uploadDate: new Date(),
        jobCount,
        isCurrent: true
      };

      // Update history - mark all previous items as not current
      const updatedHistory = history.map(item => ({ ...item, isCurrent: false }));
      updatedHistory.unshift(newHistoryItem);

      // Keep only the last 10 items
      const trimmedHistory = updatedHistory.slice(0, 10);
      setHistory(trimmedHistory);

      // Show success message
      setUploadSuccess(`${t('upload.success', language)} ${jobCount} jobs from ${fileName}`);

      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/');
      }, 1500);

    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error instanceof Error ? error.message : t('upload.error', language));
    } finally {
      setIsUploading(false);
    }
  };

  const handleSwitchToHistory = (item: HistoryItem) => {
    // Set this item as current
    setCurrentDataId(item.id);
    
    // Update history to mark this item as current
    const updatedHistory = history.map(histItem => ({
      ...histItem,
      isCurrent: histItem.id === item.id
    }));
    setHistory(updatedHistory);

    // Redirect to dashboard
    router.push('/');
  };

  const handleDeleteHistory = (item: HistoryItem) => {
    // Remove the data from localStorage
    removeDataById(item.id);
    
    // If this was the current item, clear the current data ID
    const currentDataId = getCurrentDataId();
    if (currentDataId === item.id) {
      localStorage.removeItem('job-market-current-data-id');
    }
    
    // Remove from history
    const updatedHistory = history.filter(histItem => histItem.id !== item.id);
    setHistory(updatedHistory);
  };

  const handleExportHistory = async (item: HistoryItem) => {
    try {
      // Get the data for this history item
      const data = getDataById(item.id);
      if (!data || !data.jobs || data.jobs.length === 0) {
        alert(t('export.noData', language));
        return;
      }

      const response = await fetch('/api/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobs: data.jobs }),
      });

      if (!response.ok) {
        throw new Error('Export failed');
      }

      // Create download link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${item.fileName.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Export error:', error);
      alert(t('export.error', language));
    }
  };

  const goToDashboard = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-sky-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Upload className="w-8 h-8 text-sky-500" />
          <h1 className="text-4xl md:text-5xl font-bold text-sky-600">
            {t('upload.title', language)}
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('upload.description', language)}
        </p>
      </div>

      {/* Navigation */}
      <div className="mb-6 flex justify-center items-center gap-3">
        <Button
          onClick={goToDashboard}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          {t('upload.backToDashboard', language)}
        </Button>
        {getCurrentDataId() && (
          <Button
            onClick={() => {
              localStorage.removeItem('job-market-current-data-id');
              window.location.reload();
            }}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            {t('use.defaultData', language)}
          </Button>
        )}
        <LanguageSwitcher />
      </div>

      {/* Error Display */}
      {uploadError && (
        <Card className="mb-6 p-4 bg-red-50 border-red-200">
          <p className="text-red-600 text-center">{uploadError}</p>
        </Card>
      )}

      {/* Success Display */}
      {uploadSuccess && (
        <Card className="mb-6 p-4 bg-green-50 border-green-200">
          <p className="text-green-600 text-center">{uploadSuccess}</p>
        </Card>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* File Upload Section */}
        <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
          <Upload className="w-5 h-5 text-sky-500" />
          <h2 className="text-xl font-semibold text-gray-900">{t('upload.uploadNewFile', language)}</h2>
        </div>
          <FileUpload 
            onFileUpload={handleFileUpload} 
            isLoading={isUploading}
          />
        </div>

        {/* Country Selector */}
        <div>
          <CountrySelector />
        </div>

        {/* History Section */}
        <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-4">
          <History className="w-5 h-5 text-sky-500" />
          <h2 className="text-xl font-semibold text-gray-900">{t('upload.uploadHistory', language)}</h2>
        </div>
          <HistoryManager
            history={history}
            onSwitchToHistory={handleSwitchToHistory}
            onDeleteHistory={handleDeleteHistory}
            onExportHistory={handleExportHistory}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>{t('upload.supportedFormatsFooter', language)}</p>
      </div>
    </div>
  );
}
