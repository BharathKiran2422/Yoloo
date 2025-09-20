
'use client';

import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

    const beliefs = [
        "Style should be accessible and effortless.",
        "Quality and craft are non-negotiable.",
        "Individuality should be celebrated."
    ];

    return (
        <PageTransitionWrapper>
            <div className="bg-background">
                <div className="container mx-auto px-4 py-16 sm:py-24">
                    <div className="text-center max-w-3xl mx-auto">
                         <p className="text-base font-semibold text-primary uppercase tracking-wider">Our Story</p>
                        <h1 className="font-headline text-4xl sm:text-5xl font-extrabold mt-2 text-foreground">
                            Where Fashion is Made Easy
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
                           Welcome to Yoloo!, where we believe that style should be a true reflection of who you are. We're more than just a retailer – we're your personal stylist on a mission to make premium fashion accessible and effortless.
                        </p>
                    </div>

                    <div className="mt-16 max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <h2 className="font-headline text-3xl font-bold text-foreground">Our Mission</h2>
                                <p>
                                    To bring you a curated selection of modern, premium fashion that empowers you to express your individuality. We handpick every item for its quality, style, and versatility, helping you discover pieces that you'll love and that will seamlessly integrate into your wardrobe.
                                </p>
                                 <h2 className="font-headline text-3xl font-bold text-foreground mt-8">Our Beliefs</h2>
                                 <ul className="not-prose space-y-4">
                                    {beliefs.map((belief, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                                            <span>{belief}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                {aboutImage && (
                                    <div className="relative w-full aspect-[4/5] max-w-sm">
                                        <Image
                                            src={aboutImage.imageUrl}
                                            alt={aboutImage.description}
                                            fill
                                            className="rounded-2xl shadow-2xl object-cover"
                                            data-ai-hint={aboutImage.imageHint}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                     <div className="text-center max-w-3xl mx-auto mt-24">
                        <p className="text-lg text-muted-foreground">
                           Join us on our journey to make fashion a source of confidence and creativity. Thank you for being a part of the Yoloo! community.
                        </p>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
