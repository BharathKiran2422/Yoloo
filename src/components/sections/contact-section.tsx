
'use client';

import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
    return (
        <section id="contact-us" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Connect With Us</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Have a style query, collaboration idea, or just want to share your thoughts? We’re here to listen and respond with care.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>

                <div className="max-w-xl mx-auto bg-card p-8 md:p-12 rounded-2xl border">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
