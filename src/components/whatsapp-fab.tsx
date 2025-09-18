import Link from 'next/link';
import { cn } from '@/lib/utils';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={cn("w-8 h-8 fill-current", className)}
    >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c101.2 0 183.3 82.1 183.3 183.3 0 32.7-8.6 63.3-24.6 89.9l-2.1 3.2-2.1 3.2-17.7 26.4-26.4 17.7-3.2 2.1-3.2 2.1c-26.6 16-57.2 24.6-89.9 24.6h-.1c-101.2 0-183.3-82.1-183.3-183.3 0-101.2 82.1-183.3 183.3-183.3zm83.7 93.2l-15.7-26.4c-3.2-5.3-7.4-8.5-12.8-9.6-5.3-1.1-11.7-1.1-16.9 1.1-5.3 2.1-10.6 5.3-15.9 8.5-5.3 3.2-10.6 6.4-15.9 9.6-11.7 6.4-20.2 10.6-28.7 10.6-8.5 0-16-3.2-22.4-9.6-6.4-6.4-12.8-14.9-19.2-25.6s-12.8-22.4-19.2-34.1c-6.4-11.7-9.6-22.4-9.6-32s3.2-18.1 6.4-24.6c3.2-6.4 7.4-11.7 12.8-15.9s10.6-6.4 15.9-8.5c5.3-2.1 11.7-3.2 18.1-3.2 6.4 0 11.7 1.1 15.9 3.2 4.3 2.1 8.5 5.3 12.8 9.6l15.7 26.4c3.2 5.3 4.3 10.6 4.3 15.9 0 5.3-2.1 10.6-6.4 15.9l-15.7 18.1c-3.2 3.2-4.3 6.4-4.3 9.6 0 3.2 1.1 6.4 3.2 9.6 5.3 8.5 12.8 18.1 22.4 28.7s20.2 18.1 32 25.6c3.2 2.1 6.4 3.2 9.6 3.2s6.4-1.1 9.6-3.2l18.1-15.7c5.3-3.2 10.6-5.3 15.9-5.3s10.6 1.1 15.9 3.2c5.3 2.1 9.6 5.3 12.8 9.6s5.3 9.6 5.3 15.9c.1 6.3-1 12.7-3.1 19z"/>
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
            className="fixed bottom-6 right-6 z-50 group"
        >
            <div className="flex items-center gap-3">
                <div className="bg-background/80 backdrop-blur-sm rounded-full py-2 px-5 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1">
                    <p className="text-green-600 dark:text-green-400 font-semibold whitespace-nowrap">Hey Bae, Need Help?</p>
                </div>
                <div className="bg-background rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow">
                    <WhatsAppIcon className="text-green-500" />
                </div>
            </div>
        </Link>
    );
}
