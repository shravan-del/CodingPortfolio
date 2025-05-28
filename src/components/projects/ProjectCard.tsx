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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/projects/${slug}`} className="block relative">
        <div className="relative h-48 w-full overflow-hidden">
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg font-medium">{title[0]}</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
              className="px-2 py-1 text-xs font-medium bg-blue-100/80 dark:bg-blue-900/80 text-blue-800 dark:text-blue-100 rounded-full backdrop-blur-sm"
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

        <div className="flex gap-4 mt-auto">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FaGithub className="text-lg" />
              <span>Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                isHuggingFaceProject
                  ? 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300'
                  : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
              }`}
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>{isHuggingFaceProject ? '🤗 Demo' : 'Live Demo'}</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 