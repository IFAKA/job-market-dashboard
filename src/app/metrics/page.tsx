'use client';

import { useLanguageContext } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { t } from '@/lib/i18n';
import { JobMetrics } from '@/types/job';
import {
  ArrowLeft,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  Globe,
  Minus,
  Target,
  TrendingDown,
  TrendingUp,
  Zap
} from 'lucide-react';
import Link from 'next/link';

// MetricsPageProps interface removed as it's not used

export default function MetricsPage() {
  const { language } = useLanguageContext();
  
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

  // getColorClasses function removed as it's not used

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('metrics.page.backToDashboard', language)}
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{t('metrics.page.title', language)}</h1>
          <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500" />
        </div>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl">
          {t('metrics.page.description', language)}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Key Metrics Overview */}
          <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-500" />
                {t('metrics.page.keyIndicators', language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-sky-200">
                  <div className="text-xl sm:text-2xl font-bold text-sky-600">{metrics.total_jobs.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('metrics.totalJobs', language)}</div>
                  <div className="flex items-center justify-center mt-1">
                    {getTrendIcon('up')}
                    <span className="text-xs text-emerald-600 ml-1">+12%</span>
                  </div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-yellow-200">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-600">{metrics.unique_companies}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('metrics.companies', language)}</div>
                  <div className="flex items-center justify-center mt-1">
                    {getTrendIcon('up')}
                    <span className="text-xs text-emerald-600 ml-1">+8%</span>
                  </div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-emerald-200">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600">{metrics.easy_apply_jobs.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('metrics.easyApply', language)}</div>
                  <div className="flex items-center justify-center mt-1">
                    {getTrendIcon('up')}
                    <span className="text-xs text-emerald-600 ml-1">+15%</span>
                  </div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-white rounded-lg border border-orange-200">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">{metrics.recent_jobs}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('metrics.recentJobs', language)}</div>
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
                {t('metrics.page.marketTrends', language)}
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
                      <h4 className="font-semibold text-gray-900">{t('metrics.page.jobGrowth', language)}</h4>
                      <p className="text-sm text-gray-600">{t('metrics.page.monthlyTrends', language)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">+12%</div>
                    <div className="text-sm text-gray-500">{t('metrics.page.vsLastMonth', language)}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Building2 className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('metrics.page.companyActivity', language)}</h4>
                      <p className="text-sm text-gray-600">{t('metrics.page.newCompanies', language)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">+8%</div>
                    <div className="text-sm text-gray-500">{t('metrics.page.vsLastMonth', language)}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('metrics.page.easyApplyJobs', language)}</h4>
                      <p className="text-sm text-gray-600">{t('metrics.page.simplifiedApplication', language)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">+15%</div>
                    <div className="text-sm text-gray-500">{t('metrics.page.vsLastMonth', language)}</div>
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
                {t('metrics.page.detailedAnalysis', language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('metrics.page.jobDistribution', language)}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('metrics.page.remoteJobs', language)}</span>
                      <span className="font-semibold text-gray-900">64%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sky-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('metrics.page.hybridJobs', language)}</span>
                      <span className="font-semibold text-gray-900">28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('metrics.page.onsiteJobs', language)}</span>
                      <span className="font-semibold text-gray-900">8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('metrics.page.experienceLevel', language)}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('metrics.page.entryLevel', language)}</span>
                      <span className="font-semibold text-gray-900">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('metrics.page.midLevel', language)}</span>
                      <span className="font-semibold text-gray-900">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{t('metrics.page.seniorLevel', language)}</span>
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
                {t('metrics.page.marketInsights', language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('metrics.page.growingDemand', language)}</h4>
                    <p className="text-sm text-gray-600">
                      {t('metrics.page.growingDemandDesc', language)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('metrics.page.remoteWorkDominance', language)}</h4>
                    <p className="text-sm text-gray-600">
                      {t('metrics.page.remoteWorkDominanceDesc', language)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Zap className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('metrics.page.easyApplyTrend', language)}</h4>
                    <p className="text-sm text-gray-600">
                      {t('metrics.page.easyApplyTrendDesc', language)}
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
                {t('metrics.page.quickStats', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-sky-500" />
                  <span className="text-sm text-gray-600">{t('metrics.totalJobs', language)}</span>
                </div>
                <span className="font-semibold text-gray-900">{metrics.total_jobs.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{t('metrics.companies', language)}</span>
                </div>
                <span className="font-semibold text-gray-900">{metrics.unique_companies}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-600">{t('metrics.easyApply', language)}</span>
                </div>
                <span className="font-semibold text-gray-900">{metrics.easy_apply_jobs.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">{t('metrics.recentJobs', language)}</span>
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
                {t('metrics.page.growthIndicators', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t('metrics.totalJobs', language)}</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-emerald-600">+12%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t('metrics.companies', language)}</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-emerald-600">+8%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{t('metrics.easyApply', language)}</span>
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
                {t('metrics.page.actions', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                {t('metrics.page.exportReport', language)}
              </Button>
              <Button variant="outline" className="w-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                {t('metrics.page.viewTrends', language)}
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                {t('metrics.page.scheduleUpdate', language)}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
