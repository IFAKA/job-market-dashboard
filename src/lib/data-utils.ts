import { Job, JobMetrics, CategoryStats, TopOpportunity, TechnologyInsight, ChartData } from '@/types/job';

export function calculateMetrics(jobs: Job[]): JobMetrics {
  const total_jobs = jobs.length;
  const unique_companies = new Set(jobs.map(job => job.company)).size;
  const easy_apply_jobs = jobs.filter(job => 
    job.tags.toLowerCase().includes('easy apply')
  ).length;
  const recent_jobs = jobs.filter(job => 
    job.days_ago && job.days_ago <= 7
  ).length;

  return {
    total_jobs,
    unique_companies,
    easy_apply_jobs,
    recent_jobs
  };
}

export function calculateCategoryStats(jobs: Job[]): Record<string, CategoryStats> {
  const categoryGroups = jobs.reduce((acc, job) => {
    if (!acc[job.category]) {
      acc[job.category] = [];
    }
    acc[job.category].push(job);
    return acc;
  }, {} as Record<string, Job[]>);

  const stats: Record<string, CategoryStats> = {};

  Object.entries(categoryGroups).forEach(([category, categoryJobs]) => {
    const salaries = categoryJobs
      .map(job => job.salary_min)
      .filter((salary): salary is number => salary !== undefined && salary !== null && salary > 0);
    
    const avgSalary = salaries.length > 0 
      ? salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length 
      : 0;
    
    const medianSalary = salaries.length > 0
      ? salaries.sort((a, b) => a - b)[Math.floor(salaries.length / 2)]
      : 0;

    const recentJobs = categoryJobs.filter(job => job.days_ago && job.days_ago <= 7).length;
    const easyApplyJobs = categoryJobs.filter(job => 
      job.tags.toLowerCase().includes('easy apply')
    ).length;

    stats[category] = {
      Job_Count: categoryJobs.length,
      Avg_Salary: avgSalary,
      Avg_Max_Salary: avgSalary, // Simplified for now
      Recent_Jobs: recentJobs,
      Easy_Apply_Count: easyApplyJobs,
      Median_Salary: medianSalary
    };
  });

  return stats;
}

export function calculateTopOpportunities(jobs: Job[]): TopOpportunity[] {
  const jobsWithScores = jobs.map(job => {
    let score = 0;
    
    // Recency bonus
    if (job.days_ago && job.days_ago <= 1) score += 20;
    else if (job.days_ago && job.days_ago <= 3) score += 15;
    else if (job.days_ago && job.days_ago <= 7) score += 10;
    else if (job.days_ago && job.days_ago <= 14) score += 5;
    
    // Easy Apply bonus
    if (job.tags.toLowerCase().includes('easy apply')) score += 15;
    
    // Salary bonus
    if (job.salary_min && job.salary_min > 0) {
      score += Math.min(job.salary_min / 1000, 20);
    }
    
    // Category demand bonus (simplified)
    const categoryCount = jobs.filter(j => j.category === job.category).length;
    const maxCategoryCount = Math.max(...Object.values(
      jobs.reduce((acc, j) => {
        acc[j.category] = (acc[j.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    ));
    score += (categoryCount / maxCategoryCount) * 10;
    
    return { ...job, score };
  });

  return jobsWithScores
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((job, index) => ({
      rank: index + 1,
      company: job.company,
      title: job.title,
      category: job.category,
      score: Math.round(job.score * 10) / 10,
      days_ago: job.days_ago || 0
    }));
}

export function calculateTechnologyInsights(jobs: Job[]): TechnologyInsight[] {
  const techKeywords = {
    'React': ['react', 'reactjs', 'react.js'],
    'Python': ['python'],
    'JavaScript': ['javascript', 'js', 'node', 'nodejs'],
    'Java': ['java'],
    'PHP': ['php'],
    'Angular': ['angular'],
    'Vue': ['vue'],
    'TypeScript': ['typescript', 'ts'],
    'SQL': ['sql', 'mysql', 'postgresql'],
    'AWS': ['aws', 'amazon web services'],
    'Docker': ['docker'],
    'Kubernetes': ['kubernetes', 'k8s'],
    'DevOps': ['devops'],
    'Data Science': ['machine learning', 'ml', 'ai', 'tensorflow', 'pytorch'],
    'CSS/HTML': ['html', 'css', 'sass', 'scss', 'bootstrap']
  };

  const techCounts: Record<string, number> = {};

  Object.entries(techKeywords).forEach(([tech, keywords]) => {
    let count = 0;
    keywords.forEach(keyword => {
      count += jobs.filter(job => 
        job.title.toLowerCase().includes(keyword.toLowerCase())
      ).length;
    });
    if (count > 0) {
      techCounts[tech] = count;
    }
  });

  return Object.entries(techCounts)
    .map(([technology, count]) => ({ technology, count }))
    .sort((a, b) => b.count - a.count);
}

export function generateRecommendations(
  metrics: JobMetrics, 
  categoryStats: Record<string, CategoryStats>
): string[] {
  const recommendations: string[] = [];
  
  // Top categories recommendations
  const topCategories = Object.entries(categoryStats)
    .sort(([,a], [,b]) => b.Job_Count - a.Job_Count)
    .slice(0, 4);
  
  topCategories.forEach(([category, stats]) => {
    if (stats.Avg_Salary > 0) {
      recommendations.push(
        `Focus on ${category} - ${stats.Job_Count} positions available (Avg: $${stats.Avg_Salary.toLocaleString()}/yr, Median: $${stats.Median_Salary.toLocaleString()}/yr)`
      );
    } else {
      recommendations.push(
        `Focus on ${category} - ${stats.Job_Count} positions available`
      );
    }
  });
  
  recommendations.push(
    `Prioritize Recent Jobs - ${metrics.recent_jobs} jobs posted in the last 7 days`
  );
  recommendations.push(
    `Use Easy Apply - ${metrics.easy_apply_jobs} jobs with simplified application process`
  );
  
  return recommendations;
}

export function prepareChartData(
  data: Record<string, number>, 
  maxItems: number = 8
): ChartData {
  const sortedEntries = Object.entries(data)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxItems);
  
  return {
    labels: sortedEntries.map(([label]) => label),
    values: sortedEntries.map(([, value]) => value),
    colors: [
      'hsl(var(--chart-1))',
      'hsl(var(--chart-2))',
      'hsl(var(--chart-3))',
      'hsl(var(--chart-4))',
      'hsl(var(--chart-5))',
      'hsl(var(--chart-6))',
      'hsl(var(--chart-7))',
      'hsl(var(--chart-8))'
    ]
  };
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}
