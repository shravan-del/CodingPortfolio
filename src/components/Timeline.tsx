'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BiCalendar, BiMap } from 'react-icons/bi';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  location: string;
  category: 'education' | 'work' | 'achievement';
  icon?: string;
}

const events: TimelineEvent[] = [
  {
    date: '2024 - Present',
    title: 'Computer Science Student',
    description: 'Pursuing Bachelor\'s in Computer Science with a strong focus on AI/ML and software development. Current GPA: 3.6',
    location: 'Virginia Tech, Blacksburg, VA',
    category: 'education'
  },
  {
    date: 'Summer 2026',
    title: 'Software Engineering Intern',
    description: 'Future internship at RTX/Raytheon focusing on defense technology and systems development.',
    location: 'RTX/Raytheon',
    category: 'work'
  },
  {
    date: 'Spring 2026',
    title: 'Software Engineering Intern',
    description: 'Future internship at Peraton working on mission-critical technology solutions.',
    location: 'Peraton',
    category: 'work'
  },
  {
    date: 'Summer 2025',
    title: 'Software Developer Intern',
    description: 'Future internship at CGI focusing on enterprise solutions.',
    location: 'CGI',
    category: 'work'
  },
  {
    date: 'December 2024',
    title: 'Software Engineer',
    description: 'Developed AI-powered sentiment analysis tools for tracking speech patterns in online communities.',
    location: 'Sentivity AI, Blacksburg, VA',
    category: 'work'
  }
];

export default function Timeline() {
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
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}
              >
                {/* Event Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Date Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4
                    bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                    <BiCalendar className="mr-2" />
                    {event.date}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <BiMap className="mr-2" />
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className={`w-4 h-4 rounded-full ${
                  event.category === 'education' ? 'bg-green-500' :
                  event.category === 'work' ? 'bg-blue-500' :
                  'bg-purple-500'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 