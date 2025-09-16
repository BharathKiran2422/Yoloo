'use client';

import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LogoIcon } from './logo';

const PlayStoreIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2.33139 2.36873C2.12839 2.58073 2.00018 2.86873 2.00018 3.16873V20.8317C2.00018 21.1317 2.12839 21.4197 2.33139 21.6317L12.0002 12.0002L2.33139 2.36873Z" />
        <path d="M12.0002 12.0002L15.0932 15.0932L21.4112 11.0252C21.7842 10.7982 22.0002 10.3582 22.0002 9.87823V9.58923C22.0002 9.17123 21.8462 8.77523 21.5792 8.48923L12.0002 12.0002Z" />
        <path d="M12.0002 12.0002L21.5782 15.5112C21.8452 15.2252 22.0002 14.8292 22.0002 14.4112V14.1222C22.0002 13.6422 21.7842 13.2022 21.4112 12.9752L15.0932 8.90723L12.0002 12.0002Z" />
        <path d="M2.33139 21.6317C2.54439 21.8617 2.83139 22.0002 3.13139 22.0002H3.41439C3.80539 22.0002 4.18039 21.8797 4.48439 21.6687L12.0002 12.0002L2.33139 21.6317Z" />
        <path d="M12.0002 12.0002L4.48439 2.33173C4.18039 2.12073 3.80539 2.00024 3.41439 2.00024H3.13139C2.83139 2.00024 2.54439 2.13873 2.33139 2.36873L12.0002 12.0002Z" />
    </svg>
);

const AppStoreIcon = (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10.15 4.88a2.5 2.5 0 0 0-3.14 2.12 2.49 2.49 0 0 0 2.24 2.88 2.5 2.5 0 0 0 3.14-2.12 2.5 2.5 0 0 0-2.24-2.88Z" />
        <path d="M16.34 11.23a2.5 2.5 0 0 0-3.14 2.12 2.5 2.5 0 0 0 2.24 2.88 2.5 2.5 0 0 0 3.14-2.12 2.5 2.5 0 0 0-2.24-2.88Z" />
        <path d="M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8Z" />
    </svg>
);


export function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary/50 dark:bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
             <div className="flex justify-center md:justify-start">
                <LogoIcon className="h-8" />
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
                <Link href="#contact" className="hover:text-primary">Contact</Link>
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
                <Link href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <PlayStoreIcon className="h-6 w-6" />
                </Link>
                <Link href="/" className="text-muted-foreground hover:text-primary" title="Will be updated soon">
                  <AppStoreIcon className="h-6 w-6" />
                </Link>
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
