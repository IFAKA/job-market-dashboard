import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Job } from '@/types/job';

export async function GET() {
  try {
    // Read the CSV file
    const csvPath = path.join(process.cwd(), 'complete_categorized_jobs.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    
    // Parse CSV content
    const lines = csvContent.split('\n');
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
            value = value ? parseFloat(value as string) : 0; // Default to 0 instead of null
          }
          
          job[header] = value;
        });
        
        return job as unknown as Job;
      });
    
    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return NextResponse.json(
      { error: 'Failed to load job data' },
      { status: 500 }
    );
  }
}
