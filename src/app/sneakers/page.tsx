import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
    title: "Sneakers Collection - Yoloo!",
};

export default function SneakersPage() {
    const sneakerImages = [
        { id: "sneakers-1" },
        { id: "sneakers-2", className: "row-span-2" },
        { id: "sneakers-3" },
        { id: "sneakers-4", className: "col-span-2" },
        { id: "sneakers-5" },
        { id: "sneakers-6" },
        { id: "sneakers-7" },
        { id: "sneakers-8", className: "row-span-2"},
        { id: "sneakers-9" },
        { id: "sneakers-10", className: "col-span-2"},
        { id: "sneakers-11" },
        { id: "sneakers-12" },
        { id: "sneakers-13", className: "row-span-2"},
        { id: "sneakers-14" },
        { id: "sneakers-15" },
        { id: "sneakers-16", className: "col-span-2"},
        { id: "sneakers-17" },
        { id: "sneakers-18" },
        { id: "sneakers-19", className: "row-span-2"},
        { id: "sneakers-20" }
    ];
    
    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <h1 className="font-headline text-4xl font-bold mb-2 text-center text-primary">Sneakers & Shoes</h1>
                <p className="text-muted-foreground mb-8 text-center">Step up your game with our collection of trendy and classic footwear.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                     {sneakerImages.map(({ id, className }) => {
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
