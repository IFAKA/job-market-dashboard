import { CategoryDetails } from '@/types/job';

// Helper function to generate slugs consistently
export const getCareerSlug = (careerName: string) => {
  return careerName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

export const realCategoryDetails: Record<string, CategoryDetails> = {
  'Software Engineer': {
    name: 'Software Engineer',
    description: 'Design, develop, and maintain software applications and systems. Perfect for logical thinkers who enjoy building solutions through code.',
    whatYouDo: 'Write code, debug issues, collaborate with teams, design software architecture, and deploy applications. You\'ll spend most of your time solving problems through code.',
    requiredSkills: [
      'Programming languages (JavaScript, Python, Java, C#, etc.)',
      'Problem-solving and logical thinking',
      'Version control (Git)',
      'Database knowledge (SQL/NoSQL)',
      'Understanding of algorithms and data structures',
      'Software development methodologies (Agile, Scrum)'
    ],
    learningPath: [
      'Learn a programming language (JavaScript or Python recommended)',
      'Master basic algorithms and data structures',
      'Learn version control with Git',
      'Build small projects to practice',
      'Learn a framework (React, Node.js, Django, etc.)',
      'Study system design and architecture',
      'Contribute to open source projects'
    ],
    careerProspects: 'Excellent - High demand across all industries with strong salary growth potential.',
    averageTimeToLearn: '6-12 months for entry level, 2-3 years for intermediate',
    difficulty: 'Intermediate',
    salaryRange: '€22,000 - €30,000 (Spain) / AR$400,000 - AR$600,000 (Argentina)',
    remoteWorkPercentage: 60,
    growthPotential: 'High',
    entryLevelPositions: [
      'Junior Software Engineer',
      'Frontend Engineer',
      'Backend Engineer',
      'Full Stack Engineer',
      'Software Developer'
    ],
    advancedPositions: [
      'Senior Software Engineer',
      'Software Architect',
      'Tech Lead',
      'Engineering Manager',
      'CTO'
    ],
    popularTechnologies: [
      'JavaScript/TypeScript',
      'React',
      'Node.js',
      'Python',
      'Java',
      'C#',
      'Docker',
      'AWS/Azure'
    ],
    resources: {
      courses: [
        'freeCodeCamp - Full Stack Development',
        'The Odin Project',
        'CS50 by Harvard',
        'Udemy - Complete Web Development Bootcamp'
      ],
      platforms: [
        'GitHub',
        'Stack Overflow',
        'LeetCode',
        'HackerRank',
        'CodePen'
      ],
      communities: [
        'Reddit r/learnprogramming',
        'Discord programming servers',
        'Local meetups',
        'Stack Overflow'
      ]
    }
  },

  'AI/ML Engineer': {
    name: 'AI/ML Engineer',
    description: 'Build and deploy machine learning models and artificial intelligence systems. Ideal for those who love working with data and cutting-edge technology.',
    whatYouDo: 'Develop machine learning models, implement AI algorithms, optimize model performance, deploy AI systems, and collaborate with data scientists.',
    requiredSkills: [
      'Python programming',
      'Machine learning frameworks (TensorFlow, PyTorch)',
      'Deep learning algorithms',
      'Data preprocessing and feature engineering',
      'Model deployment and MLOps',
      'Mathematics and statistics'
    ],
    learningPath: [
      'Learn Python fundamentals',
      'Study mathematics and statistics',
      'Learn machine learning basics',
      'Master deep learning frameworks',
      'Practice with real datasets',
      'Learn model deployment',
      'Build AI applications'
    ],
    careerProspects: 'Excellent - Rapidly growing field with high demand and competitive salaries.',
    averageTimeToLearn: '12-18 months for entry level, 2-4 years for advanced',
    difficulty: 'Advanced',
    salaryRange: '€24,000 - €34,000 (Spain) / AR$480,000 - AR$700,000 (Argentina)',
    remoteWorkPercentage: 70,
    growthPotential: 'High',
    entryLevelPositions: [
      'Junior ML Engineer',
      'AI Engineer',
      'Machine Learning Developer',
      'Data Engineer'
    ],
    advancedPositions: [
      'Senior ML Engineer',
      'AI Architect',
      'MLOps Engineer',
      'AI Research Engineer'
    ],
    popularTechnologies: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Docker',
      'Kubernetes',
      'AWS SageMaker',
      'Google Cloud AI'
    ],
    resources: {
      courses: [
        'Coursera - Machine Learning by Andrew Ng',
        'Fast.ai - Practical Deep Learning',
        'Stanford CS229 - Machine Learning',
        'MIT 6.S191 - Introduction to Deep Learning'
      ],
      platforms: [
        'Kaggle',
        'Google Colab',
        'Papers With Code',
        'Hugging Face'
      ],
      communities: [
        'Reddit r/MachineLearning',
        'Kaggle Forums',
        'AI/ML Discord servers',
        'Local AI meetups'
      ]
    }
  },

  'Data Science': {
    name: 'Data Science',
    description: 'Extract insights from data to help organizations make data-driven decisions. Perfect for analytical minds who love finding patterns.',
    whatYouDo: 'Collect and clean data, perform statistical analysis, build predictive models, create visualizations, and communicate findings to stakeholders.',
    requiredSkills: [
      'Python or R programming',
      'Statistics and mathematics',
      'Machine learning algorithms',
      'Data visualization',
      'SQL and database knowledge',
      'Business acumen and communication'
    ],
    learningPath: [
      'Learn Python fundamentals',
      'Master data manipulation (Pandas, NumPy)',
      'Study statistics and probability',
      'Learn machine learning basics',
      'Practice with real datasets',
      'Learn visualization tools',
      'Build a portfolio of projects'
    ],
    careerProspects: 'Excellent - High demand across industries as companies become more data-driven.',
    averageTimeToLearn: '8-18 months for entry level, 2-4 years for advanced',
    difficulty: 'Advanced',
    salaryRange: '€25,000 - €33,000 (Spain) / AR$500,000 - AR$650,000 (Argentina)',
    remoteWorkPercentage: 70,
    growthPotential: 'High',
    entryLevelPositions: [
      'Data Analyst',
      'Junior Data Scientist',
      'Business Intelligence Analyst',
      'Data Engineer'
    ],
    advancedPositions: [
      'Senior Data Scientist',
      'Lead Data Scientist',
      'Data Science Manager',
      'Chief Data Officer'
    ],
    popularTechnologies: [
      'Python',
      'R',
      'SQL',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Tableau',
      'Power BI'
    ],
    resources: {
      courses: [
        'Coursera - Data Science Specialization',
        'DataCamp - Data Science Track',
        'edX - Data Science MicroMasters',
        'Kaggle Learn'
      ],
      platforms: [
        'Kaggle',
        'GitHub',
        'Google Colab',
        'Jupyter Notebooks'
      ],
      communities: [
        'Kaggle Forums',
        'Reddit r/datascience',
        'Data Science Central',
        'Towards Data Science'
      ]
    }
  },

  'DevOps': {
    name: 'DevOps',
    description: 'Bridge development and operations to improve software delivery and infrastructure management. Perfect for automation enthusiasts.',
    whatYouDo: 'Automate deployment processes, manage cloud infrastructure, monitor system performance, ensure security, and optimize CI/CD pipelines.',
    requiredSkills: [
      'Linux system administration',
      'Scripting languages (Bash, Python)',
      'Cloud platforms (AWS, Azure, GCP)',
      'Containerization (Docker, Kubernetes)',
      'Infrastructure as Code',
      'Monitoring and logging tools'
    ],
    learningPath: [
      'Learn Linux fundamentals',
      'Master a scripting language',
      'Learn version control with Git',
      'Study cloud computing basics',
      'Learn Docker and containerization',
      'Master CI/CD tools',
      'Study Kubernetes and orchestration'
    ],
    careerProspects: 'Very Good - High demand as companies modernize their infrastructure.',
    averageTimeToLearn: '6-12 months for entry level, 2-3 years for advanced',
    difficulty: 'Intermediate',
    salaryRange: '€24,000 - €32,000 (Spain) / AR$550,000 - AR$800,000 (Argentina)',
    remoteWorkPercentage: 65,
    growthPotential: 'High',
    entryLevelPositions: [
      'DevOps Engineer',
      'Site Reliability Engineer',
      'Cloud Engineer',
      'Infrastructure Engineer'
    ],
    advancedPositions: [
      'Senior DevOps Engineer',
      'DevOps Architect',
      'Platform Engineer',
      'Infrastructure Manager'
    ],
    popularTechnologies: [
      'Docker',
      'Kubernetes',
      'AWS/Azure/GCP',
      'Jenkins',
      'Terraform',
      'Ansible',
      'Prometheus',
      'ELK Stack'
    ],
    resources: {
      courses: [
        'Linux Academy',
        'A Cloud Guru',
        'KodeKloud',
        'Coursera - DevOps Specialization'
      ],
      platforms: [
        'AWS Free Tier',
        'Google Cloud Platform',
        'Azure Portal',
        'Docker Hub'
      ],
      communities: [
        'Reddit r/devops',
        'DevOps Weekly',
        'Stack Overflow',
        'Hashicorp Community'
      ]
    }
  },

  'Design': {
    name: 'Design',
    description: 'Create user interfaces and experiences that are intuitive, accessible, and enjoyable to use. Perfect for creative minds.',
    whatYouDo: 'Research user needs, create wireframes and prototypes, design visual interfaces, conduct user testing, and iterate based on feedback.',
    requiredSkills: [
      'Design principles and theory',
      'Design tools (Figma, Sketch, Adobe XD)',
      'User research methods',
      'Prototyping and wireframing',
      'Visual design skills',
      'User testing and feedback'
    ],
    learningPath: [
      'Learn design fundamentals',
      'Master a design tool (Figma recommended)',
      'Study user research methods',
      'Practice wireframing and prototyping',
      'Learn visual design principles',
      'Conduct user testing',
      'Build a design portfolio'
    ],
    careerProspects: 'Very Good - Growing demand as companies focus on user experience.',
    averageTimeToLearn: '6-12 months for entry level, 2-3 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '€18,000 - €25,000 (Spain) / AR$320,000 - AR$420,000 (Argentina)',
    remoteWorkPercentage: 45,
    growthPotential: 'High',
    entryLevelPositions: [
      'UI Designer',
      'UX Designer',
      'Product Designer',
      'Visual Designer'
    ],
    advancedPositions: [
      'Senior UX Designer',
      'UX Research Lead',
      'Design Director',
      'Head of Design'
    ],
    popularTechnologies: [
      'Figma',
      'Sketch',
      'Adobe XD',
      'InVision',
      'Principle',
      'Framer',
      'Protopie',
      'Miro'
    ],
    resources: {
      courses: [
        'Google UX Design Certificate',
        'Interaction Design Foundation',
        'Coursera - UX Design',
        'DesignLab'
      ],
      platforms: [
        'Dribbble',
        'Behance',
        'Figma Community',
        'Mobbin'
      ],
      communities: [
        'Reddit r/UXDesign',
        'UX Design Community',
        'Designer News',
        'UX Planet'
      ]
    }
  },

  'QA/Testing': {
    name: 'QA/Testing',
    description: 'Ensure software quality by designing and executing test plans to identify bugs and verify functionality. Perfect for detail-oriented people.',
    whatYouDo: 'Create test cases, execute manual and automated tests, report bugs, ensure quality standards, and collaborate with development teams.',
    requiredSkills: [
      'Testing methodologies',
      'Test automation tools',
      'Bug tracking systems',
      'Quality assurance processes',
      'Programming basics',
      'Attention to detail'
    ],
    learningPath: [
      'Learn testing fundamentals',
      'Study different testing types',
      'Learn a test automation tool',
      'Practice manual testing',
      'Learn programming basics',
      'Study CI/CD integration',
      'Build a testing portfolio'
    ],
    careerProspects: 'Good - Essential role in software development with steady demand.',
    averageTimeToLearn: '3-6 months for entry level, 1-2 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '€18,000 - €25,000 (Spain) / AR$320,000 - AR$440,000 (Argentina)',
    remoteWorkPercentage: 40,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'QA Tester',
      'Test Engineer',
      'Quality Assurance Analyst',
      'Manual Tester'
    ],
    advancedPositions: [
      'Senior QA Engineer',
      'Test Automation Engineer',
      'QA Lead',
      'Quality Manager'
    ],
    popularTechnologies: [
      'Selenium',
      'Cypress',
      'Jest',
      'Postman',
      'JIRA',
      'TestRail',
      'Appium',
      'Playwright'
    ],
    resources: {
      courses: [
        'Selenium WebDriver',
        'Cypress Testing',
        'Test Automation University',
        'ISTQB Certification'
      ],
      platforms: [
        'BrowserStack',
        'Sauce Labs',
        'LambdaTest',
        'TestGrid'
      ],
      communities: [
        'Reddit r/QualityAssurance',
        'Ministry of Testing',
        'Test Automation Guild',
        'QA Community'
      ]
    }
  },

  'Marketing': {
    name: 'Marketing',
    description: 'Develop and execute marketing strategies to promote products and services. Perfect for creative and analytical minds.',
    whatYouDo: 'Create marketing campaigns, analyze market trends, manage social media, conduct market research, and measure campaign performance.',
    requiredSkills: [
      'Digital marketing tools',
      'Social media platforms',
      'Content creation',
      'Data analysis',
      'Communication skills',
      'Creative thinking'
    ],
    learningPath: [
      'Learn marketing fundamentals',
      'Master digital marketing tools',
      'Study social media marketing',
      'Learn content creation',
      'Practice data analysis',
      'Build marketing campaigns',
      'Gain hands-on experience'
    ],
    careerProspects: 'Good - Steady demand across all industries.',
    averageTimeToLearn: '3-6 months for entry level, 1-2 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '€18,000 - €26,000 (Spain) / AR$350,000 - AR$500,000 (Argentina)',
    remoteWorkPercentage: 30,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'Marketing Assistant',
      'Social Media Manager',
      'Content Creator',
      'Digital Marketing Specialist'
    ],
    advancedPositions: [
      'Senior Marketing Manager',
      'Marketing Director',
      'Brand Manager',
      'Chief Marketing Officer'
    ],
    popularTechnologies: [
      'Google Analytics',
      'Facebook Ads',
      'Google Ads',
      'Mailchimp',
      'HubSpot',
      'Canva',
      'Hootsuite',
      'Buffer'
    ],
    resources: {
      courses: [
        'Google Digital Garage',
        'HubSpot Academy',
        'Coursera - Digital Marketing',
        'Facebook Blueprint'
      ],
      platforms: [
        'LinkedIn Learning',
        'Skillshare',
        'Udemy',
        'Coursera'
      ],
      communities: [
        'Reddit r/marketing',
        'Marketing Twitter',
        'LinkedIn Groups',
        'Local marketing meetups'
      ]
    }
  },

  'Sales': {
    name: 'Sales',
    description: 'Build relationships with customers and drive revenue through effective sales strategies. Perfect for people-oriented individuals.',
    whatYouDo: 'Prospect new customers, conduct sales presentations, negotiate deals, maintain customer relationships, and achieve sales targets.',
    requiredSkills: [
      'Communication and persuasion',
      'Relationship building',
      'Product knowledge',
      'Sales techniques',
      'CRM software',
      'Negotiation skills'
    ],
    learningPath: [
      'Learn sales fundamentals',
      'Master communication skills',
      'Study sales techniques',
      'Learn CRM software',
      'Practice negotiation',
      'Build customer relationships',
      'Gain field experience'
    ],
    careerProspects: 'Good - Essential role in business with commission potential.',
    averageTimeToLearn: '3-6 months for entry level, 1-2 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '€18,000 - €27,000 (Spain) / AR$320,000 - AR$450,000 (Argentina)',
    remoteWorkPercentage: 20,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'Sales Representative',
      'Account Executive',
      'Business Development Representative',
      'Sales Associate'
    ],
    advancedPositions: [
      'Senior Sales Manager',
      'Sales Director',
      'VP of Sales',
      'Chief Revenue Officer'
    ],
    popularTechnologies: [
      'Salesforce',
      'HubSpot CRM',
      'Pipedrive',
      'Zoho CRM',
      'LinkedIn Sales Navigator',
      'Zoom',
      'Calendly',
      'Outreach'
    ],
    resources: {
      courses: [
        'Salesforce Trailhead',
        'HubSpot Sales Training',
        'Coursera - Sales Management',
        'LinkedIn Learning'
      ],
      platforms: [
        'Salesforce',
        'HubSpot',
        'Pipedrive',
        'Zoho'
      ],
      communities: [
        'Reddit r/sales',
        'Sales Twitter',
        'LinkedIn Sales Groups',
        'Local sales meetups'
      ]
    }
  },

  'Administrative': {
    name: 'Administrative',
    description: 'Support business operations through administrative tasks and office management. Perfect for organized and detail-oriented individuals.',
    whatYouDo: 'Manage schedules, coordinate meetings, handle correspondence, maintain records, and support team operations.',
    requiredSkills: [
      'Organization and time management',
      'Communication skills',
      'Office software proficiency',
      'Attention to detail',
      'Problem-solving',
      'Customer service'
    ],
    learningPath: [
      'Learn office software',
      'Develop organizational skills',
      'Practice communication',
      'Study business processes',
      'Learn project management',
      'Gain administrative experience',
      'Build professional skills'
    ],
    careerProspects: 'Stable - Always needed in business operations.',
    averageTimeToLearn: '3-6 months for entry level, 1-2 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '€17,000 - €23,000 (Spain) / AR$310,000 - AR$400,000 (Argentina)',
    remoteWorkPercentage: 10,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'Administrative Assistant',
      'Office Coordinator',
      'Receptionist',
      'Data Entry Specialist'
    ],
    advancedPositions: [
      'Senior Administrative Assistant',
      'Office Manager',
      'Executive Assistant',
      'Operations Manager'
    ],
    popularTechnologies: [
      'Microsoft Office',
      'Google Workspace',
      'Slack',
      'Zoom',
      'Asana',
      'Trello',
      'QuickBooks',
      'Calendly'
    ],
    resources: {
      courses: [
        'Microsoft Office Training',
        'Google Workspace Training',
        'LinkedIn Learning',
        'Udemy - Office Skills'
      ],
      platforms: [
        'Microsoft Learn',
        'Google Workspace',
        'LinkedIn Learning',
        'Skillshare'
      ],
      communities: [
        'Reddit r/OfficeWorkers',
        'Administrative Professionals',
        'LinkedIn Groups',
        'Local business groups'
      ]
    }
  },

  'Customer Support': {
    name: 'Customer Support',
    description: 'Help customers resolve issues and provide excellent service experiences. Perfect for patient and empathetic individuals.',
    whatYouDo: 'Respond to customer inquiries, troubleshoot problems, provide product guidance, maintain customer satisfaction, and escalate complex issues.',
    requiredSkills: [
      'Communication skills',
      'Problem-solving',
      'Patience and empathy',
      'Product knowledge',
      'Customer service software',
      'Conflict resolution'
    ],
    learningPath: [
      'Learn customer service principles',
      'Develop communication skills',
      'Study product knowledge',
      'Practice problem-solving',
      'Learn support software',
      'Build empathy skills',
      'Gain customer experience'
    ],
    careerProspects: 'Stable - Essential role in customer-focused businesses.',
    averageTimeToLearn: '1-3 months for entry level, 6-12 months for advanced',
    difficulty: 'Beginner',
    salaryRange: '€16,000 - €22,000 (Spain) / AR$300,000 - AR$420,000 (Argentina)',
    remoteWorkPercentage: 55,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'Customer Support Representative',
      'Help Desk Specialist',
      'Customer Service Agent',
      'Support Specialist'
    ],
    advancedPositions: [
      'Senior Customer Support',
      'Support Team Lead',
      'Customer Success Manager',
      'Support Manager'
    ],
    popularTechnologies: [
      'Zendesk',
      'Intercom',
      'Freshdesk',
      'Help Scout',
      'Slack',
      'Zoom',
      'LiveChat',
      'Crisp'
    ],
    resources: {
      courses: [
        'Zendesk Training',
        'Customer Service Certification',
        'LinkedIn Learning',
        'Udemy - Customer Service'
      ],
      platforms: [
        'Zendesk',
        'Intercom',
        'Freshdesk',
        'Help Scout'
      ],
      communities: [
        'Reddit r/CustomerService',
        'Customer Support Twitter',
        'LinkedIn Groups',
        'Support communities'
      ]
    }
  },

  'Consulting & Business': {
    name: 'Consulting & Business',
    description: 'Provide strategic advice and solutions to help businesses improve their operations and achieve goals.',
    whatYouDo: 'Analyze business problems, develop strategic recommendations, implement solutions, and guide organizational change.',
    requiredSkills: [
      'Business analysis',
      'Strategic thinking',
      'Communication skills',
      'Problem-solving',
      'Project management',
      'Industry knowledge'
    ],
    learningPath: [
      'Learn business fundamentals',
      'Study consulting methodologies',
      'Develop analytical skills',
      'Practice problem-solving',
      'Learn project management',
      'Build industry expertise',
      'Gain consulting experience'
    ],
    careerProspects: 'Good - High demand for business expertise.',
    averageTimeToLearn: '6-12 months for entry level, 2-4 years for advanced',
    difficulty: 'Intermediate',
    salaryRange: '€24,000 - €32,000 (Spain) / AR$480,000 - AR$700,000 (Argentina)',
    remoteWorkPercentage: 30,
    growthPotential: 'High',
    entryLevelPositions: [
      'Business Analyst',
      'Consultant',
      'Strategy Associate',
      'Management Trainee'
    ],
    advancedPositions: [
      'Senior Consultant',
      'Strategy Manager',
      'Partner',
      'Managing Director'
    ],
    popularTechnologies: [
      'Microsoft Office',
      'Tableau',
      'Power BI',
      'Slack',
      'Zoom',
      'Asana',
      'Miro',
      'Lucidchart'
    ],
    resources: {
      courses: [
        'Coursera - Business Strategy',
        'McKinsey Academy',
        'BCG Training',
        'Harvard Business School Online'
      ],
      platforms: [
        'Coursera',
        'edX',
        'LinkedIn Learning',
        'Harvard Business Review'
      ],
      communities: [
        'Reddit r/consulting',
        'Consulting Twitter',
        'LinkedIn Groups',
        'Professional associations'
      ]
    }
  },

  'Finance/Accounting': {
    name: 'Finance/Accounting',
    description: 'Manage financial records, analyze financial data, and provide financial guidance to organizations.',
    whatYouDo: 'Prepare financial statements, analyze budgets, manage accounts, ensure compliance, and provide financial insights.',
    requiredSkills: [
      'Financial analysis',
      'Accounting principles',
      'Excel proficiency',
      'Attention to detail',
      'Regulatory knowledge',
      'Problem-solving'
    ],
    learningPath: [
      'Learn accounting fundamentals',
      'Master Excel and financial software',
      'Study financial analysis',
      'Learn regulatory compliance',
      'Practice financial modeling',
      'Build industry knowledge',
      'Gain practical experience'
    ],
    careerProspects: 'Stable - Essential role in all businesses.',
    averageTimeToLearn: '6-12 months for entry level, 2-4 years for advanced',
    difficulty: 'Intermediate',
    salaryRange: '€20,000 - €26,000 (Spain) / AR$350,000 - AR$480,000 (Argentina)',
    remoteWorkPercentage: 10,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'Accountant',
      'Financial Analyst',
      'Bookkeeper',
      'Accounts Payable/Receivable'
    ],
    advancedPositions: [
      'Senior Accountant',
      'Financial Manager',
      'Controller',
      'CFO'
    ],
    popularTechnologies: [
      'QuickBooks',
      'Excel',
      'Sage',
      'Xero',
      'Tableau',
      'Power BI',
      'SAP',
      'Oracle'
    ],
    resources: {
      courses: [
        'QuickBooks Training',
        'Excel for Finance',
        'Coursera - Financial Accounting',
        'CPA Exam Prep'
      ],
      platforms: [
        'QuickBooks',
        'Excel',
        'Coursera',
        'LinkedIn Learning'
      ],
      communities: [
        'Reddit r/Accounting',
        'AICPA',
        'LinkedIn Groups',
        'Professional associations'
      ]
    }
  },

  'Human Resources': {
    name: 'Human Resources',
    description: 'Manage employee relations, recruitment, and organizational development to support business success.',
    whatYouDo: 'Recruit talent, manage employee benefits, handle workplace issues, develop HR policies, and support organizational growth.',
    requiredSkills: [
      'Communication skills',
      'Employee relations',
      'Recruitment strategies',
      'HR software',
      'Employment law',
      'Organizational development'
    ],
    learningPath: [
      'Learn HR fundamentals',
      'Study employment law',
      'Develop recruitment skills',
      'Learn HR software',
      'Practice employee relations',
      'Build organizational skills',
      'Gain HR experience'
    ],
    careerProspects: 'Stable - Essential role in all organizations.',
    averageTimeToLearn: '6-12 months for entry level, 2-3 years for advanced',
    difficulty: 'Intermediate',
    salaryRange: '€19,000 - €25,000 (Spain) / AR$320,000 - AR$420,000 (Argentina)',
    remoteWorkPercentage: 15,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'HR Assistant',
      'Recruiter',
      'HR Coordinator',
      'Benefits Administrator'
    ],
    advancedPositions: [
      'Senior HR Manager',
      'HR Director',
      'Talent Acquisition Manager',
      'Chief People Officer'
    ],
    popularTechnologies: [
      'Workday',
      'BambooHR',
      'Greenhouse',
      'Lever',
      'Slack',
      'Zoom',
      'Asana',
      'Monday.com'
    ],
    resources: {
      courses: [
        'SHRM Certification',
        'LinkedIn Learning - HR',
        'Coursera - Human Resources',
        'Udemy - HR Management'
      ],
      platforms: [
        'SHRM',
        'LinkedIn Learning',
        'Coursera',
        'HR.com'
      ],
      communities: [
        'Reddit r/humanresources',
        'SHRM',
        'LinkedIn Groups',
        'HR conferences'
      ]
    }
  },

  'Content Creation': {
    name: 'Content Creation',
    description: 'Create engaging content for various platforms to inform, entertain, and connect with audiences.',
    whatYouDo: 'Write articles, create videos, design graphics, manage social media content, and develop content strategies.',
    requiredSkills: [
      'Writing and editing',
      'Content strategy',
      'Social media platforms',
      'Creative tools',
      'SEO knowledge',
      'Audience engagement'
    ],
    learningPath: [
      'Develop writing skills',
      'Learn content creation tools',
      'Study content strategy',
      'Practice social media',
      'Learn SEO basics',
      'Build audience engagement',
      'Create content portfolio'
    ],
    careerProspects: 'Good - Growing demand for quality content.',
    averageTimeToLearn: '3-6 months for entry level, 1-2 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '€17,000 - €24,000 (Spain) / AR$270,000 - AR$400,000 (Argentina)',
    remoteWorkPercentage: 60,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'Content Creator',
      'Social Media Manager',
      'Copywriter',
      'Blog Writer'
    ],
    advancedPositions: [
      'Senior Content Creator',
      'Content Manager',
      'Creative Director',
      'Content Strategy Lead'
    ],
    popularTechnologies: [
      'Canva',
      'Adobe Creative Suite',
      'WordPress',
      'Hootsuite',
      'Buffer',
      'Mailchimp',
      'Grammarly',
      'Trello'
    ],
    resources: {
      courses: [
        'Content Marketing Institute',
        'Copyblogger',
        'Coursera - Content Strategy',
        'Udemy - Content Creation'
      ],
      platforms: [
        'Medium',
        'Substack',
        'YouTube',
        'TikTok'
      ],
      communities: [
        'Reddit r/content_marketing',
        'Content Creator Twitter',
        'LinkedIn Groups',
        'Content communities'
      ]
    }
  }
};

// Subcategories for more specific career paths
export const subcategoryDetails: Record<string, Record<string, CategoryDetails>> = {
  'Software Engineer': {
    'Frontend Engineer': {
      name: 'Frontend Engineer',
      description: 'Specialize in building user interfaces and client-side applications that users interact with directly.',
      whatYouDo: 'Build responsive websites, implement user interfaces, optimize performance, ensure accessibility, and collaborate with designers.',
      requiredSkills: [
        'HTML, CSS, JavaScript',
        'Frontend frameworks (React, Vue, Angular)',
        'Responsive design',
        'Web accessibility',
        'Performance optimization',
        'CSS preprocessors'
      ],
      learningPath: [
        'Learn HTML and CSS fundamentals',
        'Master JavaScript (ES6+)',
        'Learn a CSS framework (Bootstrap, Tailwind)',
        'Study a frontend framework (React recommended)',
        'Learn state management',
        'Practice responsive design',
        'Study web performance'
      ],
      careerProspects: 'Excellent - High demand for frontend expertise.',
      averageTimeToLearn: '4-8 months for entry level, 1-2 years for intermediate',
      difficulty: 'Beginner',
      salaryRange: '$50,000 - $130,000+',
      remoteWorkPercentage: 90,
      growthPotential: 'High',
      entryLevelPositions: [
        'Frontend Developer',
        'UI Developer',
        'Web Developer',
        'JavaScript Developer'
      ],
      advancedPositions: [
        'Senior Frontend Developer',
        'Frontend Architect',
        'UI/UX Developer',
        'Frontend Team Lead'
      ],
      popularTechnologies: [
        'React',
        'Vue.js',
        'Angular',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Sass',
        'Webpack'
      ],
      resources: {
        courses: [
          'freeCodeCamp - Frontend Development',
          'The Odin Project',
          'Frontend Masters',
          'Udemy - React Complete Guide'
        ],
        platforms: [
          'CodePen',
          'JSFiddle',
          'GitHub Pages',
          'Netlify'
        ],
        communities: [
          'Reddit r/Frontend',
          'CSS-Tricks',
          'Dev.to',
          'Frontend Mentor'
        ]
      }
    },
    'Backend Engineer': {
      name: 'Backend Engineer',
      description: 'Build server-side logic, databases, and APIs that power web applications and handle business logic.',
      whatYouDo: 'Design APIs, manage databases, implement business logic, ensure security, optimize performance, and handle server infrastructure.',
      requiredSkills: [
        'Server-side programming languages',
        'Database design and management',
        'API design and development',
        'Authentication and authorization',
        'Server deployment and scaling',
        'Security best practices'
      ],
      learningPath: [
        'Learn a backend language (Python, Node.js, Java)',
        'Master database concepts (SQL/NoSQL)',
        'Learn API design principles',
        'Study authentication and security',
        'Learn server deployment',
        'Practice building full-stack applications',
        'Study system design'
      ],
      careerProspects: 'Excellent - Backend is crucial for all applications.',
      averageTimeToLearn: '6-12 months for entry level, 2-3 years for advanced',
      difficulty: 'Intermediate',
      salaryRange: '$65,000 - $150,000+',
      remoteWorkPercentage: 85,
      growthPotential: 'High',
      entryLevelPositions: [
        'Backend Developer',
        'API Developer',
        'Server Developer',
        'Database Developer'
      ],
      advancedPositions: [
        'Senior Backend Developer',
        'Backend Architect',
        'System Architect',
        'Technical Lead'
      ],
      popularTechnologies: [
        'Node.js',
        'Python (Django/Flask)',
        'Java (Spring)',
        'C# (.NET)',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Docker'
      ],
      resources: {
        courses: [
          'Node.js Complete Guide',
          'Django for Beginners',
          'Spring Boot Masterclass',
          'REST API Design'
        ],
        platforms: [
          'Postman',
          'MongoDB Atlas',
          'Heroku',
          'DigitalOcean'
        ],
        communities: [
          'Reddit r/Backend',
          'Stack Overflow',
          'Node.js Community',
          'Django Community'
        ]
      }
    },
    'Full Stack Engineer': {
      name: 'Full Stack Engineer',
      description: 'Develop both frontend and backend components of web applications, handling the complete development stack.',
      whatYouDo: 'Build complete web applications, work on both client and server sides, integrate databases, and deploy applications.',
      requiredSkills: [
        'Frontend and backend technologies',
        'Database management',
        'API development',
        'DevOps basics',
        'System architecture',
        'Full application lifecycle'
      ],
      learningPath: [
        'Learn frontend fundamentals',
        'Master backend development',
        'Study database design',
        'Learn API integration',
        'Practice full-stack development',
        'Study deployment and DevOps',
        'Build complete applications'
      ],
      careerProspects: 'Excellent - Versatile skills in high demand.',
      averageTimeToLearn: '8-18 months for entry level, 2-4 years for advanced',
      difficulty: 'Intermediate',
      salaryRange: '$70,000 - $160,000+',
      remoteWorkPercentage: 90,
      growthPotential: 'High',
      entryLevelPositions: [
        'Full Stack Developer',
        'Web Developer',
        'Software Engineer',
        'Application Developer'
      ],
      advancedPositions: [
        'Senior Full Stack Engineer',
        'Full Stack Architect',
        'Technical Lead',
        'Engineering Manager'
      ],
      popularTechnologies: [
        'React + Node.js',
        'Vue.js + Python',
        'Angular + Java',
        'Next.js',
        'MERN Stack',
        'MEAN Stack',
        'Docker',
        'AWS'
      ],
      resources: {
        courses: [
          'freeCodeCamp - Full Stack Development',
          'The Odin Project',
          'Udemy - Complete Web Development',
          'MERN Stack Course'
        ],
        platforms: [
          'GitHub',
          'Heroku',
          'Vercel',
          'Netlify'
        ],
        communities: [
          'Reddit r/webdev',
          'Stack Overflow',
          'Dev.to',
          'Full Stack communities'
        ]
      }
    }
  },
  'AI/ML Engineer': {
    'Machine Learning Engineer': {
      name: 'Machine Learning Engineer',
      description: 'Focus specifically on building and deploying machine learning models and systems.',
      whatYouDo: 'Develop ML models, optimize algorithms, deploy models to production, monitor performance, and maintain ML pipelines.',
      requiredSkills: [
        'Machine learning algorithms',
        'Python programming',
        'ML frameworks (TensorFlow, PyTorch)',
        'Model deployment',
        'MLOps',
        'Data preprocessing'
      ],
      learningPath: [
        'Learn Python fundamentals',
        'Study machine learning basics',
        'Master ML frameworks',
        'Learn model deployment',
        'Study MLOps',
        'Practice with real projects',
        'Build ML systems'
      ],
      careerProspects: 'Excellent - High demand for ML expertise.',
      averageTimeToLearn: '12-18 months for entry level, 2-4 years for advanced',
      difficulty: 'Advanced',
      salaryRange: '$80,000 - $180,000+',
      remoteWorkPercentage: 80,
      growthPotential: 'High',
      entryLevelPositions: [
        'Junior ML Engineer',
        'ML Developer',
        'AI Engineer',
        'Data Scientist'
      ],
      advancedPositions: [
        'Senior ML Engineer',
        'MLOps Engineer',
        'ML Architect',
        'AI Research Engineer'
      ],
      popularTechnologies: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Docker',
        'Kubernetes',
        'AWS SageMaker',
        'MLflow'
      ],
      resources: {
        courses: [
          'Coursera - Machine Learning',
          'Fast.ai',
          'Stanford CS229',
          'MIT 6.S191'
        ],
        platforms: [
          'Kaggle',
          'Google Colab',
          'Papers With Code',
          'Hugging Face'
        ],
        communities: [
          'Reddit r/MachineLearning',
          'Kaggle Forums',
          'ML Twitter',
          'AI/ML meetups'
        ]
      }
    },
    'Deep Learning Engineer': {
      name: 'Deep Learning Engineer',
      description: 'Specialize in neural networks and deep learning systems for complex AI applications.',
      whatYouDo: 'Design neural networks, implement deep learning models, optimize performance, and deploy AI systems.',
      requiredSkills: [
        'Deep learning frameworks',
        'Neural network architectures',
        'GPU computing',
        'Model optimization',
        'Computer vision or NLP',
        'Advanced mathematics'
      ],
      learningPath: [
        'Learn deep learning fundamentals',
        'Master neural networks',
        'Study computer vision or NLP',
        'Learn GPU computing',
        'Practice with large models',
        'Study model optimization',
        'Build deep learning systems'
      ],
      careerProspects: 'Excellent - Cutting-edge field with high demand.',
      averageTimeToLearn: '18-24 months for entry level, 3-5 years for advanced',
      difficulty: 'Advanced',
      salaryRange: '$90,000 - $200,000+',
      remoteWorkPercentage: 80,
      growthPotential: 'High',
      entryLevelPositions: [
        'Deep Learning Engineer',
        'AI Engineer',
        'ML Engineer',
        'Research Engineer'
      ],
      advancedPositions: [
        'Senior Deep Learning Engineer',
        'AI Research Scientist',
        'Deep Learning Architect',
        'AI Lead'
      ],
      popularTechnologies: [
        'PyTorch',
        'TensorFlow',
        'Keras',
        'CUDA',
        'OpenCV',
        'Transformers',
        'Hugging Face',
        'Weights & Biases'
      ],
      resources: {
        courses: [
          'Fast.ai - Practical Deep Learning',
          'Stanford CS231n',
          'Stanford CS224n',
          'MIT 6.S191'
        ],
        platforms: [
          'Papers With Code',
          'Hugging Face',
          'Weights & Biases',
          'Google Colab Pro'
        ],
        communities: [
          'Reddit r/deeplearning',
          'AI Research Twitter',
          'Deep Learning meetups',
          'Academic conferences'
        ]
      }
    }
  }
};
