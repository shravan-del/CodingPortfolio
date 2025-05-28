'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { projects } from '@/data/projects';
import { ProjectCard } from './projects/ProjectCard';

const ProjectShowcase: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectShowcase; 