import { Button } from '@/components/ui/button';
import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function JustDoItSection() {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto text-center">
                <p className="text-lg text-muted-foreground">Only one way to find out.</p>
                <h2 className="text-6xl md:text-8xl font-black my-4 text-foreground tracking-tighter">JUST DO IT.</h2>
                <div className="flex items-center justify-center gap-4">
                  <Link href="#purchase-on-app">
                      <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/80 px-10">
                          Shop
                      </Button>
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
        </section>
    );
}
