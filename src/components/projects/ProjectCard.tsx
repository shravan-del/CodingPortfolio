'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      {project.image && (
        <div className="relative h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'completed' 
              ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
              : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Development'}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.status === 'completed' && (
          <div className="flex gap-4 mt-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                <span>GitHub</span>
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        )}
        
        {project.status === 'in-development' && (
          <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-4">
            Links will be available once the project is completed
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 