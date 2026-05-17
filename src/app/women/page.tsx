
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { EditorialMarquee } from '@/components/editorial-marquee';

export default function WomenPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const heroImage = getImage('women-11');
  const featureImage1 = getImage('women-3');
  const featureImage2 = getImage('women-1');
  const campaignImages = ['women-2', 'women-4', 'women-5', 'women-6', 'women-7', 'women-8'];

  return (
    <PageTransitionWrapper>
      <div className="bg-background text-foreground selection:bg-pink-200">
        {/* Editorial Hero */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-12 py-20">
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] leading-[0.9] font-bold tracking-tighter uppercase z-10 text-right md:text-left text-black dark:text-white"
          >
            LA FEMME <br />
            <span className="md:ml-[20vw] italic font-serif">AURA</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-0 w-full md:w-1/2 h-full z-0 opacity-80"
          >
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover grayscale"
                priority
              />
            )}
          </motion.div>
        </section>

        {/* Cinematic Scroll 1 */}
        <section className="py-24 bg-card/20">
          <div className="px-4 md:px-12 mb-8 text-center">
            <h2 className="text-sm uppercase tracking-[1em] text-muted-foreground">Editorial / Edition 01</h2>
          </div>
          <EditorialMarquee imageIds={campaignImages} speed={60} direction="right" />
        </section>

        {/* Asymmetrical Feature Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
               <div className="relative aspect-[4/5] w-full max-w-xl mr-auto group overflow-hidden">
                {featureImage1 && (
                  <Image
                    src={featureImage1.imageUrl}
                    alt={featureImage1.description}
                    fill
                    className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
              </div>
            </div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              className="md:col-span-5 space-y-8 order-1 md:order-2"
            >
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Poetry <br />in Motion.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ethereal silhouettes meet sharp tailoring. Our women's collection celebrates the duality of modern femininity with pieces designed for every facet of life.
              </p>
              <Link href="/download" className="inline-block border-b border-foreground pb-2 font-medium tracking-[0.2em] hover:opacity-50 transition-all">
                VIEW LOOKBOOK
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Horizontal Band: Monochrome */}
        <section className="py-20 border-y border-border/50">
          <EditorialMarquee imageIds={['women-12', 'women-13', 'women-14', 'women-15']} speed={40} direction="left" />
        </section>

        {/* CTA Footer Section */}
        <section className="py-40 text-center">
            <div className="container mx-auto px-4">
               <h2 className="text-[15vw] font-bold tracking-tighter leading-none mb-12 opacity-5">YOLOO!</h2>
               <div className="-mt-[10vw]">
                  <p className="text-xl md:text-2xl font-medium mb-12 tracking-wide">EXPERIENCE THE FULL COLLECTION</p>
                  <Link href="/download">
                     <button className="bg-foreground text-background px-16 py-6 rounded-none text-xs font-bold tracking-[0.4em] uppercase hover:invert transition-all duration-700">
                        DOWNLOAD APP
                     </button>
                  </Link>
               </div>
            </div>
        </section>
      </div>
    </PageTransitionWrapper>
  );
}
