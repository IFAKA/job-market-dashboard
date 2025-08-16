'use client';

import { useState, useCallback } from 'react';
import { Upload, FileText, FileSpreadsheet, X, AlertCircle } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  isLoading?: boolean;
}

export function FileUpload({ onFileUpload, isLoading = false }: FileUploadProps) {
  const { language } = useLanguageContext();
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    const validateFile = (file: File): boolean => {
      const allowedTypes = ['text/plain', 'text/csv'];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(file.type) && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
        setError(t('upload.validation.fileType', language));
        return false;
      }

      if (file.size > maxSize) {
        setError(t('upload.validation.fileSize', language));
        return false;
      }

      setError(null);
      return true;
    };

    if (validateFile(file)) {
      setSelectedFile(file);
      setError(null);
    }
  }, [language]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setError(null);
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.csv')) {
      return <FileSpreadsheet className="w-8 h-8 text-green-500" />;
    }
    return <FileText className="w-8 h-8 text-blue-500" />;
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('upload.title', language)}
          </h3>
          <p className="text-sm text-gray-600">
            {t('upload.description', language)}
          </p>
        </div>

        {!selectedFile ? (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver
                ? 'border-sky-400 bg-sky-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-sm text-gray-600 mb-2">
              {t('upload.dragDrop', language).split('browse').map((part, index) => (
                index === 0 ? (
                  <span key={index}>
                    {part}
                    <label className="text-sky-600 hover:text-sky-700 cursor-pointer">
                      {t('upload.browse', language)}
                      <input
                        type="file"
                        accept=".txt,.csv"
                        onChange={handleFileInputChange}
                        className="hidden"
                      />
                    </label>
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                )
              ))}
            </p>
            <p className="text-xs text-gray-500">
              {t('upload.supportedFormats', language)}
            </p>
          </div>
        ) : (
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getFileIcon(selectedFile.name)}
                <div>
                  <p className="font-medium text-gray-900">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={removeFile}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center space-x-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        {selectedFile && !error && (
          <Button
            onClick={handleUpload}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {t('upload.uploading', language)}
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                {t('upload.uploadAndUpdate', language)}
              </>
            )}
          </Button>
        )}
      </div>
    </Card>
  );
}
