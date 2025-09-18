'use client';

import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { useTheme } from 'next-themes';

export function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setMounted(true);
  }, []);

  const appStoreBadge = resolvedTheme === 'dark' 
    ? '/images/app-store-badge-dark.svg' 
    : '/images/app-store-badge-light.svg';


  return (
    <footer className="bg-card w-full border-t">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
             <div className="flex">
                <Logo className="h-10" />
             </div>
            <p className="text-sm text-muted-foreground mt-2">Fashion Made Easy</p>
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
            <div className="flex items-center space-x-3">
                <a href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12"/>
                </a>
                {mounted && (
                  <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Will be updated soon">
                      <img src={appStoreBadge} alt="Download on the App Store" className="h-12"/>
                  </a>
                )}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Yoloo Fashion Network Private Limited. All rights reserved.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
               <Link href="/terms" className="hover:text-primary">Privacy Policy</Link>
               <Link href="/terms" className="hover:text-primary">Account Deletion</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
