import React from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

// Get unique technologies from all projects
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

export const metadata = {
  title: 'Projects - Shravan Athikinasetti',
  description: 'Explore my portfolio of projects in software development, AI/ML, and web development.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Projects
      </h1>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
} 