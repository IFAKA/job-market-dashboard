import pandas as pd
import re
from collections import defaultdict

def fix_duplicated_titles():
    """Fix duplicated titles in the raw job data"""
    
    print("🔧 Fixing duplicated titles in raw data...")
    
    # Read the raw data
    with open('remote-trainee-jobs.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split into job blocks (separated by double newlines)
    job_blocks = content.split('\n\n')
    
    fixed_jobs = []
    
    for block in job_blocks:
        lines = block.strip().split('\n')
        if len(lines) < 3:  # Need at least company, position, and location
            continue
            
        # Extract company (first line, remove "logo" suffix)
        company_line = lines[0] if len(lines) > 0 else ""
        company = company_line.replace(" logo", "").strip()
        
        # Extract position (second line, fix duplication)
        position = lines[1] if len(lines) > 1 else ""
        
        # Fix duplicated position with improved algorithm
        if position:
            # More robust duplication detection
            # Pattern 1: "TitleTitle" -> "Title"
            if len(position) > 10:
                # Try to find exact duplication
                for i in range(1, len(position) // 2 + 1):
                    if position[:i] == position[i:2*i]:
                        # Check if this is a complete word boundary
                        if i == len(position) // 2 or position[i-1] == ' ' or position[i] == ' ':
                            position = position[:i]
                            break
                
                # Additional regex patterns for common duplications
                patterns = [
                    (r'(.+?)\1', r'\1'),  # Any repeated text
                    (r'(.+?)\s+\1', r'\1'),  # Repeated text with space
                    (r'^(.+?)(?=\1)', r'\1'),  # Start of string duplication
                ]
                
                for pattern, replacement in patterns:
                    new_position = re.sub(pattern, replacement, position)
                    if new_position != position:
                        position = new_position
                        break
        
        # Reconstruct the job block with fixed position
        if len(lines) > 1:
            lines[0] = company_line  # Keep original company line
            lines[1] = position
            fixed_block = '\n'.join(lines)
            fixed_jobs.append(fixed_block)
    
    # Write fixed data back
    with open('fixed_remote-trainee-jobs.txt', 'w', encoding='utf-8') as f:
        f.write('\n\n'.join(fixed_jobs))
    
    print(f"✅ Fixed {len(fixed_jobs)} job titles")
    return fixed_jobs

def parse_fixed_jobs():
    """Parse the fixed job data into structured format"""
    
    print("📊 Parsing fixed job data...")
    
    with open('fixed_remote-trainee-jobs.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    job_blocks = content.split('\n\n')
    
    jobs = []
    
    for block in job_blocks:
        lines = block.strip().split('\n')
        if len(lines) < 3:
            continue
        
        # Extract job information based on the format:
        # Line 0: Company + "logo"
        # Line 1: Position (fixed duplication)
        # Line 2: Company name (repeated)
        # Line 3+: Location, salary, time, tags
        
        company_line = lines[0] if len(lines) > 0 else ""
        company = company_line.replace(" logo", "").strip()
        position = lines[1] if len(lines) > 1 else ""
        company_repeated = lines[2] if len(lines) > 2 else ""
        
        # Extract location, salary, time, tags from remaining lines
        location = ""
        salary = ""
        time_posted = ""
        tags = []
        
        for line in lines[3:]:
            line = line.strip()
            if not line:
                continue
                
            # Location patterns
            if any(loc in line.lower() for loc in ['argentina', 'remote', 'latin america', 'buenos aires', 'córdoba', 'mendoza']):
                location = line
            # Salary patterns
            elif any(s in line for s in ['$', '/yr', '/month', 'k/yr']):
                salary = line
            # Time patterns
            elif any(t in line.lower() for t in ['ago', 'hours', 'days', 'weeks', 'months', 'years']):
                time_posted = line
            # Tags patterns
            elif any(t in line.lower() for t in ['easy apply', 'actively reviewing', 'viewed', 'be an early applicant', 'you\'d be a top applicant']):
                tags.append(line)
        
        if position and company:
            jobs.append({
                'company': company,
                'title': position,
                'location': location,
                'salary': salary,
                'time_posted': time_posted,
                'tags': '; '.join(tags)
            })
    
    return jobs

def extract_salary_range(salary_text):
    """Extract salary range from text"""
    if not salary_text:
        return None, None
    
    # Extract numbers
    numbers = re.findall(r'\$?([\d,]+(?:\.\d+)?)', salary_text)
    if not numbers:
        return None, None
    
    # Convert to integers
    salaries = []
    for num in numbers:
        try:
            # Remove commas and convert to float
            clean_num = float(num.replace(',', ''))
            salaries.append(clean_num)
        except:
            continue
    
    if not salaries:
        return None, None
    
    # Determine if it's annual or monthly
    is_annual = any(unit in salary_text.lower() for unit in ['/yr', 'year', 'annual'])
    is_monthly = any(unit in salary_text.lower() for unit in ['/month', 'monthly'])
    
    # Convert to annual USD
    if is_monthly:
        salaries = [s * 12 for s in salaries]
    elif not is_annual:
        # Assume annual if no unit specified
        pass
    
    return min(salaries), max(salaries) if len(salaries) > 1 else salaries[0]

def extract_days_ago(time_text):
    """Extract days ago from time text"""
    if not time_text:
        return None
    
    # Extract numbers and units
    match = re.search(r'(\d+(?:\.\d+)?)\s*(hour|day|week|month|year)', time_text.lower())
    if not match:
        return None
    
    number = float(match.group(1))
    unit = match.group(2)
    
    # Convert to days
    if unit == 'hour':
        return number / 24
    elif unit == 'day':
        return number
    elif unit == 'week':
        return number * 7
    elif unit == 'month':
        return number * 30
    elif unit == 'year':
        return number * 365
    
    return None

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
                'desarrollador', 'desarrollador/a'
            ],
            'technologies': [
                'react', 'angular', 'vue', 'node.js', 'nodejs', 'python', 'java', 'javascript', 
                'typescript', 'php', 'ruby', 'go', 'golang', 'rust', 'c++', 'c#', '.net', 
                'django', 'flask', 'spring', 'express', 'laravel', 'rails', 'asp.net', 
                'html', 'css', 'sass', 'scss', 'bootstrap', 'tailwind', 'jquery'
            ],
            'exclusions': [
                'kinesiólogo', 'kinesiologo', 'attorney', 'lawyer', 'accountant', 'recruiter',
                'assistant', 'coordinator', 'manager', 'specialist', 'analyst', 'trader',
                'setter', 'generation', 'marketing', 'sales', 'hr', 'human resources',
                'translator', 'paralegal', 'litigation', 'immigration', 'law', 'legal'
            ],
            'patterns': [
                r'\b(software|web|mobile|full.?stack|front.?end|back.?end)\s+(developer|engineer|programmer)\b',
                r'\b(react|angular|vue|node|python|java|javascript|typescript|php|ruby|go|rust|c\+\+|c#|\.net)\s+(developer|engineer)\b',
                r'\b(developer|engineer|programmer)\b.*\b(react|angular|vue|node|python|java|javascript|typescript|php|ruby|go|rust|c\+\+|c#|\.net)\b'
            ]
        },
        'Data Science': {
            'primary': [
                'data scientist', 'data analyst', 'machine learning engineer', 'ml engineer',
                'ai engineer', 'artificial intelligence engineer', 'statistician', 'bi analyst',
                'business intelligence analyst', 'analytics engineer', 'data engineer',
                'research scientist', 'quantitative analyst', 'quants', 'data science',
                'machine learning', 'deep learning', 'artificial intelligence', 'ai/ml'
            ],
            'technologies': [
                'pandas', 'numpy', 'tensorflow', 'pytorch', 'scikit-learn', 'scikit learn',
                'jupyter', 'spark', 'hadoop', 'tableau', 'power bi', 'powerbi', 'matplotlib',
                'seaborn', 'plotly', 'r', 'sas', 'spss', 'stata', 'excel', 'sql', 'nosql'
            ],
            'exclusions': [
                'attorney', 'lawyer', 'accountant', 'recruiter', 'assistant', 'coordinator',
                'manager', 'specialist', 'trader', 'setter', 'generation', 'marketing',
                'sales', 'hr', 'human resources', 'kinesiólogo', 'kinesiologo', 'vendedor',
                'asesor', 'redactor', 'publicitario', 'creativo', 'translator', 'paralegal',
                'litigation', 'immigration', 'law', 'legal', 'german', 'spanish', 'french',
                'interpreter', 'translation', 'language', 'linguist', 'freelance', 'frelance',
                'freelancer', 'frelancer', 'virtual', 'remote', 'online', 'digital', 'web',
                'frontend', 'front-end', 'backend', 'back-end', 'full stack', 'fullstack',
                'developer', 'programmer', 'coder', 'software', 'web developer', 'mobile',
                'react', 'angular', 'vue', 'node', 'javascript', 'typescript', 'python',
                'java', 'php', 'ruby', 'go', 'rust', 'c++', 'c#', '.net', 'django', 'flask',
                'spring', 'express', 'laravel', 'rails', 'asp.net', 'html', 'css', 'sass',
                'scss', 'bootstrap', 'tailwind', 'jquery', 'designer', 'design', 'ui', 'ux',
                'graphic', 'visual', 'creative', 'brand', 'logo', 'product', 'content',
                'writer', 'editor', 'creator', 'copy', 'blog', 'article', 'copywriter',
                'video', 'media', 'production', 'filming', 'editing', 'motion', 'cinematographer',
                'customer', 'client', 'technical', 'help', 'support', 'success', 'care',
                'administrative', 'executive', 'personal', 'virtual assistant', 'office',
                'admin', 'hr', 'human resources', 'recruiter', 'talent', 'acquisition',
                'hiring', 'sourcer', 'marketing', 'seo', 'sem', 'ppc', 'social', 'email',
                'digital', 'brand', 'growth', 'ads', 'google ads', 'facebook ads',
                'instagram ads', 'linkedin ads', 'twitter ads', 'sales', 'business development',
                'account', 'executive', 'representative', 'bdr', 'sdr', 'lead generation',
                'appointment setter', 'qa', 'quality assurance', 'testing', 'tester',
                'test engineer', 'devops', 'sre', 'platform', 'infrastructure', 'cloud',
                'site reliability', 'docker', 'kubernetes', 'aws', 'azure', 'gcp',
                'consultor', 'consultoría', 'funcional', 'ecommerce', 'ecomerce', 'analista',
                'especialista', 'productor', 'asesor', 'comercial', 'telefónico', 'educación',
                'sap', 'reporting', 'salesforce', 'aml', 'cft', 'manuales', 'conciliaciones',
                'bancarias', 'excel', 'erp', 'business', 'process', 'management', 'consulting',
                'sustainability', 'responsible', 'consultant', 'health', 'industry', 'public',
                'service', 'infrastructure', 'dba', 'informix', 'consultores', 'fi',
                'founder', 'residence', 'trainee', 'intern', 'graduate', 'quantitative',
                'bookkeeper', 'financial', 'accounting', 'treasury', 'bookkeeping'
            ],
            'patterns': [
                r'\b(data\s+scientist|data\s+analyst|machine\s+learning\s+engineer|ml\s+engineer)\b',
                r'\b(ai\s+engineer|artificial\s+intelligence\s+engineer|statistician)\b',
                r'\b(bi\s+analyst|business\s+intelligence\s+analyst|analytics\s+engineer)\b',
                r'\b(data\s+engineer|research\s+scientist|quantitative\s+analyst)\b',
                r'\b(pandas|numpy|tensorflow|pytorch|scikit|jupyter|spark|hadoop|tableau|power\s+bi)\b'
            ]
        },
        'Legal': {
            'primary': [
                'attorney', 'lawyer', 'paralegal', 'legal assistant', 'legal specialist',
                'litigation', 'immigration', 'law specialist', 'legal analyst', 'legal coordinator',
                'legal manager', 'legal consultant', 'legal advisor', 'legal researcher',
                'legal writer', 'legal editor', 'legal translator', 'legal interpreter'
            ],
            'patterns': [
                r'\b(attorney|lawyer|paralegal|legal|litigation|immigration|law)\b',
                r'\b(german|spanish|french|english)\s+(translator|interpreter|specialist)\b'
            ]
        },
        'Translation': {
            'primary': [
                'translator', 'interpreter', 'translation specialist', 'language specialist',
                'german translator', 'spanish translator', 'french translator', 'english translator',
                'bilingual specialist', 'language coordinator', 'translation coordinator'
            ],
            'patterns': [
                r'\b(translator|interpreter|translation|language|bilingual)\b',
                r'\b(german|spanish|french|english|portuguese|italian)\s+(translator|interpreter)\b'
            ]
        },
        'Marketing': {
            'primary': [
                'marketing specialist', 'digital marketing specialist', 'seo specialist',
                'sem specialist', 'ppc specialist', 'social media specialist', 'content marketing',
                'email marketing', 'growth marketing', 'brand marketing', 'marketing analyst',
                'marketing coordinator', 'marketing manager', 'ads specialist', 'media buyer',
                'seo', 'sem', 'ppc', 'google ads', 'facebook ads', 'instagram ads'
            ],
            'patterns': [
                r'\b(marketing|seo|sem|ppc|content|social|email|digital|brand|growth|ads|media)\b',
                r'\b(google.?ads|facebook.?ads|instagram.?ads|linkedin.?ads|twitter.?ads)\b'
            ]
        },
        'Sales': {
            'primary': [
                'sales representative', 'sales specialist', 'account executive', 'business development',
                'sales development representative', 'sdr', 'business development representative',
                'bdr', 'sales manager', 'account manager', 'sales coordinator', 'lead generation',
                'sales consultant', 'sales analyst', 'appointment setter', 'vendedor', 'prospeción',
                'prospección', 'ventas', 'comercial'
            ],
            'patterns': [
                r'\b(sales|business.?development|account|executive|representative|bdr|sdr|lead.?generation|vendedor|prospeción|prospección|ventas|comercial)\b'
            ]
        },
        'Administrative': {
            'primary': [
                'administrative assistant', 'executive assistant', 'personal assistant',
                'virtual assistant', 'office coordinator', 'administrative coordinator',
                'office manager', 'administrative manager', 'assistant', 'coordinator',
                'medical records specialist', 'records specialist', 'liability specialist',
                'third-party liability', 'medical records', 'records management',
                'administrative specialist', 'office specialist', 'administrative analyst',
                'office analyst', 'administrative coordinator', 'office coordinator'
            ],
            'patterns': [
                r'\b(assistant|coordinator|manager|admin|executive|virtual|office|administrative)\b',
                r'\b(medical\s+records|records\s+specialist|liability\s+specialist|third.?party\s+liability)\b'
            ]
        },
        'Human Resources': {
            'primary': [
                'hr specialist', 'human resources specialist', 'recruiter', 'talent acquisition',
                'hr coordinator', 'hr manager', 'recruitment specialist', 'talent sourcer',
                'hr assistant', 'people operations', 'hr analyst'
            ],
            'patterns': [
                r'\b(hr|human.?resources|recruiter|talent|acquisition|hiring|sourcer)\b'
            ]
        },
        'Design': {
            'primary': [
                'ui designer', 'ux designer', 'graphic designer', 'visual designer',
                'product designer', 'web designer', 'brand designer', 'creative designer',
                'interaction designer', 'user experience designer', 'user interface designer'
            ],
            'patterns': [
                r'\b(design|ui|ux|graphic|visual|creative|brand|logo|product.?design)\b'
            ]
        },
        'Content Creation': {
            'primary': [
                'content creator', 'content writer', 'copywriter', 'blog writer', 'article writer',
                'content specialist', 'content manager', 'editor', 'content editor', 'writer'
            ],
            'patterns': [
                r'\b(content|writer|editor|creator|copy|blog|article|copywriter)\b'
            ]
        },
        'Video/Media': {
            'primary': [
                'video editor', 'video producer', 'video creator', 'cinematographer',
                'video specialist', 'media producer', 'video coordinator', 'editor'
            ],
            'patterns': [
                r'\b(video|editor|media|production|filming|editing|motion|cinematographer)\b'
            ]
        },
        'DevOps': {
            'primary': [
                'devops engineer', 'site reliability engineer', 'sre', 'platform engineer',
                'infrastructure engineer', 'cloud engineer', 'systems engineer', 'reliability engineer',
                'automation engineer', 'ci/cd engineer', 'deployment engineer'
            ],
            'patterns': [
                r'\b(devops|sre|platform|infrastructure|cloud|site.?reliability)\s+(engineer|specialist)\b'
            ]
        },
        'QA/Testing': {
            'primary': [
                'qa engineer', 'quality assurance engineer', 'test engineer', 'software tester',
                'automation tester', 'manual tester', 'test analyst', 'quality analyst',
                'testing engineer', 'qa specialist', 'test specialist'
            ],
            'patterns': [
                r'\b(qa|quality.?assurance|testing|tester|test.?engineer)\b'
            ]
        },
        'Customer Support': {
            'primary': [
                'customer support', 'customer service', 'technical support', 'help desk',
                'support specialist', 'customer success', 'client support', 'support engineer',
                'customer care', 'support analyst'
            ],
            'patterns': [
                r'\b(customer|client|technical|help|support|success|care)\b'
            ]
        },
        'Finance/Accounting': {
            'primary': [
                'accountant', 'bookkeeper', 'financial analyst', 'finance analyst',
                'accounting specialist', 'financial specialist', 'treasury analyst',
                'accounting clerk', 'financial clerk', 'bookkeeping specialist',
                'accounting assistant', 'financial assistant', 'accounting coordinator',
                'financial coordinator', 'accounting manager', 'financial manager',
                'accounting consultant', 'financial consultant', 'accounting advisor',
                'financial advisor', 'accounting supervisor', 'financial supervisor',
                'accounting director', 'financial director', 'accounting controller',
                'financial controller', 'accounting officer', 'financial officer',
                'accounting executive', 'financial executive', 'accounting administrator',
                'financial administrator'
            ],
            'patterns': [
                r'\b(accountant|bookkeeper|financial|accounting|treasury|bookkeeping)\b'
            ]
        },
        'Healthcare/Medical': {
            'primary': [
                'kinesiólogo', 'kinesiologo', 'physiotherapist', 'physical therapist',
                'medical assistant', 'healthcare assistant', 'medical specialist',
                'healthcare specialist', 'medical analyst', 'healthcare analyst',
                'medical coordinator', 'healthcare coordinator', 'medical manager',
                'healthcare manager', 'medical consultant', 'healthcare consultant',
                'medical advisor', 'healthcare advisor', 'medical supervisor',
                'healthcare supervisor', 'medical director', 'healthcare director',
                'medical officer', 'healthcare officer', 'medical executive',
                'healthcare executive', 'medical administrator', 'healthcare administrator'
            ],
            'exclusions': [
                'medical records', 'records specialist', 'liability specialist',
                'third-party liability', 'records management', 'administrative',
                'office', 'coordinator', 'assistant', 'manager', 'specialist'
            ],
            'patterns': [
                r'\b(kinesiólogo|kinesiologo|physiotherapist|physical\s+therapist|medical|healthcare)\b'
            ]
        },
        'Trading/Finance': {
            'primary': [
                'quantitative trader', 'trader', 'trading analyst', 'trading specialist',
                'trading coordinator', 'trading manager', 'trading consultant',
                'trading advisor', 'trading supervisor', 'trading director',
                'trading officer', 'trading executive', 'trading administrator'
            ],
            'patterns': [
                r'\b(quantitative\s+trader|trader|trading)\b'
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
            
            # Check exclusions first - if any exclusion word is found, skip this category
            exclusions = data.get('exclusions', [])
            for exclusion in exclusions:
                if exclusion in title_lower:
                    score = -1000  # Heavy penalty for exclusions
                    break
            
            if score < 0:  # Skip this category due to exclusions
                continue
            
            # Check primary keywords (highest weight)
            for keyword in data.get('primary', []):
                if keyword in title_lower:
                    # For Data Science, require more specific matches
                    if category == 'Data Science':
                        # Only count if it's a very specific data science term
                        if any(term in keyword for term in ['data scientist', 'data analyst', 'machine learning', 'ml engineer', 'ai engineer', 'statistician', 'bi analyst', 'analytics engineer', 'data engineer', 'research scientist', 'quantitative analyst']):
                            score += 25.0
                            matches.append(keyword)
                        else:
                            score += 5.0  # Lower score for general terms
                            matches.append(keyword)
                    else:
                        score += 20.0
                        matches.append(keyword)
            
            # Check technology keywords (medium weight)
            for keyword in data.get('technologies', []):
                if keyword in title_lower:
                    # For Data Science, only count specific data science technologies
                    if category == 'Data Science':
                        if any(tech in keyword for tech in ['pandas', 'numpy', 'tensorflow', 'pytorch', 'scikit', 'jupyter', 'spark', 'hadoop', 'tableau', 'power bi', 'matplotlib', 'seaborn', 'plotly', 'r', 'sas', 'spss', 'stata']):
                            score += 15.0
                            matches.append(keyword)
                        else:
                            score += 2.0  # Very low score for general tech terms
                            matches.append(keyword)
                    else:
                        score += 10.0
                        matches.append(keyword)
            
            # Check patterns (highest weight for exact matches)
            for pattern in data.get('patterns', []):
                if re.search(pattern, title_lower, re.IGNORECASE):
                    score += 30.0
                    matches.append(f"pattern_{pattern}")
            
            # Additional scoring for word boundaries (reduced for Data Science)
            words = title_lower.split()
            for word in words:
                # Check if word is a technology keyword
                if word in data.get('technologies', []):
                    if category == 'Data Science':
                        score += 1.0  # Very low score for individual tech words
                    else:
                        score += 5.0
                    matches.append(word)
                
                # Check if word is part of a primary keyword
                for primary in data.get('primary', []):
                    if word in primary.split():
                        if category == 'Data Science':
                            score += 1.0  # Very low score for individual words
                        else:
                            score += 3.0
                        matches.append(word)
            
            if score > 0:
                category_scores[category] = score
                category_matches[category] = matches
        
        # Return the best category
        if not category_scores:
            return ('Other', 0.0, [])
        
        best_category = max(category_scores.items(), key=lambda x: x[1])
        
        # For Data Science, require a higher minimum score to prevent misclassification
        if best_category[0] == 'Data Science' and best_category[1] < 20.0:
            # If Data Science score is too low, try the next best category
            other_categories = [(cat, score) for cat, score in category_scores.items() if cat != 'Data Science']
            if other_categories:
                best_category = max(other_categories, key=lambda x: x[1])
        
        max_possible_score = 100.0
        confidence_percentage = min(best_category[1] / max_possible_score * 100, 100)
        
        return (best_category[0], confidence_percentage, category_matches[best_category[0]])
    
    return categorize_job

def main():
    """Main function to fix titles and categorize jobs"""
    
    print("🚀 Starting complete job data fix and categorization...")
    
    # Step 1: Fix duplicated titles
    fixed_jobs = fix_duplicated_titles()
    
    # Step 2: Parse fixed jobs
    jobs = parse_fixed_jobs()
    
    # Step 3: Create DataFrame
    df = pd.DataFrame(jobs)
    
    # Step 4: Extract additional data
    print("📊 Extracting salary and time data...")
    
    salary_ranges = [extract_salary_range(salary) for salary in df['salary']]
    df['salary_min'] = [s[0] for s in salary_ranges]
    df['salary_max'] = [s[1] for s in salary_ranges]
    
    df['days_ago'] = [extract_days_ago(time) for time in df['time_posted']]
    
    # Step 5: Categorize jobs
    print("🏷️ Categorizing jobs...")
    categorizer = create_accurate_categorizer()
    
    categories = []
    confidences = []
    keywords_list = []
    
    for title in df['title']:
        category, confidence, keywords = categorizer(title)
        categories.append(category)
        confidences.append(confidence)
        keywords_list.append('; '.join(keywords) if keywords else '')
    
    df['category'] = categories
    df['category_confidence'] = confidences
    df['matched_keywords'] = keywords_list
    
    # Step 6: Save results
    df.to_csv('complete_categorized_jobs.csv', index=False)
    
    # Print statistics
    print(f"✅ Complete fix and categorization finished!")
    print(f"📊 Total jobs: {len(df)}")
    
    category_counts = df['category'].value_counts()
    print(f"📈 Category distribution:")
    for category, count in category_counts.items():
        percentage = (count / len(df)) * 100
        print(f"   {category}: {count} jobs ({percentage:.1f}%)")
    
    # Show examples of fixed titles
    print(f"\n🔍 Examples of fixed titles:")
    for i, row in df.head(10).iterrows():
        print(f"   {row['title']} -> {row['category']} (confidence: {row['category_confidence']:.0f}%)")
    
    return df

if __name__ == "__main__":
    main()
