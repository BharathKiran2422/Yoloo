
'use client';

import Image from "next/image";
import { Button } from "../ui/button";
import { AppStoreIcon } from "../icons/app-store";
import { GooglePlayIcon } from "../icons/google-play";
import Link from "next/link";

export function AppCtaSection() {
    return (
        <section id="purchase-on-app" className="py-12 md:py-16">
            <div className="rounded-2xl p-8 md:p-12 border bg-gradient-to-br from-background to-card pattern-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Download the Yoloo! App</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            From bold streetwear to ethnic elegance, sneakers to premium accessories – discover the best of Indian fashion, all in one app.
                        </p>
                        <p className="text-xl font-bold text-foreground mb-6">
                            Get your favorite looks delivered to your doorstep in just <span className="text-primary">30–120 minutes.</span>
                        </p>
                         <p className="text-muted-foreground mb-8">
                           Enjoy curated collections, exclusive deals, and smart recommendations that make shopping faster, easier, and more stylish than ever.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-8">
                           <Link href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button className="w-full bg-[#34A853] hover:bg-[#2c8e45] text-white h-14 text-left px-5 flex items-center justify-center sm:justify-start gap-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                                    <GooglePlayIcon className="w-8 h-8" />
                                    <div>
                                        <p className="text-xs">GET IT ON</p>
                                        <p className="text-lg font-semibold leading-tight">Google Play</p>
                                    </div>
                                </Button>
                            </Link>
                           <Link href="/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" title="Coming soon">
                                <Image src="/app-store-download.svg" alt="Download on the App Store" width={170} height={56} className="h-14 w-auto transform hover:-translate-y-1 transition-transform duration-300" />
                            </Link>
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
