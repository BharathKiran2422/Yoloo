
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WomenPage() {
    const womenImages = [
        { id: "women-1" },
        { id: "women-2", className: "sm:row-span-2" },
        { id: "women-3", className: "sm:col-span-2 sm:row-span-2" },
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
                <div className="container mx-auto px-4 py-8">
                     <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-400">
                           Elegant & Everyday Styles for Women
                        </h1>
                        <p className="text-muted-foreground mt-2">Explore elegant dresses, casual wear, and special collections.</p>
                    </div>

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[300px]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {womenImages.map(({ id, className }) => {
                            const image = getImageData(id);
                            if (!image) return null;
                            return (
                                <motion.div key={id} variants={itemVariants} className={className || ''}>
                                    <Link href="/download" className="relative rounded-2xl overflow-hidden group h-full w-full block shadow-md hover:shadow-2xl transition-all duration-300">
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            data-ai-hint={image.imageHint}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-colors duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="text-center text-white bg-black/50 backdrop-blur-sm py-2 px-4 rounded-lg">
                                                <p className="font-bold text-lg">View in App ⚡</p>
                                            </div>
                                        </div>
                                         <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                                            <p className="text-white font-semibold text-lg">{image.description}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="text-center mt-16 py-8 px-4 bg-gradient-to-r from-background to-card rounded-lg border">
                        <p className="text-xl font-semibold text-foreground">Chic, Ethnic & Everyday Styles in One Place</p>
                         <Link href="/download">
                             <button className="mt-4 inline-flex items-center gap-2 text-primary font-bold">
                                Download the App <ArrowRight size={16} />
                             </button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
