'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function ReturnAndExchangePolicyPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Return & Exchange Policy</h1>
                        <p className="text-muted-foreground">We want you to be completely satisfied with your purchase. Please review our policy below.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Return & Exchange Eligibility</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Requests must be initiated within <strong>4 days</strong> from the date of delivery.</li>
                            <li>Eligible reasons: Wrong, damaged, or defective items. Size exchanges are available for the same product.</li>
                            <li>Raise a request via the app, email, or WhatsApp support.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Processing Fees</h2>
                        <p className="text-muted-foreground">A fee of <strong>₹50</strong> will be deducted for each return or exchange to cover processing and logistics.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Product Condition</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Products must be <strong>unused</strong> with all original tags and labels intact.</li>
                            <li>Items are inspected before dispatch. Claims for cuts or tears will not be accepted.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">4. Refund Process</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>For returns, refunds (excluding platform fees, delivery fees, and processing charges) will be initiated once the product is picked up and verified.</li>
                            <li>Refunds will be processed to the original payment method within 1-2 business days.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">5. Non-refundable Cases</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Change of mind or late requests are not eligible for returns or exchanges.</li>
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
