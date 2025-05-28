'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ResumeDownload() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch('/resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Shravan_Athikinasetti_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="group relative inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700"
      >
        <motion.div
          initial={false}
          animate={{
            x: downloading ? 30 : 0,
            opacity: downloading ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
            />
          </svg>
          <span>Download Resume</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: downloading ? 1 : 0,
            scale: downloading ? 1 : 0.5,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            className="animate-spin h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.div>
      </button>
    </motion.div>
  );
} 