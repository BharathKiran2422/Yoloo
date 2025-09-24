
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
        <section id="contact-us" className="py-8 bg-background">
            <div className="container mx-auto">
                <div className="bg-card p-6 md:p-8 rounded-2xl border">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                        {/* Left Column: Info */}
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Connect With Us</h2>
                             <p className="text-muted-foreground mb-8">
                                Have a style query, collaboration idea, or just want to share your thoughts? We’re here to listen and respond with care.
                            </p>
                            <div className="space-y-6">
                                {contactDetails.map((detail, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                            <detail.icon className="w-5 h-5" />
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
                        <div className="md:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

    