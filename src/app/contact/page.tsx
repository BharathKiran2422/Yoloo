import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone } from 'lucide-react';
import { Logo } from '@/components/layout/logo';

export const metadata: Metadata = {
    title: 'Contact Us - Yoloo!',
};

export default function ContactPage() {
    const contactImage = PlaceHolderImages.find(img => img.id === 'contact-image');

    return (
        <div className="bg-background">
            <div className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-8 flex justify-between items-center">
                    <h1 className="font-headline text-2xl font-bold">Support</h1>
                    <Logo className="h-10" />
                </div>
            </div>
            <div className="bg-primary/90 dark:bg-primary/20">
                <div className="container mx-auto px-4 py-16 text-center text-primary-foreground">
                    <h2 className="font-headline text-4xl font-bold">YOLOO!</h2>
                    <p>Fashion Made Easy</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center">
                        {contactImage && (
                            <Image
                                src={contactImage.imageUrl}
                                alt={contactImage.description}
                                width={400}
                                height={600}
                                className="rounded-lg shadow-2xl"
                                data-ai-hint={contactImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="font-headline text-3xl font-bold text-primary">Get in Touch</h2>
                        <p className="text-muted-foreground">
                            We're here to help with any questions or concerns you might have about Yoloo! services or products.
                        </p>
                        
                        <div className="mt-8 space-y-6">
                            <div>
                                <h3 className="font-headline text-xl font-semibold text-primary flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Email Us
                                </h3>
                                <a href="mailto:hello@brandsyoloo.co.in" className="text-foreground not-prose no-underline hover:underline">
                                    hello@brandsyoloo.co.in
                                </a>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl font-semibold text-primary flex items-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    Call Us
                                </h3>
                                <p className="text-foreground">+91-8297297197</p>
                                <p className="text-muted-foreground text-sm">9 AM to 9 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
