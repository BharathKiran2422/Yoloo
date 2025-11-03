
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import GooglePlayButton from '@/components/icons/google-play-button';
import AppStoreButton from '@/components/icons/app-store-button';
import {
  Package,
  Clock,
  Shirt,
  Gem,
  ShoppingBag,
  Watch,
  Glasses,
  Crown,
  Instagram,
} from 'lucide-react';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import Image from 'next/image';

// Animated background icons
const Scenery = ({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration: number;
}) => (
  <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: '100vw' }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
    className="absolute"
  >
    {children}
  </motion.div>
);

export default function ComingSoonPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLogoSrc = () => {
    if (!mounted) return '/logo_gif2.gif';
    return resolvedTheme === 'dark' ? '/logo_gif1.gif' : '/logo_gif2.gif';
  };

  return (
    <PageTransitionWrapper className="flex-1">
      <div className="flex flex-col items-center justify-center min-h-full flex-1 bg-gradient-to-b from-background via-card to-background overflow-hidden relative p-4">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 flex items-center justify-center">
          <Scenery duration={60}>
            <Shirt className="absolute top-[-20vh] left-[20vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={45}>
            <ShoppingBag className="absolute top-[5vh] left-[80vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={70}>
            <Watch className="absolute top-[-25vh] left-[120vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={55}>
            <Clock className="absolute top-[-10vh] left-[50vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={80}>
            <Package className="absolute top-[10vh] left-[10vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={65}>
            <Gem className="absolute top-[-5vh] left-[140vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={75}>
            <Glasses className="absolute top-[15vh] left-[60vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={50}>
            <Crown className="absolute top-[-15vh] left-[95vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={85}>
            <ShoppingBag className="absolute top-[20vh] left-[5vw] w-12 h-12 text-foreground/10" />
          </Scenery>
          <Scenery duration={90}>
            <Watch className="absolute top-[8vh] left-[110vw] w-12 h-12 text-foreground/10" />
          </Scenery>
        </div>

        {/* Main Content */}
        <div className="z-10 flex flex-col items-center justify-center gap-8 max-w-6xl w-full">
          {/* App Image */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="image-accent"></div>
            </div>
            <Image
              src="/app_download.png"
              alt="Yoloo! App Preview"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm relative"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center flex flex-col items-center">
            {/* Download Text */}
            <motion.p
              className="text-primary font-semibold text-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Download the app
            </motion.p>

            {/* Enlarged Buttons */}
            <motion.div
              className="flex flex-row items-center gap-4 justify-center mt-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                {mounted && (
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <GooglePlayButton
                      darkMode={resolvedTheme === 'dark'}
                      className="border rounded-xl shadow-lg h-14 w-auto"
                    />
                  </div>
                )}
              </Link>

              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="Coming soon"
              >
                {mounted && (
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <AppStoreButton
                      darkMode={resolvedTheme === 'dark'}
                      className="border rounded-xl shadow-lg h-14 w-auto"
                    />
                  </div>
                )}
              </Link>
            </motion.div>

            {/* Instagram Section */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-base font-semibold text-muted-foreground text-center">
                Follow for more <br />
                offers & updates
              </div>
              <Link
                href="https://www.instagram.com/yoloo_lifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-10 h-10" />
              </Link>
              <Link href="https://www.instagram.com/yoloo_lifestyle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="text-base font-semibold text-center">
                    @yoloo_lifestyle <br />
                </div>
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.h2
              className="font-headline text-2xl md:text-4xl font-bold mt-8 max-w-2xl text-foreground leading-snug"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              When style needs you.
              <br />
              When you need style.
              <br />
              <span className="italic">Yoloo!</span>
            </motion.h2>
          </div>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}
