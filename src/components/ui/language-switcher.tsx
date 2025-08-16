'use client';

import * as React from "react";
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const { language, setLanguage, isClient } = useLanguageContext();

  if (!isClient) {
    return null; // Don't render until client-side to avoid hydration mismatch
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as 'en' | 'es');
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue placeholder={t('language.english', language)} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t('language.languages', language)}</SelectLabel>
          <SelectItem value="en">🇺🇸 {t('language.english', 'en')}</SelectItem>
          <SelectItem value="es">🇪🇸 {t('language.spanish', 'es')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
