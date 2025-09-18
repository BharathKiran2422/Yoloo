import { cn } from "@/lib/utils";

export function GooglePlayIcon({ className }: { className?: string }) {
    return (
        <svg
            className={cn("w-8 h-8", className)}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.68583 0.288086L18.9023 7.41113L13.0563 11.9906L4.68583 0.288086Z"
                fillOpacity="0.6"
            />
            <path
                d="M3.93164 23.6992L18.1133 16.582L12.3021 11.999L3.93164 23.6992Z"
                fillOpacity="0.6"
            />
            <path d="M19.3499 8.61523L13.8242 12.0001L19.3499 15.3849V8.61523Z" fillOpacity="0.6" />
            <path
                d="M2.5 21.0967V2.90234L11.5161 11.9995L2.5 21.0967Z"
                fill="currentColor"
            />
        </svg>
    );
}
