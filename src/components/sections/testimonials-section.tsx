'use client';

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BrandCarousel } from "../brand-carousel";

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
    const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarImageId);
    return (
        <Card className="rounded-2xl shadow-sm border h-full bg-background/50 flex flex-col">
            <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                </div>
                <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-6">
                    {avatar && (
                        <Avatar className="h-12 w-12 mr-4 border-2 border-primary/10">
                            <AvatarImage src={avatar.imageUrl} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    )}
                    <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function TestimonialsSection() {
    return (
        <section className="py-8 md:py-12 bg-card/20 dark:bg-card/30">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Customers Are Saying</h2>
                    <p className="text-muted-foreground mt-2">Real stories from our stylish community.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
            
            <div className="container mx-auto text-center mt-16">
                 <h2 className="text-2xl font-bold text-foreground">The Yoloo Voice</h2>
                 <p className="text-muted-foreground mt-1">Trusted by the best brands in fashion.</p>
            </div>
            <BrandCarousel />

        </section>
    );
}
