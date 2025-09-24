
'use client';

import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
    const contactDetails = [
        {
            icon: Mail,
            label: "Email",
            value: "hello@brandsyoloo.co.in",
            href: "mailto:hello@brandsyoloo.co.in",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 8297297197",
            href: "tel:+918297297197",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Hyderabad, India",
        },
    ];

    return (
        <section id="contact-us" className="py-8 md:py-12 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Connect With Us</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Have a style query, collaboration idea, or just want to share your thoughts? We’re here to listen and respond with care.
                    </p>
                </div>
                <div className="bg-card p-8 md:p-12 rounded-2xl border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: Info */}
                        <div className="flex flex-col justify-center">
                            <div className="space-y-6">
                                {contactDetails.map((detail, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                            <detail.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">{detail.label}</h3>
                                            {detail.href ? (
                                                <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                                                    {detail.value}
                                                </a>
                                            ) : (
                                                <p className="text-muted-foreground">{detail.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
