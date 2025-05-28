'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BiCode, BiAtom, BiLayout, BiTerminal } from 'react-icons/bi';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface CategoryConfig {
  icon: IconType;
  color: string;
}

interface SkillsGraphProps {
  skills: Skill[];
}

type Categories = {
  [key: string]: CategoryConfig;
};

export const SkillsGraph: React.FC<SkillsGraphProps> = ({ skills }) => {
  const categories: Categories = {
    'Languages': { icon: BiCode, color: 'bg-blue-500' },
    'Quantum Languages': { icon: BiAtom, color: 'bg-purple-500' },
    'Frameworks': { icon: BiLayout, color: 'bg-green-500' },
    'Developer Tools': { icon: BiTerminal, color: 'bg-gray-500' }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getSkillLevelClass = (level: number): string => {
    if (level >= 90) return 'bg-blue-600';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-blue-400';
    return 'bg-blue-300';
  };

  return (
    <div className="space-y-8">
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
        const categoryConfig = categories[category] || {
          icon: BiCode,
          color: 'bg-gray-500'
        };
        const CategoryIcon = categoryConfig.icon;

        return (
          <div key={category} className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex items-center mb-6">
              <CategoryIcon className="w-5 h-5 mr-3 text-gray-700 dark:text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {category}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorySkills
                .sort((a, b) => b.level - a.level)
                .map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8 }}
                        className={`h-full rounded-full ${getSkillLevelClass(skill.level)}`}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}

      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {[
            { range: '90-100%', label: 'Expert' },
            { range: '80-89%', label: 'Advanced' },
            { range: '70-79%', label: 'Intermediate' },
            { range: '60-69%', label: 'Familiar' }
          ].map((level) => (
            <div key={level.range} className="text-gray-600 dark:text-gray-400">
              {level.range} - {level.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 