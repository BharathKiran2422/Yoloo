
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants, MotionValue } from 'framer-motion';
import { featuredProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/products';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

function MobileProductCard({ product, index, scrollYProgress, totalProducts }: { product: Product, index: number, scrollYProgress: MotionValue<number>, totalProducts: number }) {
    const segment = 1 / totalProducts;
    const start = index * segment;
    const end = start + segment;
    
    const opacity = useTransform(scrollYProgress, [start, start + segment / 3, end - segment / 3, end], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [0.9, 1.05]);
    const y = useTransform(scrollYProgress, [start, end], ['10%', '-10%']);

    return (
        <motion.div
            style={{
                opacity,
                scale,
                y,
                position: 'absolute',
                width: '100%',
                top: 0,
                zIndex: index,
            }}
            className="px-4"
        >
            <ProductCard product={product} />
        </motion.div>
    );
}

export function FeaturedProductsInteractive() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;

    // Desktop animations
    const productsFirstRow = featuredProducts.slice(0, 4);
    const productsSecondRow = featuredProducts.slice(4, 8);
    const opacityFirstRow = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scaleFirstRow = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
    const blurFirstRow = useTransform(scrollYProgress, [0, 0.3], [0, 10]);
    const opacitySecondRow = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
    const scaleSecondRow = useTransform(scrollYProgress, [0.35, 0.65], [0.95, 1]);
    const opacityContainer = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

    // This ensures consistent height calculation regardless of render environment
    const dynamicHeight = isMobile ? `${featuredProducts.length * 80}vh` : '200vh';

    return (
        <motion.section 
            ref={targetRef} 
            className="relative py-16"
            style={{ 
                height: dynamicHeight,
            }}
        >
            {/* Mobile View - Rendered but hidden on desktop */}
             <div className="md:hidden sticky top-0 h-screen flex flex-col items-center justify-start pt-16">
                <div className="text-center mb-12 px-4 z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
                    <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                <div className="relative w-full max-w-sm h-[480px]">
                    {featuredProducts.map((product, i) => (
                        <MobileProductCard 
                            key={product.id}
                            product={product}
                            index={i}
                            scrollYProgress={scrollYProgress}
                            totalProducts={featuredProducts.length}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop View - Rendered but hidden on mobile */}
            <motion.div className="hidden md:block sticky top-0 h-screen" style={{ opacity: opacityContainer }}>
                <div className="flex flex-col items-center justify-start pt-16 h-full">
                    <div className="text-center mb-12 z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
                        <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                    </div>
                    
                    <div className="relative w-full container h-full flex items-center justify-center">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                opacity: opacityFirstRow,
                                scale: scaleFirstRow,
                                filter: useTransform(blurFirstRow, v => `blur(${v}px)`),
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 absolute w-full left-0 px-4 sm:px-8"
                        >
                            {productsFirstRow.map((product) => (
                                <motion.div key={product.id} variants={itemVariants}>
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                             variants={containerVariants}
                             initial="hidden"
                             animate="visible"
                             style={{
                                opacity: opacitySecondRow,
                                scale: scaleSecondRow,
                            }}
                            className={cn(
                                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 absolute w-full left-0 px-4 sm:px-8"
                            )}
                        >
                            {productsSecondRow.map((product) => (
                               <motion.div key={product.id} variants={itemVariants}>
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
