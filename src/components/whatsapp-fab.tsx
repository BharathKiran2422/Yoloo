
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MessageSquare } from 'lucide-react';

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
                    <MessageSquare className="w-8 h-8 text-green-500" />
                </div>
            </div>
        </Link>
    );
}
