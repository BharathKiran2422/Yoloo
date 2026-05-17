
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { EditorialMarquee } from '@/components/editorial-marquee';

export default function SneakersPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const heroImage = getImage('sneakers-1');
  const campaignImages = ['sneakers-2', 'sneakers-3', 'sneakers-4', 'sneakers-5', 'sneakers-6', 'sneakers-7'];

  return (
    <PageTransitionWrapper>
      <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
        {/* Tech-Editorial Hero */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 grayscale"
          >
             {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-40"
                priority
              />
            )}
          </motion.div>
          
          <div className="z-10 space-y-4">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none"
            >
              KINETIC
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl tracking-[0.5em] uppercase font-light"
            >
              Footwear for the future
            </motion.p>
          </div>
        </section>

        {/* Infinite Scroll Band */}
        <section className="py-12 bg-white/5 border-y border-white/10">
          <EditorialMarquee imageIds={campaignImages} speed={30} direction="left" />
        </section>

        {/* Grid Break Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
             <div className="space-y-12">
                <div className="relative aspect-square w-full grayscale hover:grayscale-0 transition-all duration-1000">
                   {getImage('sneakers-10') && (
                     <Image
                        src={getImage('sneakers-10')!.imageUrl}
                        alt="Sneaker Close-up"
                        fill
                        className="object-cover"
                     />
                   )}
                </div>
                <div className="max-w-md">
                   <h2 className="text-4xl font-bold mb-6">UNCOMPROMISING <br /> PERFORMANCE.</h2>
                   <p className="text-white/60 leading-relaxed text-lg">
                      Engineered for the urban athlete. Our curation features limited editions and technical silhouettes that bridge the gap between performance and high-street luxury.
                   </p>
                </div>
             </div>
             
             <div className="relative aspect-[3/4] w-full hidden md:block">
                 {getImage('sneakers-13') && (
                     <Image
                        src={getImage('sneakers-13')!.imageUrl}
                        alt="Sneaker Visual"
                        fill
                        className="object-cover"
                     />
                   )}
             </div>
          </div>
        </section>

        {/* Velocity Band */}
        <section className="py-20 bg-white">
          <EditorialMarquee imageIds={['sneakers-14', 'sneakers-15', 'sneakers-16', 'sneakers-17', 'sneakers-18']} speed={20} direction="right" />
        </section>

        {/* CTA */}
        <section className="py-40 text-center">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">STEP INTO THE VOID.</h2>
           <Link href="/download">
              <button className="bg-white text-black px-12 py-5 font-bold hover:bg-white/90 transition-all uppercase tracking-widest">
                 SECURE YOUR PAIR
              </button>
           </Link>
        </section>
      </div>
    </PageTransitionWrapper>
  );
}
