'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <section className="w-full bg-card py-12 md:py-20">
      <div className="container mx-auto">
        <div className="bg-white dark:bg-card-foreground/5 rounded-2xl shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <p className="text-primary font-semibold mb-2">WELCOME TO YOLOO!</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                        India's only <span className="text-primary underline">quality-first</span> quick fashion app.
                    </h1>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Styles that are tested, trusted, and transparently sourced.
                    </p>
                    <Button size="lg">Download the app</Button>
                </div>
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                </div>
            </div>
        </div>
        <div className="bg-primary/90 text-primary-foreground text-center p-3 mt-8 rounded-lg text-sm">
            Now Serving in Whitefield | Sarjapur | HSR Layout • Coming Soon in Koramangala | JP Nagar | Domlur
        </div>
      </div>
    </section>
  );
}
