
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function GallerySection() {
    const images = [
        { id: "gallery-men", category: "Men", href: "/men", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
        { id: "gallery-women", category: "Women", href: "/women" },
        { id: "gallery-sneakers", category: "Sneakers", href: "/sneakers", rowSpan: "md:row-span-2" },
        { id: "gallery-accessories", category: "Accessories", href: "/accessories" },
        { id: "product1", category: "New Arrivals", href: "/men" },
    ];

    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <section className="py-12 md:py-16 bg-card/50 dark:bg-card/30">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore Our World of Fashion</h2>
                    <p className="text-muted-foreground mt-2">Dive into our curated collections. Discover more in each category.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4">
                    {images.map(({ id, category, href, colSpan, rowSpan }) => {
                        const image = getImageData(id);
                        if (!image) return null;
                        return (
                            <Link href={href} key={id} className={` ${colSpan || ''} ${rowSpan || ''} relative rounded-2xl overflow-hidden group`}>
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center transform opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300">
                                        <h3 className="text-white font-bold text-2xl drop-shadow-md">{category}</h3>
                                        <p className="text-white/80 text-sm">View Collection</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
