import { featuredProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
        <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium fashion.</p>
         <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
