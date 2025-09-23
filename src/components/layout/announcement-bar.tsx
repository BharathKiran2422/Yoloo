
'use client';

import { motion } from 'framer-motion';

export function AnnouncementBar() {
  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="py-2 text-center text-sm font-medium">
        <p>⚡️ 30-120 Minute Delivery Across Hyderabad ⚡️</p>
      </div>
    </motion.div>
  );
}
