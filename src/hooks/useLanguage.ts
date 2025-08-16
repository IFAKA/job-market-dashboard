'use client';

import { useState, useEffect } from 'react';
import { Language, detectLanguage, setLanguage as setLanguageStorage, t } from '@/lib/i18n';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const detectedLanguage = detectLanguage();
    setLanguageState(detectedLanguage);
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setLanguageStorage(newLanguage);
    
    // Update the HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLanguage;
    }
  };

  const translate = (key: string): string => {
    const result = t(key, language);
    return typeof result === 'string' ? result : result[0];
  };

  return {
    language,
    setLanguage,
    translate,
    isClient
  };
}
