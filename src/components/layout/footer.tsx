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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-2 flex flex-col space-y-3">
            <Logo className="h-14 w-16 -ml-4 -mt-4" />
            <div className="flex items-center space-x-3">
              <Link
                href="https://www.linkedin.com/company/yoloo-lifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/yoloo_lifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Company</h3>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/#contact-us" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Legal</h3>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/shipping" className="hover:text-primary transition-colors">
                Shipping Policy
              </Link>
              <Link href="/returns" className="hover:text-primary transition-colors">
                Return Policy
              </Link>
            </div>
          </div>

          {/* App Download */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Get our app</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <Link
                href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share"
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
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                title="Coming soon"
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
        <div className="mt-6 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Yoloo Fashion Network Private Limited. All rights reserved.</p>
          <div className="flex flex-col-reverse md:flex-row items-center gap-3 mt-3 md:mt-0">
            <div className="flex gap-3">
              <Link href="/terms" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Account Deletion
              </Link>
            </div>
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}