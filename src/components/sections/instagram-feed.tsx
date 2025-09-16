import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

export function InstagramFeed() {
  const instaImages = PlaceHolderImages.filter(img => img.id.startsWith('insta'));

  return (
    <section id="instagram" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Follow Us On Instagram</h2>
          <p className="text-lg text-muted-foreground mt-2">
            <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-foreground hover:underline">@yoloo_lifestyle</Link>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaImages.map(image => (
            <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" key={image.id} className="group block overflow-hidden rounded-lg aspect-square relative">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
