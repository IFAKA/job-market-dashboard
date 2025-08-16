import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, TrendingUp, Zap, Clock } from 'lucide-react';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';

interface RecommendationsProps {
  recommendations: Array<{key: string, params: Record<string, string | number>}>;
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  const { language } = useLanguageContext();
  
  const getIcon = (recommendation: {key: string, params: Record<string, string | number>}) => {
    if (recommendation.key.includes('focusOnCategory')) return <TrendingUp className="w-4 h-4" />;
    if (recommendation.key.includes('useEasyApply')) return <Zap className="w-4 h-4" />;
    if (recommendation.key.includes('prioritizeRecentJobs')) return <Clock className="w-4 h-4" />;
    return <Lightbulb className="w-4 h-4" />;
  };

  const getColor = (recommendation: {key: string, params: Record<string, string | number>}) => {
    if (recommendation.key.includes('focusOnCategory')) return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    if (recommendation.key.includes('useEasyApply')) return 'bg-green-500/10 text-green-600 border-green-500/20';
    if (recommendation.key.includes('prioritizeRecentJobs')) return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
    return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
  };

  return (
    <Card className="apple-watch-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          {t('recommendations.title', language)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors"
            >
              <div className={`p-2 rounded-full border ${getColor(recommendation)}`}>
                {getIcon(recommendation)}
              </div>
              <p className="text-sm leading-relaxed flex-1">
                {t(recommendation.key, language, recommendation.params)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
