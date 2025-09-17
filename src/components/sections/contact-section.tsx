import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './contact-form';

export function ContactSection() {
    return (
        <section className="py-12 md:py-24 bg-card/50 dark:bg-card">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
                    <p className="text-muted-foreground mt-2">Have a project in mind or just want to say hi? Feel free to reach out.</p>
                     <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                            <Mail className="w-8 h-8 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:hello@brandsyoloo.co.in" className="text-muted-foreground text-sm hover:text-primary">hello@brandsyoloo.co.in</a>
                            </div>
                        </div>
                         <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                            <Phone className="w-8 h-8 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground text-sm">+91-8297297197</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                            <MapPin className="w-8 h-8 text-primary"/>
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-muted-foreground text-sm">Hyderabad, India</p>
                            </div>
                        </div>
                    </div>
                
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
