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
    // Render a placeholder to prevent layout shift while waiting for theme
    return <div className={cn("relative", className)} />;
  }

  return (
    <div className={cn("relative", className)}>
        {resolvedTheme === 'light' ? (
            <Image src="/logo2.png" alt="Yoloo! Logo" fill priority className="object-contain" />
        ) : (
            <Image src="/logo1.png" alt="Yoloo! Logo" fill priority className="object-contain" />
        )}
    </div>
  );
}
