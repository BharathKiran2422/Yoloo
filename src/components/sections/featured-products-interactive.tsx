
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { featuredProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@/lib/utils';

export function FeaturedProductsInteractive() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;

    // --- Hooks for All Views (Called Unconditionally) ---
    const productsFirstRow = featuredProducts.slice(0, 4);
    const productsSecondRow = featuredProducts.slice(4, 8);
    
    // Desktop animations
    const opacityFirstRow = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const translateYFirstRow = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
    
    const opacitySecondRow = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 1, 0]);
    const translateYSecondRow = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);
    
    // Mobile animations
    const mobileAnimations = featuredProducts.map((_, i) => {
        const segment = 1 / featuredProducts.length;
        const startTime = i * segment * 0.8; // Slow down the animation
        const endTime = startTime + segment * 1.5;
        
        const opacityIn = useTransform(scrollYProgress, [startTime, endTime], [1, 0]);
        const translateYIn = useTransform(scrollYProgress, [startTime, endTime], [0, -20]);

        const prevEndTime = i > 0 ? (i - 0.5) * segment * 0.8 : -0.1;
        const opacityOut = useTransform(scrollYProgress, [prevEndTime, startTime], [0, 1]);
        const translateYOut = useTransform(scrollYProgress, [prevEndTime, startTime], [20, 0]);

        return { opacity: opacityOut, translateY: translateYOut };
    });

    if (isMobile) {
        const mobileHeight = `${featuredProducts.length * 100}vh`;
        return (
            <section ref={targetRef} className="relative py-16" style={{ height: mobileHeight }}>
                <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-16">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
                        <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                    </div>
                    <div className="relative w-full max-w-sm h-[450px]">
                        {featuredProducts.map((product, i) => {
                             const { opacity, translateY } = mobileAnimations[i];
                            return (
                                <motion.div
                                    key={product.id}
                                    style={{
                                        opacity: opacity,
                                        translateY: translateY,
                                        position: 'absolute',
                                        width: '100%',
                                        top: 0,
                                    }}
                                    className="z-10"
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
    
    return (
        <section ref={targetRef} className="relative h-[100vh] py-16">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
                    <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                
                <div className="relative w-full container">
                    <motion.div
                        style={{
                            opacity: opacityFirstRow,
                            translateY: translateYFirstRow,
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 absolute w-full left-0 px-4 sm:px-8"
                    >
                        {productsFirstRow.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>

                    <motion.div
                         style={{
                            opacity: opacitySecondRow,
                            translateY: translateYSecondRow,
                        }}
                        className={cn(
                            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 absolute w-full left-0 px-4 sm:px-8",
                            "pointer-events-none"
                        )}
                    >
                        {productsSecondRow.map((product) => (
                           <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
