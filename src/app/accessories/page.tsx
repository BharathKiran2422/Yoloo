import { type Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Accessories Collection - Yoloo!",
};

export default function AccessoriesPage() {
    const accessoriesImages = [
        { id: "accessories-1", className: "row-span-2" },
        { id: "accessories-2" },
        { id: "accessories-3" },
        { id: "accessories-4" },
        { id: "accessories-5" },
        { id: "accessories-6", className: "col-span-2" },
        { id: "accessories-7" },
        { id: "accessories-8", className: "row-span-2"},
        { id: "accessories-9" },
        { id: "accessories-10", className: "col-span-2"},
        { id: "accessories-11" },
        { id: "accessories-12" },
        { id: "accessories-13", className: "row-span-2"},
        { id: "accessories-14" },
        { id: "accessories-15" },
        { id: "accessories-16", className: "col-span-2"},
        { id: "accessories-17" },
        { id: "accessories-18" },
        { id: "accessories-19", className: "row-span-2"},
        { id: "accessories-20" }
    ];
    
    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <h1 className="font-headline text-4xl font-bold mb-2 text-center text-primary">Accessories</h1>
                <p className="text-muted-foreground mb-8 text-center">Complete your look with our curated collection of accessories.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                     {accessoriesImages.map(({ id, className }) => {
                        const image = getImageData(id);
                        if (!image) return null;
                        return (
                            <Link href="/#purchase-on-app" key={id} className={`relative rounded-2xl overflow-hidden group ${className || ''}`}>
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
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
