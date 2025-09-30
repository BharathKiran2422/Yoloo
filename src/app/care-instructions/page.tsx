'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function CareInstructionsPage() {
    return (
        <PageTransitionWrapper>
            <div className="bg-background text-foreground min-h-screen p-4 sm:p-6 flex flex-col items-center">
                <div className="w-full max-w-4xl">
                    <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
                <div className="bg-card rounded-2xl p-8 sm:p-12 w-full max-w-4xl space-y-8 border">
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Care Instructions</h1>
                        <p className="text-muted-foreground">Keep your favorite pieces looking their best with these tips.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">General Clothing Care</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li><strong>Read the Label:</strong> Always check the care label inside your garment for specific instructions.</li>
                            <li><strong>Wash in Cold Water:</strong> Use cold water to prevent shrinking and fading, and to save energy.</li>
                            <li><strong>Wash Inside Out:</strong> Turn garments, especially those with prints or embellishments, inside out to protect them.</li>
                            <li><strong>Avoid Over-Drying:</strong> High heat can damage fabrics. Tumble dry on low or, even better, air dry your clothes.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">Denim</h2>
                        <p className="text-muted-foreground">
                           Wash denim as infrequently as possible to preserve its color and fit. When you do wash, use cold water and hang to dry.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">Accessories & Leather</h2>
                        <p className="text-muted-foreground">
                            Wipe leather goods with a damp cloth. Avoid exposing them to extreme heat or moisture. Store handbags in a dust bag to keep them clean.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link href="/">
                            <Button variant="secondary">Go to Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
