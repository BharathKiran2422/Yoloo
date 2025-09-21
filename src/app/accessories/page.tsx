
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function AccessoriesPage() {
    const accessoriesImages = [
        { id: "accessories-1" },
        { id: "accessories-2", className: "sm:col-span-2 sm:row-span-2" },
        { id: "accessories-3" },
        { id: "accessories-4" },
        { id: "accessories-5" },
        { id: "accessories-6" },
        { id: "accessories-7", className: "sm:row-span-2" },
        { id: "accessories-8"},
        { id: "accessories-9", className: "sm:col-span-2" },
        { id: "accessories-10"},
        { id: "accessories-11" },
        { id: "accessories-12", className: "sm:row-span-2" },
        { id: "accessories-13"},
        { id: "accessories-14" },
        { id: "accessories-15" },
        { id: "accessories-16" },
        { id: "accessories-17", className: "sm:col-span-2 sm:row-span-2" },
        { id: "accessories-18" },
        { id: "accessories-19" },
        { id: "accessories-20" }
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
                    <h1 className="font-headline text-4xl font-bold mb-2 text-center text-primary">Accessories</h1>
                    <p className="text-muted-foreground mb-8 text-center">Complete your look with our curated collection of accessories.</p>

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[300px]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                         {accessoriesImages.map(({ id, className }) => {
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
