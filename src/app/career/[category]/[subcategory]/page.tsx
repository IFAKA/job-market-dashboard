'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { realCategoryDetails, subcategoryDetails, getCareerSlug } from '@/lib/real-category-details';
import { CategoryDetails } from '@/types/job';
import { CategoryStats } from '@/types/job';
import { getSalaryData, formatSalary } from '@/lib/salary-data';
import { useCountry } from '@/components/providers/country-provider';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';
import { 
  ArrowLeft,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Star,
  Code,
  Briefcase,
  Globe,
  Target,
  BookOpen,
  ExternalLink,
  Heart,
  BarChart3,
  Calendar,
  GraduationCap
} from 'lucide-react';

export default function SubcategoryPage() {
  const resolvedParams = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categorySlug = resolvedParams.category as string;
  const subcategorySlug = resolvedParams.subcategory as string;
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
  const subcategories: Record<string, CategoryDetails> = subcategoryDetails[categoryKey] || {};
  
  // Find the subcategory details by slug
  const subcategoryKey = Object.keys(subcategories).find(
    key => getCareerSlug(key) === subcategorySlug
  );
  
  if (!subcategoryKey) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('career.specializationNotFound', language)}
          </h1>
          <p className="text-gray-600 mb-6">
            {t('career.specializationNotFoundDesc', language)}
          </p>
          <Button onClick={() => router.push(`/career/${categorySlug}`)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {(typeof t('career.backToCategory', language) === 'string' 
              ? t('career.backToCategory', language) as string 
              : (t('career.backToCategory', language) as string[])[0]
            ).replace('{category}', 
              typeof categoryDetails.name === 'string' && categoryDetails.name.startsWith('career.') 
                ? (typeof t(categoryDetails.name, language) === 'string' 
                    ? t(categoryDetails.name, language) as string 
                    : (t(categoryDetails.name, language) as string[])[0])
                : categoryDetails.name
            )}
          </Button>
        </div>
      </div>
    );
  }

  const currentSubcategoryDetails = subcategories[subcategoryKey];
  
  // Get actual salary data
  const salaryData = getSalaryData(selectedCountry, categoryKey);
  
  // Mock data for other stats - in real app this would come from API
  const mockStats: CategoryStats = {
    Job_Count: Math.round(1250 * 0.3), // 30% of category jobs
    Avg_Salary: salaryData ? Math.round((salaryData.traineeSalary + salaryData.juniorSalary) / 2) : 85000,
    Avg_Max_Salary: 95000,
    Recent_Jobs: Math.round(45 * 0.3),
    Easy_Apply_Count: Math.round(800 * 0.3),
    Median_Salary: 82000,
    Remote_Jobs: Math.round(1125 * 0.3),
    Onsite_Jobs: Math.round(125 * 0.3),
    Easy_Apply_Jobs: Math.round(800 * 0.3),
    Senior_Level_Jobs: Math.round(300 * 0.3),
    Entry_Level_Jobs: Math.round(950 * 0.3)
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

  const getCareerFitScore = () => {
    let score = 0;
    const reasons = [];
    
    if (currentSubcategoryDetails.difficulty === 'Beginner') {
      score += 25;
      reasons.push(t('career.greatForNewcomers', language));
    }
    
    if (currentSubcategoryDetails.growthPotential === 'High') {
      score += 25;
      reasons.push(t('career.highGrowthPotential', language));
    }
    
    if (currentSubcategoryDetails.remoteWorkPercentage >= 80) {
      score += 20;
      reasons.push(t('career.remoteFriendly', language));
    }
    
    if (mockStats.Job_Count > 50) {
      score += 15;
      reasons.push(t('career.highJobDemand', language));
    }
    
    if (mockStats.Avg_Salary > 80000) {
      score += 15;
      reasons.push(t('career.competitiveSalary', language));
    }
    
    return { score, reasons };
  };

  const { score, reasons } = getCareerFitScore();

  const handleBackClick = () => {
    // Get the scroll position from URL params
    const scrollPosition = searchParams.get('scroll');
    
    if (scrollPosition) {
      // Store the scroll position in sessionStorage for more reliable restoration
      sessionStorage.setItem('dashboardScrollPosition', scrollPosition);
    }
    
    // Navigate back to category page
    router.push(`/career/${categorySlug}`);
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
          {(typeof t('career.backToCategory', language) === 'string' 
            ? t('career.backToCategory', language) as string 
            : (t('career.backToCategory', language) as string[])[0]
          ).replace('{category}', 
            typeof categoryDetails.name === 'string' && categoryDetails.name.startsWith('career.') 
              ? (typeof t(categoryDetails.name, language) === 'string' 
                  ? t(categoryDetails.name, language) as string 
                  : (t(categoryDetails.name, language) as string[])[0])
              : categoryDetails.name
          )}
        </button>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-900">{currentSubcategoryDetails.name}</h1>
          <Star className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-4xl">{currentSubcategoryDetails.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <Badge className="text-sm bg-sky-100 text-sky-800">
            {categoryDetails.name}
          </Badge>
          <span className="text-gray-400">→</span>
          <Badge className="text-sm bg-purple-100 text-purple-800">
            {currentSubcategoryDetails.name}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Career Fit Score */}
          <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                {t('career.fitScore', language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl font-bold text-sky-600">{score}%</div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{t('career.basedOnPreferences', language)}</div>
                  <div className="text-xs text-gray-500">{t('career.andMarketData', language)}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {reasons.map((reason, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {reason}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Is This Career Right for You? */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                {t('career.rightForYou', language)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {t('career.youllLoveThis', language)}:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• {t('career.youEnjoy', language)} {currentSubcategoryDetails.whatYouDo.toLowerCase().split(',')[0]}</li>
                    <li>• {t('career.youWantToWork', language)} {currentSubcategoryDetails.remoteWorkPercentage >= 80 ? t('career.remotely', language) : t('career.inCollaborativeEnvironment', language)}</li>
                    <li>• {t('career.youreLookingFor', language)} {currentSubcategoryDetails.growthPotential.toLowerCase()} {t('career.growthOpportunities', language)}</li>
                    <li>• {t('career.youCanCommit', language)} {currentSubcategoryDetails.averageTimeToLearn} {t('career.toLearning', language)}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    {t('career.considerAnotherPath', language)}:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• {t('career.youPrefer', language)} {currentSubcategoryDetails.difficulty === 'Beginner' ? t('career.moreChallengingWork', language) : t('career.simplerTasks', language)}</li>
                    <li>• {t('career.needImmediateHighIncome', language)}</li>
                    <li>• {t('career.dontEnjoyContinuousLearning', language)}</li>
                    <li>• {t('career.youPrefer', language)} {currentSubcategoryDetails.remoteWorkPercentage >= 80 ? t('career.officeEnvironments', language) : t('career.remoteWork', language)}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* What You Do */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-sky-500" />
              {t('career.whatYoullDo', language)}
            </h4>
            <p className="text-gray-600 text-sm">{currentSubcategoryDetails.whatYouDo}</p>
          </div>

          <Separator />

          {/* Required Skills */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-sky-500" />
              {t('career.requiredSkills', language)}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {(Array.isArray(currentSubcategoryDetails.requiredSkills) 
                ? currentSubcategoryDetails.requiredSkills 
                : [currentSubcategoryDetails.requiredSkills]
              ).map((skill: string, index: number) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Learning Path */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-500" />
              {t('career.learningPath', language)}
            </h4>
            <div className="space-y-2">
              {(Array.isArray(currentSubcategoryDetails.learningPath) 
                ? currentSubcategoryDetails.learningPath 
                : [currentSubcategoryDetails.learningPath]
              ).map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-3 text-sm">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                  <span className="text-gray-600">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Career Path */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-500" />
                {t('career.entryLevelPositions', language)}
              </h4>
              <div className="space-y-1">
                {currentSubcategoryDetails.entryLevelPositions.map((position: string, index: number) => (
                  <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    {position}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-sky-500" />
                {t('career.advancedPositions', language)}
              </h4>
              <div className="space-y-1">
                {currentSubcategoryDetails.advancedPositions.map((position: string, index: number) => (
                  <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    {position}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Popular Technologies */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-sky-500" />
              {t('career.popularTechnologies', language)}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(currentSubcategoryDetails.popularTechnologies) 
                ? currentSubcategoryDetails.popularTechnologies 
                : [currentSubcategoryDetails.popularTechnologies]
              ).map((tech: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-500" />
              {t('career.learningResources', language)}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">{t('career.recommendedCourses', language)}</h5>
                <div className="space-y-1">
                  {currentSubcategoryDetails.resources.courses.slice(0, 3).map((course: string, index: number) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center gap-1">
                      <div className="w-1 h-1 bg-sky-400 rounded-full"></div>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-800 mb-2">{t('career.practicePlatforms', language)}</h5>
                <div className="space-y-1">
                  {currentSubcategoryDetails.resources.platforms.slice(0, 3).map((platform: string, index: number) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-800 mb-2">{t('career.communities', language)}</h5>
                <div className="space-y-1">
                  {currentSubcategoryDetails.resources.communities.slice(0, 3).map((community: string, index: number) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center gap-1">
                      <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                      {community}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Career Prospects */}
          <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-sky-500" />
              {t('career.careerProspects', language)}
            </h4>
            <p className="text-gray-700 text-sm">{currentSubcategoryDetails.careerProspects}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-sky-500" />
                {t('career.marketOverview', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-sky-500" />
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
                  <Calendar className="w-4 h-4 text-orange-500" />
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
                <Badge className={getDifficultyColor(currentSubcategoryDetails.difficulty)}>
                  {currentSubcategoryDetails.difficulty}
                </Badge>
                <Badge className={getGrowthColor(currentSubcategoryDetails.growthPotential)}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {currentSubcategoryDetails.growthPotential} {t('career.growth', language)}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">{t('career.timeToLearn', language)}</span>
                  <span className="font-medium">{currentSubcategoryDetails.averageTimeToLearn}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">{t('career.salaryRange', language)}</span>
                  <span className="font-medium">{currentSubcategoryDetails.salaryRange}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-600">{t('career.remoteWork', language)}</span>
                  <span className="font-medium">{currentSubcategoryDetails.remoteWorkPercentage}%</span>
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
