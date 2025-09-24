
'use client';

import type { Product } from '@/lib/products';
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';
import './product-marquee.css';
import { useRef, useState, MouseEvent, TouchEvent, useEffect } from 'react';

type ProductMarqueeProps = {
    title: string;
    products: Product[];
    direction?: 'left' | 'right';
}

export function ProductMarquee({ title, products, direction = 'left' }: ProductMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Duplicate products for a seamless loop
  const extendedProducts = [...products, ...products];

  const handleMouseDown = (e: MouseEvent) => {
    if (!marqueeRef.current) return;
    setIsDown(true);
    marqueeRef.current.classList.add('grabbing');
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (!marqueeRef.current) return;
    setIsDown(false);
    marqueeRef.current.classList.remove('grabbing');
  };

  const handleMouseUp = () => {
    if (!marqueeRef.current) return;
    setIsDown(false);
    marqueeRef.current.classList.remove('grabbing');
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown || !marqueeRef.current) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };
  
  // Touch events for mobile
  const handleTouchStart = (e: TouchEvent) => {
    if (!marqueeRef.current) return;
    setIsDown(true);
    setStartX(e.touches[0].pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };
  
  const handleTouchEnd = () => {
    if (!marqueeRef.current) return;
    setIsDown(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDown || !marqueeRef.current) return;
    const x = e.touches[0].pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };


  return (
    <section className="py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
                <div className="w-24 h-1 bg-primary mt-2 rounded-full" />
            </div>
        </div>
      </div>
      <div 
        className="marquee-container group"
        ref={marqueeRef}
        onMouseDown={isClient ? handleMouseDown : undefined}
        onMouseLeave={isClient ? handleMouseLeave : undefined}
        onMouseUp={isClient ? handleMouseUp : undefined}
        onMouseMove={isClient ? handleMouseMove : undefined}
        onTouchStart={isClient ? handleTouchStart : undefined}
        onTouchEnd={isClient ? handleTouchEnd : undefined}
        onTouchMove={isClient ? handleTouchMove : undefined}
      >
        <div className={cn(
            "marquee-content flex gap-8",
            isClient && !isDown && (direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right')
        )}>
          {extendedProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="marquee-item shrink-0 w-[240px] sm:w-[280px] md:w-[300px]">
                <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
