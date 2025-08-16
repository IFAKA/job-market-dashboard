import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Only initialize on client side
if (typeof window !== 'undefined') {

// Translation resources
const resources = {
  en: {
    translation: {
      // Header
      'dashboard.title': 'Job Market Dashboard',
      'dashboard.subtitle': 'Real-time insights into remote job opportunities in Argentina with AI-powered analysis',
      'upload.newData': 'Upload New Data',
      'use.defaultData': 'Use Default Data',
      'loading.text': 'Loading job market data...',
      'no.data': 'No data available',
      'using.uploadedData': 'Using uploaded data',
      'jobs.loaded': 'jobs loaded',

      // Metrics
      'metrics.totalJobs': 'Total Jobs',
      'metrics.avgSalary': 'Average Salary',
      'metrics.remoteJobs': 'Remote Jobs',
      'metrics.topCategory': 'Top Category',
      'metrics.companies': 'Companies',
      'metrics.easyApply': 'Easy Apply',
      'metrics.recentJobs': 'Recent Jobs',
      'metrics.availablePositions': 'Available positions',
      'metrics.hiringCompanies': 'Hiring companies',
      'metrics.quickApplications': 'Quick applications',
      'metrics.last7Days': 'Last 7 days',
      'metrics.daysAgo': 'days ago',

      // Charts
      'charts.topCategories': 'Top Job Categories',
      'charts.categoryDistribution': 'Category Distribution',
      'charts.technologies': 'Most In-Demand Technologies',

      // Opportunities
      'opportunities.title': 'Top Opportunities',
      'opportunities.salary': 'Salary',
      'opportunities.location': 'Location',
      'opportunities.viewMore': 'View More',

      // Recommendations
      'recommendations.title': 'AI Recommendations',
      'recommendations.skills': 'Skills to Focus On',
      'recommendations.market': 'Market Insights',
      'recommendations.strategy': 'Strategy Tips',

      // Footer
      'footer.updated': 'Data updated in real-time',
      'footer.analysis': 'Argentine Job Market Analysis',

      // Language switcher
      'language.english': 'English',
      'language.spanish': 'Spanish',

      // Upload page
      'upload.title': 'Upload Job Data',
      'upload.description': 'Upload a CSV file with job data to analyze',
      'upload.dragDrop': 'Drag and drop your CSV file here, or click to browse',
      'upload.selectFile': 'Select File',
      'upload.uploading': 'Uploading...',
      'upload.success': 'Upload successful!',
      'upload.error': 'Upload failed. Please try again.',
      'upload.backToDashboard': 'Back to Dashboard'
    }
  },
  es: {
    translation: {
      // Header
      'dashboard.title': 'Panel del Mercado Laboral',
      'dashboard.subtitle': 'Información en tiempo real sobre oportunidades laborales remotas en Argentina con análisis impulsado por IA',
      'upload.newData': 'Subir Nuevos Datos',
      'use.defaultData': 'Usar Datos Predeterminados',
      'loading.text': 'Cargando datos del mercado laboral...',
      'no.data': 'No hay datos disponibles',
      'using.uploadedData': 'Usando datos subidos',
      'jobs.loaded': 'trabajos cargados',

      // Metrics
      'metrics.totalJobs': 'Total de Trabajos',
      'metrics.avgSalary': 'Salario Promedio',
      'metrics.remoteJobs': 'Trabajos Remotos',
      'metrics.topCategory': 'Categoría Principal',
      'metrics.companies': 'Empresas',
      'metrics.easyApply': 'Aplicación Fácil',
      'metrics.recentJobs': 'Trabajos Recientes',
      'metrics.availablePositions': 'Posiciones disponibles',
      'metrics.hiringCompanies': 'Empresas contratando',
      'metrics.quickApplications': 'Aplicaciones rápidas',
      'metrics.last7Days': 'Últimos 7 días',
      'metrics.daysAgo': 'días atrás',

      // Charts
      'charts.topCategories': 'Principales Categorías de Trabajo',
      'charts.categoryDistribution': 'Distribución de Categorías',
      'charts.technologies': 'Tecnologías Más Demandadas',

      // Opportunities
      'opportunities.title': 'Mejores Oportunidades',
      'opportunities.salary': 'Salario',
      'opportunities.location': 'Ubicación',
      'opportunities.viewMore': 'Ver Más',

      // Recommendations
      'recommendations.title': 'Recomendaciones de IA',
      'recommendations.skills': 'Habilidades en las que Enfocarse',
      'recommendations.market': 'Perspectivas del Mercado',
      'recommendations.strategy': 'Consejos Estratégicos',

      // Footer
      'footer.updated': 'Datos actualizados en tiempo real',
      'footer.analysis': 'Análisis del Mercado Laboral Argentino',

      // Language switcher
      'language.english': 'Inglés',
      'language.spanish': 'Español',

      // Upload page
      'upload.title': 'Subir Datos de Trabajo',
      'upload.description': 'Sube un archivo CSV con datos de trabajo para analizar',
      'upload.dragDrop': 'Arrastra y suelta tu archivo CSV aquí, o haz clic para explorar',
      'upload.selectFile': 'Seleccionar Archivo',
      'upload.uploading': 'Subiendo...',
      'upload.success': '¡Subida exitosa!',
      'upload.error': 'Error en la subida. Por favor, inténtalo de nuevo.',
      'upload.backToDashboard': 'Volver al Panel'
    }
  }
};

// i18next configuration
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'job-market-language',
    },
    
    react: {
      useSuspense: false, // Important for Next.js SSR
    }
  });
}

export default i18n;
