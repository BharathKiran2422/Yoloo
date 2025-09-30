'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function PaymentPolicyPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Payment Policy</h1>
                        <p className="text-muted-foreground">All payments for products on Yoloo! are processed securely through our mobile app.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Accepted Payment Methods</h2>
                        <p className="text-muted-foreground">
                            We accept a wide range of payment options within the Yoloo! app, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Credit and Debit Cards (Visa, MasterCard, RuPay, American Express)</li>
                            <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
                            <li>Net Banking</li>
                            <li>Yoloo! Gift Cards</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Secure Transactions</h2>
                        <p className="text-muted-foreground">
                            All transactions are processed through a secure, PCI-compliant payment gateway. We do not store your full card details on our servers. Your financial information is always encrypted and protected.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. No Website Payments</h2>
                        <p className="text-muted-foreground">
                           Please note that this website is a showcase of our products and brand. All purchases must be made exclusively through the Yoloo! mobile app to ensure security and access to our full range of services, including express delivery and order tracking.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link href="/#purchase-on-app">
                            <Button>Download the App</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
