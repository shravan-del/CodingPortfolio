'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = {
  aiMlSkills: [
    { name: 'Machine Learning', level: 90 },
    { name: 'Deep Learning', level: 85 },
    { name: 'Natural Language Processing', level: 85 },
    { name: 'Computer Vision', level: 80 },
    { name: 'Neural Networks', level: 85 }
  ],
  technologiesFrameworks: [
    { name: 'TensorFlow/PyTorch', level: 90 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'CUDA/GPU Programming', level: 80 },
    { name: 'OpenAI API', level: 85 },
    { name: 'Hugging Face', level: 80 }
  ],
  developmentSkills: [
    { name: 'Python', level: 90 },
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'Full Stack Development', level: 80 },
    { name: 'System Design', level: 75 }
  ]
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-blue-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-blue-500 h-2 rounded-full"
      />
    </div>
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded"/>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-xl leading-relaxed">
                Hi! I'm Shravan Athikinasetti, a Computer Science student at Virginia Tech with a GPA of 3.6. I'm passionate about software development and artificial intelligence, focusing on creating innovative solutions that make a real impact.
              </p>
              
              <p className="text-lg leading-relaxed mt-6">
                My journey in Computer Science has been focused on building strong foundations in software development while exploring the exciting world of AI and machine learning. I'm constantly working on projects that help me learn and grow in these areas.
              </p>

              <p className="text-lg leading-relaxed mt-6">
                Currently, I'm focusing on my coursework at Virginia Tech while working on various software development projects. I'm particularly interested in applying AI technologies to solve real-world problems.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Deep Learning & Neural Networks
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Computer Vision & Pattern Recognition
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  AI Ethics & Responsible AI Development
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">AI & Machine Learning</h3>
                {skills.aiMlSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">AI Technologies & Frameworks</h3>
                {skills.technologiesFrameworks.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Development & Computer Science</h3>
                {skills.developmentSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
              <p className="text-lg mb-4">
                Interested in discussing AI research, collaboration opportunities, or the future of technology?
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/shravan-del"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sathikinasetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white px-4 py-2 rounded-lg hover:bg-[#006399] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 