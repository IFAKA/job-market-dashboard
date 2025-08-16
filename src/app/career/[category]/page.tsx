'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { realCategoryDetails, subcategoryDetails, getCareerSlug } from '@/lib/real-category-details';
import { CategoryStats } from '@/types/job';
import { getSalaryData, formatSalary } from '@/lib/salary-data';
import { useCountry } from '@/components/providers/country-provider';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';
import { 
  ArrowLeft,
  ArrowRight,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Code,
  Briefcase,
  Globe,
  Target,
  BookOpen,
  ExternalLink
} from 'lucide-react';


export default function CategoryPage() {
  const resolvedParams = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categorySlug = resolvedParams.category as string;
  const { selectedCountry } = useCountry();
  const { language } = useLanguageContext();
  
  // Find the category details by slug
  const categoryKey = Object.keys(realCategoryDetails).find(
    key => getCareerSlug(key) === categorySlug
  );
  
  if (!categoryKey) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('career.notFound', language)}</h1>
          <p className="text-gray-600 mb-6">{t('career.notFoundDesc', language)}</p>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('career.goBack', language)}
          </Button>
        </div>
      </div>
    );
  }

  const categoryDetails = realCategoryDetails[categoryKey];
  const subcategories = subcategoryDetails[categoryKey] || {};
  
  // Get actual salary data
  const salaryData = getSalaryData(selectedCountry, categoryKey);
  
  // Mock data for other stats - in real app this would come from API
  const mockStats: CategoryStats = {
    Job_Count: 1250,
    Avg_Salary: salaryData ? Math.round((salaryData.traineeSalary + salaryData.juniorSalary) / 2) : 85000,
    Avg_Max_Salary: 95000,
    Recent_Jobs: 45,
    Easy_Apply_Count: 800,
    Median_Salary: 82000,
    Remote_Jobs: salaryData ? 1125 : 1125,
    Onsite_Jobs: salaryData ? 125 : 125,
    Easy_Apply_Jobs: 800,
    Senior_Level_Jobs: 300,
    Entry_Level_Jobs: 950
  };

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

  const handleBackClick = () => {
    // Get the scroll position from URL params
    const scrollPosition = searchParams.get('scroll');
    
    if (scrollPosition) {
      // Store the scroll position in sessionStorage for more reliable restoration
      sessionStorage.setItem('dashboardScrollPosition', scrollPosition);
    }
    
    // Navigate back
    router.back();
  };

  const handleSubcategoryClick = (subcategorySlug: string) => {
    const scrollPosition = window.scrollY;
    router.push(`/career/${categorySlug}/${subcategorySlug}?scroll=${scrollPosition}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={handleBackClick}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('career.backToPaths', language)}
        </button>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {typeof categoryDetails.name === 'string' && categoryDetails.name.startsWith('career.') 
              ? t(categoryDetails.name, language) 
              : categoryDetails.name}
          </h1>
          <Star className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-4xl">
          {typeof categoryDetails.description === 'string' && categoryDetails.description.startsWith('career.') 
            ? t(categoryDetails.description, language) 
            : categoryDetails.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Category Overview */}
          <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-500" />
                {t('career.categoryOverview', language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {t('career.whatYoullDo', language)}:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {typeof categoryDetails.whatYouDo === 'string' && categoryDetails.whatYouDo.startsWith('career.') 
                      ? t(categoryDetails.whatYouDo, language) 
                      : categoryDetails.whatYouDo}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    {t('career.careerProspects', language)}:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {typeof categoryDetails.careerProspects === 'string' && categoryDetails.careerProspects.startsWith('career.') 
                      ? t(categoryDetails.careerProspects, language) 
                      : categoryDetails.careerProspects}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Subcategories */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-sky-500" />
              {t('career.specializations', language)}
            </h2>
            
            {Object.keys(subcategories).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(subcategories).map(([subcategoryKey, subcategoryDetails]) => {
                  const subcategorySlug = getCareerSlug(subcategoryKey);
                  
                  return (
                    <Card 
                      key={subcategoryKey}
                      className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white border border-gray-200 group"
                      onClick={() => handleSubcategoryClick(subcategorySlug)}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between group-hover:text-sky-600 transition-colors">
                          {typeof subcategoryDetails.name === 'string' && subcategoryDetails.name.startsWith('career.') 
                            ? t(subcategoryDetails.name, language) 
                            : subcategoryDetails.name}
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                          {typeof subcategoryDetails.description === 'string' && subcategoryDetails.description.startsWith('career.') 
                            ? t(subcategoryDetails.description, language) 
                            : subcategoryDetails.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-sky-500" />
                            <span className="font-medium">{Math.round(mockStats.Job_Count * 0.3)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3 text-green-500" />
                            <span className="font-medium">
                              {subcategoryDetails.salaryRange.split(' - ')[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-orange-500" />
                            <span className="font-medium">{Math.round(mockStats.Recent_Jobs * 0.3)}</span>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-1">
                          <Badge className={getDifficultyColor(subcategoryDetails.difficulty)}>
                            {subcategoryDetails.difficulty}
                          </Badge>
                          <Badge className={getGrowthColor(subcategoryDetails.growthPotential)}>
                            <TrendingUp className="w-2 h-2 mr-1" />
                            {subcategoryDetails.growthPotential}
                          </Badge>
                        </div>

                        {/* Time to Learn */}
                        <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                          <strong>{t('career.timeToLearn', language)}</strong> {subcategoryDetails.averageTimeToLearn}
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
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-8 text-center">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {t('career.noSpecializations', language)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('career.noSpecializationsDescription', language)}
                  </p>
                  <Button 
                    onClick={() => router.push(`/career/${categorySlug}/general?scroll=${window.scrollY}`)}
                    className="bg-sky-600 hover:bg-sky-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('career.viewGeneralPath', language)}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          <Separator />

          {/* Required Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-sky-500" />
              {t('career.requiredSkills', language)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {(() => {
                const skills = typeof categoryDetails.requiredSkills === 'string' && categoryDetails.requiredSkills.startsWith('career.') 
                  ? (t(categoryDetails.requiredSkills, language) as string[]) 
                  : categoryDetails.requiredSkills;
                return Array.isArray(skills) ? skills.map((skill: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                    {skill}
                  </div>
                )) : null;
              })()}
            </div>
          </div>

          <Separator />

          {/* Learning Path */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-500" />
              {t('career.learningPath', language)}
            </h3>
            <div className="space-y-2">
              {(() => {
                const steps = typeof categoryDetails.learningPath === 'string' && categoryDetails.learningPath.startsWith('career.') 
                  ? (t(categoryDetails.learningPath, language) as string[]) 
                  : categoryDetails.learningPath;
                return Array.isArray(steps) ? steps.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                    <span className="text-gray-600">{step}</span>
                  </div>
                )) : null;
              })()}
            </div>
          </div>

          <Separator />

          {/* Popular Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-sky-500" />
              {t('career.popularTechnologies', language)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(() => {
                const technologies = typeof categoryDetails.popularTechnologies === 'string' && categoryDetails.popularTechnologies.startsWith('career.') 
                  ? (t(categoryDetails.popularTechnologies, language) as string[]) 
                  : categoryDetails.popularTechnologies;
                return Array.isArray(technologies) ? technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                )) : null;
              })()}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-500" />
                {t('career.marketOverview', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-500" />
                  <span className="text-sm text-gray-600">{t('metrics.totalJobs', language)}</span>
                </div>
                <span className="font-semibold text-gray-900">{mockStats.Job_Count.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{t('career.avgSalary', language)}</span>
                </div>
                <span className="font-semibold text-gray-900">
                  {salaryData ? formatSalary(mockStats.Avg_Salary, selectedCountry) : 'N/A'}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600">{t('metrics.remoteJobs', language)}</span>
                </div>
                <span className="font-semibold text-gray-900">{mockStats.Remote_Jobs?.toLocaleString() || 'N/A'}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">{t('metrics.recentJobs', language)}</span>
                </div>
                <span className="font-semibold text-gray-900">{mockStats.Recent_Jobs}</span>
              </div>
            </CardContent>
          </Card>

          {/* Key Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-sky-500" />
                {t('career.keyInformation', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className={getDifficultyColor(categoryDetails.difficulty)}>
                  {categoryDetails.difficulty}
                </Badge>
                <Badge className={getGrowthColor(categoryDetails.growthPotential)}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {categoryDetails.growthPotential} {t('career.growth', language)}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">{t('career.timeToLearn', language)}</span>
                  <span className="font-medium">{categoryDetails.averageTimeToLearn}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">{t('career.salaryRange', language)}</span>
                  <span className="font-medium">{categoryDetails.salaryRange}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-600">{t('career.remoteWork', language)}</span>
                  <span className="font-medium">{categoryDetails.remoteWorkPercentage}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-sky-500" />
                {t('career.getStarted', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="lg">
                <BookOpen className="w-4 h-4 mr-2" />
                {t('career.startLearningPath', language)}
              </Button>
              <Button variant="outline" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                {t('career.joinCommunity', language)}
              </Button>
              <Button variant="outline" className="w-full">
                <Briefcase className="w-4 h-4 mr-2" />
                {t('career.viewJobOpenings', language)}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
