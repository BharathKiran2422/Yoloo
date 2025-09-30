'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';

export default function AccountDeletionPage() {
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
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Account Deletion</h1>
                        <p className="text-muted-foreground">We're sorry to see you go. Here’s how you can request to delete your Yoloo! account.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">How to Request Deletion</h2>
                        <p className="text-muted-foreground">
                            To permanently delete your Yoloo! account and all associated data, please send an email to our support team with the subject line "Account Deletion Request".
                        </p>
                        <p className="text-muted-foreground">
                            Please include the following information in your email:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                            <li>Your full name</li>
                            <li>The email address associated with your Yoloo! account</li>
                            <li>The phone number associated with your Yoloo! account</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">What Happens Next</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Our team will verify your identity to protect your account's security.</li>
                            <li>Once verified, your account and personal data will be permanently deleted from our systems. This action cannot be undone.</li>
                            <li>Deletion may take up to 30 days to complete.</li>
                        </ul>
                    </div>

                    <div className="pt-4">
                        <Button asChild>
                            <a href="mailto:hello@brandsyoloo.co.in?subject=Account Deletion Request">
                                Email Support
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
