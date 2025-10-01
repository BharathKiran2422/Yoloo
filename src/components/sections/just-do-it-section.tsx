
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function JustDoItSection() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
                <p className="text-base md:text-lg font-semibold text-primary uppercase tracking-wider">Don't Just Follow Trends. Define Them.</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold my-4 text-foreground tracking-tight max-w-4xl mx-auto leading-tight">
                Modern Lifestyle Needs,<span className="block">Modern Shopping.</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg mb-8">
                   With Yoloo, shopping is quick, effortless, and designed to match the way you live.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Link href="#purchase-on-app">
                      <Button size="lg" className="rounded-full px-8 md:px-10 text-base md:text-lg h-12 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                          <ShoppingBag className="mr-2 md:mr-3" />
                          Start Shopping
                      </Button>
                  </Link>
                </div>
            </div>
        </section>
    );
}
