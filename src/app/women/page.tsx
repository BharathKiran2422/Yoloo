
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function WomenPage() {
    const womenImages = [
        { id: "women-1" },
        { id: "women-2", className: "sm:row-span-2" },
        { id: "women-3", className: "sm:col-span-2" },
        { id: "women-4" },
        { id: "women-5" },
        { id: "women-6" },
        { id: "women-7" },
        { id: "women-8", className: "sm:col-span-2 sm:row-span-2" },
        { id: "women-9" },
        { id: "women-10" },
        { id: "women-11", className: "sm:row-span-2" },
        { id: "women-12" },
        { id: "women-13" },
        { id: "women-14", className: "sm:col-span-2" },
        { id: "women-15" },
        { id: "women-16" },
        { id: "women-17" },
        { id: "women-18" },
        { id: "women-19" },
        { id: "women-20", className: "sm:col-span-2" }
    ];

    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);
    
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <PageTransitionWrapper>
            <div className="bg-background">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="font-headline text-4xl font-bold mb-2 text-center text-primary">Women's Collection</h1>
                    <p className="text-muted-foreground mb-8 text-center">Explore elegant dresses, casual wear, and special collections.</p>

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-4 auto-rows-[300px]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {womenImages.map(({ id, className }) => {
                            const image = getImageData(id);
                            if (!image) return null;
                            return (
                                <motion.div key={id} variants={itemVariants} className={className || ''}>
                                    <Link href="/#purchase-on-app" className="relative rounded-2xl overflow-hidden group h-full w-full block">
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            data-ai-hint={image.imageHint}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-colors" />
                                        <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                            <p className="text-white font-semibold text-lg">{image.description}</p>
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Eye className="w-6 h-6 text-white" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
