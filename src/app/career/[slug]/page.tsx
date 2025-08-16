'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CountrySelector } from '@/components/ui/country-selector';
import { categoryDetails } from '@/lib/category-details';
import { CategoryStats } from '@/types/job';
import { getSalaryData, formatSalary } from '@/lib/salary-data';
import { 
  BookOpen, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Code, 
  Briefcase,
  GraduationCap,
  Globe,
  Target,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Star,
  Heart,
  BarChart3,
  PieChart,
  Calendar,
  MapPin,
  Building2,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

interface CareerPageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to generate slugs consistently
const getCareerSlug = (careerName: string) => {
  return careerName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

export default function CareerPage({ params }: CareerPageProps) {
  const resolvedParams = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = resolvedParams.slug as string;
  const [selectedCountry, setSelectedCountry] = useState<string>('spain');
  
  // Find the career details by slug
  const careerKey = Object.keys(categoryDetails).find(
    key => getCareerSlug(key) === slug
  );
  
  if (!careerKey) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Career Path Not Found</h1>
          <p className="text-gray-600 mb-6">The career path you&apos;re looking for doesn&apos;t exist.</p>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const careerDetails = categoryDetails[careerKey];
  
  // Mock data for visualizations - in real app this would come from API
  const mockStats: CategoryStats = {
    Job_Count: 1250,
    Avg_Salary: 85000,
    Avg_Max_Salary: 95000,
    Recent_Jobs: 45,
    Easy_Apply_Count: 800,
    Median_Salary: 82000,
    Remote_Jobs: 1125,
    Onsite_Jobs: 125,
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

  const getCareerFitScore = () => {
    let score = 0;
    const reasons = [];
    
    if (careerDetails.difficulty === 'Beginner') {
      score += 25;
      reasons.push('Great for newcomers');
    }
    
    if (careerDetails.growthPotential === 'High') {
      score += 25;
      reasons.push('High growth potential');
    }
    
    if (careerDetails.remoteWorkPercentage >= 80) {
      score += 20;
      reasons.push('Remote-friendly');
    }
    
    if (mockStats.Job_Count > 50) {
      score += 15;
      reasons.push('High job demand');
    }
    
    if (mockStats.Avg_Salary > 80000) {
      score += 15;
      reasons.push('Competitive salary');
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
    
    // Navigate back
    router.back();
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
          Back to Career Paths
        </button>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-900">{careerDetails.name}</h1>
          <Star className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-4xl">{careerDetails.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Career Fit Score */}
          <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Career Fit Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl font-bold text-sky-600">{score}%</div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Based on your preferences</div>
                  <div className="text-xs text-gray-500">and market data</div>
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

          {/* Salary Information */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                Salarios Promedio – Trainee y Junior
              </CardTitle>
              <CardDescription>
                {selectedCountry === 'spain' ? 'España (EUR/mes)' : 'Argentina (ARS/mes)'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {(() => {
                const salaryData = getSalaryData(selectedCountry, careerKey);
                if (!salaryData) {
                  return (
                    <div className="text-center text-gray-500 py-4">
                      No hay datos de salario disponibles para esta carrera en {selectedCountry === 'spain' ? 'España' : 'Argentina'}
                    </div>
                  );
                }
                
                return (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-gray-800 mb-2">Trainee</h4>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {formatSalary(salaryData.traineeSalary, selectedCountry)}
                        </div>
                        <div className="text-sm text-gray-600">
                          Rango: {salaryData.traineeRange}
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-gray-800 mb-2">Junior</h4>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {formatSalary(salaryData.juniorSalary, selectedCountry)}
                        </div>
                        <div className="text-sm text-gray-600">
                          Rango: {salaryData.juniorRange}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-gray-800 mb-2">Distribución Remoto/Sitio/Híbrido</h4>
                      <div className="text-sm text-gray-600">
                        {salaryData.remoteDistribution}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>

          {/* Is This Career Right for You? */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                Is This Career Right for You?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    You&apos;ll Love This If:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• You enjoy {careerDetails.whatYouDo.toLowerCase().split(',')[0]}</li>
                    <li>• You want to work {careerDetails.remoteWorkPercentage >= 80 ? 'remotely' : 'in a collaborative environment'}</li>
                    <li>• You&apos;re looking for {careerDetails.growthPotential.toLowerCase()} growth opportunities</li>
                    <li>• You can commit {careerDetails.averageTimeToLearn} to learning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    Consider Another Path If:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• You prefer {careerDetails.difficulty === 'Beginner' ? 'more challenging work' : 'simpler tasks'}</li>
                    <li>• You need immediate high income (entry-level salaries are lower)</li>
                    <li>• You don&apos;t enjoy continuous learning</li>
                    <li>• You prefer {careerDetails.remoteWorkPercentage >= 80 ? 'office environments' : 'remote work'}</li>
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
              What You&apos;ll Do
            </h4>
            <p className="text-gray-600 text-sm">{careerDetails.whatYouDo}</p>
          </div>

          <Separator />

          {/* Required Skills */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-sky-500" />
              Required Skills
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {careerDetails.requiredSkills.map((skill, index) => (
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
              Learning Path
            </h4>
            <div className="space-y-2">
              {careerDetails.learningPath.map((step, index) => (
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
                Entry Level Positions
              </h4>
              <div className="space-y-1">
                {careerDetails.entryLevelPositions.map((position, index) => (
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
                Advanced Positions
              </h4>
              <div className="space-y-1">
                {careerDetails.advancedPositions.map((position, index) => (
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
              Popular Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {careerDetails.popularTechnologies.map((tech, index) => (
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
              Learning Resources
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Recommended Courses</h5>
                <div className="space-y-1">
                  {careerDetails.resources.courses.slice(0, 3).map((course, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center gap-1">
                      <div className="w-1 h-1 bg-sky-400 rounded-full"></div>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Practice Platforms</h5>
                <div className="space-y-1">
                  {careerDetails.resources.platforms.slice(0, 3).map((platform, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Communities</h5>
                <div className="space-y-1">
                  {careerDetails.resources.communities.slice(0, 3).map((community, index) => (
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
              Career Prospects
            </h4>
            <p className="text-gray-700 text-sm">{careerDetails.careerProspects}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Country Selector */}
          <CountrySelector
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
          />

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-sky-500" />
                Market Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-sky-500" />
                  <span className="text-sm text-gray-600">Total Jobs</span>
                </div>
                <span className="font-semibold text-gray-900">{mockStats.Job_Count.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Avg Salary</span>
                </div>
                <span className="font-semibold text-gray-900">${mockStats.Avg_Salary.toLocaleString()}/yr</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600">Remote Jobs</span>
                </div>
                <span className="font-semibold text-gray-900">{mockStats.Remote_Jobs?.toLocaleString() || 'N/A'}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">Recent Jobs</span>
                </div>
                <span className="font-semibold text-gray-900">{mockStats.Recent_Jobs}</span>
              </div>
            </CardContent>
          </Card>

          {/* Job Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-sky-500" />
                Job Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Remote</span>
                <span className="font-semibold text-gray-900">{Math.round(((mockStats.Remote_Jobs || 0) / mockStats.Job_Count) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full" 
                  style={{ width: `${((mockStats.Remote_Jobs || 0) / mockStats.Job_Count) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">On-site</span>
                <span className="font-semibold text-gray-900">{Math.round(((mockStats.Onsite_Jobs || 0) / mockStats.Job_Count) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${((mockStats.Onsite_Jobs || 0) / mockStats.Job_Count) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Level */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-500" />
                Experience Level
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Entry Level</span>
                <span className="font-semibold text-gray-900">{Math.round(((mockStats.Entry_Level_Jobs || 0) / mockStats.Job_Count) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${((mockStats.Entry_Level_Jobs || 0) / mockStats.Job_Count) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Senior Level</span>
                <span className="font-semibold text-gray-900">{Math.round(((mockStats.Senior_Level_Jobs || 0) / mockStats.Job_Count) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full" 
                  style={{ width: `${((mockStats.Senior_Level_Jobs || 0) / mockStats.Job_Count) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Key Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-sky-500" />
                Key Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className={getDifficultyColor(careerDetails.difficulty)}>
                  {careerDetails.difficulty}
                </Badge>
                <Badge className={getGrowthColor(careerDetails.growthPotential)}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {careerDetails.growthPotential} Growth
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">Time to Learn:</span>
                  <span className="font-medium">{careerDetails.averageTimeToLearn}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Salary Range:</span>
                  <span className="font-medium">{careerDetails.salaryRange}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-600">Remote Work:</span>
                  <span className="font-medium">{careerDetails.remoteWorkPercentage}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-sky-500" />
                Get Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="lg">
                <BookOpen className="w-4 h-4 mr-2" />
                Start Learning Path
              </Button>
              <Button variant="outline" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Join Community
              </Button>
              <Button variant="outline" className="w-full">
                <Briefcase className="w-4 h-4 mr-2" />
                View Job Openings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
