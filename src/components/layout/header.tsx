
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet';
import { ThemeToggle } from '../theme-toggle';

export function Header() {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms' },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
            <Logo className="h-10" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                </Link>
            ))}
        </nav>
        <div className="flex items-center gap-2">
           <ThemeToggle />
           <div className="md:hidden">
              <Sheet>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                          <Menu />
                      </Button>
                  </SheetTrigger>
                  <SheetContent>
                      <nav className="flex flex-col space-y-4 mt-8">
                          {navLinks.map((link) => (
                              <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">
                                  {link.label}
                              </Link>
                          ))}
                      </nav>
                  </SheetContent>
              </Sheet>
           </div>
        </div>
      </div>
    </header>
  );
}
