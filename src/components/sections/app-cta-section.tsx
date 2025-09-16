import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AppCtaSection() {
    const phoneImage = PlaceHolderImages.find(img => img.id === 'app-cta-phone');

    return (
        <section className="py-16 md:py-24">
            <div className="bg-card border rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">4,000+</h2>
                        <p className="text-muted-foreground mb-4">
                            products across fresh styles, staples, and trends - each tested before it earns a place on the app.
                        </p>
                        <p className="text-lg text-foreground mb-2">Get high-quality fashion delivered at your doorstep in</p>
                        <p className="text-5xl md:text-6xl font-bold text-primary mb-6">90 minutes.</p>
                        
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                             <Image src="https://picsum.photos/seed/qr/100/100" alt="QR Code" width={100} height={100} className="rounded-lg" />
                             <div>
                                <div className="flex gap-2">
                                     <a href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block">
                                        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12"/>
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Will be updated soon">
                                        <img src="/images/app-store-badge.svg" alt="Download on the App Store" className="h-12"/>
                                    </a>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">Download the app now!</p>
                             </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                         <div className="relative w-[300px] h-[600px] bg-neutral-800 rounded-[40px] border-[14px] border-neutral-900 shadow-2xl">
                             {phoneImage && (
                                <Image
                                    src={phoneImage.imageUrl}
                                    alt={phoneImage.description}
                                    fill
                                    className="object-cover rounded-[26px]"
                                    data-ai-hint={phoneImage.imageHint}
                                />
                             )}
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
