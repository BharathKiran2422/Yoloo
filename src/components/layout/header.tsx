
"use client";

import Link from 'next/link';
import { Menu, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navLinks = [
    { href: '#products', label: 'Products' },
    { href: '#ai-stylist', label: 'AI Stylist' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-xl">Yoloo!</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4 p-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold font-headline text-lg">Yoloo!</span>
                  </Link>
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={(e) => handleScroll(e, href)}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <span className="font-bold font-headline text-xl">Yoloo!</span>
          </Link>

          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-6 w-6" />
              <span className="sr-only">Shopping Bag</span>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
