import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions - Yoloo!',
};

export default function TermsPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <h1 className="font-headline text-4xl font-bold mb-8 text-center">YOLOO - Terms and Conditions</h1>
                <div className="prose prose-lg mx-auto max-w-4xl text-foreground dark:prose-invert">
                    <p className="text-muted-foreground text-center">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <p>Welcome to YOLOO (“we”, “our”, “us”), your fastest route to standout fashion. These Terms and Conditions (“Terms”) govern your access and use of the YOLOO mobile application, website, and services (collectively, the “Platform”). By accessing or using YOLOO, you agree to be bound by these Terms. If you do not agree, please do not use the Platform.</p>

                    <h2>1. Eligibility</h2>
                    <p>To use YOLOO, you must:</p>
                    <ul>
                        <li>Be at least 18 years old or have parental/legal guardian consent.</li>
                        <li>Use the platform only for lawful purposes.</li>
                    </ul>

                    <h2>2. Account Registration</h2>
                    <ul>
                        <li>You must create an account to shop on YOLOO.</li>
                        <li>You are responsible for maintaining confidentiality of your login credentials.</li>
                        <li>You agree to provide accurate, current, and complete information.</li>
                    </ul>

                    <h2>3. Product Listings and Pricing</h2>
                    <ul>
                        <li>YOLOO lists products from third-party fashion brands.</li>
                        <li>Prices are inclusive of all applicable taxes unless stated otherwise.</li>
                        <li>We reserve the right to modify or discontinue products without notice.</li>
                    </ul>
                    
                    <h2>4. Delivery and Returns</h2>
                    <ul>
                        <li>YOLOO offers fast delivery (typically within 90 minutes in select cities).</li>
                        <li>Standard delivery charges apply: ₹70 for orders below ₹499; ₹30 for orders ₹500 and above.</li>
                        <li>Returns can be initiated within 4 days of delivery via the app. Items must be unworn, unwashed, and in original packaging.</li>
                        <li>Refunds will be processed as per our Return Policy.</li>
                    </ul>

                    <h2>5. No Cost EMI</h2>
                    <ul>
                        <li>YOLOO provides instant No Cost EMI options for select products, subject to third-party lender approval.</li>
                        <li>EMI terms will be visible at checkout for eligible items.</li>
                    </ul>

                    <h2>6. User Conduct</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Abuse, harass, or harm other users or delivery agents.</li>
                        <li>Post or share any offensive, misleading, or illegal content.</li>
                        <li>Engage in fraudulent transactions.</li>
                    </ul>

                    <h2>7. Intellectual Property</h2>
                    <p>All content on YOLOO—including logos, product images, UI, and design—is the property of YOLOO or its partners. You may not use it without prior written consent.</p>

                    <h2>8. Commissions and Brand Agreements (For Partner Brands)</h2>
                    <ul>
                        <li>Commission is applicable on each sale as per mutually agreed rate.</li>
                        <li>Unsold inventory will be returned after 3 months from listing date at YOLOO’s cost.</li>
                        <li>Brands receive a commission confirmation certificate monthly.</li>
                    </ul>

                    <h2>9. Limitation of Liability</h2>
                    <p>YOLOO is not liable for:</p>
                    <ul>
                        <li>Delays in delivery due to unforeseen circumstances.</li>
                        <li>Product damage after successful delivery.</li>
                        <li>Actions of third-party service providers.</li>
                    </ul>

                    <h2>10. Termination</h2>
                    <p>We reserve the right to suspend or terminate your access if you violate these Terms.</p>

                    <h2>11. Changes to Terms</h2>
                    <p>We may update these Terms at any time. Changes will be effective immediately upon posting. Continued use means you accept the updated Terms.</p>

                    <h2>12. Contact</h2>
                    <p>For support, queries, or legal concerns, please contact us at:</p>
                    <p>
                        Yoloo Fashion Network Private Limited<br />
                        Hyderabad, India<br />
                        📧 <a href="mailto:hello@brandsyoloo.co.in">hello@brandsyoloo.co.in</a><br />
                        📞 8297297197
                    </p>
                </div>
            </div>
        </div>
    );
}
