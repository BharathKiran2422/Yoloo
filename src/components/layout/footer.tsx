
'use client';

import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { useTheme } from 'next-themes';
import { GooglePlayIcon } from '../icons/google-play';
import { AppStoreIcon } from '../icons/app-store';
import { Button } from '../ui/button';
import { VisitorCounter } from '../visitor-counter';

export function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-card w-full border-t">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
             <Logo className="h-40 w-40" />
            <div className="flex items-center space-x-4 mt-4">
                <Link href="https://www.linkedin.com/company/yoloo-lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Company</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-primary">About Us</Link>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>
           <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
                <Link href="/shipping" className="hover:text-primary">Shipping Policy</Link>
                <Link href="/returns" className="hover:text-primary">Return Policy</Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <h3 className="font-semibold">Get our app</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                 <Link href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full h-12 text-left px-3 flex items-center justify-center sm:justify-start gap-2 rounded-lg shadow-sm">
                        <GooglePlayIcon className="w-6 h-6" />
                        <div>
                            <p className="text-xs text-muted-foreground">GET IT ON</p>
                            <p className="text-sm font-semibold leading-tight">Google Play</p>
                        </div>
                    </Button>
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" title="Coming soon">
                    <Button variant="outline" className="w-full h-12 text-left px-3 flex items-center justify-center sm:justify-start gap-2 rounded-lg shadow-sm">
                        <AppStoreIcon className="w-6 h-6" />
                        <div>
                            <p className="text-xs text-muted-foreground">Download on the</p>
                            <p className="text-sm font-semibold leading-tight">App Store</p>
                        </div>
                    </Button>
                </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Yoloo Fashion Network Private Limited. All rights reserved.</p>
           <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-4 md:mt-0">
               <div className="flex gap-4">
                    <Link href="/terms" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary">Account Deletion</Link>
                </div>
                <VisitorCounter />
           </div>
        </div>
      </div>
    </footer>
  );
}
