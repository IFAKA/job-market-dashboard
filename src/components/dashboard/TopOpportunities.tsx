import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TopOpportunity } from '@/types/job';
import { Trophy, Building2, Clock, Star } from 'lucide-react';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';

interface TopOpportunitiesProps {
  opportunities: TopOpportunity[];
}

export function TopOpportunities({ opportunities }: TopOpportunitiesProps) {
  const { language } = useLanguageContext();
  
  return (
    <Card className="apple-watch-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          {t('opportunities.title', language)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.rank}
              className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                {opportunity.rank}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="font-medium text-sm truncate block">
                    {opportunity.company}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground break-words leading-relaxed mb-2">
                  {opportunity.title}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs flex-shrink-0">
                    {opportunity.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    {opportunity.days_ago.toFixed(1)} {t('metrics.daysAgo', language)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary flex-shrink-0">
                <Star className="w-4 h-4" />
                <span className="whitespace-nowrap">{opportunity.score}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
