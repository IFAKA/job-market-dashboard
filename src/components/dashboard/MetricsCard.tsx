import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Building2, Zap, Clock } from 'lucide-react';

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
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    success: 'bg-green-500/10 text-green-600 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
  };

  const trendIcons = {
    up: <TrendingUp className="w-4 h-4 text-green-600" />,
    down: <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />,
    neutral: null
  };

  return (
    <Card className="apple-watch-card hover:scale-105 transition-transform duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-full border ${colorClasses[color]}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold apple-watch-text-gradient">
            {value.toLocaleString()}
          </div>
          {trendIcons[trend]}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function MetricsGrid({ metrics }: { metrics: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <MetricsCard
        title="Total Jobs"
        value={metrics.total_jobs}
        icon={<Building2 className="w-4 h-4" />}
        description="Available positions"
        color="primary"
      />
      <MetricsCard
        title="Companies"
        value={metrics.unique_companies}
        icon={<Building2 className="w-4 h-4" />}
        description="Hiring companies"
        color="secondary"
      />
      <MetricsCard
        title="Easy Apply"
        value={metrics.easy_apply_jobs}
        icon={<Zap className="w-4 h-4" />}
        description="Quick applications"
        color="success"
      />
      <MetricsCard
        title="Recent Jobs"
        value={metrics.recent_jobs}
        icon={<Clock className="w-4 h-4" />}
        description="Last 7 days"
        color="warning"
      />
    </div>
  );
}
