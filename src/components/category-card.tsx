
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
    imageId: string;
    title: string;
    href: string;
};

export function CategoryCard({ imageId, title, href }: CategoryCardProps) {
    const image = PlaceHolderImages.find(img => img.id === imageId);

    if (!image) {
        return null;
    }

    return (
        <Link href={href} className="block group relative rounded-2xl overflow-hidden aspect-[3/4]">
            <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
                <p className="text-white/80 text-sm uppercase">Category</p>
                <h3 className="text-white font-bold text-2xl">{title}</h3>
            </div>
        </Link>
    );
}

    