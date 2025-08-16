'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CountryContextType {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<string>('argentina');

  // Load country from localStorage on mount
  useEffect(() => {
    const savedCountry = localStorage.getItem('selected-country');
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  // Save country to localStorage whenever it changes
  const handleSetSelectedCountry = (country: string) => {
    setSelectedCountry(country);
    localStorage.setItem('selected-country', country);
  };

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry: handleSetSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
}
