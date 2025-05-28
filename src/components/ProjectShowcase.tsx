'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiLinkExternal, BiCode, BiPlay } from 'react-icons/bi';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  video?: string;
}

const projects: Project[] = [
  {
    id: 'reddit-clone',
    title: 'Simple Reddit',
    description: 'A full-stack Reddit clone with user authentication, post creation, and comment functionality. Built with React, Flask, and SQL.',
    image: '/projects/reddit-clone.png',
    technologies: ['React', 'Flask', 'SQL', 'Authentication'],
    github: 'https://github.com/yourusername/reddit-clone',
    liveDemo: 'https://reddit-clone.yourdomain.com'
  },
  {
    id: 'trading-ai',
    title: 'Trading AI Recommendation Tool',
    description: 'AI-powered software platform that optimizes product recommendations based on market data using advanced algorithms.',
    image: '/projects/trading-ai.png',
    technologies: ['TypeScript', 'React', 'SparkAI', 'Firebase'],
    github: 'https://github.com/yourusername/trading-ai',
    video: 'https://youtube.com/watch?v=your-demo'
  }
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`
                relative rounded-xl overflow-hidden shadow-lg
                transform-gpu transition-all duration-300
                ${hoveredProject === project.id ? 'scale-105' : 'scale-100'}
                bg-white dark:bg-gray-800
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <BiLinkExternal className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                    >
                      <BiCode className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                    >
                      <BiPlay className="w-5 h-5" />
                      <span>Demo Video</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20
                  opacity-0 transition-opacity duration-300
                  ${hoveredProject === project.id ? 'opacity-100' : ''}
                `}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 