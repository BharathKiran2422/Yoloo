'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function PrivacyPolicyPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Privacy Policy</h1>
                        <p className="text-muted-foreground">Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                        <p className="text-muted-foreground">
                           We may collect personal information such as your name, email address, shipping address, and phone number when you create an account, place an order, or contact us. We also collect data about your browsing history on our platform to improve your experience.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>To process and fulfill your orders.</li>
                            <li>To communicate with you about your account or orders.</li>
                            <li>To personalize your shopping experience and provide style recommendations.</li>
                            <li>To improve our website, app, and services.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Data Security</h2>
                        <p className="text-muted-foreground">
                            We implement a variety of security measures to maintain the safety of your personal information. All payment transactions are processed through a secure gateway provider and are not stored or processed on our servers.
                        </p>
                    </div>
                    
                     <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">4. Third-Party Disclosure</h2>
                        <p className="text-muted-foreground">
                            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our platform, so long as those parties agree to keep this information confidential.
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
