
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { featuredProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { useWindowSize } from '@/hooks/use-window-size';

export function FeaturedProductsInteractive() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;

    // --- Hooks for Mobile Animation ---
    // These are now called unconditionally.
    const mobileAnimations = featuredProducts.map((product, i) => {
        const rangeStart = i / featuredProducts.length;
        const rangeEnd = (i + 1) / featuredProducts.length;
        
        const opacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [1, 0]);
        const translateY = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, -20]);

        const prevRangeStart = (i - 1) / featuredProducts.length;
        const opacityIn = useTransform(scrollYProgress, [prevRangeStart, rangeStart], [0, 1]);
        const translateYIn = useTransform(scrollYProgress, [prevRangeStart, rangeStart], [20, 0]);

        return { opacity, translateY, opacityIn, translateYIn };
    });

    // --- Hooks for Desktop Animation ---
    // These are also called unconditionally.
    const productsFirstRow = featuredProducts.slice(0, 4);
    const productsSecondRow = featuredProducts.slice(4, 8);
    const opacityFirstRow = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const translateYFirstRow = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
    const opacitySecondRow = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
    const translateYSecondRow = useTransform(scrollYProgress, [0.5, 1], [40, 0]);


    // Conditional rendering based on isMobile, but hooks are not inside the condition.
    if (isMobile) {
        return (
            <section ref={targetRef} className="relative h-[400vh] py-16">
                <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
                        <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                    </div>
                    <div className="relative w-full max-w-sm h-[450px]">
                        {featuredProducts.map((product, i) => {
                            const { opacity, translateY, opacityIn, translateYIn } = mobileAnimations[i];
                            return (
                                <motion.div
                                    key={product.id}
                                    style={{
                                        opacity: i === 0 ? 1 : opacityIn,
                                        translateY: i === 0 ? 0 : translateYIn,
                                        position: 'absolute',
                                        width: '100%',
                                        top: 0,
                                    }}
                                    className="z-10"
                                >
                                    <motion.div style={{ opacity, translateY }}>
                                        <ProductCard product={product} />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
    
    return (
        <section ref={targetRef} className="relative h-[200vh] py-16">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
                    <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                
                <div className="relative w-full">
                    <motion.div
                        style={{
                            opacity: opacityFirstRow,
                            translateY: translateYFirstRow,
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 absolute w-full"
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
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 absolute w-full"
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
