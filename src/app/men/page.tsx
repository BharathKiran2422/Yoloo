
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { EditorialMarquee } from '@/components/editorial-marquee';

export default function MenPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const heroImage = getImage('men-1');
  const featureImage1 = getImage('men-6');
  const featureImage2 = getImage('men-13');
  const campaignImages = ['men-2', 'men-3', 'men-4', 'men-5', 'men-7', 'men-8'];

  return (
    <PageTransitionWrapper>
      <div className="bg-background text-foreground selection:bg-primary selection:text-white">
        {/* Editorial Hero */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-12 py-20">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] leading-[0.9] font-bold tracking-tighter uppercase z-10 mix-blend-difference text-white md:text-black dark:text-white"
          >
            L'Homme <br />
            <span className="ml-[10vw]">Collection</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute right-0 top-0 w-full md:w-3/5 h-full z-0"
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
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background hidden md:block" />
          </motion.div>
        </section>

        {/* Cinematic Scroll 1 */}
        <section className="py-24 overflow-hidden border-y border-border/50">
          <div className="px-4 md:px-12 mb-8">
            <h2 className="text-sm uppercase tracking-[0.4em] text-muted-foreground">The Campaign / FW24</h2>
          </div>
          <EditorialMarquee imageIds={campaignImages} speed={50} direction="left" />
        </section>

        {/* Asymmetrical Feature Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              className="md:col-span-5 space-y-8"
            >
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight">CRAFTING MODERN <br />MASCULINITY.</h3>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                A study in form and function. Our latest arrivals redefine the modern wardrobe through premium textiles and artisanal craftsmanship.
              </p>
              <Link href="/download" className="inline-block border-b-2 border-primary pb-1 font-bold tracking-widest hover:text-primary transition-colors">
                EXPLORE NOW
              </Link>
            </motion.div>
            
            <div className="md:col-span-7 relative">
              <div className="relative aspect-[4/5] w-full max-w-xl ml-auto group overflow-hidden">
                {featureImage1 && (
                  <Image
                    src={featureImage1.imageUrl}
                    alt={featureImage1.description}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
              </div>
              <motion.div 
                 whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                 viewport={{ once: true }}
                 className="absolute -bottom-12 -left-12 hidden md:block w-72 aspect-[3/4] shadow-2xl z-10"
              >
                {featureImage2 && (
                  <Image
                    src={featureImage2.imageUrl}
                    alt={featureImage2.description}
                    fill
                    className="object-cover"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scroll 2: High Velocity */}
        <section className="bg-black py-20">
          <EditorialMarquee imageIds={['men-14', 'men-15', 'men-16', 'men-17', 'men-18']} speed={30} direction="right" />
        </section>

        {/* CTA Footer Section */}
        <section className="py-40 text-center container mx-auto px-4">
           <motion.div
             whileInView={{ opacity: 1 }}
             initial={{ opacity: 0 }}
             className="max-w-4xl mx-auto border-t pt-20"
           >
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">YOLOO! MAN</h2>
              <Link href="/download">
                 <button className="bg-foreground text-background px-12 py-5 rounded-full text-lg font-bold hover:bg-primary transition-colors duration-500">
                    GET THE APP
                 </button>
              </Link>
           </motion.div>
        </section>
      </div>
    </PageTransitionWrapper>
  );
}
