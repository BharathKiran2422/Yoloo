import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function GallerySection() {
    const images = [
        { id: "gallery1", colSpan: "col-span-2", rowSpan: "row-span-2" },
        { id: "gallery2", colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: "gallery3", colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: "gallery4", colSpan: "col-span-2", rowSpan: "row-span-2" },
        { id: "gallery5", colSpan: "col-span-1", rowSpan: "row-span-2" },
        { id: "gallery6", colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: "gallery7", colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: "gallery8", colSpan: "col-span-2", rowSpan: "row-span-2" },
        { id: "gallery9", colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: "gallery10", colSpan: "col-span-1", rowSpan: "row-span-1" },
    ];

    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <section className="py-12 md:py-16 bg-card/50 dark:bg-card">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore Our World</h2>
                    <p className="text-muted-foreground mt-2">A glimpse into the style and essence of Yoloo!</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {images.map(({ id, colSpan, rowSpan }) => {
                        const image = getImageData(id);
                        if (!image) return null;
                        return (
                            <div key={id} className={`${colSpan} ${rowSpan} relative rounded-2xl overflow-hidden group`}>
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
