import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function JustDoItSection() {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto text-center">
                <p className="text-lg text-muted-foreground">Only one way to find out.</p>
                <h2 className="text-6xl md:text-8xl font-black my-4 text-foreground tracking-tighter">JUST DO IT.</h2>
                <Link href="/men">
                    <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/80 px-10">
                        Shop
                    </Button>
                </Link>
            </div>
        </section>
    );
}
