'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function DisclaimerPage() {
    return (
        <PageTransitionWrapper>
            <div className="bg-background text-foreground min-h-screen p-4 sm:p-6 flex flex-col items-center">
                <div className="w-full max-w-4xl">
                    <Link href="/home" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
                <div className="bg-card rounded-2xl p-8 sm:p-12 w-full max-w-4xl space-y-8 border">
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Disclaimer</h1>
                        <p className="text-muted-foreground">Please read the following disclaimer carefully before using our website and app.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                            The information and products on the Yoloo! platform are provided "as is". While we strive for accuracy, we make no warranties regarding the completeness, reliability, or suitability of any information, products, or services. Yoloo! shall not be liable for any direct, indirect, or consequential loss or damage arising from the use of our platform.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Product Usage & Representation</h2>
                        <p className="text-muted-foreground">
                            Product colors, textures, and appearances may vary slightly from what is displayed on your screen due to monitor settings and photographic lighting. We are not responsible for any issues arising from the improper use, washing, or handling of products. Please follow all care instructions provided.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. External Links</h2>
                        <p className="text-muted-foreground">
                            Our website may contain links to external sites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link href="/home">
                            <Button variant="secondary">Go to Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
