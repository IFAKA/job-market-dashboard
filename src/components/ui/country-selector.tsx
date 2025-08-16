'use client';

import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { useLanguageContext } from '@/components/providers/language-provider';
import { useCountry } from '@/components/providers/country-provider';
import { t } from '@/lib/i18n';

interface CountrySelectorProps {
  selectedCountry?: string;
  onCountryChange?: (country: string) => void;
  className?: string;
}

export function CountrySelector({ selectedCountry, onCountryChange, className }: CountrySelectorProps) {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguageContext();
  const { selectedCountry: contextCountry, setSelectedCountry: setContextCountry } = useCountry();

  // Use props if provided, otherwise use context
  const currentCountry = selectedCountry || contextCountry;
  const handleCountryChange = onCountryChange || setContextCountry;

  const countries = [
    { value: 'spain', label: t('country.spain', language), flag: '🇪🇸' },
    { value: 'argentina', label: t('country.argentina', language), flag: '🇦🇷' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Globe className="w-5 h-5 text-sky-500" />
          {t('country.title', language)}
        </CardTitle>
        <CardDescription>
          {t('country.description', language)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={currentCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t('country.selectPlaceholder', language)} />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{country.flag}</span>
                  <span>{country.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
