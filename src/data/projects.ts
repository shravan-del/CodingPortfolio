export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  slug: string;
  features: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Threat Detection System',
    description: 'A machine learning system that detects and classifies cyber threats in real-time using advanced neural networks.',
    longDescription: 'This project combines cutting-edge AI techniques with cybersecurity principles to create a robust threat detection system. It processes network traffic data in real-time and uses deep learning models to identify potential security threats.',
    image: '/projects/threat-detection.jpg',
    tags: ['AI', 'Cybersecurity', 'Machine Learning'],
    githubUrl: 'https://github.com/username/threat-detection',
    demoUrl: 'https://demo.threat-detection.com',
    slug: 'ai-threat-detection',
    features: [
      'Real-time network traffic analysis',
      'Deep learning-based threat classification',
      'Automated alert system',
      'Interactive dashboard',
    ],
    techStack: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'FastAPI',
      'React',
      'PostgreSQL',
    ],
  },
  {
    id: '2',
    title: 'Business Analytics Dashboard',
    description: 'An interactive dashboard for visualizing and analyzing business metrics using modern data visualization techniques.',
    longDescription: 'A comprehensive business analytics platform that helps organizations make data-driven decisions. Features include customizable dashboards, real-time data processing, and predictive analytics capabilities.',
    image: '/projects/analytics-dashboard.jpg',
    tags: ['Business Analytics', 'Data Visualization', 'Web Development'],
    githubUrl: 'https://github.com/username/analytics-dashboard',
    demoUrl: 'https://demo.analytics-dashboard.com',
    slug: 'business-analytics-dashboard',
    features: [
      'Real-time data visualization',
      'Customizable metrics and KPIs',
      'Predictive analytics',
      'Export and reporting capabilities',
    ],
    techStack: [
      'React',
      'D3.js',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS',
    ],
  },
  {
    id: '3',
    title: 'Secure File Sharing System',
    description: 'A blockchain-based secure file sharing system with end-to-end encryption and access control.',
    longDescription: 'This project implements a secure file sharing system using blockchain technology and advanced cryptography. It ensures data privacy and maintains an immutable audit trail of all file access and modifications.',
    image: '/projects/secure-sharing.jpg',
    tags: ['Blockchain', 'Cybersecurity', 'Web3'],
    githubUrl: 'https://github.com/username/secure-sharing',
    demoUrl: 'https://demo.secure-sharing.com',
    slug: 'secure-file-sharing',
    features: [
      'End-to-end encryption',
      'Blockchain-based audit trail',
      'Smart contract access control',
      'Decentralized storage',
    ],
    techStack: [
      'Solidity',
      'Web3.js',
      'React',
      'Node.js',
      'IPFS',
      'Ethereum',
    ],
  },
]; 