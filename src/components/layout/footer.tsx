
'use client';

import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { useTheme } from 'next-themes';
import { VisitorCounter } from '../visitor-counter';
import { ThemeToggle } from '../theme-toggle';

export function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-background w-full border-t relative overflow-hidden">
      {/* Massive Background Logo - inspired by reference image */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.05] translate-y-1/3">
        <Logo className="w-[150%] h-[400px] md:h-[600px]" />
      </div>

      <div className="container py-16 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Column 1: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-muted-foreground/60">Company</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/home#contact-us" className="hover:text-primary transition-colors">Contact Us</Link>
              <Link href="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link>
              <Link href="/care-instructions" className="hover:text-primary transition-colors">Care Instructions</Link>
            </div>
          </div>

          {/* Column 2: Apps & Tools */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-muted-foreground/60">Apps & Tools</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/download" className="hover:text-primary transition-colors">Yoloo! App</Link>
              <Link href="/loyalty-and-rewards" className="hover:text-primary transition-colors">Loyalty & Rewards</Link>
              <Link href="/gift-card-policy" className="hover:text-primary transition-colors">Gift Cards</Link>
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Column 3: Legal & Policies */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-muted-foreground/60">Policies</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link>
              <Link href="/return-and-exchange-policy" className="hover:text-primary transition-colors">Returns & Exchanges</Link>
              <Link href="/cancellation-policy" className="hover:text-primary transition-colors">Cancellation</Link>
              <Link href="/account-deletion" className="hover:text-primary transition-colors text-destructive/70 hover:text-destructive">Account Deletion</Link>
            </div>
          </div>

          {/* Column 4: Follow */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-muted-foreground/60">Follow</h3>
            <div className="flex items-center gap-5">
              <Link
                href="https://www.instagram.com/yoloo_lifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/yoloo-lifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Lower Footer Section: Preservation of requested sections */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-muted-foreground/80 gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="italic font-medium text-muted-foreground/60">Images are for reference only. Official visuals coming soon.</p>
            <p>&copy; {currentYear} Yoloo Fashion Network Private Limited. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                  <span className="font-medium">Made with ❤️ in India</span>
                  <div className="flex items-center gap-2 bg-accent/30 px-3 py-1 rounded-full border border-border/50">
                      <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      <span className="text-green-600/80 font-bold tracking-tighter uppercase text-[9px]">Service Active</span>
                  </div>
              </div>
            </div>
            <div className="scale-90 md:scale-100 origin-right">
              <VisitorCounter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
