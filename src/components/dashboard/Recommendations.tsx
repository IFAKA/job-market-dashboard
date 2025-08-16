import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, TrendingUp, Zap, Clock } from 'lucide-react';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';

interface RecommendationsProps {
  recommendations: string[];
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  const { language } = useLanguageContext();
  
  const getIcon = (recommendation: string) => {
    if (recommendation.includes('Focus on') || recommendation.includes('Enfócate en')) return <TrendingUp className="w-4 h-4" />;
    if (recommendation.includes('Easy Apply') || recommendation.includes('Aplicación Fácil')) return <Zap className="w-4 h-4" />;
    if (recommendation.includes('Recent Jobs') || recommendation.includes('Trabajos Recientes')) return <Clock className="w-4 h-4" />;
    return <Lightbulb className="w-4 h-4" />;
  };

  const getColor = (recommendation: string) => {
    if (recommendation.includes('Focus on') || recommendation.includes('Enfócate en')) return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    if (recommendation.includes('Easy Apply') || recommendation.includes('Aplicación Fácil')) return 'bg-green-500/10 text-green-600 border-green-500/20';
    if (recommendation.includes('Recent Jobs') || recommendation.includes('Trabajos Recientes')) return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
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
                {recommendation}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
