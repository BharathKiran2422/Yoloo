import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 60"
        className="h-10 w-auto fill-primary dark:fill-primary-foreground"
      >
        <text
          x="100"
          y="35"
          fontFamily="cursive, sans-serif"
          fontSize="40"
          fontWeight="bold"
          textAnchor="middle"
          
        >
          Yoloo!
        </text>
      </svg>
      <p className="text-xs text-muted-foreground -mt-2">Fashion Made Easy</p>
    </div>
  );
}

export function LogoIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 60"
            className={cn("h-10 w-auto fill-primary dark:fill-primary-foreground", className)}
        >
            <text
            x="100"
            y="35"
            fontFamily="cursive, sans-serif"
            fontSize="40"
            fontWeight="bold"
            textAnchor="middle"
            >
            Yoloo!
            </text>
        </svg>
    );
}