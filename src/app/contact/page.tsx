
import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - Yoloo!',
};

export default function ContactPage() {
    const contactImage = PlaceHolderImages.find(img => img.id === 'contact-image');

    return (
        <div className="bg-background text-foreground min-h-screen p-4 sm:p-6 flex flex-col items-center">
            <div className="w-full max-w-5xl">
                <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
                    <ArrowLeft size={16} />
                    <span>Back to Home</span>
                </Link>
            </div>
            <div className="bg-card rounded-2xl p-8 sm:p-12 w-full max-w-5xl border">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h1 className="font-headline text-4xl font-bold text-foreground">Get in Touch</h1>
                        <p className="text-muted-foreground">
                            We're here to help with any questions or concerns you might have.
                        </p>
                        
                        <div className="mt-12 space-y-8">
                            <div>
                                <h3 className="font-headline text-xl font-semibold text-foreground flex items-center gap-3">
                                    <Mail className="w-6 h-6" />
                                    Email Us
                                </h3>
                                <a href="mailto:hello@brandsyoloo.co.in" className="text-muted-foreground not-prose no-underline hover:text-primary block mt-2">
                                    hello@brandsyoloo.co.in
                                </a>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl font-semibold text-foreground flex items-center gap-3">
                                    <Phone className="w-6 h-6" />
                                    Call Us
                                </h3>
                                <p className="text-muted-foreground mt-2">+91-8297297197</p>
                                <p className="text-muted-foreground/80 text-sm">Service hours: 9 AM to 9 PM</p>
                            </div>
                        </div>
                    </div>
                     <div className="flex justify-center">
                        {contactImage && (
                            <Image
                                src={contactImage.imageUrl}
                                alt={contactImage.description}
                                width={400}
                                height={600}
                                className="rounded-lg shadow-2xl object-cover"
                                data-ai-hint={contactImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
