
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const announcements = [
    "Fast. Fresh. Fashion at Your Doorstep.",
    "Your Fashion, Your Time – Delivered Fast ⚡"
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="py-1.5 text-center text-sm h-7 flex items-center justify-center">
        <AnimatePresence mode="wait">
            <motion.p
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="font-bold absolute"
            >
                {announcements[index]}
            </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
