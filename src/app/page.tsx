'use client';

import { useState, useEffect } from 'react';
import { MetricsGrid } from '@/components/dashboard/MetricsCard';
import { TopOpportunities } from '@/components/dashboard/TopOpportunities';
import { Recommendations } from '@/components/dashboard/Recommendations';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { Job, JobMarketData } from '@/types/job';
import { 
  calculateMetrics, 
  calculateCategoryStats, 
  calculateTopOpportunities, 
  calculateTechnologyInsights, 
  generateRecommendations, 
  prepareChartData 
} from '@/lib/data-utils';
import { BarChart3, PieChart as PieChartIcon, TrendingUp, Code, Briefcase } from 'lucide-react';

export default function Dashboard() {
  const [data, setData] = useState<JobMarketData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/jobs');
        const jobs: Job[] = await response.json();
        
        const metrics = calculateMetrics(jobs);
        const categoryStats = calculateCategoryStats(jobs);
        const topOpportunities = calculateTopOpportunities(jobs);
        const technologyInsights = calculateTechnologyInsights(jobs);
        const recommendations = generateRecommendations(metrics, categoryStats);

        setData({
          jobs,
          metrics,
          categoryStats,
          topOpportunities,
          technologyInsights,
          recommendations
        });
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">Loading job market data...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">No data available</p>
        </div>
      </div>
    );
  }

  // Prepare chart data
  const categoryChartData = prepareChartData(
    Object.fromEntries(
      Object.entries(data.categoryStats).map(([category, stats]) => [category, stats.Job_Count])
    )
  );

  const companyChartData = prepareChartData(
    data.jobs.reduce((acc, job) => {
      acc[job.company] = (acc[job.company] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  );

  const technologyChartData = prepareChartData(
    Object.fromEntries(
      data.technologyInsights.map(tech => [tech.technology, tech.count])
    )
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold apple-watch-text-gradient mb-4">
          Job Market Dashboard
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real-time insights into remote job opportunities in Argentina with AI-powered analysis
        </p>
      </div>

      {/* Metrics Grid */}
      <MetricsGrid metrics={data.metrics} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <BarChart
          data={categoryChartData}
          title="Top Job Categories"
          height={400}
          width={500}
        />
        <PieChart
          data={categoryChartData}
          title="Category Distribution"
          height={400}
          width={500}
        />
      </div>

      {/* Technology Insights */}
      <div className="mb-8">
        <BarChart
          data={technologyChartData}
          title="Most In-Demand Technologies"
          height={400}
          width={800}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopOpportunities opportunities={data.topOpportunities} />
        <Recommendations recommendations={data.recommendations} />
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Data updated in real-time • Argentine Job Market Analysis</p>
      </div>
    </div>
  );
}
