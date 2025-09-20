
'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

type PageTransitionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -30,
  },
};

export function PageTransitionWrapper({ children, className }: PageTransitionWrapperProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
