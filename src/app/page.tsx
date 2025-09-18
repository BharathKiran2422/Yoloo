import { HeroSection } from '@/components/sections/hero-section';
import { JustDoItSection } from '@/components/sections/just-do-it-section';
import { BeliefsSection } from '@/components/sections/beliefs-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { AppCtaSection } from '@/components/sections/app-cta-section';
import { StorySection } from '@/components/sections/story-section';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { ShopByCategory } from '@/components/sections/shop-by-category';
import { ProductCarousel } from '@/components/product-carousel';
import { trendingProducts, brandSpotlightProducts } from '@/lib/products';
import { InstagramSection } from '@/components/sections/instagram-section';
import { ContactSection } from '@/components/sections/contact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { BrandCarousel } from '@/components/brand-carousel';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandCarousel />
      <JustDoItSection />
      <div className="container mx-auto px-4">
        <ShopByCategory />
        <FeaturedProducts />
        <ProductCarousel title="Trending Now" products={trendingProducts} />
        <ProductCarousel title="Brand Spotlight" products={brandSpotlightProducts} />
        <BeliefsSection />
        <GallerySection />
        <InstagramSection />
        <TestimonialsSection />
        <AppCtaSection />
      </div>
      <StorySection />
      <ContactSection />
    </>
  );
}
