import Image from 'next/image';
import type { Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-full">
        {image && (
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={image.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                 <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg truncate">{product.name}</h3>
                    <p className="text-white/80 font-medium">{product.price}</p>
                 </div>
                 <Button size="icon" className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" variant="secondary">
                    <Eye size={20} />
                    <span className="sr-only">Quick View</span>
                 </Button>
            </div>
        )}
      <CardContent className="p-4">
        <Button className="w-full" variant="outline">View Product</Button>
      </CardContent>
    </Card>
  );
}
