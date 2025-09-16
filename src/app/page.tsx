import { HeroSection } from '@/components/sections/hero-section';
import { BeliefsSection } from '@/components/sections/beliefs-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { AppCtaSection } from '@/components/sections/app-cta-section';
import { StorySection } from '@/components/sections/story-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4">
        <BeliefsSection />
        <GallerySection />
        <AppCtaSection />
      </div>
      <StorySection />
    </>
  );
}
