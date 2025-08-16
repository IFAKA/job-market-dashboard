'use client';

import { useState } from 'react';
import { Clock, Trash2, FileText, FileSpreadsheet, Check, Download } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Badge } from './badge';
import { ConfirmationModal } from './confirmation-modal';
import { ExportButton } from './export-button';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';
import { HistoryItem } from '@/lib/default-data';

// HistoryItem interface is now imported from default-data.ts

interface HistoryManagerProps {
  history: HistoryItem[];
  onSwitchToHistory: (item: HistoryItem) => void;
  onDeleteHistory: (item: HistoryItem) => void;
  onExportHistory: (item: HistoryItem) => void;
}

export function HistoryManager({ history, onSwitchToHistory, onDeleteHistory, onExportHistory }: HistoryManagerProps) {
  const { language } = useLanguageContext();
  const [deletingItem, setDeletingItem] = useState<HistoryItem | null>(null);

  const handleDelete = (item: HistoryItem) => {
    setDeletingItem(item);
  };

  const confirmDelete = () => {
    if (deletingItem) {
      onDeleteHistory(deletingItem);
      setDeletingItem(null);
    }
  };

  const cancelDelete = () => {
    setDeletingItem(null);
  };

  const getFileIcon = (fileType: 'txt' | 'csv' | 'default') => {
    if (fileType === 'csv') {
      return <FileSpreadsheet className="w-4 h-4 text-green-500" />;
    } else if (fileType === 'default') {
      return <Check className="w-4 h-4 text-purple-500" />;
    }
    return <FileText className="w-4 h-4 text-blue-500" />;
  };

  const formatDate = (date: Date) => {
    try {
      // Ensure we have a valid date
      const validDate = new Date(date);
      if (isNaN(validDate.getTime())) {
        return 'Invalid date';
      }
      
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(validDate);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };

  if (history.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center text-gray-500">
          <Clock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p>{t('history.noHistory', language)}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{t('history.uploadHistory', language)}</h3>
          <Badge variant="secondary">{history.length} {t('history.files', language)}</Badge>
        </div>

        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                item.isCurrent
                  ? 'border-sky-200 bg-sky-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {getFileIcon(item.fileType)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-900 truncate">
                      {item.fileName}
                    </p>
                    {item.isCurrent && (
                      <Badge variant="default" className="text-xs">
                        {t('history.current', language)}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{formatDate(item.uploadDate)}</span>
                    <span>•</span>
                    <span>{item.jobCount.toLocaleString()} {t('history.jobs', language)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {!item.isCurrent && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSwitchToHistory(item)}
                    className="text-sky-600 hover:text-sky-700"
                  >
                    <Check className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onExportHistory(item)}
                  className="text-green-600 hover:text-green-700"
                  title="Export to CSV"
                >
                  <Download className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(item)}
                  disabled={deletingItem?.id === item.id}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ConfirmationModal
        isOpen={deletingItem !== null}
        title={t('history.deleteConfirm', language)}
        message={t('history.deleteMessage', language).replace('{fileName}', deletingItem?.fileName || '')}
        confirmText={t('history.delete', language)}
        cancelText={t('history.cancel', language)}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        variant="danger"
      />
    </Card>
  );
}
