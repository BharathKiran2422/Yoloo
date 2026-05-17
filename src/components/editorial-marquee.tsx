
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type EditorialMarqueeProps = {
  imageIds: string[];
  speed?: number;
  direction?: 'left' | 'right';
};

export function EditorialMarquee({ imageIds, speed = 40, direction = 'left' }: EditorialMarqueeProps) {
  const images = imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);
  
  // Duplicate for seamless scroll
  const repeatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-background">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {repeatedImages.map((img, idx) => (
          <div key={`${img?.id}-${idx}`} className="relative h-[400px] md:h-[600px] aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src={img!.imageUrl}
              alt={img!.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 600px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
