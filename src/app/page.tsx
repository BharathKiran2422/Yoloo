import { HeroSection } from '@/components/sections/hero-section';
import { BeliefsSection } from '@/components/sections/beliefs-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { AppCtaSection } from '@/components/sections/app-cta-section';
import { StorySection } from '@/components/sections/story-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <div className="w-full max-w-6xl mx-auto px-4">
        <BeliefsSection />
        <GallerySection />
        <AppCtaSection />
      </div>
      <StorySection />
    </div>
  );
}
