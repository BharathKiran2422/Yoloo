import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
    title: "Men's Collection - Yoloo!",
};

export default function MenPage() {
    const menImages = [
        { id: "men-1", className: "row-span-2" },
        { id: "men-2" },
        { id: "men-3" },
        { id: "men-4", className: "col-span-2 row-span-2" },
        { id: "men-5" },
        { id: "men-6" },
    ];

    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <h1 className="font-headline text-4xl font-bold mb-2 text-center text-primary">Men's Collection</h1>
                <p className="text-muted-foreground mb-8 text-center">From casual wear to licensed collections, find your perfect style.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {menImages.map(({ id, className }) => {
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
