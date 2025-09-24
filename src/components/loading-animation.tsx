
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function LoadingAnimation({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const getLogoSrc = () => {
    if (!isClient) return "/logo_gif2.gif"; // Default to light theme for SSR
    return resolvedTheme === 'dark' ? '/logo_gif1.gif' : '/logo_gif2.gif';
  };
  
  // This prevents a flash of the wrong theme's background on load
  if (!isClient) {
    return null;
  }

  if (loading) {
    return (
      <div
        className={cn(
          "fixed inset-0 flex items-center justify-center z-[100]",
          resolvedTheme === 'dark' ? 'bg-background' : 'bg-background' 
        )}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src={getLogoSrc()}
            alt="Yoloo! Loading..."
            fill
            className="object-contain"
            unoptimized // GIFs are not optimized by next/image
            priority
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
