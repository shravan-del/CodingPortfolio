'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { projects } from '@/data/projects';
import { ProjectCard } from './projects/ProjectCard';

const ProjectShowcase: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Note: Most projects are currently in development. Links will be available once they are completed.
      </div>
    </div>
  );
};

export default ProjectShowcase; 