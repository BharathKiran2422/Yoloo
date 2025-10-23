
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import GooglePlayButton from '@/components/icons/google-play-button';
import AppStoreButton from '@/components/icons/app-store-button';
import { Cloud, Building2, TrafficCone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import Image from 'next/image';


const Obstacle = ({ type }: { type: 'cone' | 'building' }) => {
    if (type === 'cone') {
        return <TrafficCone className="w-8 h-8 text-foreground" />;
    }
    return <Building2 className="w-10 h-10 text-foreground/80" />;
}

const Scenery = ({ children, duration }: { children: React.ReactNode, duration: number }) => (
    <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: '-100vw' }}
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
        if (!mounted) return "/logo_gif2.gif"; // Default to light theme for SSR
        return resolvedTheme === 'dark' ? '/logo_gif1.gif' : '/logo_gif2.gif';
    };

    return (
        <PageTransitionWrapper>
            <div className="flex flex-col items-center justify-start pt-20 sm:pt-24 h-screen bg-gradient-to-b from-background via-card to-background overflow-hidden relative">
                
                {/* Scenery */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <Scenery duration={60}>
                        <Cloud className="absolute top-[10vh] left-[20vw] w-16 h-16 text-foreground/10" />
                    </Scenery>
                     <Scenery duration={45}>
                        <Cloud className="absolute top-[25vh] left-[80vw] w-12 h-12 text-foreground/10" />
                    </Scenery>
                    <Scenery duration={70}>
                        <Cloud className="absolute top-[5vh] left-[120vw] w-20 h-20 text-foreground/10" />
                    </Scenery>
                </div>


                {/* Main Content */}
                <div className="z-10 text-center flex flex-col items-center px-4">
                     <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative w-32 h-32 md:w-40 md:h-40"
                    >
                         <Image
                            src={getLogoSrc()}
                            alt="Yoloo! Logo Animation"
                            fill
                            className="object-contain"
                            unoptimized
                            priority
                        />
                    </motion.div>
                    
                    <motion.h1 
                        className="font-headline text-3xl md:text-4xl font-bold mt-8 max-w-2xl text-foreground"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                       From browsing to must-have — stop scrolling, <br /> start Yoloo-ing & find your style.
                    </motion.h1>

                    <motion.p 
                        className="mt-6 text-primary font-semibold text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        Download the app
                    </motion.p>
                    
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Link href="https://play.google.com/store/apps/details?id=com.yoloo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            {mounted && <GooglePlayButton darkMode={resolvedTheme === 'dark'} className="h-14 w-auto border rounded-lg" />}
                        </Link>
                        <Link href="/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" title="Coming soon">
                            {mounted && <AppStoreButton darkMode={resolvedTheme === 'dark'} className="h-14 w-auto border rounded-lg" />}
                        </Link>
                    </motion.div>
                </div>
                
                 {/* Ground and obstacles */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 z-0">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-repeat-x" style={{backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 50%, transparent 50%)`, backgroundSize: '10px 2px'}} />
                    
                    <Scenery duration={20}>
                        <div className="absolute bottom-2 left-[30vw]"><Obstacle type="cone" /></div>
                    </Scenery>
                    <Scenery duration={35}>
                        <div className="absolute bottom-2 left-[90vw]"><Obstacle type="building" /></div>
                    </Scenery>
                     <Scenery duration={28}>
                        <div className="absolute bottom-2 left-[150vw]"><Obstacle type="cone" /></div>
                    </Scenery>
                </div>

                {/* Back to site link */}
                <Link href="/" className="absolute bottom-4 right-4 z-20">
                    <Button variant="ghost">Skip to website</Button>
                </Link>
            </div>
        </PageTransitionWrapper>
    );
}
