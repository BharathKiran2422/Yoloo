'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const logoText = "Yoloo!";

  const handleScrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-accent/10 dark:bg-accent/5 -z-10"></div>
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          {logoText.split('').map((letter, index) => (
            <h1
              key={index}
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-primary dark:text-primary-foreground animate-fade-in-bounce"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </h1>
          ))}
        </div>
        <p 
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground animate-slide-in-bottom"
          style={{ animationDelay: `${logoText.length * 100 + 100}ms` }}
        >
          Fashion Made Easy
        </p>
        <div 
          className="mt-8 animate-slide-in-bottom"
          style={{ animationDelay: `${logoText.length * 100 + 300}ms` }}
        >
          <Button size="lg" onClick={handleScrollToProducts}>
            Shop The Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}