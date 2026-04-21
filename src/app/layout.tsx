import React from 'react';
import { Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://coding-portfolio-zeta.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shravan Athikinasetti — Software Engineer & AI Researcher',
    template: '%s · Shravan Athikinasetti',
  },
  description:
    'I build AI systems that ship. Published ACM CSCW 2024 researcher, incoming Amazon SDE intern (Devices, Seattle). CS + Quantum Computing at Virginia Tech.',
  keywords: [
    'Shravan Athikinasetti',
    'Software Engineer',
    'AI Researcher',
    'Virginia Tech',
    'Amazon SDE Intern',
    'Machine Learning',
    'NLP',
    'CSCW 2024',
  ],
  authors: [{ name: 'Shravan Athikinasetti' }],
  openGraph: {
    title: 'Shravan Athikinasetti — Software Engineer & AI Researcher',
    description:
      "Published AI researcher & full-stack engineer. Amazon Devices SDE intern '26.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Shravan Athikinasetti',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shravan Athikinasetti — Software Engineer & AI Researcher',
    description:
      "Published AI researcher & full-stack engineer. Amazon Devices SDE intern '26.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <div className="relative z-[1] flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
