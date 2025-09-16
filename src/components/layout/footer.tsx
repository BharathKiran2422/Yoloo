'use client';

import { Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary/50 dark:bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-headline text-lg font-semibold">Yoloo!</p>
            <p className="text-sm text-muted-foreground">Fashion Made Easy</p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="font-semibold">Company</h3>
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-start">
                <Link href="/about" className="hover:text-primary">About Us</Link>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
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
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Yoloo! Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
