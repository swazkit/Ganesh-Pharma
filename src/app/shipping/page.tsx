import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shipping Information | PharmaStore',
    description: 'Details about our fast, discreet delivery and unboxing experience.',
};

export default function ShippingPage() {
    return (
        <div className="bg-clinical-bg min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white card-elevated p-8 sm:p-12">
                <h1 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-8 pb-8 border-b border-clinical-border">Shipping & Delivery</h1>

                <div className="prose prose-pharma max-w-none text-clinical-muted text-sm sm:text-base space-y-8">

                    <div>
                        <h2 className="text-xl font-bold text-pharma-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">⚡</span> Fast & Free Options
                        </h2>
                        <p className="mb-4">
                            We offer free standard shipping on all prescription orders and on over-the-counter orders over $50. All orders are processed within 1 business day of prescription verification.
                        </p>
                        <ul className="grid sm:grid-cols-3 gap-4 list-none p-0 mt-6">
                            <li className="bg-pharma-50 p-4 rounded-xl border border-pharma-100 m-0">
                                <span className="font-bold text-pharma-900 block mb-1">Standard</span>
                                <span className="text-sm">3-5 Business Days<br />Free ($50+)</span>
                            </li>
                            <li className="bg-pharma-50 p-4 rounded-xl border border-pharma-100 m-0">
                                <span className="font-bold text-pharma-900 block mb-1">Expedited</span>
                                <span className="text-sm">2 Business Days<br />$14.99</span>
                            </li>
                            <li className="bg-pharma-50 p-4 rounded-xl border border-pharma-100 m-0">
                                <span className="font-bold text-pharma-900 block mb-1">Overnight</span>
                                <span className="text-sm">Next Business Day<br />$29.99</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-pharma-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">📦</span> Discreet Packaging
                        </h2>
                        <p>
                            Your privacy is our priority. Every order arrives in plain, unmarked packaging with no indication of what is inside or that it was shipped from a pharmacy. The return label will simply read "Fulfillment Center".
                        </p>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-pharma-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">🌡️</span> Temperature Control
                        </h2>
                        <p>
                            Medications requiring refrigeration (like insulin) are shipped overnight in specialized temperature-controlled packaging with ice packs to ensure they remain at the optimal temperature right to your door.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
