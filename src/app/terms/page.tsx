import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | PharmaStore',
};

export default function TermsPage() {
    return (
        <div className="bg-clinical-bg min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white card-elevated p-8 sm:p-12">
                <h1 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-8 pb-8 border-b border-clinical-border">Terms of Service</h1>

                <div className="prose prose-pharma max-w-none text-clinical-muted text-sm sm:text-base space-y-6">
                    <p>Last Updated: October 2023</p>

                    <h2 className="text-xl font-bold text-pharma-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the PharmaStore website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you must not access the website or use any services.
                    </p>

                    <h2 className="text-xl font-bold text-pharma-900 mt-8 mb-4">2. Prescription Requirements</h2>
                    <p>
                        Certain products sold on PharmaStore require a valid prescription from a licensed healthcare provider. You agree that you will not attempt to purchase prescription medications without submitting a valid prescription. Our licensed pharmacists reserve the right to refuse service to anyone at their professional discretion.
                    </p>

                    <h2 className="text-xl font-bold text-pharma-900 mt-8 mb-4">3. Medical Disclaimer</h2>
                    <p>
                        Content on this site is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>

                    <h2 className="text-xl font-bold text-pharma-900 mt-8 mb-4">4. Return & Refund Policy</h2>
                    <p>
                        Due to federal regulations and pharmacy law, we cannot accept returns of prescription medications once they have been dispensed and shipped to you. Over-the-counter products may be returned unopened within 30 days.
                    </p>
                </div>
            </div>
        </div>
    );
}
