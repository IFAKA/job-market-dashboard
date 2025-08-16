import pandas as pd
import re
from collections import defaultdict

def create_accurate_categorizer():
    """Create accurate categorization system"""
    
    categories = {
        'Software Engineer': {
            'primary': [
                'software engineer', 'software developer', 'developer', 'programmer', 'coder',
                'full stack', 'fullstack', 'frontend', 'front-end', 'backend', 'back-end',
                'web developer', 'application developer', 'systems developer', 'mobile developer',
                'ios engineer', 'android developer', 'react developer', 'angular developer',
                'vue developer', 'node developer', 'python developer', 'java developer',
                'php developer', 'ruby developer', 'go developer', 'rust developer',
                'c++ developer', 'c# developer', '.net developer', 'django developer',
                'flask developer', 'spring developer', 'express developer', 'laravel developer',
                'rails developer', 'asp.net developer', 'html developer', 'css developer',
                'javascript developer', 'typescript developer', 'jquery developer',
                'desarrollador', 'desarrollador/a', 'linux kernel engineer', 'kernel engineer',
                'ubuntu engineer', 'cryptography engineer', 'security engineer', 'silicon engineer',
                'containerization engineer', 'virtualisation engineer', 'embedded engineer',
                'field engineer', 'support engineer', 'system administration', 'build system',
                'software traine', 'desarolador'
            ],
            'technologies': [
                'react', 'angular', 'vue', 'node.js', 'nodejs', 'python', 'java', 'javascript', 
                'typescript', 'php', 'ruby', 'go', 'golang', 'rust', 'c++', 'c#', '.net', 
                'django', 'flask', 'spring', 'express', 'laravel', 'rails', 'asp.net', 
                'html', 'css', 'sass', 'scss', 'bootstrap', 'tailwind', 'jquery', 'linux',
                'ubuntu', 'kernel', 'docker', 'kubernetes', 'revit', 'structural'
            ],
            'patterns': [
                r'\b(software|web|mobile|full.?stack|front.?end|back.?end)\s+(developer|engineer|programmer)\b',
                r'\b(react|angular|vue|node|python|java|javascript|typescript|php|ruby|go|rust|c\+\+|c#|\.net)\s+(developer|engineer)\b',
                r'\b(developer|engineer|programmer)\b.*\b(react|angular|vue|node|python|java|javascript|typescript|php|ruby|go|rust|c\+\+|c#|\.net)\b',
                r'\b(linux|ubuntu|kernel|cryptography|security|silicon|containerization|virtualisation|embedded|field|support)\s+(engineer)\b',
                r'\b(system\s+administration|build\s+system)\b'
            ]
        },
        'AI/ML Engineer': {
            'primary': [
                'ai engineer', 'artificial intelligence engineer', 'machine learning engineer', 'ml engineer',
                'ai agent', 'ai assistant', 'computer vision engineer', 'vision engineer',
                'applied ai engineer', 'ai data labeler', 'data labeler', 'ai training',
                'founding data engineer', 'machine learning', 'deep learning', 'neural networks',
                'ai/ml', 'ai agent assistant', 'ai video creator', 'ai content creator'
            ],
            'technologies': [
                'tensorflow', 'pytorch', 'scikit-learn', 'scikit learn', 'keras', 'opencv',
                'computer vision', 'neural networks', 'deep learning', 'machine learning',
                'ai', 'artificial intelligence', 'ml', 'data labeling', 'annotation'
            ],
            'patterns': [
                r'\b(ai|artificial\s+intelligence|machine\s+learning|ml|computer\s+vision|vision)\s+(engineer|assistant|agent|creator)\b',
                r'\b(applied\s+ai|ai\s+agent|ai\s+assistant|ai\s+data\s+labeler|data\s+labeler)\b',
                r'\b(computer\s+vision|vision\s+engineer|ai\s+training|ai\s+video\s+creator)\b'
            ]
        },
        'Sales': {
            'primary': [
                'sales representative', 'sales specialist', 'account executive', 'business development',
                'sales development representative', 'sdr', 'business development representative',
                'bdr', 'sales manager', 'account manager', 'sales coordinator', 'lead generation',
                'sales consultant', 'sales analyst', 'appointment setter', 'apointment seter', 'vendedor', 'prospeción',
                'prospección', 'ventas', 'comercial', 'salesperson', 'cold caller', 'caller', 'cold caler'
            ],
            'patterns': [
                r'\b(sales|business.?development|account|executive|representative|bdr|sdr|lead.?generation|vendedor|prospeción|prospección|ventas|comercial|salesperson|cold.?caller|caller|cold.?caler)\b',
                r'\b(apointment\s+seter|appointment\s+setter)\b'
            ]
        }
    }
    
    def categorize_job(title, description=None):
        """Categorize a job with very precise matching and exclusions"""
        if not title:
            return ('Other', 0.0, [])
        
        # Clean the title
        title_lower = title.lower()
        title_lower = re.sub(r'[^\w\s]', ' ', title_lower)
        title_lower = re.sub(r'\s+', ' ', title_lower).strip()
        
        # Score each category
        category_scores = defaultdict(float)
        category_matches = defaultdict(list)
        
        for category, data in categories.items():
            score = 0.0
            matches = []
            
            # Check primary keywords (highest weight)
            for keyword in data.get('primary', []):
                if keyword in title_lower:
                    score += 20.0
                    matches.append(keyword)
            
            # Check technology keywords (medium weight)
            for keyword in data.get('technologies', []):
                if keyword in title_lower:
                    score += 10.0
                    matches.append(keyword)
            
            # Check patterns (highest weight for exact matches)
            for pattern in data.get('patterns', []):
                if re.search(pattern, title_lower, re.IGNORECASE):
                    score += 30.0
                    matches.append(f"pattern_{pattern}")
            
            if score > 0:
                category_scores[category] = score
                category_matches[category] = matches
        
        # Return the best category
        if not category_scores:
            return ('Other', 0.0, [])
        
        best_category = max(category_scores.items(), key=lambda x: x[1])
        max_possible_score = 100.0
        confidence_percentage = min(best_category[1] / max_possible_score * 100, 100)
        
        return (best_category[0], confidence_percentage, category_matches[best_category[0]])
    
    return categorize_job

# Test the categorization
categorizer = create_accurate_categorizer()

test_titles = [
    "Junior Front-End Software Enginer",
    "[Fuly Remote] Design Enginer (React, TypeScript)",
    "Frelance AI Agent Asistant",
    "Apointment Seter for US-based company",
    "Software Traine",
    "Virtual Asistant"
]

print("Testing categorization:")
for title in test_titles:
    category, confidence, matches = categorizer(title)
    print(f"'{title}' -> {category} (confidence: {confidence:.0f}%)")
