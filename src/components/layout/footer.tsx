import { Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-headline text-lg font-semibold">Yoloo!</p>
            <p className="text-sm text-muted-foreground">Fashion Made Easy</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yoloo! Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
