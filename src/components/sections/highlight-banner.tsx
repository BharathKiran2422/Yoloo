
'use client';

import { motion } from 'framer-motion';

export function HighlightBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-10 md:py-12 bg-background"
        >
            <div className="container mx-auto px-4 p-8 text-center border-y">
                <p className="text-xl sm:text-2xl md:text-3xl font-headline font-bold text-foreground tracking-tight">
                    Fresh Fashion in <span className="font-extrabold text-primary">30–120 Mins</span> – Your Style, Your Time, Delivered Fast ⚡
                </p>
            </div>
        </motion.div>
    );
}
