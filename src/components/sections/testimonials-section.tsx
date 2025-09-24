
'use client';

import { motion } from 'framer-motion';
import { BrandCarousel } from '../brand-carousel';

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-8 md:py-12 bg-card/50 dark:bg-card relative overflow-hidden">
        <div className="absolute inset-0 pattern-background opacity-50"></div>
        <div className="container mx-auto relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-center max-w-4xl mx-auto border bg-background/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative group/card sheen-effect"
            >
                <motion.h2 
                    variants={itemVariants} 
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    The Yoloo Voice
                </motion.h2>
                <motion.p 
                    variants={itemVariants} 
                    className="text-lg md:text-xl text-foreground/80 leading-relaxed"
                >
                    At Yoloo, we bring together speed, style, and trust. Our vision is to deliver fresh fashion with premium quality — designed for your lifestyle and delivered at your doorstep.
                </motion.p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12"
            >
              <BrandCarousel />
            </motion.div>
        </div>
    </section>
  );
}
