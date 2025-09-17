
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
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
