'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShippingPage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <Link href="/" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-8">
                    <ArrowLeft size={16} />
                    <span>Back to Home</span>
                </Link>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 sm:p-12 w-full max-w-4xl space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">1. Delivery Timelines</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>We currently offer 90-minute express delivery in select areas of Hyderabad.</li>
                        <li>Delivery hours: 9 AM to 9 PM, 7 days a week.</li>
                        <li>Orders placed after service hours will be delivered the next day.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">2. Delivery Attempts & Reattempts</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Our delivery partner will attempt to deliver once at your selected address.</li>
                        <li>If unreachable or address is incorrect, the order may be cancelled, and a re-delivery fee may apply.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">3. Delayed Deliveries</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>In rare cases (e.g. extreme weather, high demand, traffic), delivery may take longer.</li>
                        <li>We will notify you promptly in such cases.</li>
                    </ul>
                </div>

                <div className="pt-4">
                    <Link href="/">
                        <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">Go to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
