import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'vt-gps',
    title: 'Virginia Tech Map GPS',
    description: 'An AI-powered navigation assistant for Virginia Tech campus, built using Hugging Face transformers. Helps students and visitors find their way around campus with natural language queries.',
    image: '/images/projects/vt-gps.png',
    technologies: ['Python', 'Hugging Face', 'Transformers', 'PyTorch', 'FastAPI'],
    githubUrl: 'https://github.com/sathikinasetti/vt-gps',
    liveUrl: 'https://huggingface.co/spaces/sanestspritz/VTMAPGPS',
    featured: true,
    startDate: '2023-09',
    endDate: '2023-12',
    category: 'AI/ML',
    status: 'completed'
  },
  {
    id: 'sentinel-dude',
    title: 'SentinelDude',
    description: 'A cybersecurity monitoring tool that uses machine learning to detect and alert on suspicious network activities and potential security threats.',
    image: '/images/projects/sentinel-dude.png',
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kibana', 'Docker'],
    githubUrl: 'https://github.com/sathikinasetti/sentinel-dude',
    featured: true,
    startDate: '2023-03',
    endDate: '2023-06',
    category: 'Security',
    status: 'in-development'
  },
  {
    id: 'academic-agent',
    title: 'Academic Agent',
    description: 'An AI-powered academic assistant that helps students manage their coursework, deadlines, and study schedules. Features include smart reminders and personalized study recommendations.',
    image: '/images/projects/academic-agent.png',
    technologies: ['Next.js', 'OpenAI API', 'MongoDB', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/sathikinasetti/academic-agent',
    liveUrl: 'https://academic-agent.vercel.app',
    featured: true,
    startDate: '2023-01',
    endDate: '2023-04',
    category: 'Education',
    status: 'in-development'
  },
  {
    id: 'spritzai',
    title: 'SpritzAI College',
    description: 'AI-powered college search and recommendation platform. Helps students find their ideal college match using machine learning algorithms.',
    image: '/images/projects/spritzai.png',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://spritzai.com',
    githubUrl: 'https://github.com/sathikinasetti/spritzai',
    featured: true,
    startDate: '2023-06',
    endDate: '2023-12',
    category: 'AI/ML',
    status: 'in-development'
  },
  {
    id: 'saturn',
    title: 'Saturn Voice Recognition',
    description: 'Voice-controlled smart home system using advanced speech recognition and natural language processing.',
    image: '/images/projects/saturn.png',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'React Native', 'Docker'],
    githubUrl: 'https://github.com/sathikinasetti/saturn',
    featured: true,
    startDate: '2023-01',
    endDate: '2023-05',
    category: 'IoT',
    status: 'in-development'
  },
  {
    id: 'spartan',
    title: 'Spartan Bot',
    description: 'Discord bot for Virginia Tech students that provides course information, academic calendar updates, and campus notifications.',
    image: '/images/projects/spartan.png',
    technologies: ['TypeScript', 'Discord.js', 'MongoDB', 'Node.js'],
    githubUrl: 'https://github.com/sathikinasetti/spartan-bot',
    featured: true,
    startDate: '2022-08',
    endDate: '2022-12',
    category: 'Bot',
    status: 'in-development'
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, responsive design, and dynamic project pages.",
    image: "/images/projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio-url.com",
    slug: "portfolio-website"
  },
  {
    title: "Task Manager",
    description: "A full-stack task management application with authentication, real-time updates, and collaborative features.",
    image: "/images/projects/task-manager.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-manager-url.com",
    slug: "task-manager"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that shows current weather conditions and forecasts for multiple cities using OpenWeather API.",
    image: "/images/projects/weather-app.png",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-app-url.com",
    slug: "weather-dashboard"
  }
]; 