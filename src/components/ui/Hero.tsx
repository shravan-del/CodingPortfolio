'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm Shravan Athikinasetti
              <span className="block text-blue-600 dark:text-blue-400">
                Software Developer & Computer Science Student
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A passionate software developer with experience in AI, full-stack development, and software engineering. Currently pursuing Computer Science at Virginia Tech with a 3.6 GPA.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
              <a
                href="https://www.linkedin.com/in/sathikinasetti"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder-profile.jpg"
              alt="Shravan Athikinasetti"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Tech stack pills */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'Machine Learning'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 