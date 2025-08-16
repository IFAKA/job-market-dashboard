export type Language = 'en' | 'es';

export interface Translations {
  [key: string]: {
    [key in Language]: string | string[];
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

  // Category Explorer
  'category.exploreTitle': {
    en: 'Explore Career Paths',
    es: 'Explora Rutas de Carrera'
  },
  'category.exploreDescription': {
    en: 'Discover the perfect career path based on your skills, interests, and market demand',
    es: 'Descubre la ruta de carrera perfecta basada en tus habilidades, intereses y demanda del mercado'
  },
  'category.searchPlaceholder': {
    en: 'Search careers...',
    es: 'Buscar carreras...'
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
    es: 'Amigable con trabajo remoto'
  },
  'category.highEarningPotential': {
    en: 'High earning potential',
    es: 'Alto potencial de ingresos'
  },
  'category.timeToLearn': {
    en: 'Time to Learn:',
    es: 'Tiempo para Aprender:'
  },
  'category.viewDetails': {
    en: 'View Details',
    es: 'Ver Detalles'
  },
  'category.noResults': {
    en: 'No careers found matching your criteria',
    es: 'No se encontraron carreras que coincidan con tus criterios'
  },
  'category.clearFilters': {
    en: 'Clear Filters',
    es: 'Limpiar Filtros'
  },
  'category.growth': {
    en: 'Growth',
    es: 'Crecimiento'
  },

  // Career translations
  'career.notFound': {
    en: 'Career Not Found',
    es: 'Carrera No Encontrada'
  },
  'career.backToDashboard': {
    en: 'Back to Dashboard',
    es: 'Volver al Panel'
  },
  'career.overview': {
    en: 'Career Overview',
    es: 'Resumen de la Carrera'
  },
  'career.whatYouDo': {
    en: 'What You\'ll Do',
    es: 'Lo Que Harás'
  },
  'career.careerProspects': {
    en: 'Career Prospects',
    es: 'Perspectivas de Carrera'
  },
  'career.specializations': {
    en: 'Specializations',
    es: 'Especializaciones'
  },
  'career.fitScore': {
    en: 'Career Fit Score',
    es: 'Puntuación de Adecuación'
  },
  'career.basedOnPreferences': {
    en: 'Based on your preferences',
    es: 'Basado en tus preferencias'
  },
  'career.andMarketData': {
    en: 'and market data',
    es: 'y datos del mercado'
  },
  'career.isThisCareerRightForYou': {
    en: 'Is This Career Right for You?',
    es: '¿Es Esta Carrera Adecuada para Ti?'
  },
  'career.youllLoveThisIf': {
    en: 'You\'ll Love This If:',
    es: 'Te Encantará Si:'
  },
  'career.considerAnotherPathIf': {
    en: 'Consider Another Path If:',
    es: 'Considera Otro Camino Si:'
  },
  'career.youEnjoy': {
    en: 'You enjoy',
    es: 'Disfrutas'
  },
  'career.youWantToWork': {
    en: 'You want to work',
    es: 'Quieres trabajar'
  },
  'career.youreLookingFor': {
    en: 'You\'re looking for',
    es: 'Estás buscando'
  },
  'career.youCanCommit': {
    en: 'You can commit',
    es: 'Puedes comprometerte'
  },
  'career.youPrefer': {
    en: 'You prefer',
    es: 'Prefieres'
  },
  'career.needImmediateHighIncome': {
    en: 'You need immediate high income (entry-level salaries are lower)',
    es: 'Necesitas ingresos altos inmediatos (los salarios de nivel inicial son más bajos)'
  },
  'career.dontEnjoyContinuousLearning': {
    en: 'You don\'t enjoy continuous learning',
    es: 'No disfrutas del aprendizaje continuo'
  },
  'career.moreChallengingWork': {
    en: 'more challenging work',
    es: 'trabajo más desafiante'
  },
  'career.simplerTasks': {
    en: 'simpler tasks',
    es: 'tareas más simples'
  },
  'career.remotely': {
    en: 'remotely',
    es: 'remotamente'
  },
  'career.inCollaborativeEnvironment': {
    en: 'in a collaborative environment',
    es: 'en un entorno colaborativo'
  },
  'career.growthOpportunities': {
    en: 'growth opportunities',
    es: 'oportunidades de crecimiento'
  },
  'career.toLearning': {
    en: 'to learning',
    es: 'al aprendizaje'
  },
  'career.officeEnvironments': {
    en: 'office environments',
    es: 'entornos de oficina'
  },
  'career.remoteWork': {
    en: 'remote work',
    es: 'trabajo remoto'
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
  'career.specializationNotFound': {
    en: 'Specialization Not Found',
    es: 'Especialización No Encontrada'
  },
  'career.specializationNotFoundDesc': {
    en: 'The requested specialization could not be found. Please check the URL or return to the category page.',
    es: 'La especialización solicitada no se pudo encontrar. Por favor verifica la URL o regresa a la página de categoría.'
  },
  'career.backToCategory': {
    en: 'Back to {category}',
    es: 'Volver a {category}'
  },
  'career.timeToLearn': {
    en: 'Time to Learn:',
    es: 'Tiempo para Aprender:'
  },
  'career.noSpecializations': {
    en: 'No Specializations Available',
    es: 'No Hay Especializaciones Disponibles'
  },
  'career.noSpecializationsDescription': {
    en: 'This category doesn\'t have specific specializations yet. You can explore the general career path.',
    es: 'Esta categoría aún no tiene especializaciones específicas. Puedes explorar la trayectoria profesional general.'
  },
  'career.viewGeneralPath': {
    en: 'View General Path',
    es: 'Ver Trayectoria General'
  },
  'career.backToPaths': {
    en: 'Back to Career Paths',
    es: 'Volver a Rutas de Carrera'
  },
  'career.goBack': {
    en: 'Go Back',
    es: 'Volver'
  },
  'career.notFoundDesc': {
    en: 'The career path you\'re looking for doesn\'t exist.',
    es: 'La ruta de carrera que buscas no existe.'
  },

  // Software Engineer translations
  'career.softwareEngineer.name': {
    en: 'Software Engineer',
    es: 'Ingeniero de Software'
  },
  'career.softwareEngineer.description': {
    en: 'Design, develop, and maintain software applications and systems. Perfect for logical thinkers who enjoy building solutions through code.',
    es: 'Diseña, desarrolla y mantiene aplicaciones y sistemas de software. Perfecto para pensadores lógicos que disfrutan construyendo soluciones a través del código.'
  },
  'career.softwareEngineer.whatYouDo': {
    en: 'Write clean, efficient code, debug software issues, collaborate with teams, and continuously learn new technologies.',
    es: 'Escribir código limpio y eficiente, depurar problemas de software, colaborar con equipos y aprender continuamente nuevas tecnologías.'
  },
  'career.softwareEngineer.requiredSkills': {
    en: [
      'Programming languages (JavaScript, Python, Java, C#, etc.)',
      'Problem-solving and logical thinking',
      'Version control (Git)',
      'Database knowledge (SQL/NoSQL)',
      'Understanding of algorithms and data structures',
      'Software development methodologies (Agile, Scrum)'
    ],
    es: [
      'Lenguajes de programación (JavaScript, Python, Java, C#, etc.)',
      'Resolución de problemas y pensamiento lógico',
      'Control de versiones (Git)',
      'Conocimiento de bases de datos (SQL/NoSQL)',
      'Comprensión de algoritmos y estructuras de datos',
      'Metodologías de desarrollo de software (Agile, Scrum)'
    ]
  },
  'career.softwareEngineer.learningPath': {
    en: [
      'Learn programming fundamentals and a language like Python or JavaScript',
      'Build small projects and practice problem-solving',
      'Learn version control with Git and GitHub',
      'Study data structures and algorithms',
      'Learn about databases and web development',
      'Contribute to open source projects and build a portfolio'
    ],
    es: [
      'Aprender fundamentos de programación y un lenguaje como Python o JavaScript',
      'Construir proyectos pequeños y practicar resolución de problemas',
      'Aprender control de versiones con Git y GitHub',
      'Estudiar estructuras de datos y algoritmos',
      'Aprender sobre bases de datos y desarrollo web',
      'Contribuir a proyectos de código abierto y construir un portafolio'
    ]
  },
  'career.softwareEngineer.careerProspects': {
    en: 'Excellent job prospects with high demand across all industries. Opportunities for remote work and career advancement.',
    es: 'Excelentes perspectivas laborales con alta demanda en todas las industrias. Oportunidades para trabajo remoto y avance profesional.'
  },
  'career.softwareEngineer.popularTechnologies': {
    en: [
      'JavaScript/TypeScript',
      'Python',
      'React/Vue/Angular',
      'Node.js',
      'SQL/NoSQL',
      'Docker',
      'AWS/Azure'
    ],
    es: [
      'JavaScript/TypeScript',
      'Python',
      'React/Vue/Angular',
      'Node.js',
      'SQL/NoSQL',
      'Docker',
      'AWS/Azure'
    ]
  },

  // AI/ML Engineer translations
  'career.aiMlEngineer.name': {
    en: 'AI/ML Engineer',
    es: 'Ingeniero de IA/ML'
  },
  'career.aiMlEngineer.description': {
    en: 'Build and implement machine learning models and artificial intelligence systems. Ideal for those who love working with data and cutting-edge technology.',
    es: 'Construye e implementa modelos de aprendizaje automático y sistemas de inteligencia artificial. Ideal para aquellos que aman trabajar con datos y tecnología de vanguardia.'
  },
  'career.aiMlEngineer.whatYouDo': {
    en: 'Develop ML models, preprocess data, train algorithms, deploy AI solutions, and optimize model performance.',
    es: 'Desarrollar modelos de ML, preprocesar datos, entrenar algoritmos, desplegar soluciones de IA y optimizar el rendimiento de modelos.'
  },
  'career.aiMlEngineer.requiredSkills': {
    en: [
      'Strong programming skills (Python, R)',
      'Mathematics and statistics',
      'Machine learning frameworks (TensorFlow, PyTorch)',
      'Data preprocessing and analysis',
      'Deep learning concepts',
      'Cloud platforms (AWS, GCP, Azure)'
    ],
    es: [
      'Fuertes habilidades de programación (Python, R)',
      'Matemáticas y estadísticas',
      'Frameworks de machine learning (TensorFlow, PyTorch)',
      'Preprocesamiento y análisis de datos',
      'Conceptos de deep learning',
      'Plataformas en la nube (AWS, GCP, Azure)'
    ]
  },
  'career.aiMlEngineer.learningPath': {
    en: [
      'Master Python and mathematical foundations',
      'Learn statistics and probability',
      'Study machine learning algorithms',
      'Practice with real datasets',
      'Learn deep learning frameworks',
      'Build and deploy ML models'
    ],
    es: [
      'Dominar Python y fundamentos matemáticos',
      'Aprender estadísticas y probabilidad',
      'Estudiar algoritmos de machine learning',
      'Practicar con conjuntos de datos reales',
      'Aprender frameworks de deep learning',
      'Construir y desplegar modelos de ML'
    ]
  },
  'career.aiMlEngineer.careerProspects': {
    en: 'Rapidly growing field with high demand and excellent salaries. Opportunities in tech companies, research, and various industries.',
    es: 'Campo en rápido crecimiento con alta demanda y excelentes salarios. Oportunidades en empresas tecnológicas, investigación y diversas industrias.'
  },
  'career.aiMlEngineer.popularTechnologies': {
    en: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Pandas/NumPy',
      'Jupyter Notebooks',
      'AWS SageMaker'
    ],
    es: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Pandas/NumPy',
      'Jupyter Notebooks',
      'AWS SageMaker'
    ]
  },

  // Data Science translations
  'career.dataScience.name': {
    en: 'Data Science',
    es: 'Ciencia de Datos'
  },
  'career.dataScience.description': {
    en: 'Extract insights from data to help organizations make data-driven decisions. Perfect for analytical minds who love finding patterns.',
    es: 'Extrae información de los datos para ayudar a las organizaciones a tomar decisiones basadas en datos. Perfecto para mentes analíticas que aman encontrar patrones.'
  },
  'career.dataScience.whatYouDo': {
    en: 'Analyze complex datasets, create predictive models, visualize data insights, and communicate findings to stakeholders.',
    es: 'Analizar conjuntos de datos complejos, crear modelos predictivos, visualizar insights de datos y comunicar hallazgos a las partes interesadas.'
  },
  'career.dataScience.requiredSkills': {
    en: [
      'Statistical analysis and mathematics',
      'Programming (Python, R, SQL)',
      'Data visualization tools',
      'Machine learning concepts',
      'Business acumen',
      'Communication skills'
    ],
    es: [
      'Análisis estadístico y matemáticas',
      'Programación (Python, R, SQL)',
      'Herramientas de visualización de datos',
      'Conceptos de machine learning',
      'Sentido comercial',
      'Habilidades de comunicación'
    ]
  },
  'career.dataScience.learningPath': {
    en: [
      'Learn statistics and probability',
      'Master Python and data manipulation',
      'Study machine learning fundamentals',
      'Practice data visualization',
      'Work on real-world projects',
      'Develop business understanding'
    ],
    es: [
      'Aprender estadísticas y probabilidad',
      'Dominar Python y manipulación de datos',
      'Estudiar fundamentos de machine learning',
      'Practicar visualización de datos',
      'Trabajar en proyectos del mundo real',
      'Desarrollar comprensión empresarial'
    ]
  },
  'career.dataScience.careerProspects': {
    en: 'High demand across industries with excellent growth potential. Opportunities for remote work and career advancement.',
    es: 'Alta demanda en todas las industrias con excelente potencial de crecimiento. Oportunidades para trabajo remoto y avance profesional.'
  },
  'career.dataScience.popularTechnologies': {
    en: [
      'Python',
      'R',
      'SQL',
      'Tableau',
      'Power BI',
      'Jupyter',
      'Apache Spark'
    ],
    es: [
      'Python',
      'R',
      'SQL',
      'Tableau',
      'Power BI',
      'Jupyter',
      'Apache Spark'
    ]
  },

  // DevOps translations
  'career.devOps.name': {
    en: 'DevOps',
    es: 'DevOps'
  },
  'career.devOps.description': {
    en: 'Bridge development and operations to improve software delivery and infrastructure management. Perfect for automation enthusiasts.',
    es: 'Conecta desarrollo y operaciones para mejorar la entrega de software y la gestión de infraestructura. Perfecto para entusiastas de la automatización.'
  },
  'career.devOps.whatYouDo': {
    en: 'Automate deployment processes, manage cloud infrastructure, monitor system performance, and ensure reliable software delivery.',
    es: 'Automatizar procesos de despliegue, gestionar infraestructura en la nube, monitorear el rendimiento del sistema y asegurar la entrega confiable de software.'
  },
  'career.devOps.requiredSkills': {
    en: [
      'Linux system administration',
      'Scripting languages (Bash, Python)',
      'Containerization (Docker, Kubernetes)',
      'Cloud platforms (AWS, Azure, GCP)',
      'CI/CD pipelines',
      'Monitoring and logging tools'
    ],
    es: [
      'Administración de sistemas Linux',
      'Lenguajes de scripting (Bash, Python)',
      'Contenedores (Docker, Kubernetes)',
      'Plataformas en la nube (AWS, Azure, GCP)',
      'Pipelines de CI/CD',
      'Herramientas de monitoreo y logging'
    ]
  },
  'career.devOps.learningPath': {
    en: [
      'Learn Linux fundamentals',
      'Master scripting and automation',
      'Study cloud computing concepts',
      'Learn containerization technologies',
      'Practice CI/CD implementation',
      'Gain hands-on experience with tools'
    ],
    es: [
      'Aprender fundamentos de Linux',
      'Dominar scripting y automatización',
      'Estudiar conceptos de computación en la nube',
      'Aprender tecnologías de contenedores',
      'Practicar implementación de CI/CD',
      'Ganar experiencia práctica con herramientas'
    ]
  },
  'career.devOps.careerProspects': {
    en: 'High demand with excellent job security. Opportunities for remote work and high salaries in tech companies.',
    es: 'Alta demanda con excelente seguridad laboral. Oportunidades para trabajo remoto y altos salarios en empresas tecnológicas.'
  },
  'career.devOps.popularTechnologies': {
    en: [
      'Docker',
      'Kubernetes',
      'AWS/Azure/GCP',
      'Jenkins',
      'Terraform',
      'Ansible',
      'Prometheus'
    ],
    es: [
      'Docker',
      'Kubernetes',
      'AWS/Azure/GCP',
      'Jenkins',
      'Terraform',
      'Ansible',
      'Prometheus'
    ]
  },

  // Content Creation translations
  'career.contentCreation.name': {
    en: 'Content Creation',
    es: 'Creación de Contenido'
  },
  'career.contentCreation.description': {
    en: 'Create engaging content for various platforms to inform, entertain, and connect with audiences.',
    es: 'Crea contenido atractivo para diversas plataformas para informar, entretener y conectar con audiencias.'
  },
  'career.contentCreation.whatYouDo': {
    en: 'Write articles, create videos, design graphics, manage social media, and develop content strategies.',
    es: 'Escribir artículos, crear videos, diseñar gráficos, gestionar redes sociales y desarrollar estrategias de contenido.'
  },
  'career.contentCreation.requiredSkills': {
    en: [
      'Strong writing and communication skills',
      'Creativity and storytelling',
      'Social media platforms',
      'Basic design tools',
      'SEO knowledge',
      'Analytics and data interpretation'
    ],
    es: [
      'Fuertes habilidades de escritura y comunicación',
      'Creatividad y narrativa',
      'Plataformas de redes sociales',
      'Herramientas básicas de diseño',
      'Conocimiento de SEO',
      'Analíticas e interpretación de datos'
    ]
  },
  'career.contentCreation.learningPath': {
    en: [
      'Develop writing and storytelling skills',
      'Learn social media platforms',
      'Study content marketing principles',
      'Practice with design tools',
      'Build a content portfolio',
      'Learn analytics and SEO'
    ],
    es: [
      'Desarrollar habilidades de escritura y narrativa',
      'Aprender plataformas de redes sociales',
      'Estudiar principios de marketing de contenido',
      'Practicar con herramientas de diseño',
      'Construir un portafolio de contenido',
      'Aprender analíticas y SEO'
    ]
  },
  'career.contentCreation.careerProspects': {
    en: 'Growing field with opportunities in marketing, media, and digital agencies. Good for remote work and freelancing.',
    es: 'Campo en crecimiento con oportunidades en marketing, medios y agencias digitales. Bueno para trabajo remoto y freelancing.'
  },
  'career.contentCreation.popularTechnologies': {
    en: [
      'WordPress',
      'Canva',
      'Adobe Creative Suite',
      'Social Media Platforms',
      'Google Analytics',
      'SEO Tools',
      'Video Editing Software'
    ],
    es: [
      'WordPress',
      'Canva',
      'Adobe Creative Suite',
      'Plataformas de Redes Sociales',
      'Google Analytics',
      'Herramientas de SEO',
      'Software de Edición de Video'
    ]
  },

  // Recommendations translations
  'recommendations.title': {
    en: 'AI Recommendations',
    es: 'Recomendaciones de IA'
  },
  'recommendations.focusOnCategory': {
    en: 'Focus on {category} - {count} positions available',
    es: 'Enfócate en {category} - {count} posiciones disponibles'
  },
  'recommendations.focusOnCategoryWithSalary': {
    en: 'Focus on {category} - {count} positions available (Avg: ${avg}/yr, Median: ${median}/yr)',
    es: 'Enfócate en {category} - {count} posiciones disponibles (Promedio: ${avg}/año, Mediana: ${median}/año)'
  },
  'recommendations.prioritizeRecentJobs': {
    en: 'Prioritize Recent Jobs - {count} jobs posted in the last 7 days',
    es: 'Prioriza Trabajos Recientes - {count} trabajos publicados en los últimos 7 días'
  },
  'recommendations.useEasyApply': {
    en: 'Use Easy Apply - {count} jobs with simplified application process',
    es: 'Usa Aplicación Fácil - {count} trabajos con proceso de aplicación simplificado'
  },

  // Category Details translations
  'categoryDetails.isThisCareerRightForYou': {
    en: 'Is This Career Right for You?',
    es: '¿Es Esta Carrera Adecuada para Ti?'
  },
  'categoryDetails.youllLoveThisIf': {
    en: 'You\'ll Love This If:',
    es: 'Te Encantará Si:'
  },
  'categoryDetails.considerAnotherPathIf': {
    en: 'Consider Another Path If:',
    es: 'Considera Otro Camino Si:'
  },
  'categoryDetails.whatYoullDo': {
    en: 'What You\'ll Do',
    es: 'Lo Que Harás'
  },
  'categoryDetails.requiredSkills': {
    en: 'Required Skills',
    es: 'Habilidades Requeridas'
  },
  'categoryDetails.learningPath': {
    en: 'Learning Path',
    es: 'Camino de Aprendizaje'
  },
  'categoryDetails.entryLevelPositions': {
    en: 'Entry Level Positions',
    es: 'Posiciones de Nivel Inicial'
  },
  'categoryDetails.advancedPositions': {
    en: 'Advanced Positions',
    es: 'Posiciones Avanzadas'
  },
  'categoryDetails.popularTechnologies': {
    en: 'Popular Technologies',
    es: 'Tecnologías Populares'
  },
  'categoryDetails.learningResources': {
    en: 'Learning Resources',
    es: 'Recursos de Aprendizaje'
  },
  'categoryDetails.recommendedCourses': {
    en: 'Recommended Courses',
    es: 'Cursos Recomendados'
  },
  'categoryDetails.practicePlatforms': {
    en: 'Practice Platforms',
    es: 'Plataformas de Práctica'
  },
  'categoryDetails.communities': {
    en: 'Communities',
    es: 'Comunidades'
  },
  'categoryDetails.careerProspects': {
    en: 'Career Prospects',
    es: 'Perspectivas de Carrera'
  },
  'categoryDetails.remotely': {
    en: 'remotely',
    es: 'remotamente'
  },
  'categoryDetails.inCollaborativeEnvironment': {
    en: 'in a collaborative environment',
    es: 'en un entorno colaborativo'
  },
  'categoryDetails.growthOpportunities': {
    en: 'growth opportunities',
    es: 'oportunidades de crecimiento'
  },
  'categoryDetails.toLearning': {
    en: 'to learning',
    es: 'al aprendizaje'
  },
  'categoryDetails.moreChallengingWork': {
    en: 'more challenging work',
    es: 'trabajo más desafiante'
  },
  'categoryDetails.simplerTasks': {
    en: 'simpler tasks',
    es: 'tareas más simples'
  },
  'categoryDetails.needImmediateHighIncome': {
    en: 'You need immediate high income (entry-level salaries are lower)',
    es: 'Necesitas ingresos altos inmediatos (los salarios de nivel inicial son más bajos)'
  },
  'categoryDetails.dontEnjoyContinuousLearning': {
    en: 'You don\'t enjoy continuous learning',
    es: 'No disfrutas del aprendizaje continuo'
  },
  'categoryDetails.officeEnvironments': {
    en: 'office environments',
    es: 'entornos de oficina'
  },
  'categoryDetails.remoteWork': {
    en: 'remote work',
    es: 'trabajo remoto'
  },

  // History translations
  'history.uploadHistory': {
    en: 'Upload History',
    es: 'Historial de Cargas'
  },
  'history.files': {
    en: 'files',
    es: 'archivos'
  },
  'history.current': {
    en: 'Current',
    es: 'Actual'
  },
  'history.jobs': {
    en: 'jobs',
    es: 'trabajos'
  },
  'history.noHistory': {
    en: 'No upload history available',
    es: 'No hay historial de cargas disponible'
  },
  'history.deleteConfirm': {
    en: 'Delete Upload History',
    es: 'Eliminar Historial de Carga'
  },
  'history.deleteMessage': {
    en: 'Are you sure you want to delete "{fileName}" from your upload history? This action cannot be undone.',
    es: '¿Estás seguro de que quieres eliminar "{fileName}" de tu historial de cargas? Esta acción no se puede deshacer.'
  },
  'history.delete': {
    en: 'Delete',
    es: 'Eliminar'
  },
  'history.cancel': {
    en: 'Cancel',
    es: 'Cancelar'
  },

  // UI translations
  'ui.exportToCSV': {
    en: 'Export to CSV',
    es: 'Exportar a CSV'
  },

  // Additional career translations
  'career.design.name': {
    en: 'Design',
    es: 'Diseño'
  },
  'career.design.description': {
    en: 'Create user interfaces and experiences that are intuitive, accessible, and enjoyable to use. Perfect for creative minds.',
    es: 'Crea interfaces de usuario y experiencias que sean intuitivas, accesibles y agradables de usar. Perfecto para mentes creativas.'
  },
  'career.qaTesting.name': {
    en: 'QA/Testing',
    es: 'QA/Testing'
  },
  'career.qaTesting.description': {
    en: 'Ensure software quality by designing and executing test plans to identify bugs and verify functionality. Perfect for detail-oriented people.',
    es: 'Asegura la calidad del software diseñando y ejecutando planes de prueba para identificar errores y verificar la funcionalidad. Perfecto para personas orientadas a los detalles.'
  },
  'career.marketing.name': {
    en: 'Marketing',
    es: 'Marketing'
  },
  'career.marketing.description': {
    en: 'Develop and execute marketing strategies to promote products and services. Perfect for creative and analytical minds.',
    es: 'Desarrolla y ejecuta estrategias de marketing para promover productos y servicios. Perfecto para mentes creativas y analíticas.'
  },
  'career.sales.name': {
    en: 'Sales',
    es: 'Ventas'
  },
  'career.sales.description': {
    en: 'Build relationships with customers and drive revenue through effective sales strategies. Perfect for people-oriented individuals.',
    es: 'Construye relaciones con clientes e impulsa ingresos a través de estrategias de ventas efectivas. Perfecto para individuos orientados a las personas.'
  },
  'career.administrative.name': {
    en: 'Administrative',
    es: 'Administrativo'
  },
  'career.administrative.description': {
    en: 'Support business operations through administrative tasks and office management. Perfect for organized and detail-oriented individuals.',
    es: 'Apoya las operaciones comerciales a través de tareas administrativas y gestión de oficinas. Perfecto para individuos organizados y orientados a los detalles.'
  },
  'career.customerSupport.name': {
    en: 'Customer Support',
    es: 'Atención al Cliente'
  },
  'career.customerSupport.description': {
    en: 'Help customers resolve issues and provide excellent service experiences. Perfect for patient and empathetic individuals.',
    es: 'Ayuda a los clientes a resolver problemas y proporciona excelentes experiencias de servicio. Perfecto para individuos pacientes y empáticos.'
  },
  'career.consultingBusiness.name': {
    en: 'Consulting & Business',
    es: 'Consultoría y Negocios'
  },
  'career.consultingBusiness.description': {
    en: 'Provide strategic advice and solutions to help businesses improve their operations and achieve goals.',
    es: 'Proporciona asesoramiento estratégico y soluciones para ayudar a las empresas a mejorar sus operaciones y lograr objetivos.'
  },
  'career.financeAccounting.name': {
    en: 'Finance/Accounting',
    es: 'Finanzas/Contabilidad'
  },
  'career.financeAccounting.description': {
    en: 'Manage financial records, analyze financial data, and provide financial guidance to organizations.',
    es: 'Gestiona registros financieros, analiza datos financieros y proporciona orientación financiera a las organizaciones.'
  },
  'career.humanResources.name': {
    en: 'Human Resources',
    es: 'Recursos Humanos'
  },
  'career.humanResources.description': {
    en: 'Manage employee relations, recruitment, and organizational development to support business success.',
    es: 'Gestiona las relaciones con empleados, reclutamiento y desarrollo organizacional para apoyar el éxito empresarial.'
  },
  'career.frontendEngineer.name': {
    en: 'Frontend Engineer',
    es: 'Ingeniero Frontend'
  },
  'career.frontendEngineer.description': {
    en: 'Specialize in building user interfaces and client-side applications that users interact with directly.',
    es: 'Especialízate en construir interfaces de usuario y aplicaciones del lado del cliente con las que los usuarios interactúan directamente.'
  },
  'career.backendEngineer.name': {
    en: 'Backend Engineer',
    es: 'Ingeniero Backend'
  },
  'career.backendEngineer.description': {
    en: 'Build server-side logic, databases, and APIs that power web applications and handle business logic.',
    es: 'Construye lógica del lado del servidor, bases de datos y APIs que impulsan aplicaciones web y manejan la lógica de negocio.'
  },
  'career.fullStackEngineer.name': {
    en: 'Full Stack Engineer',
    es: 'Ingeniero Full Stack'
  },
  'career.fullStackEngineer.description': {
    en: 'Develop both frontend and backend components of web applications, handling the complete development stack.',
    es: 'Desarrolla tanto componentes frontend como backend de aplicaciones web, manejando la pila de desarrollo completa.'
  },
  'career.machineLearningEngineer.name': {
    en: 'Machine Learning Engineer',
    es: 'Ingeniero de Machine Learning'
  },
  'career.machineLearningEngineer.description': {
    en: 'Focus specifically on building and deploying machine learning models and systems.',
    es: 'Enfócate específicamente en construir y desplegar modelos y sistemas de machine learning.'
  },
  'career.deepLearningEngineer.name': {
    en: 'Deep Learning Engineer',
    es: 'Ingeniero de Deep Learning'
  },
  'career.deepLearningEngineer.description': {
    en: 'Specialize in neural networks and deep learning systems for complex AI applications.',
    es: 'Especialízate en redes neuronales y sistemas de deep learning para aplicaciones complejas de IA.'
  },

  // Language switcher translations
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

// Set language in localStorage
export function setLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('job-market-language', language);
  }
}

// Translation function
export function t(key: string, language: Language, params?: Record<string, string | number>): string | string[] {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  let result = translation[language] || translation['en'] || key;
  
  // Handle parameter interpolation
  if (params && typeof result === 'string') {
    Object.entries(params).forEach(([param, value]) => {
      result = (result as string).replace(new RegExp(`{${param}}`, 'g'), String(value));
    });
  }
  
  return result;
}
