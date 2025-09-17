import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function StorySection() {
    const storyImage = PlaceHolderImages.find(img => img.id === 'story');

    return (
        <section className="w-full py-12 md:py-16 relative">
            {storyImage && (
                <Image
                    src={storyImage.imageUrl}
                    alt={storyImage.description}
                    fill
                    className="object-cover z-0"
                    data-ai-hint={storyImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="container mx-auto text-center relative z-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Yoloo Story</h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                    Every piece, fabric, and stitch is tested before it travels, by a team of curators, makers and tasters, obsessed with raising the standard of everyday fashion. A new style-delivery experience, born in Bengaluru, built on high-quality.
                </p>
            </div>
        </section>
    );
}
