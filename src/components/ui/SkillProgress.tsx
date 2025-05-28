'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SkillProgressProps {
  name: string;
  level: number;
  color?: string;
}

export const SkillProgress: React.FC<SkillProgressProps> = ({
  name,
  level,
  color = '#4a9eff',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (level / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({
            strokeDashoffset: circumference - progress,
            transition: { duration: 1.5, ease: 'easeInOut' },
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-${name}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [name, controls, circumference, progress]);

  return (
    <div
      id={`skill-${name}`}
      className="flex flex-col items-center justify-center p-4"
    >
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
          {/* Background circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#e6e6e6"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={controls}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{level}%</span>
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium">{name}</h3>
    </div>
  );
}; 