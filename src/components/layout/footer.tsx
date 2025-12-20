
'use client';

import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { useTheme } from 'next-themes';
import { VisitorCounter } from '../visitor-counter';
import AppStoreButton from '../icons/app-store-button';
import GooglePlayButton from '../icons/google-play-button';

export function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setMounted(true);
  }, []);

  return (
    <footer className="bg-card w-full border-t">
      <div className="container py-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
            <Logo className="h-20 w-32 -ml-4 -mt-4" />
            <div>
              <h3 className="font-semibold text-sm mb-2">Follow Us</h3>
              <div className="flex items-center space-x-2">
                <Link
                  href="https://www.linkedin.com/company/yoloo-lifestyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent p-2 rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/yoloo_lifestyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent p-2 rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Company</h3>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/home#contact-us" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Legal</h3>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/shipping" className="hover:text-primary transition-colors">
                Shipping Policy
              </Link>
              <Link href="/return-and-exchange-policy" className="hover:text-primary transition-colors">
                Return &amp; Exchange Policy
              </Link>
              <Link href="/cancellation-policy" className="hover:text-primary transition-colors">
                Cancellation Policy
              </Link>
               <Link href="/disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Customer Care Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Customer Care</h3>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <Link href="/size-guide" className="hover:text-primary transition-colors">
                Size Guide
              </Link>
              <Link href="/care-instructions" className="hover:text-primary transition-colors">
                Care Instructions
              </Link>
               <Link href="/loyalty-and-rewards" className="hover:text-primary transition-colors">
                Loyalty &amp; Rewards
              </Link>
              <Link href="/gift-card-policy" className="hover:text-primary transition-colors">
                Gift Card Policy
              </Link>
              <Link href="/account-deletion" className="hover:text-primary transition-colors">
                Account Deletion
              </Link>
              <Link href="/payment-policy" className="hover:text-primary transition-colors">
                Payment Policy
              </Link>
            </div>
          </div>

          {/* App Download */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Get our app</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center md:flex-col md:items-start gap-2">
              <Link
                href="/download"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                {mounted && (
                  <GooglePlayButton
                    darkMode={resolvedTheme === 'dark'}
                    className="h-10 w-auto border rounded-lg"
                  />
                )}
              </Link>
              <Link
                href="/download"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                {mounted && (
                  <AppStoreButton
                    darkMode={resolvedTheme === 'dark'}
                    className="h-10 w-auto border rounded-lg"
                  />
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className='italic'>Images are for reference purposes only. Official brand visuals will be available soon.</p>
            <p>&copy; {currentYear} Yoloo Fashion Network Private Limited. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
                <span>Made with ❤️ in India</span>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-500">Service Active</span>
                </div>
            </div>
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}
