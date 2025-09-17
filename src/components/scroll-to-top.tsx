
'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
      calculateScrollProgress();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const circumference = 2 * Math.PI * 20; // 2 * pi * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;


  return (
    <div className={cn("fixed bottom-8 right-8 z-50 transition-opacity duration-300", isVisible ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="relative h-12 w-12 rounded-full bg-card/80 backdrop-blur-sm"
        >
            <svg
                className="absolute inset-0 h-full w-full"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="hsl(var(--border))"
                    strokeWidth="3"
                />
                <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 24 24)"
                    className="transition-all duration-300 ease-linear"
                />
            </svg>
            <ArrowUp className="h-6 w-6" />
        </Button>
    </div>
  );
}
