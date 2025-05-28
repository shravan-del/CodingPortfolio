'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/layout/Navbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </ThemeProvider>
  );
} 