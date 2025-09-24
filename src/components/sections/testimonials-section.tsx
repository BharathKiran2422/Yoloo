
'use client';

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { testimonials } from "@/lib/testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Star } from "lucide-react";

export function TestimonialsSection() {
    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Customers Say</h2>
                    <p className="text-muted-foreground mt-2">Real stories from our amazing users.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => {
                            const avatar = getImageData(testimonial.avatarImageId);
                            return (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-4 h-full">
                                        <Card className="flex flex-col h-full rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                            <CardContent className="flex-grow p-6">
                                                <div className="flex items-center mb-4">
                                                    {avatar && (
                                                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                                            <Image
                                                                src={avatar.imageUrl}
                                                                alt={testimonial.name}
                                                                fill
                                                                className="object-cover"
                                                                data-ai-hint={avatar.imageHint}
                                                            />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                                                         <div className="flex items-center mt-1">
                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <blockquote className="text-sm text-muted-foreground italic border-l-2 pl-4">
                                                    "{testimonial.quote}"
                                                </blockquote>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
}

    