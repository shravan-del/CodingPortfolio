declare module '@/types/project' {
  export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    startDate?: string;
    endDate?: string;
    category?: string;
    slug: string;
  }
}

declare module '@/components/Providers' {
  export interface ProvidersProps {
    children: React.ReactNode;
  }
  export function Providers(props: ProvidersProps): JSX.Element;
}

declare module '@/components/CommandPalette' {
  export function CommandPalette(): JSX.Element;
}

declare module '@/lib/email' {
  export interface EmailData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  export function sendEmail(data: EmailData): Promise<void>;
} 