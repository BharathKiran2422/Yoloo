
import { HeroSection } from '@/components/sections/hero-section';
import { JustDoItSection } from '@/components/sections/just-do-it-section';
import { BeliefsSection } from '@/components/sections/beliefs-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { AppCtaSection } from '@/components/sections/app-cta-section';
import { StorySection } from '@/components/sections/story-section';
import { FeaturedProductsInteractive } from '@/components/sections/featured-products-interactive';
import { ShopByCategory } from '@/components/sections/shop-by-category';
import { InstagramSection } from '@/components/sections/instagram-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { BrandCarousel } from '@/components/brand-carousel';
import { ProductMarquee } from '@/components/product-marquee';
import { trendingProducts, brandSpotlightProducts } from '@/lib/products';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { HighlightBanner } from '@/components/sections/highlight-banner';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <PageTransitionWrapper>
      <HeroSection />
      <BrandCarousel />
      <JustDoItSection />
      <div className="container mx-auto px-4">
        <ShopByCategory />
        <FeaturedProductsInteractive />
        <HighlightBanner />
        <ProductMarquee title="Trending Now" products={trendingProducts} direction="left" />
        <ProductMarquee title="Brand Spotlight" products={brandSpotlightProducts} direction="right" />
        <BeliefsSection />
        <GallerySection />
        <InstagramSection />
        <TestimonialsSection />
        <AppCtaSection />
      </div>
      <StorySection />
      <ContactSection />
    </PageTransitionWrapper>
  );
}
