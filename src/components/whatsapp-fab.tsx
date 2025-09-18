
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MessageSquare } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8 fill-current", className)}
    >
        <path d="M12.04 2.01A10.02 10.02 0 0 0 2 12.05a10.02 10.02 0 0 0 10.04 10.03c5.52 0 10.04-4.5 10.04-10.03S17.56 2.01 12.04 2.01zm0 18.23a8.21 8.21 0 0 1-8.22-8.21 8.21 8.21 0 0 1 8.22-8.21 8.21 8.21 0 0 1 8.22 8.21 8.21 8.21 0 0 1-8.22 8.21zm4.25-5.92c-.22-.11-.74-.36-1.07-.48-.33-.12-.57-.18-.81.18-.24.36-.9.9-1.1 1.08-.2.18-.4.2-.74.06-.33-.12-1.4-.52-2.67-1.64s-2.12-2.58-2.36-3.03c-.24-.45-.03-.7.09-.81.1-.11.22-.27.33-.4.11-.12.15-.21.21-.33.06-.12.03-.24-.03-.36s-.81-1.95-1.1-2.67c-.3-.72-.6-.6-.81-.6s-.45-.03-.66-.03a1.5 1.5 0 0 0-1.1.51c-.36.45-1.35 1.32-1.35 3.21s1.38 3.72 1.56 3.99c.18.27 2.73 4.36 6.6 5.86.95.36 1.68.57 2.25.73.84.24 1.6.21 2.22.12.68-.09 2.07-1.23 2.36-2.4.3-.1.18.18.12.3z"/>
    </svg>
);

type WhatsAppFabProps = {
    phoneNumber: string;
};

export function WhatsAppFab({ phoneNumber }: WhatsAppFabProps) {
    const message = "Hey, I saw your website and I have a question!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 left-6 z-50 group"
        >
            <div className="flex items-center flex-row-reverse gap-3">
                <div className="bg-background/80 backdrop-blur-sm rounded-full py-2 px-5 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
                    <p className="text-green-600 dark:text-green-400 font-semibold whitespace-nowrap">Hey Bae, Need Help?</p>
                </div>
                <div className="bg-background rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow">
                    <WhatsAppIcon className="text-green-500" />
                </div>
            </div>
        </Link>
    );
}
