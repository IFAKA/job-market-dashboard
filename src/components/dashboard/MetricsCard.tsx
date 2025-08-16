import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Building2, Zap, Clock, Briefcase } from 'lucide-react';
import { JobMetrics } from '@/types/job';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';

interface MetricsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'primary' | 'secondary' | 'success' | 'warning';
}

export function MetricsCard({ 
  title, 
  value, 
  icon, 
  description, 
  trend = 'neutral',
  color = 'primary' 
}: MetricsCardProps) {
  const colorClasses = {
    primary: 'bg-sky-100 text-sky-600 border-sky-200',
    secondary: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    success: 'bg-emerald-100 text-emerald-600 border-emerald-200',
    warning: 'bg-orange-100 text-orange-600 border-orange-200'
  };

  const trendIcons = {
    up: <TrendingUp className="w-4 h-4 text-emerald-600" />,
    down: <TrendingUp className="w-4 h-4 text-orange-600 rotate-180" />,
    neutral: null
  };

  return (
    <Card className="apple-watch-card hover:scale-105 transition-transform duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-full border ${colorClasses[color]}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-sky-600">
            {value.toLocaleString()}
          </div>
          {trendIcons[trend]}
        </div>
        {description && (
          <p className="text-xs text-gray-500 mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function MetricsGrid({ metrics }: { metrics: JobMetrics }) {
  const { language } = useLanguageContext();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <MetricsCard
        title={typeof t('metrics.totalJobs', language) === 'string' 
          ? t('metrics.totalJobs', language) as string 
          : (t('metrics.totalJobs', language) as string[])[0]
        }
        value={metrics.total_jobs}
        icon={<Briefcase className="w-4 h-4" />}
        description={typeof t('metrics.availablePositions', language) === 'string' 
          ? t('metrics.availablePositions', language) as string 
          : (t('metrics.availablePositions', language) as string[])[0]
        }
        color="primary"
      />
      <MetricsCard
        title={typeof t('metrics.companies', language) === 'string' 
          ? t('metrics.companies', language) as string 
          : (t('metrics.companies', language) as string[])[0]
        }
        value={metrics.unique_companies}
        icon={<Building2 className="w-4 h-4" />}
        description={typeof t('metrics.hiringCompanies', language) === 'string' 
          ? t('metrics.hiringCompanies', language) as string 
          : (t('metrics.hiringCompanies', language) as string[])[0]
        }
        color="secondary"
      />
      <MetricsCard
        title={typeof t('metrics.easyApply', language) === 'string' 
          ? t('metrics.easyApply', language) as string 
          : (t('metrics.easyApply', language) as string[])[0]
        }
        value={metrics.easy_apply_jobs}
        icon={<Zap className="w-4 h-4" />}
        description={typeof t('metrics.quickApplications', language) === 'string' 
          ? t('metrics.quickApplications', language) as string 
          : (t('metrics.quickApplications', language) as string[])[0]
        }
        color="success"
      />
      <MetricsCard
        title={typeof t('metrics.recentJobs', language) === 'string' 
          ? t('metrics.recentJobs', language) as string 
          : (t('metrics.recentJobs', language) as string[])[0]
        }
        value={metrics.recent_jobs}
        icon={<Clock className="w-4 h-4" />}
        description={typeof t('metrics.last7Days', language) === 'string' 
          ? t('metrics.last7Days', language) as string 
          : (t('metrics.last7Days', language) as string[])[0]
        }
        color="warning"
      />
    </div>
  );
}
