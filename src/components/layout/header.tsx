
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet';
import { ThemeToggle } from '../theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/men', label: 'Men' },
    { href: '/women', label: 'Women' },
    { href: '/sneakers', label: 'Sneakers' },
    { href: '/accessories', label: 'Accessories' },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo className="h-40 w-40" />
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
             <ThemeToggle />
           </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex justify-center mb-8">
                  <Link href="/">
                      <Logo className="h-12" />
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ))}
                  <hr />
                  <Link href="/about" className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
                  <Link href="/contact" className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
