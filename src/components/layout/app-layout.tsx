'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppFab } from '@/components/whatsapp-fab';

export function AppContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isComingSoonPage = pathname === '/' || pathname === '/comingsoon';

  if (isComingSoonPage) {
    // Special layout for coming soon page: header, no footer, no main wrapper
    return (
      <div className="flex min-h-screen flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Toaster />
        <WhatsAppFab phoneNumber="8297297197" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col pattern-background">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
      <WhatsAppFab phoneNumber="8297297197" />
    </div>
  );
}
