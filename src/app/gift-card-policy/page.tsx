
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function GiftCardPolicyPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Gift Card Policy</h1>
                        <p className="text-muted-foreground">Everything you need to know about Yoloo! gift cards.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Purchasing & Redemption</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Gift cards can be purchased and redeemed exclusively through the Yoloo! mobile app.</li>
                            <li>They are available in various denominations and can be sent digitally.</li>
                            <li>To redeem, enter the unique gift card code at checkout in the app.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Terms & Conditions</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Gift cards are non-refundable and cannot be exchanged for cash.</li>
                            <li>They do not expire.</li>
                            <li>Any remaining balance after a purchase will be stored on your account for future use.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Lost or Stolen Cards</h2>
                        <p className="text-muted-foreground">
                            Yoloo! is not responsible for lost or stolen gift cards. Please treat them like cash.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link href="/download">
                            <Button>Download the App</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
