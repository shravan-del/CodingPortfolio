export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  category?: string;
  slug?: string;
  status: 'completed' | 'in-development';
} 