
'use client';

import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
    const contactDetails = [
        { icon: Mail, text: "hello@brandsyoloo.co.in", href: "mailto:hello@brandsyoloo.co.in" },
        { icon: Phone, text: "+91 8297297197", href: "tel:+918297297197" },
        { icon: MapPin, text: "Hyderabad, India", href: "#" }
    ];

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

                <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-2xl border">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                             <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                             <div className="space-y-4">
                                {contactDetails.map((detail, index) => (
                                    <a key={index} href={detail.href} className="flex items-center gap-4 group p-4 rounded-lg transition-colors hover:bg-background">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <detail.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">{detail.text}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-8">
                             <h3 className="text-2xl font-bold text-foreground">Send us a message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
