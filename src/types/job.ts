export interface Job {
  company: string;
  title: string;
  location: string;
  salary: string;
  time_posted: string;
  tags: string;
  salary_min?: number;
  salary_max?: number;
  days_ago?: number;
  category: string;
  category_confidence: number;
  matched_keywords: string;
}

export interface JobMetrics {
  total_jobs: number;
  unique_companies: number;
  easy_apply_jobs: number;
  recent_jobs: number;
}

export interface CategoryStats {
  Job_Count: number;
  Avg_Salary: number;
  Avg_Max_Salary: number;
  Recent_Jobs: number;
  Easy_Apply_Count: number;
  Median_Salary: number;
}

export interface TopOpportunity {
  rank: number;
  company: string;
  title: string;
  category: string;
  score: number;
  days_ago: number;
}

export interface ChartData {
  labels: string[];
  values: number[];
  colors?: string[];
}

export interface TechnologyInsight {
  technology: string;
  count: number;
}

export interface JobMarketData {
  jobs: Job[];
  metrics: JobMetrics;
  categoryStats: Record<string, CategoryStats>;
  topOpportunities: TopOpportunity[];
  technologyInsights: TechnologyInsight[];
  recommendations: string[];
}
