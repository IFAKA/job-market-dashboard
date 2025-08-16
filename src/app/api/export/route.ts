import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { jobs } = await request.json();

    if (!jobs || !Array.isArray(jobs)) {
      return NextResponse.json(
        { error: 'Invalid job data provided' },
        { status: 400 }
      );
    }

    // Convert jobs to CSV format
    const headers = [
      'company',
      'title', 
      'location',
      'salary',
      'time_posted',
      'tags',
      'salary_min',
      'salary_max',
      'days_ago',
      'category',
      'category_confidence',
      'matched_keywords'
    ];

    const csvRows = [headers.join(',')];

    jobs.forEach((job: any) => {
      const row = headers.map(header => {
        const value = job[header];
        // Escape quotes and wrap in quotes if contains comma or newline
        const escapedValue = String(value || '').replace(/"/g, '""');
        if (escapedValue.includes(',') || escapedValue.includes('\n') || escapedValue.includes('"')) {
          return `"${escapedValue}"`;
        }
        return escapedValue;
      });
      csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="job_data_export.csv"',
      },
    });
  } catch (error) {
    console.error('Error exporting CSV:', error);
    return NextResponse.json(
      { error: 'Failed to export data' },
      { status: 500 }
    );
  }
}
