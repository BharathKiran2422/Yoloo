'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or nothing to prevent mismatch
    return <div className={cn("relative", className)} />;
  }

  const isLight = resolvedTheme === 'light';
  const src = isLight ? "/logo2.png" : "/logo1.png";

  return (
    <div className={cn("relative", className)}>
       <Image 
          src={src} 
          alt="Yoloo! Logo" 
          fill 
          priority 
          className={cn(
            "object-contain",
            isLight ? "p-3" : "p-4" // Apply less padding to light logo to make it appear larger
          )}
        />
    </div>
  );
}
