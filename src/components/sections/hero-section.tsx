'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/layout/logo';

export function HeroSection() {

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
        <div className="flex justify-center items-center mb-4 animate-fade-in-bounce">
          <Logo className="w-auto h-24 md:h-32" />
        </div>
        <div 
          className="mt-8 animate-slide-in-bottom"
          style={{ animationDelay: `500ms` }}
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
