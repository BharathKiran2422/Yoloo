import Image from "next/image";

export function AppCtaSection() {
    return (
        <section id="purchase-on-app" className="py-16 md:py-24">
            <div className="bg-card rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">10,000+ Styles & Collections</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                From bold streetwear to ethnic elegance, sneakers to premium accessories – discover the best of Indian fashion, all in one app.
                            </p>
                            <p>
                                Get your favorite looks delivered to your doorstep in 120 minutes with Yoloo’s on-demand fashion delivery.
                            </p>
                            <p>
                                Enjoy curated collections, exclusive deals, and smart recommendations that make shopping faster, easier, and more stylish than ever.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 justify-center md:justify-start mt-8">
                             <a href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block">
                                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12"/>
                            </a>
                            <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Will be updated soon">
                                <img src="/images/app-store-badge.svg" alt="Download on the App Store" className="h-12"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 md:mt-0">
                         <Image
                            src="https://storage.googleapis.com/aai-web-samples/app-download-phones.png"
                            alt="Yoloo App on two iPhones"
                            width={500}
                            height={500}
                            className="object-contain"
                         />
                    </div>
                </div>
            </div>
        </section>
    );
}
