'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


const heroSlides = [
    {
        id: 'hero-1',
        imageId: 'hero',
        pretitle: 'YOLOO! — FASHION MADE EASY',
        title: 'Discover Your Style. Premium, Fast, and Delivered.',
        subtitle: 'Explore curated collections from top Indian and international brands. Quality fashion, delivered in minutes.',
        buttonText: 'Download the app',
    },
    {
        id: 'hero-2',
        imageId: 'hero-slide-2',
        pretitle: 'LIMITED EDITION DROPS',
        title: 'Exclusive Collections, Unmatched Style.',
        subtitle: 'Shop limited edition apparel from your favorite superhero and pop-culture brands. Dont miss out!',
        buttonText: 'Explore Collections',
    },
    {
        id: 'hero-3',
        imageId: 'hero-slide-3',
        pretitle: '30-120 MINUTE DELIVERY',
        title: 'Instant Gratification for Your Wardrobe.',
        subtitle: 'Why wait? Get the latest trends and your favorite styles delivered to your door in 30-120 minutes.',
        buttonText: 'Shop Now',
    }
];


export function HeroSection() {
  const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section className="w-full bg-background pt-12 md:pt-20">
      <div className="container mx-auto">
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide) => {
              const heroImage = getImageData(slide.imageId);
              return (
                <CarouselItem key={slide.id}>
                  <div className="bg-card dark:bg-card-foreground/5 rounded-2xl shadow-sm p-8 md:p-12 border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div className="text-center md:text-left">
                        <p className="text-primary font-semibold mb-2">{slide.pretitle}</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-muted-foreground mb-8 text-lg">
                          {slide.subtitle}
                        </p>
                        <Link href="#purchase-on-app">
                          <Button size="lg">{slide.buttonText}</Button>
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
                            priority={slide.id === 'hero-1'}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-[-1.5rem]" />
          <CarouselNext className="hidden md:flex right-[-1.5rem]" />
        </Carousel>
      </div>
    </section>
  );
}
