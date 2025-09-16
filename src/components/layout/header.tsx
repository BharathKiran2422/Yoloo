
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
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:hidden flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                ))}
                <hr />
                <Link href="/about" className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
                <Link href="/contact" className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
                <Link href="/terms" className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">Terms</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-foreground/80 hover:text-foreground transition-colors relative", pathname === link.href && "text-foreground")}>
              {link.label}
              {pathname === link.href && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <Logo className="h-10" />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-2 flex-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
