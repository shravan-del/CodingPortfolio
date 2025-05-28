'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    slug,
    startDate,
    endDate
  } = project;

  const isHuggingFaceProject = liveUrl?.includes('huggingface.co');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative h-48 w-full">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">No image</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {(startDate || endDate) && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {startDate && <span>{startDate}</span>}
            {startDate && endDate && <span> - </span>}
            {endDate && <span>{endDate}</span>}
          </div>
        )}

        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${
                isHuggingFaceProject
                  ? 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300'
                  : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
              } transition-colors`}
            >
              {isHuggingFaceProject ? '🤗 Demo' : 'Live Demo'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 