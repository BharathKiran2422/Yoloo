"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const navLinks = [
    { href: '/men', label: 'Men' },
    { href: '/women', label: 'Women' },
    { href: '/sneakers', label: 'Sneakers' },
    { href: '/accessories', label: 'Accessories' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/">
              <Logo className="h-32 w-32" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6 text-sm font-medium flex-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn("text-foreground/80 hover:text-foreground transition-colors relative", pathname === link.href && "text-foreground")}>
                {link.label}
                {pathname === link.href && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>}
              </Link>
            ))}
          </nav>
          
          {/* Spacer for Mobile */}
          <div className="flex-1 md:hidden" />

          {/* Right side icons */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden md:block">
              {mounted && <ThemeToggle />}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              {mounted && <ThemeToggle />}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Half-Page Overlay Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            style={{ 
              animation: 'fadeIn 0.2s ease-out'
            }}
          />
          
          {/* Menu Panel */}
          <div 
            className="fixed top-0 right-0 w-[280px] h-full bg-background z-[70] md:hidden shadow-2xl"
            style={{ 
              animation: 'slideInRight 0.3s ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Logo */}
            <div className="flex justify-center pt-8 pb-6 border-b">
              <Link href="/" onClick={handleLinkClick}>
                <Logo className="h-20 w-20" />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-accent hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="border-t my-2" />
              
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                  pathname === '/about'
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-accent hover:text-foreground"
                )}
              >
                About
              </Link>
              <Link
                href="/terms"
                onClick={handleLinkClick}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                  pathname === '/terms'
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-accent hover:text-foreground"
                )}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/terms"
                onClick={handleLinkClick}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                  pathname === '/terms'
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-accent hover:text-foreground"
                )}
              >
                Privacy Policy
              </Link>
               <Link
                href="/return-and-exchange-policy"
                onClick={handleLinkClick}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                  pathname === '/return-and-exchange-policy'
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-accent hover:text-foreground"
                )}
              >
                Return Policy
              </Link>
              
              <Link
                href="/#contact-us"
                onClick={handleLinkClick}
                className="px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-all duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
