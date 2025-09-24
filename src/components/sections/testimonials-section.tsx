'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from '../layout/logo';
import './yoloo-voice.css';

const YolooVoice = () => {
  // We'll use the Logo component which is theme-aware
  const logos = Array(20).fill(0); // Create an array to map over for the carousel

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Yoloo Voice
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg">
            At Yoloo, we bring together speed, style, and trust. Our vision is to deliver fresh fashion with premium quality — designed for your lifestyle and delivered at your doorstep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-12"
        >
           <div className="py-8 bg-background overflow-hidden relative">
             <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="flex items-center space-x-16 yoloo-voice-carousel-content group">
                {logos.map((_, index) => (
                  <div key={index} className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                     <Logo className="h-12 w-24" />
                  </div>
                ))}
              </div>
             <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { YolooVoice as TestimonialsSection };
