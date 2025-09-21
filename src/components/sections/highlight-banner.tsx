
'use client';

import { motion } from 'framer-motion';

export function HighlightBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-6 bg-background"
        >
            <div className="container mx-auto">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-gradient-to-r from-primary/10 via-card to-primary/10 p-4 rounded-2xl border text-center cursor-default shadow-sm"
                >
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                        👉 Fresh Fashion in <span className="text-primary font-bold">30–120 Mins</span> – Your Style, Your Time, Delivered Fast ⚡
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
