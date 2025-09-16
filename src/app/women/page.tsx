import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
    title: "Women's Collection - Yoloo!",
};

export default function WomenPage() {
    const womenImages = [
        { id: "women-1", className: "col-span-2 row-span-2" },
        { id: "women-2" },
        { id: "women-3" },
        { id: "women-4", className: "row-span-2" },
        { id: "women-5" },
        { id: "women-6" },
    ];

    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <h1 className="font-headline text-4xl font-bold mb-2 text-center text-primary">Women's Collection</h1>
                <p className="text-muted-foreground mb-8 text-center">Explore elegant dresses, casual wear, and special collections.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {womenImages.map(({ id, className }) => {
                        const image = getImageData(id);
                        if (!image) return null;
                        return (
                            <div key={id} className={`relative rounded-2xl overflow-hidden group ${className || ''}`}>
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end p-4">
                                    <p className="text-white font-semibold text-lg">{image.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
