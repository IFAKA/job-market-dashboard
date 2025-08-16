'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CategoryDetails } from '@/types/job';
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
  Heart
} from 'lucide-react';

interface CategoryDetailsProps {
  categoryDetails: CategoryDetails;
  jobCount: number;
  avgSalary: number;
}

export function CategoryDetailsCard({ categoryDetails, jobCount, avgSalary }: CategoryDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
    
    if (categoryDetails.difficulty === 'Beginner') {
      score += 25;
      reasons.push('Great for newcomers');
    }
    
    if (categoryDetails.growthPotential === 'High') {
      score += 25;
      reasons.push('High growth potential');
    }
    
    if (categoryDetails.remoteWorkPercentage >= 80) {
      score += 20;
      reasons.push('Remote-friendly');
    }
    
    if (jobCount > 50) {
      score += 15;
      reasons.push('High job demand');
    }
    
    if (avgSalary > 80000) {
      score += 15;
      reasons.push('Competitive salary');
    }
    
    return { score, reasons };
  };

  const { score, reasons } = getCareerFitScore();

  return (
    <div className="w-full">
      {/* Is This Career Right for You? */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Target className="w-4 h-4 text-green-500" />
          Is This Career Right for You?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              You&apos;ll Love This If:
            </h5>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• You enjoy {categoryDetails.whatYouDo.toLowerCase().split(',')[0]}</li>
              <li>• You want to work {categoryDetails.remoteWorkPercentage >= 80 ? 'remotely' : 'in a collaborative environment'}</li>
              <li>• You&apos;re looking for {categoryDetails.growthPotential.toLowerCase()} growth opportunities</li>
              <li>• You can commit {categoryDetails.averageTimeToLearn} to learning</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              Consider Another Path If:
            </h5>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• You prefer {categoryDetails.difficulty === 'Beginner' ? 'more challenging work' : 'simpler tasks'}</li>
              <li>• You need immediate high income (entry-level salaries are lower)</li>
              <li>• You don&apos;t enjoy continuous learning</li>
              <li>• You prefer {categoryDetails.remoteWorkPercentage >= 80 ? 'office environments' : 'remote work'}</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* What You Do */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Target className="w-4 h-4 text-sky-500" />
          What You&apos;ll Do
        </h4>
        <p className="text-gray-600 text-sm">{categoryDetails.whatYouDo}</p>
      </div>

      <Separator className="mb-6" />

      {/* Required Skills */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Code className="w-4 h-4 text-sky-500" />
          Required Skills
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {categoryDetails.requiredSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Learning Path */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-sky-500" />
          Learning Path
        </h4>
        <div className="space-y-2">
          {categoryDetails.learningPath.map((step, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <div className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-xs font-medium">
                {index + 1}
              </div>
              <span className="text-gray-600">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Career Path */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-sky-500" />
            Entry Level Positions
          </h4>
          <div className="space-y-1">
            {categoryDetails.entryLevelPositions.map((position, index) => (
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
            {categoryDetails.advancedPositions.map((position, index) => (
              <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                {position}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Popular Technologies */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Code className="w-4 h-4 text-sky-500" />
          Popular Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {categoryDetails.popularTechnologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Resources */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-sky-500" />
          Learning Resources
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Recommended Courses</h5>
            <div className="space-y-1">
              {categoryDetails.resources.courses.slice(0, 3).map((course, index) => (
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
              {categoryDetails.resources.platforms.slice(0, 3).map((platform, index) => (
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
              {categoryDetails.resources.communities.slice(0, 3).map((community, index) => (
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
        <p className="text-gray-700 text-sm">{categoryDetails.careerProspects}</p>
      </div>
    </div>
  );
}
