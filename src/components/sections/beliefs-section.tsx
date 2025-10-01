
'use client';

import { Card, CardContent } from "@/components/ui/card";
import {motion} from 'framer-motion';

const beliefs = [
    {
        title: "Fashion should be convenient",
        description: "style shouldn’t take days to arrive.",
    },
    {
        title: "No more traffic, parking stress, or crowded offline stores",
        description: "fashion should come to you.",
    },
    {
        title: "Time is the new luxury",
        description: "saving customers time means delivering real value.",
    }
];

export function BeliefsSection() {
    return (
        <section className="py-8 md:py-16">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Beliefs</h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {beliefs.map((belief, index) => (
                     <motion.div
                        key={belief.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                     >
                        <Card className="rounded-2xl shadow-sm border h-full bg-background/50 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6 md:p-8">
                                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{belief.title}</h3>
                                <p className="text-foreground/80 text-sm md:text-base">{belief.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
