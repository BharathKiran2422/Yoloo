'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
            <div className="rounded-2xl p-8 md:p-12 border bg-gradient-to-br from-background to-card pattern-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Download the Yoloo! App</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Shop the latest trends and get your order delivered in <span className="font-bold text-foreground">30-120 minutes</span>. Instant fashion gratification is just a tap away.
                        </p>
                        
                        <div className="flex items-center gap-4 justify-center md:justify-start mt-8">
                             <a href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block transform hover:scale-105 transition-transform">
                                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14"/>
                            </a>
                            {mounted && (
                               <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block transform hover:scale-105 transition-transform" title="Will be updated soon">
                                  <img src={appStoreBadge} alt="Download on the App Store" className="h-14"/>
                              </a>
                            )}
                        </div>
                         <a href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="mt-8 w-full md:w-auto">Download Now</Button>
                        </a>
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
