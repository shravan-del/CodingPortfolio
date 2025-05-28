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

// Get unique technologies
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my portfolio of innovative projects spanning web development, machine learning, and more.
        </p>
      </motion.div>

      {/* Current Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Technologies Used</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {allTechnologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </section>
    </div>
  );
} 