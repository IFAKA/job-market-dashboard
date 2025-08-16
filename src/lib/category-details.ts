import { CategoryDetails } from '@/types/job';

export const categoryDetails: Record<string, CategoryDetails> = {
  'Software Development': {
    name: 'Software Development',
    description: 'Create, maintain, and improve software applications and systems that solve real-world problems. Perfect for logical thinkers who enjoy building things.',
    whatYouDo: 'Write code, debug issues, collaborate with teams, design software architecture, and deploy applications. You\'ll spend most of your time solving problems through code.',
    requiredSkills: [
      'Programming languages (Python, JavaScript, Java, C#, etc.)',
      'Problem-solving and logical thinking',
      'Version control (Git)',
      'Database knowledge (SQL/NoSQL)',
      'Understanding of algorithms and data structures',
      'Software development methodologies (Agile, Scrum)'
    ],
    learningPath: [
      'Learn a programming language (Python or JavaScript recommended for beginners)',
      'Master basic algorithms and data structures',
      'Learn version control with Git',
      'Build small projects to practice',
      'Learn a framework (React, Django, Spring, etc.)',
      'Study system design and architecture',
      'Contribute to open source projects'
    ],
    careerProspects: 'Excellent - High demand across all industries with strong salary growth potential. Every company needs software developers.',
    averageTimeToLearn: '6-12 months for entry level, 2-3 years for intermediate',
    difficulty: 'Intermediate',
    salaryRange: '$60,000 - $150,000+',
    remoteWorkPercentage: 85,
    growthPotential: 'High',
    entryLevelPositions: [
      'Junior Developer',
      'Software Engineer I',
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer'
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
      'Python',
      'React',
      'Node.js',
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

  'Data Science': {
    name: 'Data Science',
    description: 'Extract insights from data to help organizations make data-driven decisions and predictions. Ideal for analytical minds who love finding patterns.',
    whatYouDo: 'Collect and clean data, perform statistical analysis, build machine learning models, create visualizations, and communicate findings to stakeholders.',
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
      'Learn deep learning frameworks',
      'Build a portfolio of projects'
    ],
    careerProspects: 'Excellent - Rapidly growing field with high demand and competitive salaries. Data is the new oil.',
    averageTimeToLearn: '8-18 months for entry level, 2-4 years for advanced',
    difficulty: 'Advanced',
    salaryRange: '$80,000 - $180,000+',
    remoteWorkPercentage: 80,
    growthPotential: 'High',
    entryLevelPositions: [
      'Data Analyst',
      'Junior Data Scientist',
      'Business Intelligence Analyst',
      'Data Engineer'
    ],
    advancedPositions: [
      'Senior Data Scientist',
      'Machine Learning Engineer',
      'Data Science Manager',
      'Chief Data Officer'
    ],
    popularTechnologies: [
      'Python',
      'R',
      'SQL',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Tableau',
      'Power BI'
    ],
    resources: {
      courses: [
        'Coursera - Machine Learning by Andrew Ng',
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
    description: 'Bridge the gap between development and operations to improve software delivery and infrastructure management. Perfect for those who love automation and efficiency.',
    whatYouDo: 'Automate deployment processes, manage cloud infrastructure, monitor system performance, ensure security, and optimize CI/CD pipelines. You\'ll be the bridge between developers and IT operations.',
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
    careerProspects: 'Very Good - High demand as companies modernize their infrastructure and move to cloud-native solutions.',
    averageTimeToLearn: '6-12 months for entry level, 2-3 years for advanced',
    difficulty: 'Intermediate',
    salaryRange: '$70,000 - $160,000+',
    remoteWorkPercentage: 90,
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

  'Frontend Development': {
    name: 'Frontend Development',
    description: 'Create the user interface and user experience for web applications that users interact with directly. Great for creative minds who love visual design and user experience.',
    whatYouDo: 'Build responsive websites, implement user interfaces, optimize performance, ensure accessibility, and collaborate with designers. You\'ll focus on what users see and interact with.',
    requiredSkills: [
      'HTML, CSS, JavaScript',
      'Responsive design principles',
      'Frontend frameworks (React, Vue, Angular)',
      'CSS preprocessors (Sass, Less)',
      'Web accessibility standards',
      'Performance optimization'
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
    careerProspects: 'Very Good - Consistent demand as web applications continue to grow and user experience becomes more important.',
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

  'Backend Development': {
    name: 'Backend Development',
    description: 'Build the server-side logic, databases, and APIs that power web applications and handle business logic. Perfect for those who love working with data and system architecture.',
    whatYouDo: 'Design APIs, manage databases, implement business logic, ensure security, optimize performance, and handle server infrastructure. You\'ll work on the "behind the scenes" part of applications.',
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
    careerProspects: 'Excellent - Backend is crucial for all applications with strong demand. Every app needs a backend.',
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

  'Mobile Development': {
    name: 'Mobile Development',
    description: 'Create applications for mobile devices (iOS and Android) that provide native or cross-platform experiences. Great for those who love mobile technology and user experience.',
    whatYouDo: 'Design mobile interfaces, implement app functionality, optimize performance, handle device-specific features, and publish to app stores. You\'ll create apps that millions of people use daily.',
    requiredSkills: [
      'Mobile development frameworks',
      'UI/UX design principles',
      'Platform-specific knowledge',
      'App store guidelines',
      'Performance optimization',
      'Testing and debugging'
    ],
    learningPath: [
      'Choose a platform (iOS/Android) or cross-platform',
      'Learn the development language (Swift/Java/Kotlin/React Native)',
      'Study mobile UI/UX principles',
      'Learn platform-specific APIs',
      'Practice building simple apps',
      'Study app store guidelines',
      'Learn testing and deployment'
    ],
    careerProspects: 'Good - Growing market with opportunities in both native and cross-platform development. Mobile apps are everywhere.',
    averageTimeToLearn: '6-12 months for entry level, 1-2 years for intermediate',
    difficulty: 'Intermediate',
    salaryRange: '$60,000 - $140,000+',
    remoteWorkPercentage: 75,
    growthPotential: 'Medium',
    entryLevelPositions: [
      'Mobile Developer',
      'iOS Developer',
      'Android Developer',
      'React Native Developer'
    ],
    advancedPositions: [
      'Senior Mobile Developer',
      'Mobile Architect',
      'Mobile Team Lead',
      'Mobile Development Manager'
    ],
    popularTechnologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Xamarin',
      'Ionic',
      'Firebase',
      'AWS Mobile'
    ],
    resources: {
      courses: [
        'React Native Complete Guide',
        'Flutter Bootcamp',
        'iOS App Development',
        'Android Development'
      ],
      platforms: [
        'App Store Connect',
        'Google Play Console',
        'Firebase',
        'Expo'
      ],
      communities: [
        'Reddit r/reactnative',
        'Flutter Community',
        'iOS Dev Weekly',
        'Android Weekly'
      ]
    }
  },

  'QA/Testing': {
    name: 'QA/Testing',
    description: 'Ensure software quality by designing and executing test plans to identify bugs and verify functionality. Perfect for detail-oriented people who love finding and fixing problems.',
    whatYouDo: 'Create test cases, execute manual and automated tests, report bugs, ensure quality standards, and collaborate with development teams. You\'ll be the quality gatekeeper for software.',
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
    careerProspects: 'Good - Essential role in software development with steady demand. Quality is always important.',
    averageTimeToLearn: '3-6 months for entry level, 1-2 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '$45,000 - $100,000+',
    remoteWorkPercentage: 70,
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

  'UI/UX Design': {
    name: 'UI/UX Design',
    description: 'Design user interfaces and user experiences that are intuitive, accessible, and enjoyable to use. Ideal for creative minds who love understanding human behavior and creating beautiful, functional designs.',
    whatYouDo: 'Research user needs, create wireframes and prototypes, design visual interfaces, conduct user testing, and iterate based on feedback. You\'ll focus on making products that people love to use.',
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
    careerProspects: 'Very Good - Growing demand as companies focus on user experience and design becomes more important.',
    averageTimeToLearn: '6-12 months for entry level, 2-3 years for advanced',
    difficulty: 'Beginner',
    salaryRange: '$55,000 - $120,000+',
    remoteWorkPercentage: 80,
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

  'Product Management': {
    name: 'Product Management',
    description: 'Lead product strategy, development, and launch by coordinating between stakeholders, users, and development teams. Perfect for those who love strategy, communication, and bringing ideas to life.',
    whatYouDo: 'Define product vision, gather requirements, prioritize features, coordinate with teams, analyze metrics, and ensure product success. You\'ll be the bridge between business goals and technical implementation.',
    requiredSkills: [
      'Strategic thinking',
      'Communication and leadership',
      'Data analysis',
      'User research',
      'Project management',
      'Business acumen'
    ],
    learningPath: [
      'Learn product management fundamentals',
      'Study user research and analytics',
      'Learn project management tools',
      'Practice stakeholder communication',
      'Study business and market analysis',
      'Build product strategy skills',
      'Gain hands-on experience'
    ],
    careerProspects: 'Excellent - High demand for product managers across all industries. Every product needs a product manager.',
    averageTimeToLearn: '6-12 months for entry level, 2-4 years for advanced',
    difficulty: 'Intermediate',
    salaryRange: '$70,000 - $180,000+',
    remoteWorkPercentage: 60,
    growthPotential: 'High',
    entryLevelPositions: [
      'Associate Product Manager',
      'Product Owner',
      'Junior Product Manager',
      'Product Analyst'
    ],
    advancedPositions: [
      'Senior Product Manager',
      'Product Director',
      'VP of Product',
      'Chief Product Officer'
    ],
    popularTechnologies: [
      'JIRA',
      'Confluence',
      'Figma',
      'Mixpanel',
      'Amplitude',
      'Google Analytics',
      'Airtable',
      'Notion'
    ],
    resources: {
      courses: [
        'Coursera - Product Management',
        'Product School',
        'Mind the Product',
        'Pragmatic Institute'
      ],
      platforms: [
        'Product Hunt',
        'Capterra',
        'G2',
        'TrustRadius'
      ],
      communities: [
        'Reddit r/ProductManagement',
        'Mind the Product',
        'Product Tank',
        'ProductCraft'
      ]
    }
  },

  'Cybersecurity': {
    name: 'Cybersecurity',
    description: 'Protect systems, networks, and data from digital attacks, unauthorized access, and security breaches. Ideal for those who love solving puzzles and protecting others from threats.',
    whatYouDo: 'Identify security vulnerabilities, implement security measures, monitor for threats, respond to incidents, and ensure compliance. You\'ll be the digital guardian protecting organizations from cyber threats.',
    requiredSkills: [
      'Network security',
      'Security tools and technologies',
      'Risk assessment',
      'Incident response',
      'Compliance knowledge',
      'Ethical hacking'
    ],
    learningPath: [
      'Learn networking fundamentals',
      'Study security concepts',
      'Learn security tools',
      'Practice ethical hacking',
      'Study compliance frameworks',
      'Get security certifications',
      'Build hands-on experience'
    ],
    careerProspects: 'Excellent - High demand due to increasing cyber threats. Security is always a priority.',
    averageTimeToLearn: '8-18 months for entry level, 2-4 years for advanced',
    difficulty: 'Advanced',
    salaryRange: '$75,000 - $160,000+',
    remoteWorkPercentage: 70,
    growthPotential: 'High',
    entryLevelPositions: [
      'Security Analyst',
      'SOC Analyst',
      'Security Engineer',
      'Penetration Tester'
    ],
    advancedPositions: [
      'Senior Security Engineer',
      'Security Architect',
      'CISO',
      'Security Consultant'
    ],
    popularTechnologies: [
      'Wireshark',
      'Nmap',
      'Metasploit',
      'Burp Suite',
      'Snort',
      'Splunk',
      'CrowdStrike',
      'Qualys'
    ],
    resources: {
      courses: [
        'CompTIA Security+',
        'CISSP',
        'CEH (Certified Ethical Hacker)',
        'SANS Courses'
      ],
      platforms: [
        'TryHackMe',
        'HackTheBox',
        'VulnHub',
        'Cybrary'
      ],
      communities: [
        'Reddit r/cybersecurity',
        'SANS Community',
        'OWASP',
        'Black Hat'
      ]
    }
  }
};
