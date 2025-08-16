export type Language = 'en' | 'es';

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

// Translation keys for the entire application
export const translations: Translations = {
  // Header
  'dashboard.title': {
    en: 'Job Market Dashboard',
    es: 'Panel del Mercado Laboral'
  },
  'dashboard.subtitle': {
    en: 'Real-time insights into job market opportunities with AI-powered analysis',
    es: 'Información en tiempo real sobre oportunidades del mercado laboral con análisis impulsado por IA'
  },
  'upload.newData': {
    en: 'Upload New Data',
    es: 'Subir Nuevos Datos'
  },
  'use.defaultData': {
    en: 'Use Default Data',
    es: 'Usar Datos Predeterminados'
  },
  'loading.text': {
    en: 'Loading job market data...',
    es: 'Cargando datos del mercado laboral...'
  },
  'no.data': {
    en: 'No data available',
    es: 'No hay datos disponibles'
  },
  'using.uploadedData': {
    en: 'Using uploaded data',
    es: 'Usando datos subidos'
  },
  'jobs.loaded': {
    en: 'jobs loaded',
    es: 'trabajos cargados'
  },

  // Metrics
  'metrics.totalJobs': {
    en: 'Total Jobs',
    es: 'Total de Trabajos'
  },
  'metrics.avgSalary': {
    en: 'Average Salary',
    es: 'Salario Promedio'
  },
  'metrics.remoteJobs': {
    en: 'Remote Jobs',
    es: 'Trabajos Remotos'
  },
  'metrics.topCategory': {
    en: 'Top Category',
    es: 'Categoría Principal'
  },

  // Charts
  'charts.topCategories': {
    en: 'Top Job Categories',
    es: 'Principales Categorías de Trabajo'
  },
  'charts.categoryDistribution': {
    en: 'Category Distribution',
    es: 'Distribución de Categorías'
  },
  'charts.technologies': {
    en: 'Most In-Demand Technologies',
    es: 'Tecnologías Más Demandadas'
  },

  // Opportunities
  'opportunities.title': {
    en: 'Top Opportunities',
    es: 'Mejores Oportunidades'
  },
  'opportunities.salary': {
    en: 'Salary',
    es: 'Salario'
  },
  'opportunities.location': {
    en: 'Location',
    es: 'Ubicación'
  },
  'opportunities.viewMore': {
    en: 'View More',
    es: 'Ver Más'
  },

  // Recommendations
  'recommendations.title': {
    en: 'AI Recommendations',
    es: 'Recomendaciones de IA'
  },
  'recommendations.skills': {
    en: 'Skills to Focus On',
    es: 'Habilidades en las que Enfocarse'
  },
  'recommendations.market': {
    en: 'Market Insights',
    es: 'Perspectivas del Mercado'
  },
  'recommendations.strategy': {
    en: 'Strategy Tips',
    es: 'Consejos Estratégicos'
  },

  // Footer
  'footer.updated': {
    en: 'Data updated in real-time',
    es: 'Datos actualizados en tiempo real'
  },
  'footer.analysis': {
    en: 'Job Market Analysis',
    es: 'Análisis del Mercado Laboral'
  },

  // Language switcher
  'language.english': {
    en: 'English',
    es: 'Inglés'
  },
  'language.spanish': {
    en: 'Spanish',
    es: 'Español'
  },

  // Upload page
  'upload.title': {
    en: 'Upload Job Data',
    es: 'Subir Datos de Trabajo'
  },
  'upload.description': {
    en: 'Upload a CSV file with job data to analyze',
    es: 'Sube un archivo CSV con datos de trabajo para analizar'
  },
  'upload.dragDrop': {
    en: 'Drag and drop your CSV file here, or click to browse',
    es: 'Arrastra y suelta tu archivo CSV aquí, o haz clic para explorar'
  },
  'upload.selectFile': {
    en: 'Select File',
    es: 'Seleccionar Archivo'
  },
  'upload.uploading': {
    en: 'Uploading...',
    es: 'Subiendo...'
  },
  'upload.success': {
    en: 'Upload successful!',
    es: '¡Subida exitosa!'
  },
  'upload.error': {
    en: 'Upload failed. Please try again.',
    es: 'Error en la subida. Por favor, inténtalo de nuevo.'
  },
  'upload.backToDashboard': {
    en: 'Back to Dashboard',
    es: 'Volver al Panel'
  },

  // Additional metrics
  'metrics.companies': {
    en: 'Companies',
    es: 'Empresas'
  },
  'metrics.easyApply': {
    en: 'Easy Apply',
    es: 'Aplicación Fácil'
  },
  'metrics.recentJobs': {
    en: 'Recent Jobs',
    es: 'Trabajos Recientes'
  },
  'metrics.availablePositions': {
    en: 'Available positions',
    es: 'Posiciones disponibles'
  },
  'metrics.hiringCompanies': {
    en: 'Hiring companies',
    es: 'Empresas contratando'
  },
  'metrics.quickApplications': {
    en: 'Quick applications',
    es: 'Aplicaciones rápidas'
  },
  'metrics.last7Days': {
    en: 'Last 7 days',
    es: 'Últimos 7 días'
  },
  'metrics.daysAgo': {
    en: 'days ago',
    es: 'días atrás'
  },

  // Export functionality
  'export.csv': {
    en: 'Export to CSV',
    es: 'Exportar a CSV'
  },
  'export.exporting': {
    en: 'Exporting...',
    es: 'Exportando...'
  },
  'export.noData': {
    en: 'No data to export',
    es: 'No hay datos para exportar'
  },
  'export.error': {
    en: 'Export failed. Please try again.',
    es: 'Error en la exportación. Por favor, inténtalo de nuevo.'
  },

  // History management
  'history.uploadHistory': {
    en: 'Upload History',
    es: 'Historial de Subidas'
  },
  'history.files': {
    en: 'files',
    es: 'archivos'
  },
  'history.noHistory': {
    en: 'No upload history yet',
    es: 'Aún no hay historial de subidas'
  },
  'history.current': {
    en: 'Current',
    es: 'Actual'
  },
  'history.jobs': {
    en: 'jobs',
    es: 'trabajos'
  },
  'history.deleteConfirm': {
    en: 'Delete History Item',
    es: 'Eliminar Elemento del Historial'
  },
  'history.deleteMessage': {
    en: 'Are you sure you want to delete "{fileName}" from history? This action cannot be undone.',
    es: '¿Estás seguro de que quieres eliminar "{fileName}" del historial? Esta acción no se puede deshacer.'
  },
  'history.delete': {
    en: 'Delete',
    es: 'Eliminar'
  },
  'history.cancel': {
    en: 'Cancel',
    es: 'Cancelar'
  }
};

// Language detection utility
export function detectLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'; // Default for server-side rendering
  }

  // Check localStorage first
  const savedLanguage = localStorage.getItem('job-market-language') as Language;
  if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
    return savedLanguage;
  }

  // Detect from browser language
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('es')) {
    return 'es';
  }

  return 'en'; // Default to English
}

// Translation function
export function t(key: string, language: Language): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return translation[language] || translation['en'] || key;
}

// Set language in localStorage
export function setLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('job-market-language', language);
  }
}
