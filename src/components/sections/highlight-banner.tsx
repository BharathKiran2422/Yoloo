
'use client';

import { motion } from 'framer-motion';

export function HighlightBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-10 bg-background"
        >
            <div className="container mx-auto">
                <div
                    className="bg-card border-y p-8 text-center"
                >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-foreground tracking-tight">
                        Fresh Fashion in <span className="font-extrabold">30–120 Mins</span> – Your Style, Your Time, Delivered Fast ⚡
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
