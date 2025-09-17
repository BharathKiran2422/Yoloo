import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
        <Image src="/images/icon.png" alt="Yoloo! Logo" width={40} height={40} />
    </div>
  );
}
