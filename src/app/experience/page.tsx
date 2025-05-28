'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { BiBriefcase, BiBook, BiMedal, BiCodeAlt, BiTime, BiChart, BiMap, BiCalendar } from 'react-icons/bi';
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
  skills: string[];
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
    period: 'Aug. 2023 - May 2026',
    description: 'Bachelor of Science in Computer Science, Minor in Quantum Computing. GPA: 3.65',
    highlights: [
      'Dean\'s List with Distinction (2023-Current)',
      '1st place Pitch Competition (2023)',
      'Startup Sprint runner up',
      'Focused on AI/ML, Software Development, and Quantum Computing'
    ],
    type: 'education',
    skills: ['Computer Science', 'Quantum Computing', 'AI/ML', 'Software Development']
  },
  {
    title: 'DOD/Raytheon ITX internship',
    company: 'DOD/Raytheon',
    location: 'Blacksburg, VA',
    period: 'August 2024 - April 2025',
    description: 'Participated in a competitive internship program focused on supporting national security missions through software development, systems engineering, system administration, and cybersecurity.',
    highlights: [
      'Participated in a competitive internship program focused on supporting national security missions through software development, systems engineering, system administration, and cybersecurity',
      'Collaborated on research projects while working 8-12 hours per week, receiving a stipend to advance skills in C++, Python, Java, and other object-oriented programming languages'
    ],
    type: 'work',
    skills: ['C++', 'Python', 'Java', 'Systems Engineering', 'Cybersecurity']
  },
  {
    title: 'Full stack engineer',
    company: 'Sentivity AI',
    location: 'Blacksburg, VA',
    period: 'December 2024 - Current',
    description: 'Working on AI-powered sentiment analysis for social media monitoring.',
    highlights: [
      'Used AI-powered sentiment analysis to track negative speech shifts in right-wing Reddit communities during key sociopolitical events',
      'Built an NLP pipeline with CardiffNLP\'s sentiment model, processing large-scale Reddit data to quantify sentiment changes'
    ],
    type: 'work',
    skills: ['NLP', 'Machine Learning', 'Python', 'Data Processing', 'Sentiment Analysis']
  },
  {
    title: 'Software Engineering and Artificial Intelligence Intern',
    company: 'Aventura Adamo',
    location: 'Ashburn, VA',
    period: 'June 2024 - October 2024',
    description: 'Internship focused on AI development and implementation.',
    highlights: [
      'Experimented with AI models under different softwares, shadowing an expert. Developed AI development software',
      'Developed two AI models: one for analyzing themes in complex literature and another for detecting fake stock news, both deployed into company WiFi mainframes',
      'Worked in depth with react, flask, and other applications like Firebase and SQL to complete these projects'
    ],
    type: 'work',
    skills: ['React', 'Flask', 'Firebase', 'SQL', 'AI Development', 'Machine Learning']
  },
  {
    title: 'Software Engineering Intern',
    company: 'Chainbridge Solutions',
    location: 'Chantilly, VA',
    period: 'June 2023 - August 2023',
    description: 'Software development internship focusing on cybersecurity and web applications.',
    highlights: [
      'Developed a voice assistant with a software that surveys websites for potential cyber threats',
      'Developed a full-stack web application using Flask and React for a contracting project',
      'Worked with Java, Python, CSS, HTML, Flask, Git, Git bash, Machine learning, C++, SQL'
    ],
    type: 'work',
    skills: ['Java', 'Python', 'React', 'Flask', 'Git', 'Machine Learning', 'C++', 'SQL']
  },
  {
    title: 'Software Lead',
    company: 'RockSAT Design Team',
    location: 'Blacksburg, VA',
    period: 'July 2023 - Current',
    description: 'Leading software development for satellite systems.',
    highlights: [
      'Investigating a space tether that can provide a small satellite with power and a mechanical connection',
      'Contributed 5K+ lines of code to an established codebase via Git',
      'Wrote an 8-page paper and gave multiple presentations on-campus'
    ],
    type: 'work',
    skills: ['Satellite Systems', 'Software Development', 'Git', 'Technical Writing', 'Team Leadership']
  },
  {
    title: 'Software Development Intern (Upcoming)',
    company: 'RTX/Raytheon',
    location: 'Aurora, CO',
    period: 'Summer 2026',
    description: 'Selected for prestigious internship program focusing on defense technology and systems development.',
    highlights: [
      'Will work on mission-critical software systems using modern technologies',
      'Focus on secure software development practices and defense applications',
      'Opportunity to work with cutting-edge defense technology',
      'Will gain experience in government contracting and security clearance processes'
    ],
    type: 'upcoming',
    skills: ['Defense Technology', 'Secure Software Development', 'Mission-Critical Systems', 'Government Contracting']
  },
  {
    title: 'Software Engineering Intern (Upcoming)',
    company: 'Peraton',
    location: 'Blacksburg, VA',
    period: 'January 2026 - May 2026',
    description: 'Selected for internship program focusing on mission-critical technology solutions for government and commercial clients.',
    highlights: [
      'Will develop secure software solutions for defense and intelligence applications',
      'Will collaborate with cross-functional teams on complex technical challenges',
      'Will implement best practices in cybersecurity and system architecture',
      'Will contribute to national security technology initiatives'
    ],
    type: 'upcoming',
    skills: ['Defense Software', 'Cybersecurity', 'System Architecture', 'Cross-functional Collaboration']
  },
  {
    title: 'Software Developer Intern (Upcoming)',
    company: 'CGI Federal',
    location: 'Fairfax, VA',
    period: 'Summer 2025',
    description: 'Selected for internship program focusing on enterprise-level software solutions for federal government clients.',
    highlights: [
      'Will develop and maintain web applications using modern frameworks',
      'Will implement secure coding practices and government compliance standards',
      'Will participate in Agile development processes and sprint planning',
      'Will gain experience in federal IT systems and requirements'
    ],
    type: 'upcoming',
    skills: ['Enterprise Software', 'Web Development', 'Agile Development', 'Government Compliance', 'Federal IT Systems']
  }
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-2024",
    skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cloud Architecture"]
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-900",
    skills: ["Azure Cloud Services", "Cloud Computing", "DevOps", "Cloud Security"]
  },
  {
    name: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "GCP-2024",
    skills: ["Cloud Technology", "Digital Transformation", "Google Cloud Platform"]
  }
];

const projects = [
  {
    name: "Simple Reddit",
    role: "Full-Stack Web Application",
    date: "June 2024 - Present",
    description: "Developed a full-stack Reddit-like platform with user authentication, post creation, and comment functionality.",
    impact: "Utilized React for the frontend, Flask for the backend, and SQL for database storage, ensuring a responsive and dynamic interface.",
    technologies: ["React", "Flask", "SQL", "User Authentication"]
  },
  {
    name: "Toolio",
    role: "AI-Powered Product Recommendation Tool",
    date: "May 2024 - Present",
    description: "Developed an AI-driven tool for startup deployment that optimizes product recommendations based on location.",
    impact: "Built with SquidAI and Firebase, leveraging TypeScript and React for frontend, backend, and various integrations.",
    technologies: ["SquidAI", "Firebase", "TypeScript", "React"]
  }
];

const coursework = [
  {
    name: "Advanced Programming",
    code: "CS 3214",
    grade: "A",
    skills: ["Systems Programming", "C/C++", "Operating Systems", "Concurrent Programming"]
  },
  {
    name: "Data Structures & Algorithms",
    code: "CS 3114",
    grade: "A",
    skills: ["Algorithm Analysis", "Data Structures", "Java", "Problem Solving"]
  },
  {
    name: "Quantum Computing",
    code: "CS 4984",
    grade: "A",
    skills: ["Quantum Algorithms", "Qiskit", "Quantum Theory", "Linear Algebra"]
  },
  {
    name: "Machine Learning",
    code: "CS 4824",
    grade: "A",
    skills: ["AI/ML", "Python", "TensorFlow", "Neural Networks"]
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
  // Languages
  { name: 'Java', level: 90, category: 'Languages' },
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'C/C++', level: 85, category: 'Languages' },
  { name: 'SQL', level: 85, category: 'Languages' },
  { name: 'JavaScript', level: 85, category: 'Languages' },
  { name: 'HTML/CSS', level: 80, category: 'Languages' },
  { name: 'Qiskit', level: 75, category: 'Quantum Languages' },
  { name: 'Cirq', level: 75, category: 'Quantum Languages' },
  
  // Frameworks
  { name: 'React', level: 85, category: 'Frameworks' },
  { name: 'Node.js', level: 80, category: 'Frameworks' },
  { name: 'Flask', level: 85, category: 'Frameworks' },
  { name: 'JUnit', level: 75, category: 'Frameworks' },
  { name: 'WordPress', level: 70, category: 'Frameworks' },
  { name: 'Firebase', level: 80, category: 'Frameworks' },
  { name: 'Django', level: 75, category: 'Frameworks' },
  
  // Developer Tools
  { name: 'Git', level: 85, category: 'Developer Tools' },
  { name: 'Docker', level: 80, category: 'Developer Tools' },
  { name: 'VS Code', level: 90, category: 'Developer Tools' },
  { name: 'Visual Studio', level: 85, category: 'Developer Tools' },
  { name: 'PyCharm', level: 85, category: 'Developer Tools' },
  { name: 'IntelliJ', level: 85, category: 'Developer Tools' },
  { name: 'Eclipse', level: 80, category: 'Developer Tools' }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ExperiencePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { name: 'Timeline', icon: BiTime },
    { name: 'Work Experience', icon: BiBriefcase },
    { name: 'Skills', icon: BiMedal },
    { name: 'Projects', icon: BiChart },
    { name: 'Certifications', icon: BiCodeAlt },
    { name: 'Coursework', icon: BiBook }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Experience & Skills
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"/>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building expertise through education, internships, and innovative projects in software development, AI/ML, and quantum computing.
          </p>
        </motion.div>

        <Tab.Group onChange={setSelectedTab}>
          <Tab.List className="flex space-x-2 rounded-xl bg-white/10 dark:bg-gray-800/50 p-2 mb-12 backdrop-blur-lg shadow-lg">
            {tabs.map((tab, index) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-4 text-sm font-medium leading-5 transition-all duration-200',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-white/[0.12] hover:text-blue-500'
                  )
                }
              >
                <motion.div 
                  className="flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </motion.div>
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels>
            <AnimatePresence mode="wait">
              {/* Timeline Panel */}
              <Tab.Panel
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Timeline experiences={experiences} />
              </Tab.Panel>

              {/* Work Experience Panel */}
              <Tab.Panel
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-12">
                  {/* Current Experience Section */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      Current Experience
                    </h2>
                    <div className="space-y-8">
                      {experiences
                        .filter(exp => exp.type === 'work')
                        .map((exp, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500"
                          >
                            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -translate-x-[6px] shadow-lg" />
                            <motion.div 
                              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex flex-wrap justify-between items-start mb-4">
                                <div>
                                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                    {exp.title}
                                  </h3>
                                  <p className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</p>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    <span className="flex items-center">
                                      <BiMap className="mr-1" /> {exp.location}
                                    </span>
                                    <span className="flex items-center">
                                      <BiCalendar className="mr-1" /> {exp.period}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start"
                                  >
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2" />
                                    <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </motion.div>
                        ))}
                    </div>
                  </div>

                  {/* Skills Panel (formerly Future Opportunities) */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text">
                      Future Career Journey
                    </h2>
                    <div className="space-y-8">
                      {experiences
                        .filter(exp => exp.type === 'upcoming')
                        .sort((a, b) => new Date(a.period.split(' - ')[0]).getTime() - new Date(b.period.split(' - ')[0]).getTime())
                        .map((exp, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                          >
                            <motion.div 
                              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-opacity-50 border-emerald-200 dark:border-emerald-900 h-full"
                              whileHover={{ scale: 1.02, borderColor: '#10B981' }}
                            >
                              <div className="absolute -top-4 right-4 px-4 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white text-sm">
                                {exp.period}
                              </div>
                              
                              <div className="mb-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text mb-2">
                                  {exp.title.replace(' (Upcoming)', '')}
                                </h3>
                                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                  <span className="font-semibold">{exp.company}</span>
                                  <span>•</span>
                                  <span className="flex items-center">
                                    <BiMap className="mr-1" /> {exp.location}
                                  </span>
                                </div>
                              </div>

                              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                                {exp.description}
                              </p>

                              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
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
                              </div>
                            </motion.div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </div>
              </Tab.Panel>

              {/* Projects Panel (formerly Skills Panel) */}
              <Tab.Panel>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <SkillsGraph skills={skills} />
                </div>
              </Tab.Panel>

              {/* Certifications Panel (formerly Projects Panel) */}
              <Tab.Panel>
                <ProjectShowcase />
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
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
} 