import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coding-portfolio-zeta.vercel.app';
  const now = new Date();

  const paths = [
    '',
    '/work',
    '/story',
    '/experience',
    '/research',
    '/chat',
    '/contact',
    '/blog',
    '/github',
  ];

  const caseStudies = ['codecompass', 'samaritan', 'creatormind', 'sentivity-pipeline'];

  return [
    ...paths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
