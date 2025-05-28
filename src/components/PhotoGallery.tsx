'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  {
    id: 1,
    src: '/images/gallery/photo1.jpg',
    alt: 'Shravan Athikinasetti',
    caption: 'At Virginia Tech Campus',
    description: 'Exploring the beautiful Virginia Tech campus, where innovation meets tradition.'
  },
  {
    id: 2,
    src: '/images/gallery/photo2.jpg',
    alt: 'Shravan Athikinasetti',
    caption: 'Working on Projects',
    description: 'Deeply focused on developing cutting-edge software solutions.'
  },
  {
    id: 3,
    src: '/images/gallery/photo3.jpg',
    alt: 'Shravan Athikinasetti',
    caption: 'Tech Presentation',
    description: 'Sharing insights and knowledge with the tech community.'
  }
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);

  return (
    <div className="relative w-full max-w-md">
      {/* Main Photo Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPhoto}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src={photos[selectedPhoto].src}
            alt={photos[selectedPhoto].alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white font-semibold text-lg mb-2"
            >
              {photos[selectedPhoto].caption}
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-200 text-sm"
            >
              {photos[selectedPhoto].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSelectedPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1))}
          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSelectedPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1))}
          className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-3 mt-6 justify-center">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.id}
            onClick={() => setSelectedPhoto(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
              selectedPhoto === index
                ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-800'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
} 