'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  if (!project) {
    return null;
  }

  const {
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    category,
    startDate,
    endDate,
    status
  } = project;

  const isHuggingFaceProject = liveUrl?.includes('huggingface.co');
  const isCompleted = status === 'completed';

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-300 ${
              isCompleted ? 'group-hover:scale-105' : 'opacity-75'
            }`}
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {category && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded">
                {category}
              </span>
            )}
            <span 
              className={`px-2 py-1 text-xs font-medium rounded ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-yellow-500 text-white'
              }`}
            >
              {isCompleted ? 'Completed' : 'In Development'}
            </span>
          </div>
          {isHuggingFaceProject && isCompleted && (
            <span className="absolute top-4 left-4 px-2 py-1 text-xs font-medium bg-yellow-500 text-white rounded flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 95 88" fill="currentColor">
                <path d="M47.2,0.4c-17.4,0-31.5,14.1-31.5,31.5c0,14.4,9.7,26.6,22.9,30.3v25.4h17.2V62.2 c13.2-3.7,22.9-15.9,22.9-30.3C78.7,14.5,64.6,0.4,47.2,0.4z"/>
              </svg>
              Hugging Face Space
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        {(startDate || endDate) && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {startDate && format(new Date(startDate), 'MMM yyyy')}
            {endDate && ` - ${format(new Date(endDate), 'MMM yyyy')}`}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {isCompleted ? (
            <>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {isHuggingFaceProject ? (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 95 88" fill="currentColor">
                        <path d="M47.2,0.4c-17.4,0-31.5,14.1-31.5,31.5c0,14.4,9.7,26.6,22.9,30.3v25.4h17.2V62.2 c13.2-3.7,22.9-15.9,22.9-30.3C78.7,14.5,64.6,0.4,47.2,0.4z"/>
                      </svg>
                      View on Hugging Face
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Live Demo
                    </>
                  )}
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center w-full py-4 px-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <svg
                className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Project Coming Soon
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                This project is currently in development
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 