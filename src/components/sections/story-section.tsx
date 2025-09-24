
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Zap, Sparkles, Store, Rocket } from "lucide-react";

export function StorySection() {
    const storyImages = [
        PlaceHolderImages.find(img => img.id === 'story-grid-1'),
        PlaceHolderImages.find(img => img.id === 'story-grid-2'),
        PlaceHolderImages.find(img => img.id === 'story-grid-3'),
        PlaceHolderImages.find(img => img.id === 'story-grid-4'),
    ].filter(Boolean);

    const storyPoints = [
        {
            icon: Rocket,
            title: "Hyderabad's First",
            description: "We are the city’s first quick commerce fashion platform, transforming how you shop."
        },
        {
            icon: Zap,
            title: "30-120 Min Delivery",
            description: "Get trendy apparel and accessories delivered to your doorstep at lightning speed."
        },
        {
            icon: Sparkles,
            title: "Curated Collections",
            description: "Explore modern styles, ethnic wear, and everyday essentials from premium Indian brands."
        },
        {
            icon: Store,
            title: "Empowering Brands",
            description: "We partner with brands to handle everything from storage to last-mile delivery, celebrating Indian talent."
        }
    ];

    return (
        <section className="w-full py-8 md:py-12 bg-card/50 dark:bg-card">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Yoloo! Story</h2>
                    <p className="text-muted-foreground mt-2">Faster, easier, and trendier than ever before.</p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        {storyPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <point.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                                    <p className="text-muted-foreground mt-1">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        {storyImages.map((image, index) => image && (
                            <div key={image.id} className={`rounded-xl overflow-hidden shadow-lg ${index === 0 || index === 3 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

    