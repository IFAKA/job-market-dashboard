'use client';

import { Download } from 'lucide-react';
import { Button } from './button';
import { useState } from 'react';
import { Job } from '@/types/job';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';

interface ExportButtonProps {
  jobs: Job[];
  className?: string;
}

export function ExportButton({ jobs, className }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const { language } = useLanguageContext();

  const handleExport = async () => {
    if (!jobs || jobs.length === 0) {
      alert(t('export.noData', language));
      return;
    }

    setIsExporting(true);
    try {
      const response = await fetch('/api/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobs }),
      });

      if (!response.ok) {
        throw new Error('Export failed');
      }

      // Create download link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `job_data_export_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Export error:', error);
      alert(t('export.error', language));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      disabled={isExporting || !jobs || jobs.length === 0}
      variant="outline"
      className={`flex items-center gap-2 ${className || ''}`}
    >
      <Download className="w-4 h-4" />
      {isExporting ? t('export.exporting', language) : t('export.csv', language)}
    </Button>
  );
}
