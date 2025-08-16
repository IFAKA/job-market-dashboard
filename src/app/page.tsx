'use client';

import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { CategoryExplorer } from '@/components/dashboard/CategoryExplorer';
import { MetricsGrid } from '@/components/dashboard/MetricsCard';
import { Recommendations } from '@/components/dashboard/Recommendations';
import { TopOpportunities } from '@/components/dashboard/TopOpportunities';
import { useLanguageContext } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { ExportButton } from '@/components/ui/export-button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import {
  prepareChartData
} from '@/lib/data-utils';
import { JobMarketData } from '@/types/job';
import { BarChart3, Code, Globe, PieChart as PieChartIcon, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  ensureCurrentDataInHistory,
  getCurrentDataId,
  getDataById,
  initializeDefaultData
} from '@/lib/default-data';
import { t } from '@/lib/i18n';

export default function Dashboard() {
  const router = useRouter();
  const { language } = useLanguageContext();
  const [data, setData] = useState<JobMarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentDataId, setCurrentDataId] = useState<string | null>(null);

  // Restore scroll position when component mounts (for when user navigates back from career pages)
  useEffect(() => {
    const restoreScrollPosition = () => {
      const savedScrollPosition = sessionStorage.getItem('dashboardScrollPosition');
      
      if (savedScrollPosition) {
        // Clear the stored position
        sessionStorage.removeItem('dashboardScrollPosition');
        
        const scrollY = parseInt(savedScrollPosition);
        
        // Use requestAnimationFrame for smooth scrolling
        requestAnimationFrame(() => {
          window.scrollTo({
            top: scrollY,
            behavior: 'instant' // Use instant to avoid animation
          });
        });
      }
    };

    // Only restore scroll position after data is loaded and not loading
    if (!loading && data) {
      // Try to restore immediately
      restoreScrollPosition();
      
      // Also try after a short delay to ensure DOM is ready
      const timeoutId = setTimeout(restoreScrollPosition, 100);
      
      // Cleanup timeout
      return () => clearTimeout(timeoutId);
    }
  }, [loading, data]);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Always load API data first to ensure default data is available
        const response = await fetch('/api/jobs');
        const jobMarketData: JobMarketData = await response.json();
        
        // Initialize default data in history (this ensures it's always available)
        initializeDefaultData(jobMarketData);
        
        // Then try to load from localStorage (uploaded data)
        const currentDataId = getCurrentDataId();
        setCurrentDataId(currentDataId);
        if (currentDataId) {
          const savedData = getDataById(currentDataId);
          if (savedData) {
            setData(savedData);
            setLoading(false);
            return;
          }
        }
        
        // If no current data or current data not found, use default data
        setData(jobMarketData);
        
        // Ensure current data is properly marked in history
        ensureCurrentDataInHistory();
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-sky-50 flex items-center justify-center">
                  <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-sky-400 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">{t('loading.text', language)}</p>
          </div>
      </div>
    );
  }

  if (!data) {
    return (
              <div className="min-h-screen bg-sky-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-gray-600">{t('no.data', language)}</p>
          </div>
        </div>
    );
  }



  // Prepare chart data
  const categoryChartData = prepareChartData(
    Object.fromEntries(
      Object.entries(data.categoryStats).map(([category, stats]) => [category, stats.Job_Count])
    )
  );

  const technologyChartData = prepareChartData(
    Object.fromEntries(
      data.technologyInsights.map(tech => [tech.technology, tech.count])
    )
  );

  return (
    <div className="min-h-screen bg-sky-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
                      <Globe className="w-8 h-8 text-sky-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-sky-600">
              {t('dashboard.title', language)}
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('dashboard.subtitle', language)}
          </p>
          {currentDataId && (
            <p className="text-sm text-sky-600 mt-2">
              {t('using.uploadedData', language)} • {data?.jobs.length || 0} {t('jobs.loaded', language)}
            </p>
          )}
          <div className="mt-6 flex gap-3 justify-center items-center">
            <Button
              onClick={() => router.push('/upload')}
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700"
            >
              <Upload className="w-4 h-4" />
              {t('upload.newData', language)}
            </Button>
            <ExportButton jobs={data.jobs} />
            <LanguageSwitcher />
          </div>
          

      </div>

      {/* Metrics Grid */}
      <MetricsGrid metrics={data.metrics} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <BarChart3 className="w-5 h-5 text-sky-500" />
            <span>{t('charts.topCategories', language)}</span>
          </div>
          <BarChart
            data={categoryChartData}
            title={t('charts.topCategories', language)}
            height={400}
            width={500}
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <PieChartIcon className="w-5 h-5 text-sky-500" />
            <span>{t('charts.categoryDistribution', language)}</span>
          </div>
          <PieChart
            data={categoryChartData}
            title={t('charts.categoryDistribution', language)}
            height={400}
            width={500}
          />
        </div>
      </div>

      {/* Technology Insights */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
          <Code className="w-5 h-5 text-sky-500" />
          <span>{t('charts.technologies', language)}</span>
        </div>
        <BarChart
          data={technologyChartData}
          title={t('charts.technologies', language)}
          height={400}
          width={800}
        />
      </div>

      {/* Category Explorer */}
      <div className="mb-8">
        <CategoryExplorer categoryStats={data.categoryStats} />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TopOpportunities opportunities={data.topOpportunities} />
        <Recommendations recommendations={data.recommendations} />
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>{t('footer.updated', language)} • {t('footer.analysis', language)}</p>
      </div>
    </div>
  );
}
