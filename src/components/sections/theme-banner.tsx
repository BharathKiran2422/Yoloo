'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ThemeBanner() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const src = resolvedTheme === 'dark' ? '/banner2.png' : '/banner1.png';

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch
    return <div className="w-full aspect-[3/1] bg-muted rounded-lg" />;
  }

  return (
    <section className="py-8 md:py-12">
        <div className="relative w-full aspect-[3/1] rounded-2xl overflow-hidden">
            <Image
                src={src}
                alt="Seasonal Banner"
                fill
                className="object-cover"
                priority
            />
        </div>
    </section>
  );
}
