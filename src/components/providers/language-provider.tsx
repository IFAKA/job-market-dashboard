'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Language, detectLanguage, setLanguage as setLanguageStorage } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isClient: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const detectedLanguage = detectLanguage();
    setLanguageState(detectedLanguage);
    
    // Update the HTML lang attribute
    document.documentElement.lang = detectedLanguage;
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setLanguageStorage(newLanguage);
    
    // Update the HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLanguage;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isClient }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
