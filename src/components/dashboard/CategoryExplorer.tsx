'use client';

import { useLanguageContext } from '@/components/providers/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { realCategoryDetails, getCareerSlug } from '@/lib/real-category-details';
import { t } from '@/lib/i18n';
import { CategoryDetails, CategoryStats } from '@/types/job';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Grid3X3,
  List,
  Search,
  TrendingUp,
  Users
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CategoryExplorerProps {
  categoryStats: Record<string, CategoryStats>;
}

type SortOption = 'jobs' | 'salary' | 'recent' | 'name';
type FilterOption = 'all' | 'beginner' | 'intermediate' | 'advanced';

export function CategoryExplorer({ categoryStats }: CategoryExplorerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('jobs');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const router = useRouter();
  const { language } = useLanguageContext();

  // Handle career card click with scroll position preservation
  const handleCareerClick = (careerSlug: string) => {
    const scrollPosition = window.scrollY;
    router.push(`/career/${careerSlug}?scroll=${scrollPosition}`);
  };

  // Filter and sort categories
  const filteredCategories = Object.entries(realCategoryDetails)
    .filter(([categoryName, details]) => {
      const matchesSearch = categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           details.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterBy === 'all' || details.difficulty.toLowerCase() === filterBy;
      return matchesSearch && matchesFilter;
    })
    .sort(([, a], [, b]) => {
      const statsA = categoryStats[a.name] || { Job_Count: 0, Avg_Salary: 0, Recent_Jobs: 0 };
      const statsB = categoryStats[b.name] || { Job_Count: 0, Avg_Salary: 0, Recent_Jobs: 0 };
      
      switch (sortBy) {
        case 'jobs':
          return statsB.Job_Count - statsA.Job_Count;
        case 'salary':
          return statsB.Avg_Salary - statsA.Avg_Salary;
        case 'recent':
          return statsB.Recent_Jobs - statsA.Recent_Jobs;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case 'High': return 'bg-emerald-100 text-emerald-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCareerFitIndicator = (details: CategoryDetails) => {
    const indicators = [];
    
    if (details.difficulty === 'Beginner') {
      indicators.push({ icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: t('category.greatForNewcomers', language) });
    }
    
    if (details.growthPotential === 'High') {
      indicators.push({ icon: <TrendingUp className="w-4 h-4 text-emerald-500" />, text: t('category.highGrowthPotential', language) });
    }
    
    if (details.remoteWorkPercentage >= 80) {
      indicators.push({ icon: <Users className="w-4 h-4 text-blue-500" />, text: t('category.remoteFriendly', language) });
    }
    
    if (details.salaryRange.includes('$150,000') || details.salaryRange.includes('$180,000')) {
      indicators.push({ icon: <DollarSign className="w-4 h-4 text-green-500" />, text: t('category.highEarningPotential', language) });
    }
    
    return indicators;
  };



  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {t('category.exploreTitle', language)}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('category.exploreDescription', language)}
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder={t('category.searchPlaceholder', language)}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as FilterOption)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="all">{t('category.allLevels', language)}</option>
            <option value="beginner">{t('category.beginner', language)}</option>
            <option value="intermediate">{t('category.intermediate', language)}</option>
            <option value="advanced">{t('category.advanced', language)}</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="jobs">{t('category.sortByJobs', language)}</option>
            <option value="salary">{t('category.sortBySalary', language)}</option>
            <option value="recent">{t('category.sortByRecent', language)}</option>
            <option value="name">{t('category.sortByName', language)}</option>
          </select>

          <div className="flex border border-gray-300 rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map(([categoryName, details]) => {
            const stats = categoryStats[categoryName] || { Job_Count: 0, Avg_Salary: 0, Recent_Jobs: 0 };
            const careerFitIndicators = getCareerFitIndicator(details);
            const careerSlug = getCareerSlug(categoryName);
            
            return (
              <Card 
                key={categoryName} 
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white border border-gray-200 group"
                onClick={() => handleCareerClick(careerSlug)}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between group-hover:text-sky-600 transition-colors">
                    {typeof details.name === 'string' && details.name.startsWith('career.') 
                      ? t(details.name, language) 
                      : details.name}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-2">
                    {(() => {
                      if (typeof details.description === 'string' && details.description.startsWith('career.')) {
                        const translation = t(details.description, language);
                        return Array.isArray(translation) ? translation.join(' ') : (translation as string);
                      }
                      return details.description || '';
                    })()}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Career Fit Indicators */}
                  <div className="space-y-2">
                    {careerFitIndicators.slice(0, 2).map((indicator, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                        {indicator.icon}
                        <span>{indicator.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-sky-500" />
                      <span className="font-medium">{stats.Job_Count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-green-500" />
                      <span className="font-medium">
                        {stats.Avg_Salary > 0 ? `$${(stats.Avg_Salary / 1000).toFixed(0)}k` : 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-500" />
                      <span className="font-medium">{stats.Recent_Jobs}</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1">
                    <Badge className={getDifficultyColor(details.difficulty)}>
                      {details.difficulty}
                    </Badge>
                    <Badge className={getGrowthColor(details.growthPotential)}>
                      <TrendingUp className="w-2 h-2 mr-1" />
                      {details.growthPotential}
                    </Badge>
                  </div>

                  {/* Time to Learn */}
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    <strong>{t('category.timeToLearn', language)}</strong> {details.averageTimeToLearn}
                  </div>

                  {/* View Details Button */}
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors">
                      {t('category.viewDetails', language)}
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCategories.map(([categoryName, details]) => {
            const stats = categoryStats[categoryName] || { Job_Count: 0, Avg_Salary: 0, Recent_Jobs: 0 };
            const careerFitIndicators = getCareerFitIndicator(details);
            const careerSlug = getCareerSlug(categoryName);
            
            return (
              <Card 
                key={categoryName} 
                className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02] bg-white border border-gray-200 group"
                onClick={() => handleCareerClick(careerSlug)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                          {typeof details.name === 'string' && details.name.startsWith('career.') 
                            ? t(details.name, language) 
                            : details.name}
                        </h3>
                        <Badge className={getDifficultyColor(details.difficulty)}>
                          {details.difficulty}
                        </Badge>
                        <Badge className={getGrowthColor(details.growthPotential)}>
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {details.growthPotential} {t('career.growth', language)}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-3">
                        {typeof details.description === 'string' && details.description.startsWith('career.') 
                          ? t(details.description, language) 
                          : details.description}
                      </p>
                      
                      {/* Career Fit Indicators */}
                      <div className="flex flex-wrap gap-3 mb-3">
                        {careerFitIndicators.map((indicator, index) => (
                          <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
                            {indicator.icon}
                            <span>{indicator.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{stats.Job_Count} {t('history.jobs', language)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{stats.Avg_Salary > 0 ? `$${stats.Avg_Salary.toLocaleString()}/yr` : 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{stats.Recent_Jobs} {(t('metrics.recentJobs', language) as string).toLowerCase()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{details.remoteWorkPercentage}% {t('career.remote', language)}</span>
                        </div>
                      </div>

                      {/* Time to Learn */}
                      <div className="text-sm text-gray-500 bg-gray-50 p-2 rounded inline-block">
                        <strong>{t('category.timeToLearn', language)}</strong> {details.averageTimeToLearn}
                      </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all mt-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* No Results */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">{t('category.noResults', language)}</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm('');
              setFilterBy('all');
            }}
            className="mt-4"
          >
            {t('category.clearFilters', language)}
          </Button>
        </div>
      )}
    </div>
  );
}
