import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import { CommandPalette } from '@/components/CommandPalette';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Shravan Athikinasetti - Computer Science Student & Developer',
  description: 'Computer Science student at Virginia Tech with a 3.6 GPA. Experienced in software development, AI/ML, and full-stack development.',
  keywords: [
    'Shravan Athikinasetti',
    'Virginia Tech',
    'Computer Science',
    'Software Development',
    'Full Stack Developer',
    'Software Engineer',
    'AI/ML',
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
    title: 'Shravan Athikinasetti - Computer Science Student & Developer',
    description: 'Computer Science student at Virginia Tech with a 3.6 GPA. Experienced in software development, AI/ML, and full-stack development.',
    siteName: 'Shravan Athikinasetti Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shravan Athikinasetti - Computer Science Student & Developer',
    description: 'Computer Science student at Virginia Tech with a 3.6 GPA. Experienced in software development, AI/ML, and full-stack development.',
    creator: '@sathikinasetti'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <CommandPalette />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
} 