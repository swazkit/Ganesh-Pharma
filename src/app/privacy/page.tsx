import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy & HIPAA Compliance | PharmaStore',
};

export default function PrivacyPage() {
    return (
        <div className="bg-clinical-bg min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white card-elevated p-8 sm:p-12">
                <h1 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-8 pb-8 border-b border-clinical-border">Privacy Policy & HIPAA Compliance</h1>

                <div className="prose prose-pharma max-w-none text-clinical-muted text-sm sm:text-base space-y-6">
                    <p>Last Updated: October 2023</p>

                    <h2 className="text-xl font-bold text-pharma-900 mt-8 mb-4">1. Notice of Privacy Practices</h2>
                    <p>
                        This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
                    </p>
                    <p>
                        PharmaStore is required by law to maintain the privacy of Protected Health Information (PHI) and to provide you with notice of our legal duties and privacy practices with respect to PHI.
                    </p>

                    <h2 className="text-xl font-bold text-pharma-900 mt-8 mb-4">2. How We May Use or Disclose Your Health Information</h2>
                    <p>For Treatment: We may use your health information to dispense prescription medications to you.</p>
                    <p>For Payment: We may use and disclose your health information to obtain payment for the health care services we provide to you.</p>
                    <p>For Health Care Operations: We may use and disclose your health information for our health care operations, such as quality assessment and improvement activities.</p>

                    <h2 className="text-xl font-bold text-pharma-900 mt-8 mb-4">3. Security Standards</h2>
                    <p>
                        We implement administrative, physical, and technical safeguards that reasonably and appropriately protect the confidentiality, integrity, and availability of the electronic protected health information that we create, receive, maintain, or transmit.
                    </p>

                    <div className="bg-pharma-50 p-6 rounded-xl border border-pharma-100 mt-8">
                        <h3 className="font-bold text-pharma-900 mb-2">Privacy Officer Contact</h3>
                        <p className="text-sm">
                            If you have any questions about this notice, please contact our Privacy Officer at privacy@pharmastore.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
