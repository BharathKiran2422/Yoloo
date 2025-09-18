
'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsSection() {
    
    const getAvatarImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <section className="py-12 md:py-16 bg-card/50 dark:bg-card">
            <div className="container mx-auto">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Customers Say</h2>
                    <p className="text-muted-foreground mt-2">Real stories from our amazing users.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                
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
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => {
                            const avatar = getAvatarImage(testimonial.avatarImageId);
                            return (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-4">
                                        <Card className="h-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                                {avatar && (
                                                    <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50">
                                                        <AvatarImage src={avatar.imageUrl} alt={avatar.description} />
                                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                )}
                                                <p className="text-lg font-medium text-foreground flex-grow">"{testimonial.quote}"</p>
                                                <div className="mt-6">
                                                     <div className="flex justify-center mb-2">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <Star 
                                                                key={i} 
                                                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="font-semibold text-foreground/90">{testimonial.name}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
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
    )
}
