
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
    <footer className="bg-card border-t w-full">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Social */}
          <div className="lg:col-span-2 flex flex-col space-y-4 items-center md:items-start">
            <Logo className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
              Premium fashion delivered fast. Your style, your time.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/yoloo-lifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/yoloo_lifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/#contact-us" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/admin" className="hover:text-primary transition-colors">Admin</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link>
              <Link href="/returns" className="hover:text-primary transition-colors">Return Policy</Link>
            </div>
          </div>

          {/* App Download */}
          <div className="lg:col-span-1 flex flex-col gap-4 items-center md:items-start">
            <h3 className="font-semibold text-foreground">Get our app</h3>
            <div className="flex flex-col gap-3 w-full max-w-[150px]">
              <Link
                href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                {mounted && (
                  <GooglePlayButton
                    darkMode={resolvedTheme === 'dark'}
                    className="w-full h-auto border rounded-lg transition-transform hover:scale-105"
                  />
                )}
              </Link>
              <Link
                href="/"
                aria-label="Download on the App Store"
                className="cursor-not-allowed"
                 onClick={(e) => e.preventDefault()}
                title="Coming soon"
              >
                {mounted && (
                  <AppStoreButton
                    darkMode={resolvedTheme === 'dark'}
                    className="w-full h-auto border rounded-lg opacity-50 cursor-not-allowed"
                  />
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p className="text-center sm:text-left">&copy; {currentYear} Yoloo Fashion Network. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <div className="flex gap-4">
              <Link href="/terms" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Account Deletion</Link>
            </div>
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}
