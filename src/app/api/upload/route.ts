import { NextRequest, NextResponse } from 'next/server';
import { Job } from '@/types/job';

// Parse TXT file content (LinkedIn job format)
function parseTxtContent(content: string): Job[] {
  const lines = content.split('\n').filter(line => line.trim());
  const jobs: Job[] = [];
  
  let currentJob: Partial<Job> = {};
  let jobLines: string[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines and headers
    if (!line || line.includes('Set job alert') || line.includes('Browse AI')) {
      continue;
    }
    
    // If line contains 'logo', it's likely a new job entry
    if (line.includes('logo') && jobLines.length > 0) {
      // Process the previous job
      const job = processJobLines(jobLines);
      if (job) {
        jobs.push(job);
      }
      jobLines = [];
    }
    
    // Add line to current job
    if (line && !line.includes('logo')) {
      jobLines.push(line);
    }
  }
  
  // Process the last job
  if (jobLines.length > 0) {
    const job = processJobLines(jobLines);
    if (job) {
      jobs.push(job);
    }
  }
  
  return jobs;
}

function processJobLines(lines: string[]): Job | null {
  if (lines.length < 2) return null;
  
  // First line is usually the job title
  const title = lines[0];
  
  // Look for company name (usually second line, but not always)
  let company = '';
  let location = '';
  let salary = '';
  let timePosted = '';
  let tags = '';
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Company name (usually doesn't contain special keywords)
    if (!company && !line.includes('$') && !line.includes('ago') && 
        !line.includes('Remote') && !line.includes('Argentina') && 
        !line.includes('Easy Apply') && !line.includes('Actively reviewing') &&
        !line.includes('Viewed') && !line.includes('@')) {
      company = line;
      continue;
    }
    
    // Location (contains "Remote" or specific location)
    if (!location && (line.includes('Remote') || line.includes('Argentina') || 
                     line.includes('Buenos Aires') || line.includes('Latin America'))) {
      location = line;
      continue;
    }
    
    // Salary (contains $ or /month or /yr)
    if (!salary && (line.includes('$') || line.includes('/month') || line.includes('/yr'))) {
      salary = line;
      continue;
    }
    
    // Time posted (contains "ago" or "hours" or "days")
    if (!timePosted && (line.includes('ago') || line.includes('hours') || line.includes('days'))) {
      timePosted = line;
      continue;
    }
    
    // Tags (Easy Apply, Actively reviewing, etc.)
    if (!tags && (line.includes('Easy Apply') || line.includes('Actively reviewing') || 
                 line.includes('Viewed') || line.includes('Be an early applicant'))) {
      tags = line;
      break;
    }
  }
  
  // Only add if we have at least a title and company
  if (!title || !company) return null;
  
  // Extract salary range if available
  let salaryMin: number | undefined;
  let salaryMax: number | undefined;
  
  if (salary) {
    const salaryMatch = salary.match(/\$([\d,]+)/g);
    if (salaryMatch && salaryMatch.length >= 2) {
      salaryMin = parseFloat(salaryMatch[0].replace(/[$,]/g, ''));
      salaryMax = parseFloat(salaryMatch[1].replace(/[$,]/g, ''));
    } else if (salaryMatch && salaryMatch.length === 1) {
      salaryMin = parseFloat(salaryMatch[0].replace(/[$,]/g, ''));
    }
  }
  
  // Calculate days ago
  let daysAgo: number | undefined;
  if (timePosted) {
    if (timePosted.includes('hour')) {
      daysAgo = 0;
    } else if (timePosted.includes('day')) {
      const dayMatch = timePosted.match(/(\d+)\s+day/);
      daysAgo = dayMatch ? parseInt(dayMatch[1]) : undefined;
    } else if (timePosted.includes('week')) {
      const weekMatch = timePosted.match(/(\d+)\s+week/);
      daysAgo = weekMatch ? parseInt(weekMatch[1]) * 7 : undefined;
    } else if (timePosted.includes('month')) {
      const monthMatch = timePosted.match(/(\d+)\s+month/);
      daysAgo = monthMatch ? parseInt(monthMatch[1]) * 30 : undefined;
    }
  }
  
  // Simple category detection based on title
  let category = 'Other';
  const titleLower = title.toLowerCase();
  if (titleLower.includes('software') || titleLower.includes('developer') || titleLower.includes('engineer')) {
    category = 'Software Engineer';
  } else if (titleLower.includes('design') || titleLower.includes('ui') || titleLower.includes('ux')) {
    category = 'Design';
  } else if (titleLower.includes('marketing') || titleLower.includes('seo') || titleLower.includes('social')) {
    category = 'Marketing';
  } else if (titleLower.includes('sales') || titleLower.includes('business development')) {
    category = 'Sales';
  } else if (titleLower.includes('data') || titleLower.includes('analyst')) {
    category = 'Data Science';
  } else if (titleLower.includes('customer') || titleLower.includes('support')) {
    category = 'Customer Support';
  } else if (titleLower.includes('assistant') || titleLower.includes('admin')) {
    category = 'Administrative';
  } else if (titleLower.includes('hr') || titleLower.includes('recruiter') || titleLower.includes('talent')) {
    category = 'Human Resources';
  } else if (titleLower.includes('content') || titleLower.includes('writer') || titleLower.includes('editor')) {
    category = 'Content Creation';
  } else if (titleLower.includes('video') || titleLower.includes('media')) {
    category = 'Video/Media';
  } else if (titleLower.includes('translator') || titleLower.includes('interpreter')) {
    category = 'Translation';
  } else if (titleLower.includes('finance') || titleLower.includes('accounting')) {
    category = 'Finance/Accounting';
  }
  
  return {
    company: company,
    title: title,
    location: location || 'Remote',
    salary: salary || '',
    time_posted: timePosted || '',
    tags: tags || '',
    salary_min: salaryMin,
    salary_max: salaryMax,
    days_ago: daysAgo,
    category: category,
    category_confidence: 50, // Default confidence
    matched_keywords: title.toLowerCase()
  };
}

// Parse CSV file content
function parseCsvContent(content: string): Job[] {
  const lines = content.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  const jobs: Job[] = lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
      const job: Record<string, string | number | null> = {};
      
      headers.forEach((header, index) => {
        let value: string | number | null = values[index] || '';
        
        // Convert numeric fields
        if (['salary_min', 'salary_max', 'days_ago'].includes(header)) {
          value = value ? parseFloat(value as string) : null;
        } else if (header === 'category_confidence') {
          value = value ? parseFloat(value as string) : 0;
        }
        
        job[header] = value;
      });
      
      return job as unknown as Job;
    });
  
  return jobs;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const country = formData.get('country') as string || 'argentina';
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }
    
    // Validate file type
    const allowedTypes = ['text/plain', 'text/csv'];
    const allowedExtensions = ['.txt', '.csv'];
    
    const isValidType = allowedTypes.includes(file.type) || 
                       allowedExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
    
    if (!isValidType) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a .txt or .csv file.' },
        { status: 400 }
      );
    }
    
    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size must be less than 10MB' },
        { status: 400 }
      );
    }
    
    // Read file content
    const content = await file.text();
    
    // Parse based on file type
    let jobs: Job[];
    if (file.name.toLowerCase().endsWith('.txt')) {
      jobs = parseTxtContent(content);
    } else if (file.name.toLowerCase().endsWith('.csv')) {
      jobs = parseCsvContent(content);
    } else {
      // Try to detect format based on content
      if (content.includes(',') && content.split('\n')[0].includes(',')) {
        jobs = parseCsvContent(content);
      } else {
        jobs = parseTxtContent(content);
      }
    }
    
    if (jobs.length === 0) {
      return NextResponse.json(
        { error: 'No valid job data found in the file' },
        { status: 400 }
      );
    }

    // Add country to each job
    const jobsWithCountry = jobs.map(job => ({
      ...job,
      country: country
    }));
    
    return NextResponse.json({
      jobs: jobsWithCountry,
      fileName: file.name,
      fileType: file.name.toLowerCase().endsWith('.csv') ? 'csv' : 'txt',
      jobCount: jobsWithCountry.length,
      country: country
    });
    
  } catch (error) {
    console.error('Error processing file upload:', error);
    return NextResponse.json(
      { error: 'Failed to process file' },
      { status: 500 }
    );
  }
}
