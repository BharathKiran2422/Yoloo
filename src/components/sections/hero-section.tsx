'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <section className="w-full bg-background py-12 md:py-20">
      <div className="container mx-auto">
        <div className="bg-card dark:bg-card-foreground/5 rounded-2xl shadow-sm p-8 md:p-12 border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <p className="text-primary font-semibold mb-2">YOLOO! — FASHION MADE EASY</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                        Discover Your Style. Premium, Fast, and Delivered.
                    </h1>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Explore curated collections from top Indian and international brands. Quality fashion, delivered in minutes.
                    </p>
                    <Link href="#purchase-on-app">
                        <Button size="lg">Download the app</Button>
                    </Link>
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
      </div>
    </section>
  );
}
