
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { Menu, X, ChevronDown, Home, LayoutGrid, Info, MessageSquare } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect, forwardRef } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"


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
  
  const categoryLinks = [
    { href: '/men', title: 'Men', description: 'Explore our latest collection for men.' },
    { href: '/women', title: 'Women', description: 'Discover stylish and elegant women\'s fashion.' },
    { href: '/sneakers', title: 'Sneakers', description: 'Find your perfect pair of sneakers.' },
    { href: '/accessories', title: 'Accessories', description: 'Complete your look with our accessories.' },
  ];

  const mainLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/#contact-us', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/home">
              <Logo className="h-32 w-32" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-1 text-sm font-medium flex-1">
            <Link href="/home" className={cn("text-foreground/80 hover:text-foreground transition-colors", navigationMenuTriggerStyle())}>
                <Home className="mr-2" /> Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger><LayoutGrid className="mr-2" />Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {categoryLinks.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/about" className={cn("text-foreground/80 hover:text-foreground transition-colors", navigationMenuTriggerStyle())}>
                <Info className="mr-2" /> About
            </Link>
            <Link href="/#contact-us" className={cn("text-foreground/80 hover:text-foreground transition-colors", navigationMenuTriggerStyle())}>
                <MessageSquare className="mr-2" /> Contact
            </Link>
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
              <Link href="/home" onClick={handleLinkClick}>
                <Logo className="h-20 w-20" />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-6 space-y-1">
              <Link href="/home" onClick={handleLinkClick} className={cn("flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200", pathname === '/home' ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-accent hover:text-foreground")}>
                  <Home className="mr-3" /> Home
              </Link>

              <Collapsible>
                <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-all duration-200 group">
                    <span className="flex items-center"><LayoutGrid className="mr-3" />Categories</span>
                    <ChevronDown className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="flex flex-col pl-8 space-y-1 pt-1">
                        {categoryLinks.map((link) => (
                           <Link key={link.href} href={link.href} onClick={handleLinkClick} className={cn("px-4 py-3 rounded-lg text-base font-medium transition-all duration-200", pathname === link.href ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-accent hover:text-foreground")}>
                               {link.title}
                           </Link>
                        ))}
                    </div>
                </CollapsibleContent>
              </Collapsible>
              
              <Link href="/about" onClick={handleLinkClick} className={cn("flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200", pathname === '/about' ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-accent hover:text-foreground")}>
                  <Info className="mr-3" /> About
              </Link>
              <Link href="/#contact-us" onClick={handleLinkClick} className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-all duration-200">
                  <MessageSquare className="mr-3" /> Contact
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

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
