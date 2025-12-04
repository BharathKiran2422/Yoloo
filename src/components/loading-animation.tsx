'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function LoadingAnimation({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const { resolvedTheme, theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [themeSwitching, setThemeSwitching] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const initialLoadTimer = setTimeout(() => {
      setLoading(false);
    }, 2200); // 5 seconds for initial load

    return () => clearTimeout(initialLoadTimer);
  }, []);

  useEffect(() => {
    if (isClient && !loading) { // Only run after initial load
      setThemeSwitching(true);
      const themeSwitchTimer = setTimeout(() => {
        setThemeSwitching(false);
      }, 2200); // Show loading for 5 seconds on theme change

      return () => clearTimeout(themeSwitchTimer);
    }
  }, [theme, resolvedTheme, isClient, loading]);

  const getLogoSrc = () => {
    if (!isClient) return "/logo_gif2.gif"; // Default to light theme for SSR
    return resolvedTheme === 'dark' ? '/logo_gif1.gif' : '/logo_gif2.gif';
  };
  
  if (!isClient) {
    return null;
  }

  const showLoading = loading || themeSwitching;

  return (
    <>
      {showLoading && (
        <div
          className={cn(
            "fixed inset-0 flex items-center justify-center z-[100]",
            "bg-background"
          )}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src={getLogoSrc()}
              alt="Yoloo! Loading..."
              fill
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </div>
      )}
      <div style={{ opacity: showLoading ? 0 : 1 }}>
        {children}
      </div>
    </>
  );
}
