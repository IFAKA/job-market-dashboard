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
  country?: string; // Add country field
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
  Remote_Jobs?: number;
  Onsite_Jobs?: number;
  Easy_Apply_Jobs?: number;
  Senior_Level_Jobs?: number;
  Entry_Level_Jobs?: number;
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
  recommendations: Array<{key: string, params: Record<string, string | number>}>;
}

export interface CategoryDetails {
  name: string;
  description: string;
  whatYouDo: string;
  requiredSkills: string[] | string;
  learningPath: string[] | string;
  careerProspects: string;
  averageTimeToLearn: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  salaryRange: string;
  remoteWorkPercentage: number;
  growthPotential: 'High' | 'Medium' | 'Low';
  entryLevelPositions: string[];
  advancedPositions: string[];
  popularTechnologies: string[] | string;
  resources: {
    courses: string[];
    platforms: string[];
    communities: string[];
  };
}

export interface SalaryData {
  traineeSalary: number;
  traineeRange: string;
  juniorSalary: number;
  juniorRange: string;
  remoteDistribution: string;
}

export interface CountrySalaryData {
  [career: string]: SalaryData;
}

export interface CareerSalaryInfo {
  spain: CountrySalaryData;
  argentina: CountrySalaryData;
}
