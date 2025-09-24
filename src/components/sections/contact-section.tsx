
'use client';

import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
    return (
        <section id="contact-us" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Send me a message</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>

                <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl border">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
