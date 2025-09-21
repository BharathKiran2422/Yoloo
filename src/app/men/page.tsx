
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function MenPage() {
    const menImages = [
        { id: "men-1", className: "sm:col-span-2 sm:row-span-2" },
        { id: "men-2" },
        { id: "men-3" },
        { id: "men-4" },
        { id: "men-5", className: "sm:row-span-2" },
        { id: "men-6", className: "sm:col-span-2" },
        { id: "men-7", },
        { id: "men-8" },
        { id: "men-9" },
        { id: "men-10" },
        { id: "men-11", className: "sm:col-span-2 sm:row-span-2" },
        { id: "men-12" },
        { id: "men-13", className: "sm:row-span-2" },
        { id: "men-14" },
        { id: "men-15" },
        { id: "men-16", className: "sm:col-span-2" },
        { id: "men-17" },
        { id: "men-18" },
        { id: "men-19" },
        { id: "men-20" }
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
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           Latest Trends in Men’s Fashion
                        </h1>
                        <p className="text-muted-foreground mt-2">From casual wear to licensed collections, find your perfect style.</p>
                    </div>

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[300px]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {menImages.map(({ id, className }) => {
                            const image = getImageData(id);
                            if (!image) return null;
                            return (
                                <motion.div key={id} variants={itemVariants} className={className || ''}>
                                    <Link href="/#purchase-on-app" className="relative rounded-2xl overflow-hidden group h-full w-full block shadow-md hover:shadow-2xl transition-all duration-300">
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
                        <p className="text-xl font-semibold text-foreground">From Streetwear to Classics – Find It All in Yoloo!</p>
                        <Link href="/#purchase-on-app">
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
