import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Return Policy - Yoloo!',
};

export default function ReturnsPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <h1 className="font-headline text-4xl font-bold mb-8 text-center">Return Policy</h1>
                <div className="prose prose-lg mx-auto max-w-4xl text-foreground dark:prose-invert">
                    <p>We want you to be completely satisfied with your purchase. Please review our return policy below.</p>
                    
                    <h2>1. Return Eligibility</h2>
                    <ul>
                        <li>Returns are accepted only if initiated within <strong>4 days</strong> from the date of delivery.</li>
                        <li>Eligible return reasons: Wrong, damaged, or defective items only.</li>
                        <li>Raise a return request via the app, email, or WhatsApp support.</li>
                    </ul>

                    <h2>2. Return Charges</h2>
                     <p>A return processing fee of <strong>₹50</strong> will be deducted from the refund amount for each return.</p>

                    <h2>3. Product Condition for Returns</h2>
                    <ul>
                        <li>Returns will be accepted only if the product is <strong>unused</strong> and all original tags and labels are intact.</li>
                        <li>All products are thoroughly inspected for cuts and tears before dispatch. Returns based on damage claims such as cuts or tears will not be accepted.</li>
                    </ul>
                    
                    <h2>4. Refund Process</h2>
                    <ul>
                        <li>Refunds (excluding platform fees, delivery fees and the return processing charge) will be initiated immediately once the return is approved and the product is successfully picked up.</li>
                        <li>The refund will be processed to the original payment method within 1-2 business days.</li>
                    </ul>

                    <h2>5. Non-refundable Cases</h2>
                    <ul>
                        <li>Size/fit issues, change of mind, or late return requests are not eligible for returns.</li>
                    </ul>

                    <h2>6. Cancellations</h2>
                    <ul>
                         <li>Cancellations are only possible before your order is dispatched. No refunds can be issued after the item has been shipped.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
