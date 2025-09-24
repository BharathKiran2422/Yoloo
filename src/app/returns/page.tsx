
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function ReturnsPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Return Policy</h1>
                        <p className="text-muted-foreground">We want you to be completely satisfied with your purchase. Please review our return policy below.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Return Eligibility</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Returns are accepted only if initiated within <strong>4 days</strong> from the date of delivery.</li>
                            <li>Eligible return reasons: Wrong, damaged, or defective items only.</li>
                            <li>Raise a return request via the app, email, or WhatsApp support.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Return Charges</h2>
                        <p className="text-muted-foreground">A return processing fee of <strong>₹50</strong> will be deducted from the refund amount for each return.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Product Condition for Returns</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Returns will be accepted only if the product is <strong>unused</strong> and all original tags and labels are intact.</li>
                            <li>All products are thoroughly inspected for cuts and tears before dispatch. Returns based on damage claims such as cuts or tears will not be accepted.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">4. Refund Process</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Refunds (excluding platform fees, delivery fees and the return processing charge) will be initiated immediately once the return is approved and the product is successfully picked up.</li>
                            <li>The refund will be processed to the original payment method within 1-2 business days.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">5. Non-refundable Cases</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Size/fit issues, change of mind, or late return requests are not eligible for returns.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">6. Cancellations</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                             <li>Cancellations are only possible before your order is dispatched. No refunds can be issued after the item has been shipped.</li>
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
