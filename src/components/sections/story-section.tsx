
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function StorySection() {
    const storyImages = [
        PlaceHolderImages.find(img => img.id === 'story-grid-1'),
        PlaceHolderImages.find(img => img.id === 'story-grid-2'),
        PlaceHolderImages.find(img => img.id === 'story-grid-3'),
        PlaceHolderImages.find(img => img.id === 'story-grid-4'),
    ].filter(Boolean);

    return (
        <section className="w-full py-16 md:py-24 bg-card/50 dark:bg-card">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground !mb-6">The Yoloo! Story</h2>
                        <p className="lead">
                           At Yoloo Lifestyle, we’re <strong className="text-primary">transforming the way Hyderabad shops for fashion.</strong>
                        </p>
                        <p>
                            As the city’s first quick commerce fashion platform, we deliver trendy apparel and accessories from premium Indian brands to your doorstep in just <strong className="text-primary">30–120 minutes.</strong>
                        </p>
                        <p>
                            Our curated collections bring together modern styles, ethnic wear, and everyday essentials — all backed by fast delivery, climate-controlled storage, and a seamless app experience. Whether you’re shopping for a last-minute party outfit, a festive look, or everyday fashion, Yoloo makes it possible at <strong className="text-primary">lightning speed.</strong>
                        </p>
                        <p>
                            With zero upfront costs for brands, full-service warehousing, and last-mile delivery, Yoloo empowers both fashion labels and customers. We celebrate Indian talent while making shopping faster, easier, and trendier than ever before.
                        </p>
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
