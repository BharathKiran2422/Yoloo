
'use client';

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import AppStoreButton from "../icons/app-store-button";
import GooglePlayButton from "../icons/google-play-button";
import { useEffect, useState } from "react";

export function AppCtaSection() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="purchase-on-app" className="py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="rounded-2xl p-6 md:p-12 border bg-gradient-to-br from-background to-card pattern-background">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Download the Yoloo! App</h2>
                            <div className="w-24 h-1 bg-primary mt-2 rounded-full mb-4" />
                            <p className="text-base md:text-lg text-muted-foreground mb-6">
                                From bold streetwear to ethnic elegance, sneakers to premium accessories – discover the best of Indian fashion, all in one app.
                            </p>
                            <p className="text-lg md:text-xl font-bold text-foreground mb-6">
                                Get your favorite looks delivered to your doorstep in just <span className="text-primary">30–120 minutes.</span>
                            </p>
                            <p className="text-muted-foreground mb-8 text-sm md:text-base">
                            Enjoy curated collections, exclusive deals, and smart recommendations that make shopping faster, easier, and more stylish than ever.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-8">
                            <Link href="/download" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    {mounted && <GooglePlayButton darkMode={resolvedTheme === 'dark'} className="h-12 md:h-14 w-auto border rounded-lg transform hover:-translate-y-1 transition-transform duration-300" />}
                                </Link>
                            <Link href="/download" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    {mounted && <AppStoreButton darkMode={resolvedTheme === 'dark'} className="h-12 md:h-14 w-auto border rounded-lg transform hover:-translate-y-1 transition-transform duration-300" />}
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 md:mt-0">
                            <Image
                                src="/app_download.png"
                                alt="Yoloo App on two iPhones"
                                width={500}
                                height={500}
                                className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
