'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { BiBriefcase, BiBook, BiMedal, BiCodeAlt, BiTime, BiChart } from 'react-icons/bi';
import Timeline from '@/components/Timeline';
import ProjectShowcase from '@/components/ProjectShowcase';
import { SkillsGraph } from '@/components/SkillsGraph';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  type: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

const experiences: Experience[] = [
  {
    title: 'Computer Science Student',
    company: 'Virginia Tech',
    location: 'Blacksburg, VA',
    period: '2020 - Present',
    description: 'Pursuing a Bachelor\'s degree in Computer Science with a focus on AI/ML and Software Development. Current GPA: 3.6',
    highlights: [
      'Dean\'s List for academic excellence',
      'Active member of CS student organizations',
      'Participated in multiple hackathons'
    ],
    type: 'education'
  },
  {
    title: 'Software Development Intern',
    company: 'Tech Company',
    location: 'Remote',
    period: 'Summer 2023',
    description: 'Worked on developing and maintaining web applications using modern technologies.',
    highlights: [
      'Developed full-stack features using React and Node.js',
      'Implemented CI/CD pipelines',
      'Collaborated with cross-functional teams'
    ],
    type: 'work'
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    credentialId: "AWS-2024-1234",
    skills: ["Cloud Computing", "AWS Services", "Cloud Security"]
  },
  {
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta (formerly Facebook)",
    date: "February 2024",
    credentialId: "META-2024-5678",
    skills: ["React", "JavaScript", "Web Development"]
  }
];

const projects = [
  {
    name: "Simple Reddit",
    role: "Full Stack Web Application",
    date: "June 2024 - Present",
    description: "A full-stack Reddit clone with user authentication, post creation, and comment functionality.",
    impact: "Utilized React for the frontend, Flask for the backend, and SQL for database storage, ensuring a responsive and dynamic interface.",
    technologies: ["React", "Flask", "SQL", "User Authentication"]
  },
  {
    name: "Trading AI-Powered Content Recommendation Tool",
    role: "Lead Developer",
    date: "May 2024 - Present",
    description: "An AI-powered software platform that optimizes product recommendations based on market data.",
    impact: "Built with SparkAI and Firebase, using TypeScript and React for frontend, backend, and various integrations.",
    technologies: ["SparkAI", "Firebase", "TypeScript", "React"]
  }
];

const coursework = [
  {
    name: "Languages",
    code: "Core Skills",
    grade: "A",
    skills: ["Java", "Python", "C++", "SQL", "JavaScript", "HTML/CSS", "Quantum Languages: Qiskit, Cirq"]
  },
  {
    name: "Certifications",
    code: "Technical",
    grade: "A",
    skills: ["Java", "Python", "AWS", "Azure", "Cloud Computing"]
  },
  {
    name: "Frameworks",
    code: "Development",
    grade: "A",
    skills: ["React", "Node.js", "Flask", "Django", "WordPress", "Firebase", "Django"]
  },
  {
    name: "Developer Tools",
    code: "Tools",
    grade: "A",
    skills: ["Git", "Docker", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"]
  }
];

const upcomingExperiences = [
  {
    title: "Software Engineering Intern",
    company: "RTX/Raytheon",
    period: "Summer 2026",
    type: "Future Internship",
    location: "TBD",
    description: [
      "Software Engineering Internship focusing on defense technology and systems development"
    ],
    skills: ["Software Development", "Defense Technology"]
  },
  {
    title: "Software Engineering Intern",
    company: "Peraton",
    period: "January 2026 - May 2026",
    type: "Future Internship",
    location: "TBD",
    description: [
      "Software Engineering Internship in mission-critical technology solutions"
    ],
    skills: ["Software Engineering", "Mission-Critical Systems"]
  },
  {
    title: "Software Developer Intern",
    company: "CGI",
    period: "Summer 2025",
    type: "Future Internship",
    location: "TBD",
    description: [
      "Software Development Internship focusing on enterprise solutions"
    ],
    skills: ["Software Development", "Enterprise Solutions"]
  }
];

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'Java', level: 85, category: 'Languages' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'Languages' },
  { name: 'C++', level: 80, category: 'Languages' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Flask', level: 80, category: 'Backend' },
  { name: 'Machine Learning', level: 75, category: 'AI/ML' },
  { name: 'NLP', level: 70, category: 'AI/ML' },
  { name: 'AWS', level: 65, category: 'Cloud' },
  { name: 'Docker', level: 70, category: 'DevOps' }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ExperiencePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { name: 'Timeline', icon: BiTime },
    { name: 'Work Experience', icon: BiBriefcase },
    { name: 'Skills', icon: BiChart },
    { name: 'Projects', icon: BiCodeAlt },
    { name: 'Certifications', icon: BiMedal },
    { name: 'Coursework', icon: BiBook }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"/>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Building expertise through education, internships, and hands-on projects
          </p>
        </motion.div>

        <Tab.Group onChange={setSelectedTab}>
          <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1 mb-12">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-3 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 shadow'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-white/[0.12] hover:text-blue-600'
                  )
                }
              >
                <div className="flex items-center justify-center space-x-2">
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </div>
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels>
            {/* Timeline Panel */}
            <Tab.Panel>
              <Timeline experiences={experiences} />
            </Tab.Panel>

            {/* Work Experience Panel */}
            <Tab.Panel>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-500"
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-[5px]" />
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400">
                            {exp.company} • {exp.location}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-600 dark:text-gray-400"
                          >
                            <span className="mr-2 text-blue-500">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tab.Panel>

            {/* Skills Panel */}
            <Tab.Panel>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <SkillsGraph skills={skills} />
              </div>
            </Tab.Panel>

            {/* Projects Panel */}
            <Tab.Panel>
              <ProjectShowcase />
            </Tab.Panel>

            {/* Certifications Panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Issued: {cert.date}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Credential ID: {cert.credentialId}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tab.Panel>

            {/* Coursework Panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{course.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400">{course.code}</p>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-bold">{course.grade}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
} 