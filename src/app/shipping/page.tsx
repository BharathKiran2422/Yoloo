import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shipping Policy - Yoloo!',
};

export default function ShippingPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <h1 className="font-headline text-4xl font-bold mb-8 text-center">Shipping Policy</h1>
                <div className="prose prose-lg mx-auto max-w-4xl text-foreground dark:prose-invert">
                    
                    <h2>1. Delivery Timelines</h2>
                    <ul>
                        <li>We currently offer 90-minute express delivery in select areas of Hyderabad.</li>
                        <li>Delivery hours: 9 AM to 9 PM, 7 days a week.</li>
                        <li>Orders placed after service hours will be delivered the next day.</li>
                    </ul>

                    <h2>2. Delivery Attempts & Reattempts</h2>
                    <ul>
                        <li>Our delivery partner will attempt to deliver once at your selected address.</li>
                        <li>If unreachable or address is incorrect, the order may be cancelled, and a re-delivery fee may apply.</li>
                    </ul>

                    <h2>3. Delayed Deliveries</h2>
                    <ul>
                        <li>In rare cases (e.g. extreme weather, high demand, traffic), delivery may take longer.</li>
                        <li>We will notify you promptly in such cases.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
