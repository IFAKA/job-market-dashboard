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
  'language.languages': {
    en: 'Languages',
    es: 'Idiomas'
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
  'upload.browse': {
    en: 'browse',
    es: 'explorar'
  },
  'upload.supportedFormats': {
    en: 'Supports .txt and .csv files up to 10MB',
    es: 'Soporta archivos .txt y .csv hasta 10MB'
  },
  'upload.uploadAndUpdate': {
    en: 'Upload and Update Dashboard',
    es: 'Subir y Actualizar Panel'
  },
  'upload.uploadNewFile': {
    en: 'Upload New File',
    es: 'Subir Nuevo Archivo'
  },
  'upload.uploadHistory': {
    en: 'Upload History',
    es: 'Historial de Subidas'
  },
  'upload.supportedFormatsFooter': {
    en: 'Supported formats: .txt (LinkedIn job format) and .csv files up to 10MB',
    es: 'Formatos soportados: .txt (formato de trabajo de LinkedIn) y archivos .csv hasta 10MB'
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
  },

  // Country selector
  'country.title': {
    en: 'Country',
    es: 'País'
  },
  'country.description': {
    en: 'Select your country to see specific salaries',
    es: 'Selecciona tu país para ver salarios específicos'
  },
  'country.selectPlaceholder': {
    en: 'Select a country',
    es: 'Selecciona un país'
  },
  'country.spain': {
    en: 'Spain',
    es: 'España'
  },
  'country.argentina': {
    en: 'Argentina',
    es: 'Argentina'
  },

  // Category explorer
  'category.exploreTitle': {
    en: 'Explore Career Paths',
    es: 'Explorar Rutas de Carrera'
  },
  'category.exploreDescription': {
    en: 'Discover detailed information about each job category to help you make informed decisions about your learning journey. Find the perfect career path that matches your skills, interests, and goals.',
    es: 'Descubre información detallada sobre cada categoría de trabajo para ayudarte a tomar decisiones informadas sobre tu viaje de aprendizaje. Encuentra la ruta de carrera perfecta que coincida con tus habilidades, intereses y objetivos.'
  },
  'category.searchPlaceholder': {
    en: 'Search categories...',
    es: 'Buscar categorías...'
  },
  'category.allLevels': {
    en: 'All Levels',
    es: 'Todos los Niveles'
  },
  'category.beginner': {
    en: 'Beginner',
    es: 'Principiante'
  },
  'category.intermediate': {
    en: 'Intermediate',
    es: 'Intermedio'
  },
  'category.advanced': {
    en: 'Advanced',
    es: 'Avanzado'
  },
  'category.sortByJobs': {
    en: 'Sort by Jobs',
    es: 'Ordenar por Trabajos'
  },
  'category.sortBySalary': {
    en: 'Sort by Salary',
    es: 'Ordenar por Salario'
  },
  'category.sortByRecent': {
    en: 'Sort by Recent',
    es: 'Ordenar por Recientes'
  },
  'category.sortByName': {
    en: 'Sort by Name',
    es: 'Ordenar por Nombre'
  },
  'category.viewDetails': {
    en: 'View Details',
    es: 'Ver Detalles'
  },
  'category.timeToLearn': {
    en: 'Time to Learn:',
    es: 'Tiempo para Aprender:'
  },
  'category.noResults': {
    en: 'No categories found matching your criteria.',
    es: 'No se encontraron categorías que coincidan con tus criterios.'
  },
  'category.clearFilters': {
    en: 'Clear Filters',
    es: 'Limpiar Filtros'
  },
  'category.greatForNewcomers': {
    en: 'Great for newcomers',
    es: 'Excelente para principiantes'
  },
  'category.highGrowthPotential': {
    en: 'High growth potential',
    es: 'Alto potencial de crecimiento'
  },
  'category.remoteFriendly': {
    en: 'Remote-friendly',
    es: 'Amigable para trabajo remoto'
  },
  'category.highEarningPotential': {
    en: 'High earning potential',
    es: 'Alto potencial de ingresos'
  },

  // Metrics page
  'metrics.page.backToDashboard': {
    en: 'Back to Dashboard',
    es: 'Volver al Panel'
  },
  'metrics.page.title': {
    en: 'Market Metrics',
    es: 'Métricas del Mercado'
  },
  'metrics.page.description': {
    en: 'Comprehensive analysis of the job market with detailed metrics, trends, and insights.',
    es: 'Análisis integral del mercado laboral con métricas detalladas, tendencias e información.'
  },
  'metrics.page.keyIndicators': {
    en: 'Key Market Indicators',
    es: 'Indicadores Clave del Mercado'
  },
  'metrics.page.marketTrends': {
    en: 'Market Trends',
    es: 'Tendencias del Mercado'
  },
  'metrics.page.detailedAnalysis': {
    en: 'Detailed Analysis',
    es: 'Análisis Detallado'
  },
  'metrics.page.marketInsights': {
    en: 'Market Insights',
    es: 'Perspectivas del Mercado'
  },
  'metrics.page.quickStats': {
    en: 'Quick Stats',
    es: 'Estadísticas Rápidas'
  },
  'metrics.page.growthIndicators': {
    en: 'Growth Indicators',
    es: 'Indicadores de Crecimiento'
  },
  'metrics.page.actions': {
    en: 'Actions',
    es: 'Acciones'
  },
  'metrics.page.jobGrowth': {
    en: 'Job Growth',
    es: 'Crecimiento de Trabajos'
  },
  'metrics.page.monthlyTrends': {
    en: 'Monthly job posting trends',
    es: 'Tendencias mensuales de publicaciones de trabajo'
  },
  'metrics.page.companyActivity': {
    en: 'Company Activity',
    es: 'Actividad de Empresas'
  },
  'metrics.page.newCompanies': {
    en: 'New companies entering market',
    es: 'Nuevas empresas entrando al mercado'
  },
  'metrics.page.easyApplyJobs': {
    en: 'Easy Apply Jobs',
    es: 'Trabajos de Aplicación Fácil'
  },
  'metrics.page.simplifiedApplication': {
    en: 'Jobs with simplified application',
    es: 'Trabajos con aplicación simplificada'
  },
  'metrics.page.vsLastMonth': {
    en: 'vs last month',
    es: 'vs el mes pasado'
  },
  'metrics.page.jobDistribution': {
    en: 'Job Distribution',
    es: 'Distribución de Trabajos'
  },
  'metrics.page.remoteJobs': {
    en: 'Remote Jobs',
    es: 'Trabajos Remotos'
  },
  'metrics.page.hybridJobs': {
    en: 'Hybrid Jobs',
    es: 'Trabajos Híbridos'
  },
  'metrics.page.onsiteJobs': {
    en: 'On-site Jobs',
    es: 'Trabajos Presenciales'
  },
  'metrics.page.experienceLevel': {
    en: 'Experience Level',
    es: 'Nivel de Experiencia'
  },
  'metrics.page.entryLevel': {
    en: 'Entry Level',
    es: 'Nivel de Entrada'
  },
  'metrics.page.midLevel': {
    en: 'Mid Level',
    es: 'Nivel Intermedio'
  },
  'metrics.page.seniorLevel': {
    en: 'Senior Level',
    es: 'Nivel Senior'
  },
  'metrics.page.growingDemand': {
    en: 'Growing Demand',
    es: 'Demanda Creciente'
  },
  'metrics.page.growingDemandDesc': {
    en: 'The job market is showing strong growth with a 12% increase in job postings compared to last month.',
    es: 'El mercado laboral está mostrando un fuerte crecimiento con un aumento del 12% en las publicaciones de trabajo en comparación con el mes pasado.'
  },
  'metrics.page.remoteWorkDominance': {
    en: 'Remote Work Dominance',
    es: 'Dominancia del Trabajo Remoto'
  },
  'metrics.page.remoteWorkDominanceDesc': {
    en: '64% of jobs are remote, indicating a strong preference for flexible work arrangements.',
    es: 'El 64% de los trabajos son remotos, indicando una fuerte preferencia por arreglos de trabajo flexibles.'
  },
  'metrics.page.easyApplyTrend': {
    en: 'Easy Apply Trend',
    es: 'Tendencia de Aplicación Fácil'
  },
  'metrics.page.easyApplyTrendDesc': {
    en: '64% of jobs offer easy apply options, making the application process more accessible.',
    es: 'El 64% de los trabajos ofrecen opciones de aplicación fácil, haciendo el proceso de aplicación más accesible.'
  },
  'metrics.page.exportReport': {
    en: 'Export Report',
    es: 'Exportar Reporte'
  },
  'metrics.page.viewTrends': {
    en: 'View Trends',
    es: 'Ver Tendencias'
  },
  'metrics.page.scheduleUpdate': {
    en: 'Schedule Update',
    es: 'Programar Actualización'
  },

  // File upload validation messages
  'upload.validation.fileType': {
    en: 'Please upload a .txt or .csv file',
    es: 'Por favor sube un archivo .txt o .csv'
  },
  'upload.validation.fileSize': {
    en: 'File size must be less than 10MB',
    es: 'El tamaño del archivo debe ser menor a 10MB'
  },

  // Test buttons (temporary)
  'test.saveScroll': {
    en: 'Test Save Scroll',
    es: 'Probar Guardar Scroll'
  },
  'test.restoreScroll': {
    en: 'Test Restore Scroll',
    es: 'Probar Restaurar Scroll'
  },

  // Career page
  'career.notFound': {
    en: 'Career Path Not Found',
    es: 'Ruta de Carrera No Encontrada'
  },
  'career.notFoundDesc': {
    en: 'The career path you\'re looking for doesn\'t exist.',
    es: 'La ruta de carrera que buscas no existe.'
  },
  'career.goBack': {
    en: 'Go Back',
    es: 'Volver'
  },
  'career.backToPaths': {
    en: 'Back to Career Paths',
    es: 'Volver a Rutas de Carrera'
  },
  'career.fitScore': {
    en: 'Career Fit Score',
    es: 'Puntuación de Ajuste de Carrera'
  },
  'career.basedOnPreferences': {
    en: 'Based on your preferences',
    es: 'Basado en tus preferencias'
  },
  'career.andMarketData': {
    en: 'and market data',
    es: 'y datos del mercado'
  },
  'career.greatForNewcomers': {
    en: 'Great for newcomers',
    es: 'Excelente para principiantes'
  },
  'career.highGrowthPotential': {
    en: 'High growth potential',
    es: 'Alto potencial de crecimiento'
  },
  'career.remoteFriendly': {
    en: 'Remote-friendly',
    es: 'Amigable para trabajo remoto'
  },
  'career.highJobDemand': {
    en: 'High job demand',
    es: 'Alta demanda de trabajo'
  },
  'career.competitiveSalary': {
    en: 'Competitive salary',
    es: 'Salario competitivo'
  },
  'career.rightForYou': {
    en: 'Is This Career Right for You?',
    es: '¿Es Esta Carrera Adecuada para Ti?'
  },
  'career.youllLoveThis': {
    en: 'You\'ll Love This If:',
    es: 'Te Encantará Esto Si:'
  },
  'career.considerAnotherPath': {
    en: 'Consider Another Path If:',
    es: 'Considera Otra Ruta Si:'
  },
  'career.whatYoullDo': {
    en: 'What You\'ll Do',
    es: 'Lo Que Harás'
  },
  'career.requiredSkills': {
    en: 'Required Skills',
    es: 'Habilidades Requeridas'
  },
  'career.learningPath': {
    en: 'Learning Path',
    es: 'Ruta de Aprendizaje'
  },
  'career.entryLevelPositions': {
    en: 'Entry Level Positions',
    es: 'Posiciones de Nivel de Entrada'
  },
  'career.advancedPositions': {
    en: 'Advanced Positions',
    es: 'Posiciones Avanzadas'
  },
  'career.popularTechnologies': {
    en: 'Popular Technologies',
    es: 'Tecnologías Populares'
  },
  'career.learningResources': {
    en: 'Learning Resources',
    es: 'Recursos de Aprendizaje'
  },
  'career.recommendedCourses': {
    en: 'Recommended Courses',
    es: 'Cursos Recomendados'
  },
  'career.practicePlatforms': {
    en: 'Practice Platforms',
    es: 'Plataformas de Práctica'
  },
  'career.communities': {
    en: 'Communities',
    es: 'Comunidades'
  },
  'career.careerProspects': {
    en: 'Career Prospects',
    es: 'Perspectivas de Carrera'
  },
  'career.marketOverview': {
    en: 'Market Overview',
    es: 'Resumen del Mercado'
  },
  'career.avgSalary': {
    en: 'Avg Salary',
    es: 'Salario Promedio'
  },
  'career.jobDistribution': {
    en: 'Job Distribution',
    es: 'Distribución de Trabajos'
  },
  'career.remote': {
    en: 'Remote',
    es: 'Remoto'
  },
  'career.onsite': {
    en: 'On-site',
    es: 'Presencial'
  },
  'career.hybrid': {
    en: 'Hybrid',
    es: 'Híbrido'
  },
  'career.experienceLevel': {
    en: 'Experience Level',
    es: 'Nivel de Experiencia'
  },
  'career.entryLevel': {
    en: 'Entry Level',
    es: 'Nivel de Entrada'
  },
  'career.seniorLevel': {
    en: 'Senior Level',
    es: 'Nivel Senior'
  },
  'career.keyInformation': {
    en: 'Key Information',
    es: 'Información Clave'
  },
  'career.timeToLearn': {
    en: 'Time to Learn:',
    es: 'Tiempo para Aprender:'
  },
  'career.salaryRange': {
    en: 'Salary Range:',
    es: 'Rango Salarial:'
  },
  'career.remoteWork': {
    en: 'Remote Work:',
    es: 'Trabajo Remoto:'
  },
  'career.getStarted': {
    en: 'Get Started',
    es: 'Comenzar'
  },
  'career.startLearningPath': {
    en: 'Start Learning Path',
    es: 'Comenzar Ruta de Aprendizaje'
  },
  'career.joinCommunity': {
    en: 'Join Community',
    es: 'Unirse a la Comunidad'
  },
  'career.viewJobOpenings': {
    en: 'View Job Openings',
    es: 'Ver Ofertas de Trabajo'
  },
  'career.noDistributionData': {
    en: 'No distribution data available',
    es: 'No hay datos de distribución disponibles'
  },
  'career.growth': {
    en: 'Growth',
    es: 'Crecimiento'
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
