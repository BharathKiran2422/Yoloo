import Image from 'next/image';
import { brands } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import './brand-carousel.css';

export function BrandCarousel() {
  const brandImages = brands.map(brand => {
    const image = PlaceHolderImages.find(img => img.id === brand.imageId);
    return { ...brand, imageUrl: image?.imageUrl, imageHint: image?.imageHint };
  }).filter(b => b.imageUrl);

  // Duplicate for seamless scroll effect
  const extendedBrands = [...brandImages, ...brandImages];

  return (
    <div className="py-8 bg-background overflow-hidden relative">
       <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div
        className="w-max"
        x-data="{}"
        x-init="$el.classList.add('animate-marquee')"
      >
        <div className="flex items-center space-x-16 animate-marquee group">
          {extendedBrands.map((brand, index) => (
            <div key={`${brand.id}-${index}`} className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={brand.imageUrl as string}
                alt={brand.name}
                fill
                className="object-contain"
                data-ai-hint={brand.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
       <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
    </div>
  );
}