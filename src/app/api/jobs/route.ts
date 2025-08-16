import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Job, JobMarketData } from '@/types/job';
import { 
  calculateMetrics, 
  calculateCategoryStats, 
  calculateTopOpportunities, 
  calculateTechnologyInsights, 
  generateRecommendations 
} from '@/lib/data-utils';

// Simple CSV parser that handles quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result.map(field => field.replace(/^"|"$/g, '')); // Remove outer quotes
}

export async function GET() {
  try {
    // Read the CSV file
    const csvPath = path.join(process.cwd(), 'complete_categorized_jobs.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    
    // Parse CSV content
    const lines = csvContent.split('\n');
    const headers = parseCSVLine(lines[0]);
    
    const jobs: Job[] = lines.slice(1)
      .filter(line => line.trim())
      .map(line => {
        const values = parseCSVLine(line);
        const job: Record<string, string | number | null> = {};
        
        headers.forEach((header, index) => {
          let value: string | number | null = values[index] || '';
          
          // Convert numeric fields
          if (['salary_min', 'salary_max', 'days_ago'].includes(header)) {
            value = value ? parseFloat(value as string) : null;
          } else if (header === 'category_confidence') {
            value = value ? parseFloat(value as string) : 0; // Default to 0 instead of null
          }
          
          job[header] = value;
        });
        
        return job as unknown as Job;
      });

    // Process the data into the native format
    const metrics = calculateMetrics(jobs);
    const categoryStats = calculateCategoryStats(jobs);
    const topOpportunities = calculateTopOpportunities(jobs);
    const technologyInsights = calculateTechnologyInsights(jobs);
    const recommendations = generateRecommendations(metrics, categoryStats);

    const jobMarketData: JobMarketData = {
      jobs,
      metrics,
      categoryStats,
      topOpportunities,
      technologyInsights,
      recommendations
    };

    // Return the processed data in native format
    return NextResponse.json(jobMarketData);
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return NextResponse.json(
      { error: 'Failed to load job data' },
      { status: 500 }
    );
  }
}
