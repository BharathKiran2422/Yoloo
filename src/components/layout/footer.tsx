'use client';

import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './logo';

const PlayStoreIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M1.015 1.742c-.22.36-.285.795-.17 1.21l.015.05L4.5 12 .86 19.048c-.11.415-.05.85.17 1.21l.06.095 9.203-5.322-9.28-9.289zM5.494 12l-3.2-6.953L12.443 12 2.29 18.953 5.494 12zm7.492 0l-3.2 6.953L19.935 12 9.782 5.047 12.986 12zM22.985 8.742c.22-.36.285-.795.17-1.21l-.015-.05-3.64-6.315c-.22-.36-.585-.585-.975-.585H12l3.2 6.953L22.985 8.742zM12 20.718l3.2-6.953L22.985 15.26c.11.415.05.85-.17 1.21l-.06.095-8.122 4.703c-.36.22-.795.285-1.21.17l-.05-.015-3.64-6.315L12 20.718z"/>
    </svg>
);

const AppStoreIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.293 2.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11zM11 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM15 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM15 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM18 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM15 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM18 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM21 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM15 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM18 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM21 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM15 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM18 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM21 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM15 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 22.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 22.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
);


export function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-card w-full">
      <div className="container py-8 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
             <div className="flex justify-center md:justify-start">
                <Logo className="h-12" />
             </div>
            <p className="text-sm text-muted-foreground mt-2">Fashion Made Easy</p>
            <div className="flex items-center space-x-4 mt-4 justify-center md:justify-start">
                <Link href="https://www.linkedin.com/company/yoloo-lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="font-semibold">Company</h3>
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-start">
                <Link href="/about" className="hover:text-primary">About Us</Link>
                <Link href="/#contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>
           <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="font-semibold">Legal</h3>
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-start">
                <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
                <Link href="/shipping" className="hover:text-primary">Shipping Policy</Link>
                <Link href="/returns" className="hover:text-primary">Return Policy</Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="font-semibold">Get our app</h3>
            <div className="flex items-center space-x-3">
                <a href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12"/>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block" title="Will be updated soon">
                    <img src="/images/app-store-badge.svg" alt="Download on the App Store" className="h-12"/>
                </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Yoloo! Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
