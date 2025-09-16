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
        <section className="py-16 md:py-24 bg-background">
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4">
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
        </section>
    );
}
