import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision', 'NLP'],
    },
    {
      category: 'Cybersecurity',
      items: ['Network Security', 'Penetration Testing', 'Security Auditing', 'Threat Analysis'],
    },
    {
      category: 'Business Analytics',
      items: ['Data Analysis', 'Business Intelligence', 'Statistical Modeling', 'Visualization'],
    },
    {
      category: 'Development',
      items: ['Python', 'JavaScript/TypeScript', 'React', 'Node.js', 'SQL/NoSQL'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Bio */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <div className="prose dark:prose-invert">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hi! I'm Medha Konda, a passionate technologist working at the intersection of AI,
                cybersecurity, and business analytics. With a strong foundation in computer
                science and a keen interest in emerging technologies, I strive to create
                innovative solutions that make a real impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                My journey in technology began with a fascination for how AI could enhance
                cybersecurity measures. This led me to pursue projects that combine machine
                learning with security protocols, creating more robust and intelligent
                defense systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                When I'm not coding, you can find me exploring new technologies, writing
                about tech trends, or collaborating with other developers on open-source
                projects.
              </p>
            </div>

            {/* Education */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    University Name • 2021-2023
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    University Name • 2017-2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Skills & Image */}
          <div>
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/about-profile.jpg"
                alt="Medha Konda"
                fill
                className="object-cover"
              />
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <svg
                            className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 