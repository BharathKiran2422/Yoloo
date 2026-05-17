
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { EditorialMarquee } from '@/components/editorial-marquee';

export default function AccessoriesPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const heroImage = getImage('accessories-4');
  const campaignImages = ['accessories-1', 'accessories-2', 'accessories-3', 'accessories-5', 'accessories-6', 'accessories-7'];

  return (
    <PageTransitionWrapper>
      <div className="bg-[#0a0a0a] text-[#f0f0f0] selection:bg-white selection:text-black">
        {/* Luxury Still Life Hero */}
        <section className="relative min-h-screen flex items-center px-4 md:px-20 py-32">
           <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-20 items-center">
              <div className="space-y-8 z-10">
                 <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter"
                 >
                    THE <br /> FINISH.
                 </motion.h1>
                 <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl font-light text-white/40 max-w-sm tracking-wide"
                 >
                    Essential accents for the discerning individual.
                 </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="relative aspect-square w-full max-w-2xl grayscale"
              >
                 {heroImage && (
                    <Image
                       src={heroImage.imageUrl}
                       alt={heroImage.description}
                       fill
                       className="object-cover"
                    />
                 )}
              </motion.div>
           </div>
        </section>

        {/* Editorial Scroll */}
        <section className="py-24 border-y border-white/5">
           <EditorialMarquee imageIds={campaignImages} speed={45} direction="left" />
        </section>

        {/* Staggered Grid */}
        <section className="container mx-auto px-4 py-32">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
              <motion.div 
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                className="relative aspect-[3/4] mt-20"
              >
                 {getImage('accessories-9') && (
                    <Image src={getImage('accessories-9')!.imageUrl} alt="Wallet" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 )}
              </motion.div>
              
              <motion.div 
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                className="relative aspect-[3/4]"
              >
                 {getImage('accessories-10') && (
                    <Image src={getImage('accessories-10')!.imageUrl} alt="Jewelry" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 )}
                 <div className="absolute top-0 right-0 p-8">
                    <h3 className="text-xl font-bold tracking-widest uppercase">DETAIL 01</h3>
                 </div>
              </motion.div>

              <motion.div 
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 150, opacity: 0 }}
                className="relative aspect-[3/4] hidden md:block"
              >
                 {getImage('accessories-13') && (
                    <Image src={getImage('accessories-13')!.imageUrl} alt="Travel Bag" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 )}
              </motion.div>
           </div>
        </section>

        {/* Wide Band */}
        <section className="bg-white">
           <EditorialMarquee imageIds={['accessories-14', 'accessories-15', 'accessories-16', 'accessories-17', 'accessories-18']} speed={35} direction="right" />
        </section>

        {/* Final Statement */}
        <section className="py-60 text-center container mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase mb-16">ELEVATION THROUGH ACCESSORY.</h2>
           <Link href="/download">
              <button className="border border-white/20 px-16 py-6 text-sm font-bold tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                 ACCESS THE COLLECTION
              </button>
           </Link>
        </section>
      </div>
    </PageTransitionWrapper>
  );
}
