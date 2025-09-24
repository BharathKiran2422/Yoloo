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
          <div className="yoloo-voice-carousel-container group">
            <div className="yoloo-voice-carousel-fade-left" />
            <div className="yoloo-voice-carousel-content">
              {logos.map((_, index) => (
                <div key={index} className="yoloo-voice-carousel-item">
                  <Logo className="h-12 w-24" />
                </div>
              ))}
            </div>
            <div className="yoloo-voice-carousel-fade-right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { YolooVoice as TestimonialsSection };
