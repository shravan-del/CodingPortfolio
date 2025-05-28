'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

// Upcoming projects to showcase
const upcomingProjects = [
  {
    title: 'AI-Powered Personal Assistant',
    description: 'An advanced personal assistant powered by GPT-4 and custom ML models. Coming in Summer 2024.',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'React'],
    status: 'In Development'
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Real-time analytics and visualization platform for blockchain data. Launch expected Fall 2024.',
    technologies: ['Solidity', 'Web3.js', 'Next.js', 'D3.js'],
    status: 'Planning'
  }
];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Projects
          </h1>
          
          {/* Current Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          {/* Upcoming Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 