import Image from 'next/image';
import type { Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import Link from 'next/link';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="group/card overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-full relative">
      {image && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-110"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Glassmorphism Overlay */}
          <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/30 p-4 backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden">
            <div className="sheen-effect" />
            <h3 className="text-white font-bold text-lg truncate">{product.name}</h3>
            <p className="text-white/80 font-medium">{product.price}</p>
          </div>

          {/* Animated Quick View Button */}
          <Link href="#purchase-on-app">
            <Button size="icon" className="absolute top-4 right-4 opacity-0 transform-gpu translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300" variant="secondary">
              <Eye size={20} />
              <span className="sr-only">Quick View</span>
            </Button>
          </Link>
        </div>
      )}
      <div className="p-4 bg-background/80 backdrop-blur-sm">
        <Link href="#purchase-on-app" className="w-full">
          <Button className="w-full" variant="outline">View Product</Button>
        </Link>
      </div>
    </Card>
  );
}
