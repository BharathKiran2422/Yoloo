
'use client';

import { BrandCarousel } from "../brand-carousel";

export function TestimonialsSection() {
    return (
        <section className="py-12 md:py-16 bg-card/20 dark:bg-card/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Yoloo Voice</h2>
                    <p className="text-muted-foreground mt-4 text-base md:text-lg">
                        At Yoloo, we bring together speed, style, and trust. Our vision is to deliver fresh fashion with premium quality — designed for your lifestyle and delivered at your doorstep.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                </div>
            </div>
            <BrandCarousel />
        </section>
    );
}
