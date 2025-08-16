import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TopOpportunity } from '@/types/job';
import { Trophy, Building2, Clock, Star } from 'lucide-react';

interface TopOpportunitiesProps {
  opportunities: TopOpportunity[];
}

export function TopOpportunities({ opportunities }: TopOpportunitiesProps) {
  return (
    <Card className="apple-watch-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          Top Opportunities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.rank}
              className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {opportunity.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium text-sm truncate">
                      {opportunity.company}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {opportunity.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {opportunity.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {opportunity.days_ago.toFixed(1)} days ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                <Star className="w-4 h-4" />
                {opportunity.score}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
