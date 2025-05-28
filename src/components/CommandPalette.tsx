'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';

const socialLinks = {
  github: 'https://github.com/sathikinasetti',
  linkedin: 'https://linkedin.com/in/shravan-athikinasetti',
  twitter: 'https://twitter.com/sathikinasetti',
  email: 'mailto:shravan@vt.edu'
};

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Resume', path: '/resume.pdf' },
  { name: 'Contact', path: '/contact' }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Open Command Palette"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setOpen(false)}
          >
            <div className="container max-w-2xl mx-auto p-4 h-full flex items-center justify-center">
              <Command
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full p-4 border-b border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500"
                />
                <Command.List className="p-2 max-h-[300px] overflow-y-auto">
                  <Command.Group heading="Navigation">
                    {navigationItems.map((item) => (
                      <Command.Item
                        key={item.path}
                        onSelect={() => {
                          router.push(item.path);
                          setOpen(false);
                        }}
                        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center"
                      >
                        <span className="mr-2">→</span>
                        {item.name}
                      </Command.Item>
                    ))}
                  </Command.Group>
                  <Command.Group heading="Social">
                    {Object.entries(socialLinks).map(([platform, url]) => (
                      <Command.Item
                        key={platform}
                        onSelect={() => {
                          window.open(url, '_blank');
                          setOpen(false);
                        }}
                        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center capitalize"
                      >
                        <span className="mr-2">@</span>
                        {platform}
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>
              </Command>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 