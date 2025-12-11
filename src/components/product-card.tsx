
import Image from 'next/image';
import type { Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { IndianRupee } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Link href="#purchase-on-app">
      <Card className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full">
        {image && (
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-4 w-full translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white font-bold text-lg drop-shadow-md">{product.name}</h3>
                {/*<p className="text-white/90 text-sm drop-shadow-sm flex items-center">
                  <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                  {product.price}
                </p>*/}
            </div>
          </div>
        )}
      </Card>
    </Link>
  );
}
