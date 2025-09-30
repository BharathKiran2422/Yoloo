
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Instagram, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';


const heroSlides = [
    {
        id: 'hero-1',
        imageId: 'hero-slide-1',
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
    }
];


export function HeroSection() {
  const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
      const heroImage = getImageData(heroSlides[0].imageId);
      return (
        <section className="w-full bg-background pt-8 md:pt-12">
          <div className="container mx-auto px-4">
            <div className="bg-card dark:bg-card-foreground/5 rounded-2xl shadow-sm p-6 md:p-12 border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-center md:text-left">
                  <p className="text-primary font-semibold mb-2">{heroSlides[0].pretitle}</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                    {heroSlides[0].title}
                  </h1>
                  <p className="text-muted-foreground mb-8 text-base md:text-lg">
                    {heroSlides[0].subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <Link href="#purchase-on-app">
                      <Button size="lg" className="w-full sm:w-auto">{heroSlides[0].buttonText}</Button>
                    </Link>
                     <div className="flex items-center space-x-3">
                        <Link href="https://www.linkedin.com/company/yoloo-lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Instagram className="h-6 w-6" />
                        </Link>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                  {heroImage && (
                    <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={heroImage.imageHint}
                      priority={true}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
  }

  return (
    <section className="w-full bg-background pt-8 md:pt-12">
      <div className="container mx-auto px-4">
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
                  <div className="bg-card dark:bg-card-foreground/5 rounded-2xl shadow-sm p-6 md:p-12 border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                      <div className="text-center md:text-left">
                        <p className="text-primary font-semibold mb-2">{slide.pretitle}</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-muted-foreground mb-8 text-base md:text-lg">
                          {slide.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                          <Link href="#purchase-on-app">
                            <Button size="lg" className="w-full sm:w-auto">{slide.buttonText}</Button>
                          </Link>
                          <div className="flex items-center space-x-3">
                              <Link href="https://www.linkedin.com/company/yoloo-lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-6 w-6" />
                              </Link>
                              <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-6 w-6" />
                              </Link>
                          </div>
                        </div>
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
          <CarouselPrevious className="hidden md:flex left-[-1rem] xl:left-[-1.5rem]" />
          <CarouselNext className="hidden md:flex right-[-1rem] xl:right-[-1.5rem]" />
        </Carousel>
      </div>
    </section>
  );
}
