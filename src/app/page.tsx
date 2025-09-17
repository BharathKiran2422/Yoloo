import { HeroSection } from '@/components/sections/hero-section';
import { BeliefsSection } from '@/components/sections/beliefs-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { AppCtaSection } from '@/components/sections/app-cta-section';
import { StorySection } from '@/components/sections/story-section';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { ShopByCategory } from '@/components/sections/shop-by-category';
import { ProductCarousel } from '@/components/product-carousel';
import { trendingProducts, brandSpotlightProducts } from '@/lib/products';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4">
        <ShopByCategory />
        <FeaturedProducts />
        <ProductCarousel title="Trending Now" products={trendingProducts} />
        <ProductCarousel title="Brand Spotlight" products={brandSpotlightProducts} />
        <BeliefsSection />
        <GallerySection />
        <AppCtaSection />
      </div>
      <StorySection />
    </>
  );
}
