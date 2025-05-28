'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { BiBriefcase, BiBook, BiMedal, BiCodeAlt, BiTime, BiChart } from 'react-icons/bi';
import Timeline from '@/components/Timeline';
import ProjectShowcase from '@/components/ProjectShowcase';
import SkillsGraph from '@/components/SkillsGraph';

const experiences = [
  {
    title: "DOD/Raytheon ITX internship",
    company: "DOD/Raytheon",
    period: "August 2024 - April 2025",
    type: "Internship",
    location: "Blacksburg, VA",
    description: [
      "Participated in a competitive internship program focused on supporting national security missions through software development, systems engineering, system administration, and cybersecurity",
      "Collaborated with experienced software developers on various projects and coursework aimed to advance skills in C++, Python, Java, and other object-oriented programming languages"
    ],
    skills: ["C++", "Python", "Java", "System Administration", "Cybersecurity"]
  },
  {
    title: "Software Engineer",
    company: "Sentivity AI",
    period: "December 2024 - Current",
    type: "Full-time",
    location: "Blacksburg, VA",
    description: [
      "Used AI-powered sentiment analysis to track negative speech shifts in right-wing Reddit communities during key political events",
      "Built an NLP pipeline with CardiffNLP sentiment model, processing large-scale Reddit data to quantify sentiment changes"
    ],
    skills: ["NLP", "AI", "Python", "Data Analysis", "Machine Learning"]
  },
  {
    title: "Software Developer",
    company: "Aventura Adams",
    period: "June 2024 - October 2024",
    type: "Full-time",
    location: "Blacksburg, VA",
    description: [
      "Experimented with AI models under different setups, shadowing an expert. Developed AI development software",
      "Developed two AI models, one for analyzing themes in complex literature and another for detecting fake stock news, both based on the latest NLP/WIFI multimodal",
      "Worked in depth with react, flask, and other applications like Firebase and SQL to complete these projects"
    ],
    skills: ["AI Development", "NLP", "React", "Flask", "Firebase", "SQL"]
  },
  {
    title: "Software Engineering Intern",
    company: "Chainbridge Solutions",
    period: "June 2023 - August 2023",
    type: "Internship",
    location: "Chantilly, VA",
    description: [
      "Developed a voice assistant with a software that surveys websites for potential cyber threats",
      "Created a web application using Flask and React for a contracting project",
      "Worked with Java, Python, CSS, HTML, Flask, Git, Git hash, Machine learning, C++, SQL"
    ],
    skills: ["Java", "Python", "React", "Flask", "Machine Learning", "SQL", "Git"]
  },
  {
    title: "Software Lead",
    company: "RockSAT Design Team",
    period: "July 2023 - Current",
    type: "Project",
    location: "Blacksburg, VA",
    description: [
      "Designing a space tether that can provide a small satellite with power and a mechanical connection",
      "Contributed 5K+ lines of code to an established codebase via Git",
      "Wrote an 8-page paper and gave multiple presentations on-campus"
    ],
    skills: ["System Design", "Git", "Technical Writing", "Presentation Skills"]
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
            Professional Journey
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
              <Timeline />
            </Tab.Panel>

            {/* Work Experience Panel */}
            <Tab.Panel>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                        <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
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

            {/* Skills Panel */}
            <Tab.Panel>
              <SkillsGraph />
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