
'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
    return (
        <div className="bg-background text-foreground min-h-screen p-4 sm:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft size={16} />
                    <span>Back to Home</span>
                </Link>
            </div>
            <div className="bg-card rounded-2xl p-8 sm:p-12 w-full max-w-4xl space-y-8 border">
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-foreground">Terms & Conditions</h1>
                    <p className="text-muted-foreground">
                        These website terms govern your access to and use of the Yoloo! site. By using this site you agree to these terms in addition to our Privacy Policy.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Use of the Site</h2>
                    <p className="text-muted-foreground">
                        Content on this site is for general information. We may update sections without prior notice. Do not misuse the site, attempt to interfere with its normal operation, or access it using methods other than the interface we provide.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
                    <p className="text-muted-foreground">
                        All trademarks, logos, and content are the property of their respective owners and may not be used without permission.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Contact</h2>
                    <p className="text-muted-foreground">
                        For questions, please email <a href="mailto:hello@brandsyoloo.co.in" className="underline hover:text-primary">hello@brandsyoloo.co.in</a>.
                    </p>
                </div>
                
                <div className="pt-4">
                    <Link href="/">
                        <Button variant="secondary">Go to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
