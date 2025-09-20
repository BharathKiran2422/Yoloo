import type { Product } from '@/lib/products';
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';
import './product-marquee.css';

type ProductMarqueeProps = {
    title: string;
    products: Product[];
    direction?: 'left' | 'right';
}

export function ProductMarquee({ title, products, direction = 'left' }: ProductMarqueeProps) {
  // We need to duplicate the products to create a seamless loop effect
  const extendedProducts = [...products, ...products];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
                <div className="w-24 h-1 bg-primary mt-2 rounded-full" />
            </div>
        </div>
      </div>
      <div className="marquee-container group">
        <div className={cn(
            "marquee-content flex gap-8",
            direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        )}>
          {extendedProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="marquee-item shrink-0 w-[280px] sm:w-[320px] md:w-[350px]">
                <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
