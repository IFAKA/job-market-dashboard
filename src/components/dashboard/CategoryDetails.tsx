'use client';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CategoryDetails } from '@/types/job';
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';
import {
  AlertCircle,
  BookOpen,
  CheckCircle,
  Code,
  GraduationCap,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';
// useState removed as it's not used

interface CategoryDetailsProps {
  categoryDetails: CategoryDetails;
  jobCount: number;
  avgSalary: number;
}

export function CategoryDetailsCard({ categoryDetails }: CategoryDetailsProps) {
  const { language } = useLanguageContext();

  return (
    <div className="w-full">
      {/* Is This Career Right for You? */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Target className="w-4 h-4 text-green-500" />
          {t('categoryDetails.isThisCareerRightForYou', language)}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              {t('categoryDetails.youllLoveThisIf', language)}
            </h5>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• {t('career.youEnjoy', language)} {typeof categoryDetails.whatYouDo === 'string' && categoryDetails.whatYouDo.startsWith('career.') 
                ? (t(categoryDetails.whatYouDo, language) as string).toLowerCase().split(',')[0] 
                : categoryDetails.whatYouDo.toLowerCase().split(',')[0]}</li>
              <li>• {t('career.youWantToWork', language)} {categoryDetails.remoteWorkPercentage >= 80 ? t('categoryDetails.remotely', language) : t('categoryDetails.inCollaborativeEnvironment', language)}</li>
              <li>• {t('career.youreLookingFor', language)} {categoryDetails.growthPotential.toLowerCase()} {t('categoryDetails.growthOpportunities', language)}</li>
              <li>• {t('career.youCanCommit', language)} {categoryDetails.averageTimeToLearn} {t('categoryDetails.toLearning', language)}</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              {t('categoryDetails.considerAnotherPathIf', language)}
            </h5>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• {t('career.youPrefer', language)} {categoryDetails.difficulty === 'Beginner' ? t('categoryDetails.moreChallengingWork', language) : t('categoryDetails.simplerTasks', language)}</li>
              <li>• {t('career.needImmediateHighIncome', language)}</li>
              <li>• {t('career.dontEnjoyContinuousLearning', language)}</li>
              <li>• {t('career.youPrefer', language)} {categoryDetails.remoteWorkPercentage >= 80 ? t('categoryDetails.officeEnvironments', language) : t('categoryDetails.remoteWork', language)}</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* What You Do */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Target className="w-4 h-4 text-sky-500" />
          {t('categoryDetails.whatYoullDo', language)}
        </h4>
        <p className="text-gray-600 text-sm">
          {typeof categoryDetails.whatYouDo === 'string' && categoryDetails.whatYouDo.startsWith('career.') 
            ? t(categoryDetails.whatYouDo, language) 
            : categoryDetails.whatYouDo}
        </p>
      </div>

      <Separator className="mb-6" />

      {/* Required Skills */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Code className="w-4 h-4 text-sky-500" />
          {t('categoryDetails.requiredSkills', language)}
        </h4>
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

      <Separator className="mb-6" />

      {/* Learning Path */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-sky-500" />
          {t('categoryDetails.learningPath', language)}
        </h4>
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

      <Separator className="mb-6" />

      {/* Career Path */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-500" />
              {t('categoryDetails.entryLevelPositions', language)}
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
              {t('categoryDetails.advancedPositions', language)}
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
          {t('categoryDetails.popularTechnologies', language)}
        </h4>
        <div className="flex flex-wrap gap-2">
          {(() => {
            const techs = typeof categoryDetails.popularTechnologies === 'string' && categoryDetails.popularTechnologies.startsWith('career.') 
              ? (t(categoryDetails.popularTechnologies, language) as string[]) 
              : categoryDetails.popularTechnologies;
            return Array.isArray(techs) ? techs.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            )) : null;
          })()}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Resources */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-sky-500" />
          {t('categoryDetails.learningResources', language)}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">{t('categoryDetails.recommendedCourses', language)}</h5>
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
            <h5 className="font-medium text-gray-800 mb-2">{t('categoryDetails.practicePlatforms', language)}</h5>
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
            <h5 className="font-medium text-gray-800 mb-2">{t('categoryDetails.communities', language)}</h5>
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
          {t('categoryDetails.careerProspects', language)}
        </h4>
        <p className="text-gray-700 text-sm">
          {typeof categoryDetails.careerProspects === 'string' && categoryDetails.careerProspects.startsWith('career.') 
            ? t(categoryDetails.careerProspects, language) 
            : categoryDetails.careerProspects}
        </p>
      </div>
    </div>
  );
}
