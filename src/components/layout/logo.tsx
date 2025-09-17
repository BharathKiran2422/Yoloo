
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

  // We need to wait for the component to mount to know the theme.
  if (!mounted) {
    // Render a placeholder or null to avoid layout shift
    return <div className={cn("flex items-center", className)} style={{width: 40, height: 40}} />;
  }

  return (
    <div className={cn("flex items-center", className)}>
        <div className={cn("relative w-[40px] h-[40px]", resolvedTheme === 'light' ? 'block' : 'hidden')}>
            <Image src="/images/logo2.png" alt="Yoloo! Logo" fill priority />
        </div>
         <div className={cn("relative w-[40px] h-[40px]", resolvedTheme === 'dark' ? 'block' : 'hidden')}>
            <Image src="/images/logo1.png" alt="Yoloo! Logo" fill priority />
        </div>
    </div>
  );
}
