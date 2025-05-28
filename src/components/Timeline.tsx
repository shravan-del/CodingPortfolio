'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BiCalendar, BiMap } from 'react-icons/bi';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={ref} className="relative py-16">
      {/* Progress Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
        <motion.div
          className="w-1 h-full bg-blue-200 dark:bg-blue-900 rounded"
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <div className="text-gray-600 dark:text-gray-300 mb-4">
                  <p>{experience.company} • {experience.location}</p>
                  <p className="text-sm">{experience.period}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {experience.description}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 