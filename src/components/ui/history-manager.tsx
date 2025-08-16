'use client';

import { useState } from 'react';
import { Clock, Trash2, FileText, FileSpreadsheet, Check } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Badge } from './badge';

export interface HistoryItem {
  id: string;
  fileName: string;
  fileType: 'txt' | 'csv';
  uploadDate: Date;
  jobCount: number;
  isCurrent: boolean;
}

interface HistoryManagerProps {
  history: HistoryItem[];
  onSwitchToHistory: (item: HistoryItem) => void;
  onDeleteHistory: (item: HistoryItem) => void;
}

export function HistoryManager({ history, onSwitchToHistory, onDeleteHistory }: HistoryManagerProps) {
  const [deletingItem, setDeletingItem] = useState<string | null>(null);

  const handleDelete = (item: HistoryItem) => {
    setDeletingItem(item.id);
    // Show confirmation modal
    if (confirm(`Are you sure you want to delete "${item.fileName}" from history?`)) {
      onDeleteHistory(item);
    }
    setDeletingItem(null);
  };

  const getFileIcon = (fileType: 'txt' | 'csv') => {
    if (fileType === 'csv') {
      return <FileSpreadsheet className="w-4 h-4 text-green-500" />;
    }
    return <FileText className="w-4 h-4 text-blue-500" />;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (history.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center text-gray-500">
          <Clock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p>No upload history yet</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Upload History</h3>
          <Badge variant="secondary">{history.length} files</Badge>
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
                        Current
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{formatDate(item.uploadDate)}</span>
                    <span>•</span>
                    <span>{item.jobCount.toLocaleString()} jobs</span>
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
                  onClick={() => handleDelete(item)}
                  disabled={deletingItem === item.id}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
