import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { WhatsAppFab } from '@/components/whatsapp-fab';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { LoadingAnimation } from '@/components/loading-animation';

export const metadata: Metadata = {
  title: 'Yoloo! : Fashion Made Easy',
  description: 'Yoloo! - Your destination for modern and premium fashion.',
  icons: {
    icon: [
      { url: '/icon-1.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-2.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/icon-3.png',
    shortcut: '/icon-2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icon-1.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icon-2.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-3.png" />
        <link rel="shortcut icon" href="/icon-2.png" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingAnimation>
            <div className="flex min-h-screen flex-col pattern-background">
              <AnnouncementBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <WhatsAppFab phoneNumber="8297297197" />
          </LoadingAnimation>
        </ThemeProvider>
      </body>
    </html>
  );
}