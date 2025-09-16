import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center font-bold text-2xl text-primary dark:text-foreground", className)}>
        <span>YOLOO!</span>
    </div>
  );
}
