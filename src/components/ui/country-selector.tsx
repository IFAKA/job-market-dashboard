'use client';

import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';

interface CountrySelectorProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  className?: string;
}

const countries = [
  { value: 'spain', label: 'España', flag: '🇪🇸' },
  { value: 'argentina', label: 'Argentina', flag: '🇦🇷' }
];

export function CountrySelector({ selectedCountry, onCountryChange, className }: CountrySelectorProps) {
  const [mounted, setMounted] = useState(false);

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
          País / Country
        </CardTitle>
        <CardDescription>
          Selecciona tu país para ver salarios específicos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={selectedCountry} onValueChange={onCountryChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona un país" />
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
