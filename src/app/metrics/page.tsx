'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { JobMetrics } from '@/types/job';
import { 
  TrendingUp, 
  Building2, 
  Zap, 
  Clock, 
  Briefcase,
  ArrowLeft,
  BarChart3,
  PieChart,
  DollarSign,
  Users,
  Globe,
  Calendar,
  Target,
  TrendingDown,
  Minus
} from 'lucide-react';
import Link from 'next/link';

interface MetricsPageProps {
  metrics: JobMetrics;
}

export default function MetricsPage() {
  // Mock data - in real app this would come from props or API
  const metrics: JobMetrics = {
    total_jobs: 1250,
    unique_companies: 89,
    easy_apply_jobs: 800,
    recent_jobs: 45
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      case 'neutral': return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getColorClasses = (color: 'primary' | 'secondary' | 'success' | 'warning') => {
    switch (color) {
      case 'primary': return 'bg-sky-100 text-sky-600 border-sky-200';
      case 'secondary': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'success': return 'bg-emerald-100 text-emerald-600 border-emerald-200';
      case 'warning': return 'bg-orange-100 text-orange-600 border-orange-200';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Market Metrics</h1>
          <BarChart3 className="w-8 h-8 text-sky-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-4xl">
          Comprehensive analysis of the job market with detailed metrics, trends, and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key Metrics Overview */}
          <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-500" />
                Key Market Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-sky-200">
                  <div className="text-2xl font-bold text-sky-600">{metrics.total_jobs.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Jobs</div>
                  <div className="flex items-center justify-center mt-1">
                    {getTrendIcon('up')}
                    <span className="text-xs text-emerald-600 ml-1">+12%</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg border border-yellow-200">
                  <div className="text-2xl font-bold text-yellow-600">{metrics.unique_companies}</div>
                  <div className="text-sm text-gray-600">Companies</div>
                  <div className="flex items-center justify-center mt-1">
                    {getTrendIcon('up')}
                    <span className="text-xs text-emerald-600 ml-1">+8%</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600">{metrics.easy_apply_jobs.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Easy Apply</div>
                  <div className="flex items-center justify-center mt-1">
                    {getTrendIcon('up')}
                    <span className="text-xs text-emerald-600 ml-1">+15%</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">{metrics.recent_jobs}</div>
                  <div className="text-sm text-gray-600">Recent Jobs</div>
                  <div className="flex items-center justify-center mt-1">
                    {getTrendIcon('neutral')}
                    <span className="text-xs text-gray-600 ml-1">0%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sky-500" />
                Market Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-100 rounded-lg">
                      <Briefcase className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Job Growth</h4>
                      <p className="text-sm text-gray-600">Monthly job posting trends</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">+12%</div>
                    <div className="text-sm text-gray-500">vs last month</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Building2 className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Company Activity</h4>
                      <p className="text-sm text-gray-600">New companies entering market</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">+8%</div>
                    <div className="text-sm text-gray-500">vs last month</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Easy Apply Jobs</h4>
                      <p className="text-sm text-gray-600">Jobs with simplified application</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">+15%</div>
                    <div className="text-sm text-gray-500">vs last month</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-sky-500" />
                Detailed Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Job Distribution</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Remote Jobs</span>
                      <span className="font-semibold text-gray-900">64%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sky-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Hybrid Jobs</span>
                      <span className="font-semibold text-gray-900">28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">On-site Jobs</span>
                      <span className="font-semibold text-gray-900">8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Experience Level</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Entry Level</span>
                      <span className="font-semibold text-gray-900">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Mid Level</span>
                      <span className="font-semibold text-gray-900">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Senior Level</span>
                      <span className="font-semibold text-gray-900">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Insights */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Growing Demand</h4>
                    <p className="text-sm text-gray-600">
                      The job market is showing strong growth with a 12% increase in job postings compared to last month.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Remote Work Dominance</h4>
                    <p className="text-sm text-gray-600">
                      64% of jobs are remote, indicating a strong preference for flexible work arrangements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Zap className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Apply Trend</h4>
                    <p className="text-sm text-gray-600">
                      64% of jobs offer easy apply options, making the application process more accessible.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-sky-500" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-sky-500" />
                  <span className="text-sm text-gray-600">Total Jobs</span>
                </div>
                <span className="font-semibold text-gray-900">{metrics.total_jobs.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">Companies</span>
                </div>
                <span className="font-semibold text-gray-900">{metrics.unique_companies}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-600">Easy Apply</span>
                </div>
                <span className="font-semibold text-gray-900">{metrics.easy_apply_jobs.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">Recent Jobs</span>
                </div>
                <span className="font-semibold text-gray-900">{metrics.recent_jobs}</span>
              </div>
            </CardContent>
          </Card>

          {/* Growth Indicators */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sky-500" />
                Growth Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Job Postings</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-emerald-600">+12%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Companies</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-emerald-600">+8%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Easy Apply</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-emerald-600">+15%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-500" />
                Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" className="w-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Trends
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Update
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
