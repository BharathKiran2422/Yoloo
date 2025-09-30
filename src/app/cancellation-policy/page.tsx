'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function CancellationPolicyPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Cancellation Policy</h1>
                        <p className="text-muted-foreground">This policy outlines the terms for order cancellations.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Cancellation Window</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Cancellations are only possible through the Yoloo! app.</li>
                            <li>You can cancel an order at any time <strong>before it is dispatched</strong> from our fulfillment center.</li>
                            <li>Once an item has been shipped, it can no longer be cancelled.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. How to Cancel</h2>
                         <p className="text-muted-foreground">To cancel your order, navigate to the "My Orders" section in the app, select the order you wish to cancel, and follow the prompts.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Refunds for Cancellations</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                           <li>If your order is cancelled before dispatch, a full refund will be processed to your original payment method.</li>
                           <li>Refunds are typically processed within 1-2 business days.</li>
                        </ul>
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
