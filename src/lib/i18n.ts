export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'nl' | 'ja' | 'ko' | 'zh';

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
    es: 'Panel del Mercado Laboral',
    fr: 'Tableau de Bord du Marché du Travail',
    de: 'Arbeitsmarkt-Dashboard',
    pt: 'Painel do Mercado de Trabalho',
    it: 'Dashboard del Mercato del Lavoro',
    nl: 'Arbeidsmarkt Dashboard',
    ja: '求人市場ダッシュボード',
    ko: '채용 시장 대시보드',
    zh: '就业市场仪表板'
  },
  'dashboard.subtitle': {
    en: 'Real-time insights into job market opportunities with AI-powered analysis',
    es: 'Información en tiempo real sobre oportunidades del mercado laboral con análisis impulsado por IA',
    fr: 'Aperçus en temps réel des opportunités du marché du travail avec une analyse alimentée par l\'IA',
    de: 'Echtzeit-Einblicke in Arbeitsmarktchancen mit KI-gestützter Analyse',
    pt: 'Insights em tempo real sobre oportunidades do mercado de trabalho com análise alimentada por IA',
    it: 'Approfondimenti in tempo reale sulle opportunità del mercato del lavoro con analisi alimentata dall\'IA',
    nl: 'Real-time inzichten in arbeidsmarktkansen met AI-aangedreven analyse',
    ja: 'AI駆動分析による求人市場機会のリアルタイム洞察',
    ko: 'AI 기반 분석을 통한 실시간 채용 시장 기회 인사이트',
    zh: '通过AI驱动分析实时洞察就业市场机会'
  },
  'upload.newData': {
    en: 'Upload New Data',
    es: 'Subir Nuevos Datos',
    fr: 'Télécharger de Nouveaux Données',
    de: 'Neue Daten Hochladen',
    pt: 'Carregar Novos Dados',
    it: 'Carica Nuovi Dati',
    nl: 'Nieuwe Gegevens Uploaden',
    ja: '新しいデータをアップロード',
    ko: '새로운 데이터 업로드',
    zh: '上传新数据'
  },
  'use.defaultData': {
    en: 'Use Default Data',
    es: 'Usar Datos Predeterminados',
    fr: 'Utiliser les Données Par Défaut',
    de: 'Standarddaten verwenden',
    pt: 'Usar Dados Padrão',
    it: 'Usare i Dati Predefiniti',
    nl: 'Standaardgegevens gebruiken',
    ja: 'デフォルトデータを使用',
    ko: '기본 데이터 사용',
    zh: '使用默认数据'
  },
  'loading.text': {
    en: 'Loading job market data...',
    es: 'Cargando datos del mercado laboral...',
    fr: 'Chargement des données du marché du travail...',
    de: 'Lade Arbeitsmarktdaten...',
    pt: 'Carregando dados do mercado de trabalho...',
    it: 'Caricamento dati del mercato del lavoro...',
    nl: 'Laden arbeidsmarktdata...',
    ja: '求人市場データを読み込み中...',
    ko: '채용 시장 데이터를 로드하는 중...',
    zh: '加载就业市场数据...'
  },
  'no.data': {
    en: 'No data available',
    es: 'No hay datos disponibles',
    fr: 'Aucune donnée disponible',
    de: 'Keine Daten verfügbar',
    pt: 'Nenhum dado disponível',
    it: 'Nessun dato disponibile',
    nl: 'Geen gegevens beschikbaar',
    ja: 'データがありません',
    ko: '데이터가 없습니다',
    zh: '没有数据'
  },
  'using.uploadedData': {
    en: 'Using uploaded data',
    es: 'Usando datos subidos',
    fr: 'Utilisation des données téléchargées',
    de: 'Verwendung der hochgeladenen Daten',
    pt: 'Usando dados subidos',
    it: 'Usando i dati caricati',
    nl: 'Gebruik van geüploade gegevens',
    ja: 'アップロードされたデータを使用',
    ko: '업로드된 데이터 사용',
    zh: '使用上传的数据'
  },
  'jobs.loaded': {
    en: 'jobs loaded',
    es: 'trabajos cargados',
    fr: 'travaux chargés',
    de: 'Jobs geladen',
    pt: 'trabalhos carregados',
    it: 'lavori caricati',
    nl: 'taken geladen',
    ja: '求人を読み込みました',
    ko: '작업을 로드했습니다',
    zh: '工作加载'
  },

  // Metrics
  'metrics.totalJobs': {
    en: 'Total Jobs',
    es: 'Total de Trabajos',
    fr: 'Total des Travaux',
    de: 'Gesamtanzahl der Arbeiten',
    pt: 'Total de Trabalhos',
    it: 'Totale Lavori',
    nl: 'Totaal aantal taken',
    ja: '総求人',
    ko: '총 채용',
    zh: '总工作'
  },
  'metrics.avgSalary': {
    en: 'Average Salary',
    es: 'Salario Promedio',
    fr: 'Salaire Moyen',
    de: 'Durchschnittlicher Lohn',
    pt: 'Salário Médio',
    it: 'Salario Medio',
    nl: 'Gemiddeld Salaris',
    ja: '平均給与',
    ko: '평균 급여',
    zh: '平均工资'
  },
  'metrics.remoteJobs': {
    en: 'Remote Jobs',
    es: 'Trabajos Remotos',
    fr: 'Travaux à Distance',
    de: 'Fernarbeiten',
    pt: 'Trabalhos Remotos',
    it: 'Lavori Remoti',
    nl: 'Werkzaamheden op afstand',
    ja: 'リモート求人',
    ko: '원격 채용',
    zh: '远程工作'
  },
  'metrics.topCategory': {
    en: 'Top Category',
    es: 'Categoría Principal',
    fr: 'Catégorie Principale',
    de: 'Top-Kategorie',
    pt: 'Categoria Principal',
    it: 'Categoria Principale',
    nl: 'Topcategorie',
    ja: 'トップカテゴリ',
    ko: '주요 카테고리',
    zh: '主要类别'
  },

  // Charts
  'charts.topCategories': {
    en: 'Top Job Categories',
    es: 'Principales Categorías de Trabajo',
    fr: 'Catégories de Travail Principales',
    de: 'Top-Job-Kategorien',
    pt: 'Principais Categorías de Trabalho',
    it: 'Categorie di Lavoro Principali',
    nl: 'Top Job Categorieën',
    ja: '主要な求人カテゴリ',
    ko: '주요 채용 카테고리',
    zh: '主要工作类别'
  },
  'charts.categoryDistribution': {
    en: 'Category Distribution',
    es: 'Distribución de Categorías',
    fr: 'Distribution des Catégories',
    de: 'Kategoriedistribution',
    pt: 'Distribuição de Categorias',
    it: 'Distribuzione delle Categorie',
    nl: 'Categorie-distributie',
    ja: 'カテゴリ分布',
    ko: '카테고리 분포',
    zh: '类别分布'
  },
  'charts.technologies': {
    en: 'Most In-Demand Technologies',
    es: 'Tecnologías Más Demandadas',
    fr: 'Technologies les Plus Demandées',
    de: 'Am häufigsten gewünschte Technologien',
    pt: 'Tecnologias Mais Demandadas',
    it: 'Tecnologie più richieste',
    nl: 'Meest gevraagde Technologieën',
    ja: '最も需要の高い技術',
    ko: '가장 많이 요구되는 기술',
    zh: '最受欢迎的技术'
  },

  // Opportunities
  'opportunities.title': {
    en: 'Top Opportunities',
    es: 'Mejores Oportunidades',
    fr: 'Meilleures Oportunités',
    de: 'Top-Chancen',
    pt: 'Melhores Oportunidades',
    it: 'Migliori Opportunità',
    nl: 'Top-kansen',
    ja: 'トップオポチュニティ',
    ko: '최고 기회',
    zh: '最佳机会'
  },
  'opportunities.salary': {
    en: 'Salary',
    es: 'Salario',
    fr: 'Salaire',
    de: 'Gehalt',
    pt: 'Salário',
    it: 'Salario',
    nl: 'Salaris',
    ja: '給与',
    ko: '급여',
    zh: '工资'
  },
  'opportunities.location': {
    en: 'Location',
    es: 'Ubicación',
    fr: 'Localisation',
    de: 'Standort',
    pt: 'Localização',
    it: 'Localizzazione',
    nl: 'Locatie',
    ja: '場所',
    ko: '위치',
    zh: '位置'
  },
  'opportunities.viewMore': {
    en: 'View More',
    es: 'Ver Más',
    fr: 'Voir Plus',
    de: 'Mehr Anzeigen',
    pt: 'Ver Mais',
    it: 'Vedi Altro',
    nl: 'Meer Bekijken',
    ja: 'もっと見る',
    ko: '더 보기',
    zh: '查看更多'
  },

  // Recommendations
  'recommendations.title': {
    en: 'AI Recommendations',
    es: 'Recomendaciones de IA',
    fr: 'Recommandations IA',
    de: 'AI-Empfehlungen',
    pt: 'Recomendações de IA',
    it: 'Recomandazioni IA',
    nl: 'AI-aanbevelingen',
    ja: 'AI推奨',
    ko: 'AI 추천',
    zh: 'AI推荐'
  },
  'recommendations.skills': {
    en: 'Skills to Focus On',
    es: 'Habilidades en las que Enfocarse',
    fr: 'Compétences à Concentrer',
    de: 'Fähigkeiten, auf die man sich konzentriert',
    pt: 'Habilidades em que Enfocar',
    it: 'Competenze da Concentrare',
    nl: 'Vaardigheden om te focussen',
    ja: '集中するスキル',
    ko: '집중할 기술',
    zh: '需要集中注意的技能'
  },
  'recommendations.market': {
    en: 'Market Insights',
    es: 'Perspectivas del Mercado',
    fr: 'Perspectives du Marché',
    de: 'Marktinsights',
    pt: 'Perspectivas do Mercado',
    it: 'Perspettive del Mercato',
    nl: 'Marktinsights',
    ja: '市場洞察',
    ko: '시장 인사이트',
    zh: '市场洞察'
  },
  'recommendations.strategy': {
    en: 'Strategy Tips',
    es: 'Consejos Estratégicos',
    fr: 'Conseils Stratégiques',
    de: 'Strategie-Tipps',
    pt: 'Dicas Estratégicas',
    it: 'Consigli Strategici',
    nl: 'Strategie-tips',
    ja: '戦略的なヒント',
    ko: '전략적 팁',
    zh: '战略建议'
  },

  // Footer
  'footer.updated': {
    en: 'Data updated in real-time',
    es: 'Datos actualizados en tiempo real',
    fr: 'Données mises à jour en temps réel',
    de: 'Daten werden in Echtzeit aktualisiert',
    pt: 'Dados atualizados em tempo real',
    it: 'Dati aggiornati in tempo reale',
    nl: 'Gegevens werden in real-time bijgewerkt',
    ja: 'データがリアルタイムで更新されました',
    ko: '데이터가 실시간으로 업데이트되었습니다',
    zh: '数据已实时更新'
  },
  'footer.analysis': {
    en: 'Job Market Analysis',
    es: 'Análisis del Mercado Laboral',
    fr: 'Analyse du Marché du Travail',
    de: 'Arbeitsmarkt-Analyse',
    pt: 'Análise do Mercado de Trabalho',
    it: 'Analisi del Mercato del Lavoro',
    nl: 'Arbeitsmarkt-analyse',
    ja: '求人市場分析',
    ko: '채용 시장 분석',
    zh: '就业市场分析'
  },

  // Language switcher
  'language.english': {
    en: 'English',
    es: 'Inglés',
    fr: 'Anglais',
    de: 'Englisch',
    pt: 'Inglês',
    it: 'Inglese',
    nl: 'Engels',
    ja: '英語',
    ko: '영어',
    zh: '英语'
  },
  'language.spanish': {
    en: 'Spanish',
    es: 'Español',
    fr: 'Espagnol',
    de: 'Spanisch',
    pt: 'Espanhol',
    it: 'Spagnolo',
    nl: 'Spaans',
    ja: 'スペイン語',
    ko: '스페인어',
    zh: '西班牙语'
  },
  'language.french': {
    en: 'French',
    es: 'Francés',
    fr: 'Français',
    de: 'Französisch',
    pt: 'Francês',
    it: 'Francese',
    nl: 'Frans',
    ja: 'フランス語',
    ko: '프랑스어',
    zh: '法语'
  },
  'language.german': {
    en: 'German',
    es: 'Alemán',
    fr: 'Allemand',
    de: 'Deutsch',
    pt: 'Alemão',
    it: 'Tedesco',
    nl: 'Duits',
    ja: 'ドイツ語',
    ko: '독일어',
    zh: '德语'
  },
  'language.portuguese': {
    en: 'Portuguese',
    es: 'Portugués',
    fr: 'Portugais',
    de: 'Portugiesisch',
    pt: 'Português',
    it: 'Portoghese',
    nl: 'Portugees',
    ja: 'ポルトガル語',
    ko: '포르투갈어',
    zh: '葡萄牙语'
  },
  'language.italian': {
    en: 'Italian',
    es: 'Italiano',
    fr: 'Italien',
    de: 'Italienisch',
    pt: 'Italiano',
    it: 'Italiano',
    nl: 'Italiaans',
    ja: 'イタリア語',
    ko: '이탈리아어',
    zh: '意大利语'
  },
  'language.dutch': {
    en: 'Dutch',
    es: 'Holandés',
    fr: 'Néerlandais',
    de: 'Niederländisch',
    pt: 'Holandês',
    it: 'Olandese',
    nl: 'Nederlands',
    ja: 'オランダ語',
    ko: '네덜란드어',
    zh: '荷兰语'
  },
  'language.japanese': {
    en: 'Japanese',
    es: 'Japonés',
    fr: 'Japonais',
    de: 'Japanisch',
    pt: 'Japonês',
    it: 'Giapponese',
    nl: 'Japans',
    ja: '日本語',
    ko: '일본어',
    zh: '日语'
  },
  'language.korean': {
    en: 'Korean',
    es: 'Coreano',
    fr: 'Coréen',
    de: 'Koreanisch',
    pt: 'Coreano',
    it: 'Coreano',
    nl: 'Koreaans',
    ja: '韓国語',
    ko: '한국어',
    zh: '韩语'
  },
  'language.chinese': {
    en: 'Chinese',
    es: 'Chino',
    fr: 'Chinois',
    de: 'Chinesisch',
    pt: 'Chinês',
    it: 'Cinese',
    nl: 'Chinees',
    ja: '中国語',
    ko: '중국어',
    zh: '中文'
  },
  'language.languages': {
    en: 'Languages',
    es: 'Idiomas',
    fr: 'Langues',
    de: 'Sprachen',
    pt: 'Idiomas',
    it: 'Lingue',
    nl: 'Talen',
    ja: '言語',
    ko: '언어',
    zh: '语言'
  },

  // Upload page
  'upload.title': {
    en: 'Upload Job Data',
    es: 'Subir Datos de Trabajo',
    fr: 'Télécharger des Données de Travail',
    de: 'Arbeitsdaten Hochladen',
    pt: 'Carregar Dados de Trabalho',
    it: 'Carica Dati di Lavoro',
    nl: 'Werkgegevens Uploaden',
    ja: '求人データをアップロード',
    ko: '채용 데이터 업로드',
    zh: '上传工作数据'
  },
  'upload.description': {
    en: 'Upload a CSV file with job data to analyze',
    es: 'Sube un archivo CSV con datos de trabajo para analizar',
    fr: 'Téléchargez un fichier CSV contenant des données de travail à analyser',
    de: 'Laden Sie eine CSV-Datei mit Arbeitsdaten zum Analysieren hoch',
    pt: 'Sube um arquivo CSV com dados de trabalho para analisar',
    it: 'Carica un file CSV con dati di lavoro per analizzare',
    nl: 'Upload een CSV-bestand met arbeidsgegevens om te analyseren',
    ja: '求人データを含むCSVファイルをアップロードして分析',
    ko: '채용 데이터를 포함하는 CSV 파일을 업로드하여 분석',
    zh: '上传包含工作数据的CSV文件进行分析'
  },
  'upload.dragDrop': {
    en: 'Drag and drop your CSV file here, or click to browse',
    es: 'Arrastra y suelta tu archivo CSV aquí, o haz clic para explorar',
    fr: 'Déplacez votre fichier CSV ici ou cliquez pour parcourir',
    de: 'Ziehen Sie Ihre CSV-Datei hier hinein oder klicken Sie, um zu durchsuchen',
    pt: 'Arraste e solte seu arquivo CSV aqui, ou clique para navegar',
    it: 'Trascina e rilascia il tuo file CSV qui, o clicca per esplorare',
    nl: 'Sleep uw CSV-bestand hierheen of klik om te bladeren',
    ja: 'CSVファイルをここにドラッグ＆ドロップするか、クリックして参照',
    ko: 'CSV 파일을 여기에 드래그하여 놓거나 클릭하여 찾아보기',
    zh: '将CSV文件拖放到此处，或点击浏览'
  },
  'upload.selectFile': {
    en: 'Select File',
    es: 'Seleccionar Archivo',
    fr: 'Sélectionner un Fichier',
    de: 'Datei Auswählen',
    pt: 'Selecionar Arquivo',
    it: 'Seleziona File',
    nl: 'Bestand Selecteren',
    ja: 'ファイルを選択',
    ko: '파일 선택',
    zh: '选择文件'
  },
  'upload.uploading': {
    en: 'Uploading...',
    es: 'Subiendo...',
    fr: 'Téléchargement...',
    de: 'Hochladen...',
    pt: 'Carregando...',
    it: 'Caricamento...',
    nl: 'Uploaden...',
    ja: 'アップロード中...',
    ko: '업로드 중...',
    zh: '上传中...'
  },
  'upload.success': {
    en: 'Upload successful!',
    es: '¡Subida exitosa!',
    fr: 'Téléchargement réussi !',
    de: 'Hochladen erfolgreich!',
    pt: 'Upload bem-sucedido!',
    it: 'Caricamento riuscito!',
    nl: 'Upload succesvol!',
    ja: 'アップロード成功！',
    ko: '업로드 성공!',
    zh: '上传成功！'
  },
  'upload.error': {
    en: 'Upload failed. Please try again.',
    es: 'Error en la subida. Por favor, inténtalo de nuevo.',
    fr: 'Échec du téléchargement. Veuillez réessayer.',
    de: 'Hochladen fehlgeschlagen. Bitte versuchen Sie es erneut.',
    pt: 'Falha na subida. Por favor, tente novamente.',
    it: 'Caricamento fallito. Per favore, riprova.',
    nl: 'Upload mislukt. Probeer het opnieuw.',
    ja: 'アップロード失敗。もう一度お試しください。',
    ko: '업로드 실패. 다시 시도해주세요.',
    zh: '上传失败。请再试一次。'
  },
  'upload.backToDashboard': {
    en: 'Back to Dashboard',
    es: 'Volver al Panel',
    fr: 'Retour au Tableau de Bord',
    de: 'Zurück zum Dashboard',
    pt: 'Voltar ao Painel',
    it: 'Torna al Dashboard',
    nl: 'Terug naar Dashboard',
    ja: 'ダッシュボードに戻る',
    ko: '대시보드로 돌아가기',
    zh: '返回仪表板'
  },
  'upload.browse': {
    en: 'browse',
    es: 'explorar',
    fr: 'naviguer',
    de: 'durchsuchen',
    pt: 'navegar',
    it: 'esplorare',
    nl: 'bladeren',
    ja: '参照',
    ko: '찾아보기',
    zh: '浏览'
  },
  'upload.supportedFormats': {
    en: 'Supports .txt and .csv files up to 10MB',
    es: 'Soporta archivos .txt y .csv hasta 10MB',
    fr: 'Prend en charge les fichiers .txt et .csv jusqu\'à 10MB',
    de: 'Unterstützt .txt und .csv-Dateien bis zu 10MB',
    pt: 'Suporta arquivos .txt e .csv até 10MB',
    it: 'Supporta file .txt e .csv fino a 10MB',
    nl: 'Ondersteunt .txt en .csv bestanden tot 10MB',
    ja: '最大10MBの.txtと.csvファイルをサポート',
    ko: '최대 10MB의 .txt 및 .csv 파일 지원',
    zh: '支持最大10MB的.txt和.csv文件'
  },
  'upload.uploadAndUpdate': {
    en: 'Upload and Update Dashboard',
    es: 'Subir y Actualizar Panel',
    fr: 'Télécharger et Mettre à Jour le Tableau de Bord',
    de: 'Dashboard mit Daten aktualisieren',
    pt: 'Subir e Atualizar Painel',
    it: 'Carica e Aggiorna Dashboard',
    nl: 'Uploaden en Dashboard bijwerken',
    ja: 'ダッシュボードを更新',
    ko: '대시보드 업데이트',
    zh: '上传并更新仪表板'
  },
  'upload.uploadNewFile': {
    en: 'Upload New File',
    es: 'Subir Nuevo Archivo',
    fr: 'Télécharger un Nouveau Fichier',
    de: 'Neue Datei Hochladen',
    pt: 'Carregar Novo Arquivo',
    it: 'Carica Nuovo File',
    nl: 'Nieuwe Gegevens Uploaden',
    ja: '新しいファイルをアップロード',
    ko: '새로운 파일 업로드',
    zh: '上传新文件'
  },
  'upload.uploadHistory': {
    en: 'Upload History',
    es: 'Historial de Subidas',
    fr: 'Historique des Téléchargements',
    de: 'Upload-Historie',
    pt: 'Histórico de Uploads',
    it: 'Cronologia degli Uploads',
    nl: 'Uploadgeschiedenis',
    ja: 'アップロード履歴',
    ko: '업로드 기록',
    zh: '上传历史'
  },
  'upload.supportedFormatsFooter': {
    en: 'Supported formats: .txt (LinkedIn job format) and .csv files up to 10MB',
    es: 'Formatos soportados: .txt (formato de trabajo de LinkedIn) y archivos .csv hasta 10MB',
    fr: 'Formats supportés : .txt (format de travail LinkedIn) et fichiers .csv jusqu\'à 10MB',
    de: 'Unterstützte Formate: .txt (LinkedIn-Arbeitsformat) und .csv-Dateien bis zu 10MB',
    pt: 'Formatos suportados: .txt (formato de trabalho de LinkedIn) e arquivos .csv até 10MB',
    it: 'Formati supportati: .txt (formato lavoro LinkedIn) e file .csv fino a 10MB',
    nl: 'Ondersteunde formaten: .txt (LinkedIn werkformat) en .csv bestanden tot 10MB',
    ja: 'サポートされている形式: .txt (LinkedIn職務形式) と .csvファイル最大10MB',
    ko: '지원되는 형식: .txt (LinkedIn 채용 형식) 및 .csv 파일 최대 10MB',
    zh: '支持的格式: .txt (LinkedIn工作格式) 和 .csv 文件最大10MB'
  },

  // Additional metrics
  'metrics.companies': {
    en: 'Companies',
    es: 'Empresas',
    fr: 'Entreprises',
    de: 'Unternehmen',
    pt: 'Empresas',
    it: 'Aziende',
    nl: 'Bedrijven',
    ja: '企業',
    ko: '기업',
    zh: '公司'
  },
  'metrics.easyApply': {
    en: 'Easy Apply',
    es: 'Aplicación Fácil',
    fr: 'Candidature Facile',
    de: 'Einfache Bewerbung',
    pt: 'Candidatura Fácil',
    it: 'Candidatura Facile',
    nl: 'Eenvoudige Sollicitatie',
    ja: '簡単な応募',
    ko: '간단한 지원',
    zh: '简单申请'
  },
  'metrics.recentJobs': {
    en: 'Recent Jobs',
    es: 'Trabajos Recientes',
    fr: 'Travaux Récents',
    de: 'Neue Arbeiten',
    pt: 'Trabalhos Recentes',
    it: 'Lavori Recenti',
    nl: 'Nieuwe taken',
    ja: '最近の求人',
    ko: '최근 채용',
    zh: '最近的工作'
  },
  'metrics.availablePositions': {
    en: 'Available positions',
    es: 'Posiciones disponibles',
    fr: 'Postes Disponibles',
    de: 'Verfügbare Stellen',
    pt: 'Posições Disponíveis',
    it: 'Posizioni Disponibili',
    nl: 'Beschikbare posities',
    ja: '利用可能な求人',
    ko: '사용 가능한 채용',
    zh: '可用职位'
  },
  'metrics.hiringCompanies': {
    en: 'Hiring companies',
    es: 'Empresas contratando',
    fr: 'Entreprises Recrutant',
    de: 'Bewerbende Unternehmen',
    pt: 'Empresas Contratando',
    it: 'Aziende che assumono',
    nl: 'Bedrijven die solliciteren',
    ja: '採用企業',
    ko: '채용 기업',
    zh: '招聘公司'
  },
  'metrics.quickApplications': {
    en: 'Quick applications',
    es: 'Aplicaciones rápidas',
    fr: 'Candidatures Rapides',
    de: 'Schnelle Bewerbungen',
    pt: 'Candidaturas Rápidas',
    it: 'Candidature Rapide',
    nl: 'Snel ingezonden sollicitaties',
    ja: '迅速な応募',
    ko: '빠른 지원',
    zh: '快速申请'
  },
  'metrics.last7Days': {
    en: 'Last 7 days',
    es: 'Últimos 7 días',
    fr: '7 derniers jours',
    de: 'Letzte 7 Tage',
    pt: 'Últimos 7 dias',
    it: 'Ultimi 7 giorni',
    nl: 'Laatste 7 dagen',
    ja: '過去7日間',
    ko: '지난 7일',
    zh: '最近7天'
  },
  'metrics.daysAgo': {
    en: 'days ago',
    es: 'días atrás',
    fr: 'il y a',
    de: 'Tage zuvor',
    pt: 'dias atrás',
    it: 'giorni fa',
    nl: 'dagen geleden',
    ja: '日付',
    ko: '일자',
    zh: '天前'
  },

  // Export functionality
  'export.csv': {
    en: 'Export to CSV',
    es: 'Exportar a CSV',
    fr: 'Exporter en CSV',
    de: 'In CSV Exportieren',
    pt: 'Exportar para CSV',
    it: 'Esportare in CSV',
    nl: 'Exporteren naar CSV',
    ja: 'CSVにエクスポート',
    ko: 'CSV로 내보내기',
    zh: '导出为CSV'
  },
  'export.exporting': {
    en: 'Exporting...',
    es: 'Exportando...',
    fr: 'Exportation...',
    de: 'Exportieren...',
    pt: 'Exportando...',
    it: 'Esportazione...',
    nl: 'Exporteren...',
    ja: 'エクスポート中...',
    ko: '내보내는 중...',
    zh: '导出中...'
  },
  'export.noData': {
    en: 'No data to export',
    es: 'No hay datos para exportar',
    fr: 'Aucune donnée à exporter',
    de: 'Keine Daten zum Exportieren',
    pt: 'Nenhum dado para exportar',
    it: 'Nessun dato da esportare',
    nl: 'Geen gegevens om te exporteren',
    ja: 'エクスポートするデータがありません',
    ko: '내보낼 데이터가 없습니다',
    zh: '没有数据可导出'
  },
  'export.error': {
    en: 'Export failed. Please try again.',
    es: 'Error en la exportación. Por favor, inténtalo de nuevo.',
    fr: 'Échec de l\'exportation. Veuillez réessayer.',
    de: 'Export fehlgeschlagen. Bitte versuchen Sie es erneut.',
    pt: 'Falha na exportação. Por favor, tente novamente.',
    it: 'Esportazione fallita. Per favore, riprova.',
    nl: 'Export mislukt. Probeer het opnieuw.',
    ja: 'エクスポート失敗。もう一度お試しください。',
    ko: '내보내기 실패. 다시 시도해주세요.',
    zh: '导出失败。请再试一次。'
  },

  // History management
  'history.uploadHistory': {
    en: 'Upload History',
    es: 'Historial de Subidas',
    fr: 'Historique des Téléchargements',
    de: 'Upload-Historie',
    pt: 'Histórico de Uploads',
    it: 'Cronologia degli Uploads',
    nl: 'Uploadgeschiedenis',
    ja: 'アップロード履歴',
    ko: '업로드 기록',
    zh: '上传历史'
  },
  'history.files': {
    en: 'files',
    es: 'archivos',
    fr: 'fichiers',
    de: 'Dateien',
    pt: 'arquivos',
    it: 'file',
    nl: 'bestanden',
    ja: 'ファイル',
    ko: '파일',
    zh: '文件'
  },
  'history.noHistory': {
    en: 'No upload history yet',
    es: 'Aún no hay historial de subidas',
    fr: 'Aucun historique de téléchargement pour le moment',
    de: 'Noch keine Upload-Historie',
    pt: 'Ainda não há histórico de upload',
    it: 'Ancora nessuna cronologia degli upload',
    nl: 'Nog geen uploadgeschiedenis',
    ja: 'まだアップロード履歴がありません',
    ko: '아직 업로드 기록이 없습니다',
    zh: '还没有上传历史'
  },
  'history.current': {
    en: 'Current',
    es: 'Actual',
    fr: 'Actuel',
    de: 'Aktuell',
    pt: 'Atual',
    it: 'Attuale',
    nl: 'Huidige',
    ja: '現在',
    ko: '현재',
    zh: '当前'
  },
  'history.jobs': {
    en: 'jobs',
    es: 'trabajos',
    fr: 'travaux',
    de: 'Arbeiten',
    pt: 'trabalhos',
    it: 'lavori',
    nl: 'taken',
    ja: '求人',
    ko: '작업',
    zh: '工作'
  },
  'history.deleteConfirm': {
    en: 'Delete History Item',
    es: 'Eliminar Elemento del Historial',
    fr: 'Supprimer l\'élément de l\'historique',
    de: 'Historie-Element löschen',
    pt: 'Excluir Item do Histórico',
    it: 'Elimina elemento dalla cronologia',
    nl: 'Verwijder geschiedenisitem',
    ja: '履歴項目を削除',
    ko: '기록 항목 삭제',
    zh: '删除历史项'
  },
  'history.deleteMessage': {
    en: 'Are you sure you want to delete "{fileName}" from history? This action cannot be undone.',
    es: '¿Estás seguro de que quieres eliminar "{fileName}" del historial? Esta acción no se puede deshacer.',
    fr: 'Êtes-vous sûr de vouloir supprimer "{fileName}" de l\'historique ? Cette action ne peut pas être annulée.',
    de: 'Möchten Sie "{fileName}" aus der Historie löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
    pt: 'Tem certeza de que deseja excluir "{fileName}" do histórico? Esta ação não pode ser desfeita.',
    it: 'Sei sicuro di voler eliminare "{fileName}" dalla cronologia? Questa azione non può essere annullata.',
    nl: 'Weet u zeker dat u "{fileName}" wilt verwijderen uit de geschiedenis? Deze actie kan niet ongedaan worden gemaakt.',
    ja: '履歴から "{fileName}" を削除してもよろしいですか？この操作は取り消せません。',
    ko: '기록에서 "{fileName}"을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
    zh: '您确定要从历史记录中删除"{fileName}"吗？此操作无法撤销。'
  },
  'history.delete': {
    en: 'Delete',
    es: 'Eliminar',
    fr: 'Supprimer',
    de: 'Löschen',
    pt: 'Excluir',
    it: 'Elimina',
    nl: 'Verwijderen',
    ja: '削除',
    ko: '삭제',
    zh: '删除'
  },
  'history.cancel': {
    en: 'Cancel',
    es: 'Cancelar',
    fr: 'Annuler',
    de: 'Abbrechen',
    pt: 'Cancelar',
    it: 'Annulla',
    nl: 'Annuleren',
    ja: 'キャンセル',
    ko: '취소',
    zh: '取消'
  },

  // Country selector
  'country.title': {
    en: 'Country',
    es: 'País',
    fr: 'Pays',
    de: 'Land',
    pt: 'País',
    it: 'Paese',
    nl: 'Land',
    ja: '国',
    ko: '국가',
    zh: '国家'
  },
  'country.description': {
    en: 'Select your country to see specific salaries',
    es: 'Selecciona tu país para ver salarios específicos',
    fr: 'Sélectionnez votre pays pour voir les salaires spécifiques',
    de: 'Wählen Sie Ihr Land aus, um spezifische Gehälter zu sehen',
    pt: 'Selecione seu país para ver salários específicos',
    it: 'Seleziona il tuo paese per vedere i salari specifici',
    nl: 'Selecteer uw land om specifieke salarissen te zien',
    ja: '特定の給与を見るために、国を選択してください',
    ko: '특정 급여를 보기 위해 국가를 선택하세요',
    zh: '选择您的国家以查看特定工资'
  },
  'country.selectPlaceholder': {
    en: 'Select a country',
    es: 'Selecciona un país',
    fr: 'Sélectionnez un pays',
    de: 'Wählen Sie ein Land aus',
    pt: 'Selecione um país',
    it: 'Seleziona un paese',
    nl: 'Selecteer een land',
    ja: '国を選択',
    ko: '국가 선택',
    zh: '选择国家'
  },
  'country.spain': {
    en: 'Spain',
    es: 'España',
    fr: 'Espagne',
    de: 'Spanien',
    pt: 'Espanha',
    it: 'Spagna',
    nl: 'Spanje',
    ja: 'スペイン',
    ko: '스페인',
    zh: '西班牙'
  },
  'country.argentina': {
    en: 'Argentina',
    es: 'Argentina',
    fr: 'Argentine',
    de: 'Argentinien',
    pt: 'Argentina',
    it: 'Argentina',
    nl: 'Argentinië',
    ja: 'アルゼンチン',
    ko: '아르헨티나',
    zh: '阿根廷'
  },

  // Category explorer
  'category.exploreTitle': {
    en: 'Explore Career Paths',
    es: 'Explorar Rutas de Carrera',
    fr: 'Explorer les Parcours de Carrière',
    de: 'Karriere-Pfade Erkunden',
    pt: 'Explorar Caminhos de Carreira',
    it: 'Esplora Percorsi di Carriera',
    nl: 'Carrièrepaden Verkennen',
    ja: 'キャリアパスを探検',
    ko: '커리어 경로 탐색',
    zh: '探索职业道路'
  },
  'category.exploreDescription': {
    en: 'Discover detailed information about each job category to help you make informed decisions about your learning journey. Find the perfect career path that matches your skills, interests, and goals.',
    es: 'Descubre información detallada sobre cada categoría de trabajo para ayudarte a tomar decisiones informadas sobre tu viaje de aprendizaje. Encuentra la ruta de carrera perfecta que coincida con tus habilidades, intereses y objetivos.',
    fr: 'Découvrez des informations détaillées sur chaque catégorie de travail pour vous aider à prendre des décisions éclairées sur votre parcours de formation. Trouvez le parcours de carrière parfait qui correspond à vos compétences, vos intérêts et vos objectifs.',
    de: 'Entdecken Sie detaillierte Informationen zu jedem Berufsfeld, um Ihnen bei der Entscheidungsfindung für Ihren Lernweg zu helfen. Finden Sie den perfekten Karrierepfad, der mit Ihren Fähigkeiten, Ihren Interessen und Ihren Zielen übereinstimmt.',
    pt: 'Descubra informações detalhadas sobre cada categoria de trabalho para ajudar você a tomar decisões informadas sobre seu caminho de aprendizado. Encontre o caminho de carreira perfeito que combina suas habilidades, interesses e objetivos.',
    it: 'Scopri informazioni dettagliate su ogni categoria professionale per aiutarti a prendere decisioni informate sul tuo percorso di apprendimento. Trova il percorso di carriera perfetto che si adatta alle tue competenze, ai tuoi interessi e ai tuoi obiettivi.',
    nl: 'Ontdek gedetailleerde informatie over elke beroepsgroep om u te helpen om weloverwogen beslissingen te nemen over uw leerproces. Ontdek de perfecte carrièrepad die overeenkomt met uw vaardigheden, uw interesses en uw doelen.',
    ja: '各職業カテゴリーの詳細な情報を発見して、学習の旅について知識的な決定を下すのに役立ててください。スキル、興味、そして目標に合致する最適なキャリアパスを見つけてください。',
    ko: '각 직업 카테고리의 상세 정보를 발견하여 학습 여정에 대한 지식적인 결정을 내리는 데 도움을 드리고, 기술, 관심사, 그리고 목표와 일치하는 완벽한 커리어 경로를 찾으십시오.',
    zh: '探索职业道路，发现每个职业类别的详细信息，帮助您做出关于学习旅程的明智决定。找到与您的技能、兴趣和目标完全匹配的完美职业道路。'
  },
  'category.searchPlaceholder': {
    en: 'Search categories...',
    es: 'Buscar categorías...',
    fr: 'Rechercher des catégories...',
    de: 'Kategorien durchsuchen...',
    pt: 'Buscar categorias...',
    it: 'Cerca categorie...',
    nl: 'Categorieën zoeken...',
    ja: 'カテゴリを検索...',
    ko: '카테고리 검색...',
    zh: '搜索类别...'
  },
  'category.allLevels': {
    en: 'All Levels',
    es: 'Todos los Niveles',
    fr: 'Tous les Niveaux',
    de: 'Alle Ebenen',
    pt: 'Todos os Níveis',
    it: 'Tutti i Livelli',
    nl: 'Alle Niveaus',
    ja: '全てのレベル',
    ko: '모든 레벨',
    zh: '所有级别'
  },
  'category.beginner': {
    en: 'Beginner',
    es: 'Principiante',
    fr: 'Débutant',
    de: 'Anfänger',
    pt: 'Iniciante',
    it: 'Principiante',
    nl: 'Beginner',
    ja: '初心者',
    ko: '초보자',
    zh: '初学者'
  },
  'category.intermediate': {
    en: 'Intermediate',
    es: 'Intermedio',
    fr: 'Intermédiaire',
    de: 'Fortgeschritten',
    pt: 'Intermediário',
    it: 'Intermedio',
    nl: 'Intermediair',
    ja: '中級者',
    ko: '중급자',
    zh: '中级'
  },
  'category.advanced': {
    en: 'Advanced',
    es: 'Avanzado',
    fr: 'Avancé',
    de: 'Fortgeschritten',
    pt: 'Avançado',
    it: 'Avanzato',
    nl: 'Geavanceerd',
    ja: '上級者',
    ko: '고급자',
    zh: '高级'
  },
  'category.sortByJobs': {
    en: 'Sort by Jobs',
    es: 'Ordenar por Trabajos',
    fr: 'Trier par Travaux',
    de: 'Nach Arbeiten sortieren',
    pt: 'Ordenar por Trabalhos',
    it: 'Ordina per Lavori',
    nl: 'Sorteer op taken',
    ja: '仕事でソート',
    ko: '작업으로 정렬',
    zh: '按工作排序'
  },
  'category.sortBySalary': {
    en: 'Sort by Salary',
    es: 'Ordenar por Salario',
    fr: 'Trier par Salaire',
    de: 'Nach Gehalt sortieren',
    pt: 'Ordenar por Salário',
    it: 'Ordina per Salario',
    nl: 'Sorteer op salaris',
    ja: '給与でソート',
    ko: '급여로 정렬',
    zh: '按工资排序'
  },
  'category.sortByRecent': {
    en: 'Sort by Recent',
    es: 'Ordenar por Recientes',
    fr: 'Trier par Récent',
    de: 'Nach Neuesten sortieren',
    pt: 'Ordenar por Recientes',
    it: 'Ordina per Recenti',
    nl: 'Sorteer op recent',
    ja: '最新でソート',
    ko: '최신으로 정렬',
    zh: '按最新排序'
  },
  'category.sortByName': {
    en: 'Sort by Name',
    es: 'Ordenar por Nombre',
    fr: 'Trier par Nom',
    de: 'Nach Name sortieren',
    pt: 'Ordenar por Nome',
    it: 'Ordina per Nome',
    nl: 'Sorteer op naam',
    ja: '名前でソート',
    ko: '이름으로 정렬',
    zh: '按名称排序'
  },
  'category.viewDetails': {
    en: 'View Details',
    es: 'Ver Detalles',
    fr: 'Voir les Détails',
    de: 'Details anzeigen',
    pt: 'Ver Detalhes',
    it: 'Visualizza Dettagli',
    nl: 'Bekijk Details',
    ja: '詳細を見る',
    ko: '상세 보기',
    zh: '查看详情'
  },
  'category.timeToLearn': {
    en: 'Time to Learn:',
    es: 'Tiempo para Aprender:',
    fr: 'Temps pour Apprendre:',
    de: 'Zeit zum Lernen:',
    pt: 'Tempo para Aprender:',
    it: 'Tempo per Imparare:',
    nl: 'Tijd om te Lezen:',
    ja: '学習にかかる時間:',
    ko: '학습에 걸리는 시간:',
    zh: '学习时间:'
  },
  'category.noResults': {
    en: 'No categories found matching your criteria.',
    es: 'No se encontraron categorías que coincidan con tus criterios.',
    fr: 'Aucune catégorie trouvée correspondant à vos critères.',
    de: 'Keine Kategorien gefunden, die Ihren Kriterien entsprechen.',
    pt: 'Nenhuma categoria encontrada correspondendo aos seus critérios.',
    it: 'Nessuna categoria trovata corrispondente ai tuoi criteri.',
    nl: 'Geen categorieën gevonden die overeenkomen met uw criteria.',
    ja: '条件に一致するカテゴリが見つかりませんでした。',
    ko: '기준에 맞는 카테고리를 찾을 수 없습니다.',
    zh: '没有找到符合您条件的类别。'
  },
  'category.clearFilters': {
    en: 'Clear Filters',
    es: 'Limpiar Filtros',
    fr: 'Effacer les Filtres',
    de: 'Filter zurücksetzen',
    pt: 'Limpar Filtros',
    it: 'Cancella Filtri',
    nl: 'Filter wissen',
    ja: 'フィルターをクリア',
    ko: '필터 초기화',
    zh: '清除过滤器'
  },
  'category.greatForNewcomers': {
    en: 'Great for newcomers',
    es: 'Excelente para principiantes',
    fr: 'Excellent pour les débutants',
    de: 'Großartig für Neueinsteiger',
    pt: 'Excelente para principiantes',
    it: 'Eccellente per principianti',
    nl: 'Geweldig voor nieuwe werknemers',
    ja: '初心者には最適',
    ko: '초보자에게 최적',
    zh: '非常适合初学者'
  },
  'category.highGrowthPotential': {
    en: 'High growth potential',
    es: 'Alto potencial de crecimiento',
    fr: 'Potentiel de croissance élevé',
    de: 'Hohe Wachstumschancen',
    pt: 'Potencial de alto crescimento',
    it: 'Potenziale di alto crescimento',
    nl: 'Hoge groeipotentie',
    ja: '高成長性',
    ko: '높은 성장 잠재력',
    zh: '高成长潜力'
  },
  'category.remoteFriendly': {
    en: 'Remote-friendly',
    es: 'Amigable para trabajo remoto',
    fr: 'Adapté au travail à distance',
    de: 'Fernarbeit geeignet',
    pt: 'Amigável para trabalho remoto',
    it: 'Amichevole per lavoro remoto',
    nl: 'Voor werkzaamheden op afstand geschikt',
    ja: 'リモートフレンドリー',
    ko: '원격 호환',
    zh: '远程友好'
  },
  'category.highEarningPotential': {
    en: 'High earning potential',
    es: 'Alto potencial de ingresos',
    fr: 'Potentiel de haut revenu',
    de: 'Hohe Einkommenschancen',
    pt: 'Potencial de alto rendimento',
    it: 'Potenziale di alto rendimento',
    nl: 'Hoge inkomensechancen',
    ja: '高収入性',
    ko: '높은 수입 잠재력',
    zh: '高收入潜力'
  },

  // Metrics page
  'metrics.page.backToDashboard': {
    en: 'Back to Dashboard',
    es: 'Volver al Panel',
    fr: 'Retour au Tableau de Bord',
    de: 'Zurück zum Dashboard',
    pt: 'Voltar ao Painel',
    it: 'Torna al Dashboard',
    nl: 'Terug naar Dashboard',
    ja: 'ダッシュボードに戻る',
    ko: '대시보드로 돌아가기',
    zh: '返回仪表板'
  },
  'metrics.page.title': {
    en: 'Market Metrics',
    es: 'Métricas del Mercado',
    fr: 'Métriques du Marché',
    de: 'Markt-Metriken',
    pt: 'Métricas do Mercado',
    it: 'Metriche del Mercato',
    nl: 'Marktmetrieken',
    ja: '市場指標',
    ko: '시장 지표',
    zh: '市场指标'
  },
  'metrics.page.description': {
    en: 'Comprehensive analysis of the job market with detailed metrics, trends, and insights.',
    es: 'Análisis integral del mercado laboral con métricas detalladas, tendencias e información.',
    fr: 'Analyse complète du marché du travail avec des métriques détaillées, des tendances et des insights.',
    de: 'Detaillierte Analysen des Arbeitsmarktes mit detaillierten Metriken, Trends und Erkenntnissen.',
    pt: 'Análise integral do mercado de trabalho com métricas detalhadas, tendências e insights.',
    it: 'Analisi completa del mercato del lavoro con metriche dettagliate, tendenze e insights.',
    nl: 'Uitgebreide analyse van de arbeidsmarkt met uitgebreide metrieken, trends en inzichten.',
    ja: '詳細な指標、トレンド、およびインサイトを持つ、ジョブマーケットの包括的な分析。',
    ko: '세부적인 지표, 추세 및 인사이트를 포함하는 채용 시장의 포괄적인 분석.',
    zh: '包含详细指标、趋势和见解的就业市场全面分析。'
  },
  'metrics.page.keyIndicators': {
    en: 'Key Market Indicators',
    es: 'Indicadores Clave del Mercado',
    fr: 'Indicateurs Clés du Marché',
    de: 'Wichtige Marktindikatoren',
    pt: 'Indicadores-Chave do Mercado',
    it: 'Indicatori Chiave del Mercato',
    nl: 'Belangrijke Marktindicatoren',
    ja: '主要な市場指標',
    ko: '주요 시장 지표',
    zh: '主要市场指标'
  },
  'metrics.page.marketTrends': {
    en: 'Market Trends',
    es: 'Tendencias del Mercado',
    fr: 'Tendances du Marché',
    de: 'Markttrends',
    pt: 'Tendências do Mercado',
    it: 'Tendenze del Mercato',
    nl: 'Marktrends',
    ja: '市場トレンド',
    ko: '시장 트렌드',
    zh: '市场趋势'
  },
  'metrics.page.detailedAnalysis': {
    en: 'Detailed Analysis',
    es: 'Análisis Detallado',
    fr: 'Analyse Détaillée',
    de: 'Detaillierte Analyse',
    pt: 'Análise Detalhada',
    it: 'Analisi Dettagliata',
    nl: 'Gedetailleerde analyse',
    ja: '詳細な分析',
    ko: '상세 분석',
    zh: '详细分析'
  },
  'metrics.page.marketInsights': {
    en: 'Market Insights',
    es: 'Perspectivas del Mercado',
    fr: 'Perspectives du Marché',
    de: 'Marktinsights',
    pt: 'Perspectivas do Mercado',
    it: 'Perspettive del Mercato',
    nl: 'Marktinsights',
    ja: '市場洞察',
    ko: '시장 인사이트',
    zh: '市场洞察'
  },
  'metrics.page.quickStats': {
    en: 'Quick Stats',
    es: 'Estadísticas Rápidas',
    fr: 'Statistiques Rapides',
    de: 'Schnelle Statistiken',
    pt: 'Estatísticas Rápidas',
    it: 'Statistiche Rapide',
    nl: 'Snel Statistieken',
    ja: 'クイック統計',
    ko: '빠른 통계',
    zh: '快速统计'
  },
  'metrics.page.growthIndicators': {
    en: 'Growth Indicators',
    es: 'Indicadores de Crecimiento',
    fr: 'Indicateurs de Croissance',
    de: 'Wachstumsindikatoren',
    pt: 'Indicadores de Crescimento',
    it: 'Indicatori di Crescita',
    nl: 'Groeiindicatoren',
    ja: '成長指標',
    ko: '성장 지표',
    zh: '增长指标'
  },
  'metrics.page.actions': {
    en: 'Actions',
    es: 'Acciones',
    fr: 'Actions',
    de: 'Aktionen',
    pt: 'Ações',
    it: 'Azioni',
    nl: 'Acties',
    ja: 'アクション',
    ko: '행동',
    zh: '动作'
  },
  'metrics.page.jobGrowth': {
    en: 'Job Growth',
    es: 'Crecimiento de Trabajos',
    fr: 'Croissance des Travaux',
    de: 'Arbeitsmarktwachstum',
    pt: 'Crescimento de Trabalhos',
    it: 'Crescita dei Lavori',
    nl: 'Werkgewijze groei',
    ja: '求人成長',
    ko: '작업 증가',
    zh: '工作增长'
  },
  'metrics.page.monthlyTrends': {
    en: 'Monthly job posting trends',
    es: 'Tendencias mensuales de publicaciones de trabajo',
    fr: 'Tendances mensuelles de publication de travail',
    de: 'Monatliche Arbeitsstellen-Trends',
    pt: 'Tendências mensais de publicações de trabalho',
    it: 'Tendenze mensili di pubblicazione di lavoro',
    nl: 'Maandelijkse werkgewijze trends',
    ja: '月次求人掲載トレンド',
    ko: '월별 채용 게시 추세',
    zh: '每月工作发布趋势'
  },
  'metrics.page.companyActivity': {
    en: 'Company Activity',
    es: 'Actividad de Empresas',
    fr: 'Activité des Entreprises',
    de: 'Unternehmensaktivität',
    pt: 'Atividade de Empresas',
    it: 'Attività delle Aziende',
    nl: 'Bedrijfsactiviteit',
    ja: '企業活動',
    ko: '기업 활동',
    zh: '企业活动'
  },
  'metrics.page.newCompanies': {
    en: 'New companies entering market',
    es: 'Nuevas empresas entrando al mercado',
    fr: 'Nouvelles entreprises entrant sur le marché',
    de: 'Neue Unternehmen auf dem Markt',
    pt: 'Novas empresas entrando no mercado',
    it: 'Nuove aziende entrando sul mercato',
    nl: 'Nieuwe bedrijven die op de markt komen',
    ja: '新規企業が市場に参入',
    ko: '새로운 기업이 시장에 진출',
    zh: '新公司进入市场'
  },
  'metrics.page.easyApplyJobs': {
    en: 'Easy Apply Jobs',
    es: 'Trabajos de Aplicación Fácil',
    fr: 'Travaux de Candidature Facile',
    de: 'Einfache Bewerbungen',
    pt: 'Trabalhos de Aplicação Fácil',
    it: 'Lavori con applicazione semplificata',
    nl: 'Eenvoudige sollicitaties',
    ja: '簡単な応募求人',
    ko: '간단한 지원 채용',
    zh: '简单申请工作'
  },
  'metrics.page.simplifiedApplication': {
    en: 'Jobs with simplified application',
    es: 'Trabajos con aplicación simplificada',
    fr: 'Travaux avec candidature simplifiée',
    de: 'Arbeiten mit vereinfachter Bewerbung',
    pt: 'Trabalhos com aplicação simplificada',
    it: 'Lavori con applicazione semplificata',
    nl: 'Taken met vereenvoudigde sollicitatie',
    ja: '簡易応募求人',
    ko: '간소화된 지원 채용',
    zh: '简化申请工作'
  },
  'metrics.page.vsLastMonth': {
    en: 'vs last month',
    es: 'vs el mes pasado',
    fr: 'vs le mois dernier',
    de: 'vs letzten Monat',
    pt: 'vs o mês passado',
    it: 'vs il mese scorso',
    nl: 'vs vorige maand',
    ja: '先月と比較',
    ko: '지난 달과 비교',
    zh: '与上月相比'
  },
  'metrics.page.jobDistribution': {
    en: 'Job Distribution',
    es: 'Distribución de Trabajos',
    fr: 'Distribution des Travaux',
    de: 'Arbeitsverteilung',
    pt: 'Distribuição de Trabalhos',
    it: 'Distribuzione dei Lavori',
    nl: 'Werkverdeling',
    ja: '求人分布',
    ko: '채용 분포',
    zh: '工作分布'
  },
  'metrics.page.remoteJobs': {
    en: 'Remote Jobs',
    es: 'Trabajos Remotos',
    fr: 'Travaux à Distance',
    de: 'Fernarbeiten',
    pt: 'Trabalhos Remotos',
    it: 'Lavori Remoti',
    nl: 'Werkzaamheden op afstand',
    ja: 'リモート求人',
    ko: '원격 채용',
    zh: '远程工作'
  },
  'metrics.page.hybridJobs': {
    en: 'Hybrid Jobs',
    es: 'Trabajos Híbridos',
    fr: 'Travaux Hybrides',
    de: 'Hybride Arbeiten',
    pt: 'Trabalhos Híbridos',
    it: 'Lavori Híbridos',
    nl: 'Hybride taken',
    ja: 'ハイブリッド求人',
    ko: '하이브리드 채용',
    zh: '混合工作'
  },
  'metrics.page.onsiteJobs': {
    en: 'On-site Jobs',
    es: 'Trabajos Presenciales',
    fr: 'Travaux sur site',
    de: 'Anwesenheitsarbeiten',
    pt: 'Trabalhos Presenciais',
    it: 'Lavori Presenziali',
    nl: 'Op locatie werkzaamheden',
    ja: 'オンサイト求人',
    ko: '온사이트 채용',
    zh: '现场工作'
  },
  'metrics.page.experienceLevel': {
    en: 'Experience Level',
    es: 'Nivel de Experiencia',
    fr: 'Niveau d\'Expérience',
    de: 'Erfahrungsstufe',
    pt: 'Nível de Experiência',
    it: 'Livello di Esperienza',
    nl: 'Ervaringsniveau',
    ja: '経験レベル',
    ko: '경력 수준',
    zh: '经验水平'
  },
  'metrics.page.entryLevel': {
    en: 'Entry Level',
    es: 'Nivel de Entrada',
    fr: 'Niveau d\'Entrée',
    de: 'Einstiegsstufe',
    pt: 'Nível de Entrada',
    it: 'Livello di Entrata',
    nl: 'Ingangsniveau',
    ja: 'エントリーレベル',
    ko: '입문 수준',
    zh: '入门水平'
  },
  'metrics.page.midLevel': {
    en: 'Mid Level',
    es: 'Nivel Intermedio',
    fr: 'Niveau Intermédiaire',
    de: 'Mittelstufe',
    pt: 'Nível Intermedio',
    it: 'Livello Intermedio',
    nl: 'Middelste niveau',
    ja: '中級レベル',
    ko: '중급 수준',
    zh: '中级水平'
  },
  'metrics.page.seniorLevel': {
    en: 'Senior Level',
    es: 'Nivel Senior',
    fr: 'Niveau Senior',
    de: 'Seniorstufe',
    pt: 'Nível Senior',
    it: 'Livello Senior',
    nl: 'Senior niveau',
    ja: '上級レベル',
    ko: '고급 수준',
    zh: '高级水平'
  },
  'metrics.page.growingDemand': {
    en: 'Growing Demand',
    es: 'Demanda Creciente',
    fr: 'Demande Croissante',
    de: 'Wachstumsnachfrage',
    pt: 'Demanda Crescente',
    it: 'Domanda Crescente',
    nl: 'Groeiende vraag',
    ja: '成長需要',
    ko: '성장 수요',
    zh: '增长需求'
  },
  'metrics.page.growingDemandDesc': {
    en: 'The job market is showing strong growth with a 12% increase in job postings compared to last month.',
    es: 'El mercado laboral está mostrando un fuerte crecimiento con un aumento del 12% en las publicaciones de trabajo en comparación con el mes pasado.',
    fr: 'Le marché du travail montre une croissance forte avec une augmentation de 12% des offres d\'emploi par rapport au mois dernier.',
    de: 'Der Arbeitsmarkt zeigt starke Wachstumschancen mit einer 12%igen Steigerung der Arbeitsstellen im Vergleich zum letzten Monat.',
    pt: 'O mercado de trabalho está mostrando um forte crescimento com um aumento de 12% nas publicações de trabalho em comparação com o mês passado.',
    it: 'Il mercato del lavoro sta mostrando un forte crescimento con un aumento del 12% delle pubblicazioni di lavoro rispetto al mese scorso.',
    nl: 'De arbeidsmarkt toont sterke groei met een 12% stijging van vacatures vergeleken met de vorige maand.',
    ja: '求人市場は、先月と比較して求人掲載数が12%増加していることを示しています。',
    ko: '채용 시장은 지난 달과 비교하여 채용 게시물이 12% 증가했음을 보여줍니다.',
    zh: '就业市场正在显示强劲增长，与上月相比，工作发布数量增加了12%。'
  },
  'metrics.page.remoteWorkDominance': {
    en: 'Remote Work Dominance',
    es: 'Dominancia del Trabajo Remoto',
    fr: 'Dominance du Travail à Distance',
    de: 'Fernarbeit-Dominanz',
    pt: 'Dominância do Trabalho Remoto',
    it: 'Dominanza del Lavoro Remoto',
    nl: 'Dominantie van werkzaamheden op afstand',
    ja: 'リモートワーク支配',
    ko: '원격 근무 지배',
    zh: '远程工作支配'
  },
  'metrics.page.remoteWorkDominanceDesc': {
    en: '64% of jobs are remote, indicating a strong preference for flexible work arrangements.',
    es: 'El 64% de los trabajos son remotos, indicando una fuerte preferencia por arreglos de trabajo flexibles.',
    fr: '64% des travaux sont à distance, indiquant une forte préférence pour des arrangements de travail flexibles.',
    de: '64% der Arbeiten sind remote, was auf eine starke Vorliebe für flexible Arbeitsarrangements hinweist.',
    pt: '64% dos trabalhos são remotos, indicando uma forte preferência por arranjos de trabalho flexíveis.',
    it: 'Il 64% dei lavori è remoto, indicando una forte preferenza per arrangiamenti di lavoro flessibili.',
    nl: '64% van de taken zijn op afstand, wat aangeeft dat er een sterke voorkeur is voor flexibele werkzaamheden.',
    ja: '64%の求人はリモートであり、柔軟な働き方に強い傾向があることを示しています。',
    ko: '64%의 채용은 원격이며, 유연한 근무 방식에 대한 강한 선호도를 보여줍니다.',
    zh: '64%的工作是远程的，表明对灵活工作安排有强烈的偏好。'
  },
  'metrics.page.easyApplyTrend': {
    en: 'Easy Apply Trend',
    es: 'Tendencia de Aplicación Fácil',
    fr: 'Tendance de Candidature Facile',
    de: 'Einfache Bewerbungstrend',
    pt: 'Tendência de Aplicação Fácil',
    it: 'Tendenza di Candidatura Facile',
    nl: 'Trend van eenvoudige sollicitatie',
    ja: '簡易応募トレンド',
    ko: '간단한 지원 추세',
    zh: '简单申请趋势'
  },
  'metrics.page.easyApplyTrendDesc': {
    en: '64% of jobs offer easy apply options, making the application process more accessible.',
    es: 'El 64% de los trabajos ofrecen opciones de aplicación fácil, haciendo el proceso de aplicación más accesible.',
    fr: '64% des offres d\'emploi proposent des options de candidature faciles, rendant le processus d\'application plus accessible.',
    de: '64% der Arbeiten bieten einfache Bewerbungsmöglichkeiten, was den Bewerbungsprozess zugänglicher macht.',
    pt: '64% dos trabalhos oferecem opções de candidatura fácil, tornando o processo de candidatura mais acessível.',
    it: 'Il 64% dei lavori offre opzioni di candidatura facili, rendendo il processo di candidatura più accessibile.',
    nl: '64% van de taken biedt eenvoudige sollicitatieopties, waardoor het sollicitatieproces toegankelijker wordt.',
    ja: '64%の求人は簡易応募オプションを提供しており、応募プロセスをよりアクセスしやすくしています。',
    ko: '64%의 채용은 간소화된 지원 옵션을 제공하여 지원 프로세스를 더 쉽게 접근할 수 있도록 합니다.',
    zh: '64%的工作提供简单申请选项，使申请过程更容易访问。'
  },
  'metrics.page.exportReport': {
    en: 'Export Report',
    es: 'Exportar Reporte',
    fr: 'Exporter le Rapport',
    de: 'Bericht exportieren',
    pt: 'Exportar Relatório',
    it: 'Esportare Rapporto',
    nl: 'Rapport exporteren',
    ja: 'レポートをエクスポート',
    ko: '보고서 내보내기',
    zh: '导出报告'
  },
  'metrics.page.viewTrends': {
    en: 'View Trends',
    es: 'Ver Tendencias',
    fr: 'Voir les Tendances',
    de: 'Trends anzeigen',
    pt: 'Ver Tendências',
    it: 'Visualizza Trend',
    nl: 'Trends bekijken',
    ja: 'トレンドを見る',
    ko: '트렌드 보기',
    zh: '查看趋势'
  },
  'metrics.page.scheduleUpdate': {
    en: 'Schedule Update',
    es: 'Programar Actualización',
    fr: 'Planifier la Mise à Jour',
    de: 'Aktualisierungsplan',
    pt: 'Agendar Atualização',
    it: 'Pianificare Aggiornamento',
    nl: 'Schema bijwerken',
    ja: '更新をスケジュール',
    ko: '업데이트 일정 조정',
    zh: '安排更新'
  },

  // File upload validation messages
  'upload.validation.fileType': {
    en: 'Please upload a .txt or .csv file',
    es: 'Por favor sube un archivo .txt o .csv',
    fr: 'Veuillez télécharger un fichier .txt ou .csv',
    de: 'Bitte laden Sie eine .txt oder .csv-Datei hoch',
    pt: 'Por favor, suba um arquivo .txt ou .csv',
    it: 'Per favore, carica un file .txt o .csv',
    nl: 'Upload alstublieft een .txt of .csv bestand',
    ja: '.txtまたは.csvファイルをアップロードしてください',
    ko: '.txt 또는 .csv 파일을 업로드해주세요',
    zh: '请上传.txt或.csv文件'
  },
  'upload.validation.fileSize': {
    en: 'File size must be less than 10MB',
    es: 'El tamaño del archivo debe ser menor a 10MB',
    fr: 'La taille du fichier doit être inférieure à 10MB',
    de: 'Die Dateigröße muss kleiner als 10MB sein',
    pt: 'O tamanho do arquivo deve ser menor que 10MB',
    it: 'La dimensione del file deve essere inferiore a 10MB',
    nl: 'De bestandsgrootte moet kleiner zijn dan 10MB',
    ja: 'ファイルサイズは10MB未満である必要があります',
    ko: '파일 크기는 10MB 미만이어야 합니다',
    zh: '文件大小必须小于10MB'
  },

  // Test buttons (temporary)
  'test.saveScroll': {
    en: 'Test Save Scroll',
    es: 'Probar Guardar Scroll',
    fr: 'Tester l\'enregistrement du défilement',
    de: 'Testen Sie das Speichern des Scrolls',
    pt: 'Testar Salvar Scroll',
    it: 'Prova a Salvare il Rollback',
    nl: 'Test opslaan scroll',
    ja: 'スクロールを保存するテスト',
    ko: '스크롤을 저장하는 테스트',
    zh: '测试保存滚动'
  },
  'test.restoreScroll': {
    en: 'Test Restore Scroll',
    es: 'Probar Restaurar Scroll',
    fr: 'Tester la restauration du défilement',
    de: 'Testen Sie das Wiederherstellen des Scrolls',
    pt: 'Testar Restaurar Scroll',
    it: 'Prova a Ripristinare il Rollback',
    nl: 'Test herstel scroll',
    ja: 'スクロールを復元するテスト',
    ko: '스크롤을 복원하는 테스트',
    zh: '测试恢复滚动'
  },

  // Career page
  'career.notFound': {
    en: 'Career Path Not Found',
    es: 'Ruta de Carrera No Encontrada',
    fr: 'Parcours de Carrière Non Trouvé',
    de: 'Karrierepfad Nicht Gefunden',
    pt: 'Caminho de Carreira Não Encontrado',
    it: 'Percorso di Carriera Non Trovato',
    nl: 'Carrièrepad Niet Gevonden',
    ja: 'キャリアパスが見つかりませんでした',
    ko: '커리어 경로를 찾을 수 없습니다.',
    zh: '职业道路未找到'
  },
  'career.notFoundDesc': {
    en: 'The career path you\'re looking for doesn\'t exist.',
    es: 'La ruta de carrera que buscas no existe.',
    fr: 'Le parcours de carrière que vous recherchez n\'existe pas.',
    de: 'Der Karrierepfad, den Sie suchen, existiert nicht.',
    pt: 'O caminho de carreira que você está procurando não existe.',
    it: 'Il percorso di carriera che stai cercando non esiste.',
    nl: 'Het carrièrepad dat u zoekt, bestaat niet.',
    ja: 'あなたが探しているキャリアパスは存在しません。',
    ko: '찾으시는 커리어 경로가 존재하지 않습니다.',
    zh: '您正在寻找的职业道路不存在。'
  },
  'career.goBack': {
    en: 'Go Back',
    es: 'Volver',
    fr: 'Retour',
    de: 'Zurück',
    pt: 'Voltar',
    it: 'Torna indietro',
    nl: 'Terug',
    ja: '戻る',
    ko: '뒤로 가기',
    zh: '返回'
  },
  'career.backToPaths': {
    en: 'Back to Career Paths',
    es: 'Volver a Rutas de Carrera',
    fr: 'Retour aux Parcours de Carrière',
    de: 'Zurück zu Karrierepfaden',
    pt: 'Voltar para Caminhos de Carreira',
    it: 'Torna a Percorsi di Carriera',
    nl: 'Terug naar Carrièrepaden',
    ja: 'キャリアパスに戻る',
    ko: '커리어 경로로 돌아가기',
    zh: '返回职业道路'
  },
  'career.fitScore': {
    en: 'Career Fit Score',
    es: 'Puntuación de Ajuste de Carrera',
    fr: 'Score de Compatibilité de Carrière',
    de: 'Karriere-Anpassungsschwierigkeit',
    pt: 'Pontuação de Ajuste de Carreira',
    it: 'Punteggio di Adattamento di Carriera',
    nl: 'Carrière-aanpassing score',
    ja: 'キャリア適合度スコア',
    ko: '커리어 적합도 점수',
    zh: '职业适配度分数'
  },
  'career.basedOnPreferences': {
    en: 'Based on your preferences',
    es: 'Basado en tus preferencias',
    fr: 'Basé sur vos préférences',
    de: 'Basierend auf Ihren Vorlieben',
    pt: 'Baseado em suas preferências',
    it: 'Basato sulle tue preferenze',
    nl: 'Gebaseerd op uw voorkeuren',
    ja: 'あなたの好みに基づいて',
    ko: '선호도에 따라',
    zh: '基于您的偏好'
  },
  'career.andMarketData': {
    en: 'and market data',
    es: 'y datos del mercado',
    fr: 'et données de marché',
    de: 'und Marktdaten',
    pt: 'e dados do mercado',
    it: 'e dati di mercato',
    nl: 'en marktdata',
    ja: 'および市場データ',
    ko: '및 시장 데이터',
    zh: '和市场数据'
  },
  'career.greatForNewcomers': {
    en: 'Great for newcomers',
    es: 'Excelente para principiantes',
    fr: 'Excellent pour les débutants',
    de: 'Großartig für Neueinsteiger',
    pt: 'Excelente para principiantes',
    it: 'Eccellente per principianti',
    nl: 'Geweldig voor nieuwe werknemers',
    ja: '初心者には最適',
    ko: '초보자에게 최적',
    zh: '非常适合初学者'
  },
  'career.highGrowthPotential': {
    en: 'High growth potential',
    es: 'Alto potencial de crecimiento',
    fr: 'Potentiel de croissance élevé',
    de: 'Hohe Wachstumschancen',
    pt: 'Potencial de alto crescimento',
    it: 'Potenziale di alto crescimento',
    nl: 'Hoge groeipotentie',
    ja: '高成長性',
    ko: '높은 성장 잠재력',
    zh: '高成长潜力'
  },
  'career.remoteFriendly': {
    en: 'Remote-friendly',
    es: 'Amigable para trabajo remoto',
    fr: 'Adapté au travail à distance',
    de: 'Fernarbeit geeignet',
    pt: 'Amigável para trabalho remoto',
    it: 'Amichevole per lavoro remoto',
    nl: 'Voor werkzaamheden op afstand geschikt',
    ja: 'リモートフレンドリー',
    ko: '원격 호환',
    zh: '远程友好'
  },
  'career.highJobDemand': {
    en: 'High job demand',
    es: 'Alta demanda de trabajo',
    fr: 'Demande élevée de travail',
    de: 'Hohe Arbeitsnachfrage',
    pt: 'Alta demanda de trabalho',
    it: 'Alta domanda di lavoro',
    nl: 'Hoge werkgewijze vraag',
    ja: '高求人需要',
    ko: '높은 채용 수요',
    zh: '高工作需求'
  },
  'career.competitiveSalary': {
    en: 'Competitive salary',
    es: 'Salario competitivo',
    fr: 'Salaire compétitif',
    de: 'Konkurrenzfähiges Gehalt',
    pt: 'Salário competitivo',
    it: 'Salario competitivo',
    nl: 'Competitief salaris',
    ja: '競争力ある給与',
    ko: '경쟁력 있는 급여',
    zh: '有竞争力的工资'
  },
  'career.rightForYou': {
    en: 'Is This Career Right for You?',
    es: '¿Es Esta Carrera Adecuada para Ti?',
    fr: 'Cette carrière est-elle adaptée à vous ?',
    de: 'Ist diese Karriere für Sie geeignet?',
    pt: 'Esta carreira é adequada para você?',
    it: 'Questa carriera è adatta a te?',
    nl: 'Is deze carrière voor jou geschikt?',
    ja: 'このキャリアはあなたに適していますか？',
    ko: '이 커리어가 당신에게 적합한가요?',
    zh: '这是您的职业吗？'
  },
  'career.youllLoveThis': {
    en: 'You\'ll Love This If:',
    es: 'Te Encantará Esto Si:',
    fr: 'Vous l\'aimerez Si:',
    de: 'Sie werden dieses begeistern, wenn:',
    pt: 'Você irá adorar Se:',
    it: 'Ti piacerà Se:',
    nl: 'Je zult dit leuk vinden Als:',
    ja: 'これを愛するなら:',
    ko: '이 일을 좋아하면:',
    zh: '如果您喜欢这份工作，您会爱上它。'
  },
  'career.considerAnotherPath': {
    en: 'Consider Another Path If:',
    es: 'Considera Otra Ruta Si:',
    fr: 'Considérez un Autre Parcours Si:',
    de: 'Betrachten Sie einen anderen Pfad, wenn:',
    pt: 'Considere Outro Caminho Se:',
    it: 'Considera un Altro Percorso Se:',
    nl: 'Overweeg een Ander Pad Als:',
    ja: '別のパスを検討するなら:',
    ko: '다른 경로를 고려하면:',
    zh: '如果您考虑其他职业道路，请考虑。'
  },
  'career.whatYoullDo': {
    en: 'What You\'ll Do',
    es: 'Lo Que Harás',
    fr: 'Ce que vous ferez',
    de: 'Was Sie tun werden',
    pt: 'O Que Você Fará',
    it: 'Quello che farai',
    nl: 'Wat u zult doen',
    ja: 'あなたがなすこと',
    ko: '당신이 하는 일',
    zh: '您将做'
  },
  'career.requiredSkills': {
    en: 'Required Skills',
    es: 'Habilidades Requeridas',
    fr: 'Compétences Requises',
    de: 'Erforderliche Fähigkeiten',
    pt: 'Habilidades Requeridas',
    it: 'Competenze Richieste',
    nl: 'Verplichte Vaardigheden',
    ja: '必要なスキル',
    ko: '필요한 기술',
    zh: '所需技能'
  },
  'career.learningPath': {
    en: 'Learning Path',
    es: 'Ruta de Aprendizaje',
    fr: 'Parcours d\'Apprentissage',
    de: 'Lernpfad',
    pt: 'Caminho de Aprendizado',
    it: 'Percorso di Apprendimento',
    nl: 'Leerpad',
    ja: '学習パス',
    ko: '학습 경로',
    zh: '学习路径'
  },
  'career.entryLevelPositions': {
    en: 'Entry Level Positions',
    es: 'Posiciones de Nivel de Entrada',
    fr: 'Postes de Niveau d\'Entrée',
    de: 'Einstiegsstellen',
    pt: 'Posições de Nível de Entrada',
    it: 'Posizioni di Livello di Entrata',
    nl: 'Ingangsniveau posities',
    ja: 'エントリーレベルの求人',
    ko: '입문 수준 채용',
    zh: '入门水平职位'
  },
  'career.advancedPositions': {
    en: 'Advanced Positions',
    es: 'Posiciones Avanzadas',
    fr: 'Postes Avancés',
    de: 'Fortgeschrittene Stellen',
    pt: 'Posições Avançadas',
    it: 'Posizioni Avanzate',
    nl: 'Geavanceerde posities',
    ja: '上級レベルの求人',
    ko: '고급 수준 채용',
    zh: '高级职位'
  },
  'career.popularTechnologies': {
    en: 'Popular Technologies',
    es: 'Tecnologías Populares',
    fr: 'Technologies Populaires',
    de: 'Beliebte Technologien',
    pt: 'Tecnologias Populares',
    it: 'Tecnologie Popolari',
    nl: 'Populaire Technologieën',
    ja: '人気の技術',
    ko: '인기 있는 기술',
    zh: '热门技术'
  },
  'career.learningResources': {
    en: 'Learning Resources',
    es: 'Recursos de Aprendizaje',
    fr: 'Ressources d\'Apprentissage',
    de: 'Lernressourcen',
    pt: 'Recursos de Aprendizado',
    it: 'Risorse di Apprendimento',
    nl: 'Leerbronnen',
    ja: '学習リソース',
    ko: '학습 자원',
    zh: '学习资源'
  },
  'career.recommendedCourses': {
    en: 'Recommended Courses',
    es: 'Cursos Recomendados',
    fr: 'Cours Recommandés',
    de: 'Empfohlene Kurse',
    pt: 'Cursos Recomendados',
    it: 'Corsi Raccomandati',
    nl: 'Aanbevolen Cursussen',
    ja: '推奨コース',
    ko: '추천 과정',
    zh: '推荐课程'
  },
  'career.practicePlatforms': {
    en: 'Practice Platforms',
    es: 'Plataformas de Práctica',
    fr: 'Plateformes de Pratique',
    de: 'Übungsplattformen',
    pt: 'Plataformas de Prática',
    it: 'Piattaforme di Pratica',
    nl: 'Oefenplatformen',
    ja: '練習プラットフォーム',
    ko: '연습 플랫폼',
    zh: '练习平台'
  },
  'career.communities': {
    en: 'Communities',
    es: 'Comunidades',
    fr: 'Communautés',
    de: 'Gemeinschaften',
    pt: 'Comunidades',
    it: 'Comunità',
    nl: 'Gemeenschappen',
    ja: 'コミュニティ',
    ko: '커뮤니티',
    zh: '社区'
  },
  'career.careerProspects': {
    en: 'Career Prospects',
    es: 'Perspectivas de Carrera',
    fr: 'Perspectives de Carrière',
    de: 'Karriere-Perspektiven',
    pt: 'Perspectivas de Carreira',
    it: 'Prospettive di Carriera',
    nl: 'Carrière-prospecten',
    ja: 'キャリア展望',
    ko: '커리어 전망',
    zh: '职业展望'
  },
  'career.marketOverview': {
    en: 'Market Overview',
    es: 'Resumen del Mercado',
    fr: 'Vue d\'Ensemble du Marché',
    de: 'Marktübersicht',
    pt: 'Visão Geral do Mercado',
    it: 'Panoramica del Mercato',
    nl: 'Marktoverzicht',
    ja: '市場概要',
    ko: '시장 개요',
    zh: '市场概览'
  },
  'career.avgSalary': {
    en: 'Avg Salary',
    es: 'Salario Promedio',
    fr: 'Salaire Moyen',
    de: 'Durchschnittlicher Lohn',
    pt: 'Salário Médio',
    it: 'Salario Medio',
    nl: 'Gemiddeld Salaris',
    ja: '平均給与',
    ko: '평균 급여',
    zh: '平均工资'
  },
  'career.jobDistribution': {
    en: 'Job Distribution',
    es: 'Distribución de Trabajos',
    fr: 'Distribution des Travaux',
    de: 'Arbeitsverteilung',
    pt: 'Distribuição de Trabalhos',
    it: 'Distribuzione dei Lavori',
    nl: 'Werkverdeling',
    ja: '求人分布',
    ko: '채용 분포',
    zh: '工作分布'
  },
  'career.remote': {
    en: 'Remote',
    es: 'Remoto',
    fr: 'À Distance',
    de: 'Fernarbeit',
    pt: 'Remoto',
    it: 'Remoto',
    nl: 'Op Afstand',
    ja: 'リモート',
    ko: '원격',
    zh: '远程'
  },
  'career.onsite': {
    en: 'On-site',
    es: 'Presencial',
    fr: 'Sur Site',
    de: 'Anwesenheitsarbeit',
    pt: 'Presencial',
    it: 'Presenziale',
    nl: 'Op Locatie',
    ja: 'オンサイト',
    ko: '온사이트',
    zh: '现场'
  },
  'career.hybrid': {
    en: 'Hybrid',
    es: 'Híbrido',
    fr: 'Hybride',
    de: 'Hybride Arbeiten',
    pt: 'Híbrido',
    it: 'Híbrido',
    nl: 'Hybride',
    ja: 'ハイブリッド',
    ko: '하이브리드',
    zh: '混合'
  },
  'career.experienceLevel': {
    en: 'Experience Level',
    es: 'Nivel de Experiencia',
    fr: 'Niveau d\'Expérience',
    de: 'Erfahrungsstufe',
    pt: 'Nível de Experiência',
    it: 'Livello di Esperienza',
    nl: 'Ervaringsniveau',
    ja: '経験レベル',
    ko: '경력 수준',
    zh: '经验水平'
  },
  'career.entryLevel': {
    en: 'Entry Level',
    es: 'Nivel de Entrada',
    fr: 'Niveau d\'Entrée',
    de: 'Einstiegsstufe',
    pt: 'Nível de Entrada',
    it: 'Livello di Entrata',
    nl: 'Ingangsniveau',
    ja: 'エントリーレベル',
    ko: '입문 수준',
    zh: '入门水平'
  },
  'career.seniorLevel': {
    en: 'Senior Level',
    es: 'Nivel Senior',
    fr: 'Niveau Senior',
    de: 'Seniorstufe',
    pt: 'Nível Senior',
    it: 'Livello Senior',
    nl: 'Senior niveau',
    ja: '上級レベル',
    ko: '고급 수준',
    zh: '高级水平'
  },
  'career.keyInformation': {
    en: 'Key Information',
    es: 'Información Clave',
    fr: 'Informations Clées',
    de: 'Wichtige Informationen',
    pt: 'Informações Chave',
    it: 'Informazioni Chiave',
    nl: 'Belangrijke Informatie',
    ja: '重要な情報',
    ko: '중요한 정보',
    zh: '关键信息'
  },
  'career.timeToLearn': {
    en: 'Time to Learn:',
    es: 'Tiempo para Aprender:',
    fr: 'Temps pour Apprendre:',
    de: 'Zeit zum Lernen:',
    pt: 'Tempo para Aprender:',
    it: 'Tempo per Imparare:',
    nl: 'Tijd om te Lezen:',
    ja: '学習にかかる時間:',
    ko: '학습에 걸리는 시간:',
    zh: '学习时间:'
  },
  'career.salaryRange': {
    en: 'Salary Range:',
    es: 'Rango Salarial:',
    fr: 'Gamme de Salaires:',
    de: 'Gehaltsspanne:',
    pt: 'Faixa Salarial:',
    it: 'Fascia Salariale:',
    nl: 'Salarisbereik:',
    ja: '給与範囲:',
    ko: '급여 범위:',
    zh: '薪资范围:'
  },
  'career.remoteWork': {
    en: 'Remote Work:',
    es: 'Trabajo Remoto:',
    fr: 'Travail à Distance:',
    de: 'Fernarbeit:',
    pt: 'Trabalho Remoto:',
    it: 'Lavoro Remoto:',
    nl: 'Werkzaamheden op afstand:',
    ja: 'リモートワーク:',
    ko: '원격 근무:',
    zh: '远程工作:'
  },
  'career.getStarted': {
    en: 'Get Started',
    es: 'Comenzar',
    fr: 'Commencer',
    de: 'Anfangen',
    pt: 'Começar',
    it: 'Iniziare',
    nl: 'Beginnen',
    ja: '始める',
    ko: '시작하기',
    zh: '开始'
  },
  'career.startLearningPath': {
    en: 'Start Learning Path',
    es: 'Comenzar Ruta de Aprendizaje',
    fr: 'Commencer le Parcours d\'Apprentissage',
    de: 'Lernpfad starten',
    pt: 'Iniciar Caminho de Aprendizado',
    it: 'Iniziare il Percorso di Apprendimento',
    nl: 'Leerpad starten',
    ja: '学習パスを開始',
    ko: '학습 경로 시작',
    zh: '开始学习路径'
  },
  'career.joinCommunity': {
    en: 'Join Community',
    es: 'Unirse a la Comunidad',
    fr: 'Rejoindre la Communauté',
    de: 'Mitglied werden',
    pt: 'Juntar-se à Comunidade',
    it: 'Unirsi alla Comunità',
    nl: 'Deelnemen aan de Gemeenschap',
    ja: 'コミュニティに参加',
    ko: '커뮤니티 참여',
    zh: '加入社区'
  },
  'career.viewJobOpenings': {
    en: 'View Job Openings',
    es: 'Ver Ofertas de Trabajo',
    fr: 'Voir les Offres d\'Emploi',
    de: 'Stellenangebote anzeigen',
    pt: 'Ver Vagas de Trabalho',
    it: 'Visualizza Offerte di Lavoro',
    nl: 'Werkgewijze openstaan',
    ja: '求人掲載を見る',
    ko: '채용 게시물 보기',
    zh: '查看工作机会'
  },
  'career.noDistributionData': {
    en: 'No distribution data available',
    es: 'No hay datos de distribución disponibles',
    fr: 'Aucune donnée de distribution disponible',
    de: 'Keine Verteilungsdaten verfügbar',
    pt: 'Nenhum dado de distribuição disponível',
    it: 'Nessun dato di distribuzione disponibile',
    nl: 'Geen distributiegegevens beschikbaar',
    ja: '分布データがありません',
    ko: '분포 데이터를 사용할 수 없습니다.',
    zh: '没有分布数据'
  },
  'career.growth': {
    en: 'Growth',
    es: 'Crecimiento',
    fr: 'Croissance',
    de: 'Wachstum',
    pt: 'Crescimento',
    it: 'Crescita',
    nl: 'Groei',
    ja: '成長',
    ko: '성장',
    zh: '增长'
  },
  'career.categoryOverview': {
    en: 'Category Overview',
    es: 'Resumen de Categoría',
    fr: 'Aperçu de la Catégorie',
    de: 'Kategorie-Übersicht',
    pt: 'Visão Geral da Categoria',
    it: 'Panoramica della Categoria',
    nl: 'Categorie Overzicht',
    ja: 'カテゴリ概要',
    ko: '카테고리 개요',
    zh: '类别概览'
  },
  'career.specializations': {
    en: 'Specializations',
    es: 'Especializaciones',
    fr: 'Spécialisations',
    de: 'Spezialisierungen',
    pt: 'Especializações',
    it: 'Specializzazioni',
    nl: 'Specialisaties',
    ja: '専門分野',
    ko: '전문화',
    zh: '专业化'
  },
  'career.noSpecializations': {
    en: 'No Specializations Available',
    es: 'No Hay Especializaciones Disponibles',
    fr: 'Aucune Spécialisation Disponible',
    de: 'Keine Spezialisierungen Verfügbar',
    pt: 'Nenhuma Especialização Disponível',
    it: 'Nessuna Specializzazione Disponibile',
    nl: 'Geen Specialisaties Beschikbaar',
    ja: '専門分野がありません',
    ko: '사용 가능한 전문화가 없습니다',
    zh: '没有可用的专业化'
  },
  'career.noSpecializationsDescription': {
    en: 'This category doesn\'t have specific specializations yet. You can explore the general career path.',
    es: 'Esta categoría aún no tiene especializaciones específicas. Puedes explorar la trayectoria profesional general.',
    fr: 'Cette catégorie n\'a pas encore de spécialisations spécifiques. Vous pouvez explorer le parcours professionnel général.',
    de: 'Diese Kategorie hat noch keine spezifischen Spezialisierungen. Sie können den allgemeinen Karriereweg erkunden.',
    pt: 'Esta categoria ainda não tem especializações específicas. Você pode explorar o caminho de carreira geral.',
    it: 'Questa categoria non ha ancora specializzazioni specifiche. Puoi esplorare il percorso di carriera generale.',
    nl: 'Deze categorie heeft nog geen specifieke specialisaties. Je kunt het algemene carrièrepad verkennen.',
    ja: 'このカテゴリにはまだ特定の専門分野がありません。一般的なキャリアパスを探索できます。',
    ko: '이 카테고리에는 아직 특정 전문화가 없습니다. 일반적인 경력 경로를 탐색할 수 있습니다.',
    zh: '此类别还没有具体的专业化。您可以探索一般职业道路。'
  },
  'career.viewGeneralPath': {
    en: 'View General Path',
    es: 'Ver Trayectoria General',
    fr: 'Voir le Parcours Général',
    de: 'Allgemeinen Pfad Anzeigen',
    pt: 'Ver Caminho Geral',
    it: 'Visualizza Percorso Generale',
    nl: 'Algemeen Pad Bekijken',
    ja: '一般的なパスを表示',
    ko: '일반 경로 보기',
    zh: '查看一般路径'
  }
};

// Language detection utility
export function detectLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'; // Default for server-side rendering
  }

  // Check localStorage first
  const savedLanguage = localStorage.getItem('job-market-language') as Language;
  if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es' || savedLanguage === 'fr' || savedLanguage === 'de' || savedLanguage === 'pt' || savedLanguage === 'it' || savedLanguage === 'nl' || savedLanguage === 'ja' || savedLanguage === 'ko' || savedLanguage === 'zh')) {
    return savedLanguage;
  }

  // Detect from browser language
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('es')) {
    return 'es';
  }
  if (browserLanguage.startsWith('fr')) {
    return 'fr';
  }
  if (browserLanguage.startsWith('de')) {
    return 'de';
  }
  if (browserLanguage.startsWith('pt')) {
    return 'pt';
  }
  if (browserLanguage.startsWith('it')) {
    return 'it';
  }
  if (browserLanguage.startsWith('nl')) {
    return 'nl';
  }
  if (browserLanguage.startsWith('ja')) {
    return 'ja';
  }
  if (browserLanguage.startsWith('ko')) {
    return 'ko';
  }
  if (browserLanguage.startsWith('zh')) {
    return 'zh';
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
