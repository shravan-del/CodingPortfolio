'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

// Get unique technologies from all projects
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTech));

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Projects
      </h1>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTech('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedTech === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          All
        </button>
        {allTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedTech === tech
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* No projects found message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600 dark:text-gray-400">
            No projects found with the selected technology.
          </h3>
        </div>
      )}
    </div>
  );
} 