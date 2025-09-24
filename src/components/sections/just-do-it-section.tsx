
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function JustDoItSection() {
    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold text-primary uppercase tracking-wider">Your Style, Your Way</p>
                <h2 className="text-4xl md:text-6xl font-headline font-extrabold my-4 text-foreground tracking-tight max-w-4xl mx-auto leading-tight">
                    Don't Just Follow Trends. <span className="block">Define Them.</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
                   Ready to elevate your wardrobe? Explore our curated collections and discover pieces that truly represent you. The only way to find out is to dive in.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Link href="#purchase-on-app">
                      <Button size="lg" className="rounded-full px-10 text-lg h-12 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                          <ShoppingBag className="mr-3" />
                          Start Shopping
                      </Button>
                  </Link>
                </div>
            </div>
        </section>
    );
}
