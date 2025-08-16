'use client';

import { useTranslation } from 'react-i18next';
import { LanguageSwitcherI18next } from '@/components/ui/language-switcher-i18next';

export function I18nextExample() {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{t('dashboard.title')}</h2>
        <LanguageSwitcherI18next />
      </div>
      
      <p className="text-gray-600 mb-4">{t('dashboard.subtitle')}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 rounded">
          <h3 className="font-medium">{t('metrics.totalJobs')}</h3>
          <p className="text-sm text-gray-600">{t('metrics.availablePositions')}</p>
        </div>
        
        <div className="p-3 bg-green-50 rounded">
          <h3 className="font-medium">{t('metrics.companies')}</h3>
          <p className="text-sm text-gray-600">{t('metrics.hiringCompanies')}</p>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 rounded">
        <p className="text-sm">
          <strong>i18next Features:</strong> This example shows how to use i18next with 
          automatic language detection, interpolation, and more advanced features.
        </p>
      </div>
    </div>
  );
}
