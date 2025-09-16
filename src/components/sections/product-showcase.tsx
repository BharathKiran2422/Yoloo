import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuredProducts, type Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye } from 'lucide-react';

function ProductCard({ product }: { product: Product }) {
  const image = PlaceHolderImages.find(img => img.id === product.imageId);

  return (
    <Card className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-lg hover:shadow-accent/40 dark:hover:shadow-accent/20">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />
          <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2">
            <Button
              variant="secondary"
              className="w-full translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
            >
              <Eye className="mr-2 h-4 w-4" />
              Quick View
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-headline text-lg font-semibold">{product.name}</h3>
          <p className="text-muted-foreground">{product.price}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Products</h2>
          <p className="text-lg text-muted-foreground mt-2">Discover our handpicked selection of this season's best.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
