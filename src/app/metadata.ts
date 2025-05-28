import { Metadata } from 'next';

const title = 'Shravan Athikinasetti - Computer Science Student & Developer';
const description = 'Computer Science student at Virginia Tech with a 3.6 GPA. Experienced in software development, AI/ML, and full-stack development. View my projects and experience.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | Shravan Athikinasetti'
  },
  description,
  keywords: [
    'Shravan Athikinasetti',
    'Virginia Tech',
    'Computer Science',
    'Software Development',
    'AI/ML',
    'Full Stack Developer',
    'Student Developer',
    'Portfolio',
    'React',
    'Next.js',
    'TypeScript'
  ],
  authors: [{ name: 'Shravan Athikinasetti' }],
  creator: 'Shravan Athikinasetti',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
    siteName: title,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}; 