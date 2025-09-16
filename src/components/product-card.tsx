import Image from 'next/image';
import type { Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
        {image && (
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                />
            </div>
        )}
      <CardHeader>
        <CardTitle className="text-lg font-semibold truncate">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-primary font-bold text-xl">{product.price}</p>
      </CardContent>
       <CardFooter>
        <Button className="w-full">View Product</Button>
      </CardFooter>
    </Card>
  );
}
