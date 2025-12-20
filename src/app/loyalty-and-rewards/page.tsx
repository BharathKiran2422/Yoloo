
'use client';

import Link from 'next/link';
import { ArrowLeft, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function LoyaltyAndRewardsPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Loyalty & Rewards</h1>
                        <p className="text-muted-foreground">Get rewarded for your style! Our loyalty program is exclusive to the Yoloo! app.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                        <ul className="list-none space-y-4 text-muted-foreground">
                            <li className='flex items-start gap-4'>
                                <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <strong>Earn Points:</strong> Automatically earn reward points for every purchase you make in the app.
                                </div>
                            </li>
                             <li className='flex items-start gap-4'>
                                <Gift className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <strong>Redeem for Discounts:</strong> Use your accumulated points to get exclusive discounts on future orders.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">App-Only Exclusives</h2>
                        <p className="text-muted-foreground">
                           The Yoloo! loyalty program, special promotions, and early access to new arrivals are all available exclusively through our mobile app. Download it today to start earning!
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
