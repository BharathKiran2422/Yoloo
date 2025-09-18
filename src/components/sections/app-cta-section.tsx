'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AppCtaSection() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const appStoreBadge = resolvedTheme === 'dark'
        ? '/images/app-store-badge-dark.svg'
        : '/images/app-store-badge-light.svg';

    return (
        <section id="purchase-on-app" className="py-12 md:py-16">
            <div className="bg-card rounded-2xl p-8 md:p-12 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">10,000+ Styles & Collections</h2>
                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                From bold streetwear to ethnic elegance, sneakers to premium accessories – discover the best of Indian fashion, all in one app.
                            </p>
                            <p>
                                Get your favorite looks delivered to your doorstep in just
                                <span className="inline-block bg-muted rounded-lg px-3 py-1 mx-2">
                                   <span className="font-bold text-primary text-xl">🚚 30–120 minutes.</span>
                                </span>
                            </p>
                            <p>
                                Enjoy curated collections, exclusive deals, and smart recommendations that make shopping faster, easier, and more stylish than ever.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 justify-center md:justify-start mt-8">
                             <a href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block">
                                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12"/>
                            </a>
                            {mounted && (
                               <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Will be updated soon">
                                  <img src={appStoreBadge} alt="Download on the App Store" className="h-12"/>
                              </a>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 md:mt-0">
                         <Image
                            src="/app_download.png"
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
