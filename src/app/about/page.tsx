import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
    title: 'About Us - Yoloo!',
};

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'product2');

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <h1 className="font-headline text-4xl font-bold mb-8 text-center">About Yoloo!</h1>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                width={600}
                                height={800}
                                className="rounded-lg shadow-lg"
                                data-ai-hint={aboutImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="md:w-1/2 prose prose-lg dark:prose-invert">
                        <p>
                            Welcome to Yoloo!, where fashion is made easy. We believe that style should be accessible, effortless, and a true reflection of who you are. Our mission is to bring you a curated selection of modern, premium fashion that empowers you to express your individuality.
                        </p>
                        <p>
                            At Yoloo!, we're more than just a retailer – we're your personal stylist. We're passionate about helping you discover pieces that you'll love and that will seamlessly integrate into your wardrobe. From timeless classics to the latest trends, every item in our collection is handpicked for its quality, style, and versatility.
                        </p>
                        <p>
                            Join us on our journey to make fashion a source of confidence and creativity. Thank you for being a part of the Yoloo! community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
