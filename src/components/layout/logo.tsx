
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

  const src = resolvedTheme === 'light' ? "/logo2.png" : "/logo1.png";

  return (
    <div className={cn("relative", className)}>
       <Image src={src} alt="Yoloo! Logo" fill priority className="object-contain" />
    </div>
  );
}
