'use client';

import { useLanguageContext } from '@/components/providers/language-provider';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

export default function TestPage() {
  const { language } = useLanguageContext();
  
  return (
    <div className="min-h-screen bg-sky-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-sky-600">
            {language === 'es' ? 'Prueba de Tailwind CSS' : 'Tailwind CSS Test'}
          </h1>
          <LanguageSwitcher />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {language === 'es' ? 'Tarjeta 1' : 'Card 1'}
            </h2>
            <p className="text-gray-600">
              {language === 'es' 
                ? 'Esta es una tarjeta de prueba con clases de Tailwind.' 
                : 'This is a test card with Tailwind classes.'
              }
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {language === 'es' ? 'Tarjeta 2' : 'Card 2'}
            </h2>
            <p className="text-gray-600">
              {language === 'es' 
                ? 'Otra tarjeta de prueba con diferentes estilos.' 
                : 'Another test card with different styling.'
              }
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {language === 'es' ? 'Tarjeta 3' : 'Card 3'}
            </h2>
            <p className="text-gray-600">
              {language === 'es' 
                ? 'Tercera tarjeta de prueba para verificar estilos.' 
                : 'Third test card to verify styling.'
              }
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <p className="font-medium">
            {language === 'es' 
              ? '✅ Si puedes ver este contenido estilizado, ¡Tailwind CSS está funcionando!' 
              : '✅ If you can see this styled content, Tailwind CSS is working!'
            }
          </p>
        </div>
        
        <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
          <p className="font-medium">
            {language === 'es' 
              ? '🌐 Prueba el cambio de idioma usando el botón de arriba' 
              : '🌐 Test language switching using the button above'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
