
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { featuredProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export function FeaturedProductsInteractive() {
    const productsToShow = featuredProducts.slice(0, 8);

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
                    <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {productsToShow.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
