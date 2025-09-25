
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";

export function InstagramSection() {
    const instaImages = [
        "instagram1", "instagram2", "instagram3", "instagram4", "instagram5", "instagram6"
    ];

    const getImageData = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <section className="py-8 md:py-16">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Follow us on Instagram</h2>
                <p className="text-muted-foreground mt-2">@yoloo_lifestyle</p>
                <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2">
                {instaImages.map(id => {
                    const image = getImageData(id);
                    if (!image) return null;
                    return (
                        <Link key={id} href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" className="relative aspect-square block group overflow-hidden">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <Instagram className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-8 w-8 md:h-10 md:w-10" />
                            </div>
                        </Link>
                    )
                })}
            </div>
             <div className="text-center mt-8 md:mt-12">
                <Button asChild variant="outline">
                    <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2 h-4 w-4" />
                        Visit our Instagram
                    </Link>
                </Button>
            </div>
        </section>
    );
}
