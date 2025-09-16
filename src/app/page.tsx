import { HeroSection } from '@/components/sections/hero-section';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { AiStylist } from '@/components/sections/ai-stylist';
import { InstagramFeed } from '@/components/sections/instagram-feed';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProductShowcase />
      <AiStylist />
      <InstagramFeed />
      <ContactFormSection />
    </div>
  );
}
