import { generateFAQSchema } from '@/lib/structured-data';

const homeFAQs = [
    {
        question: 'Is PharmaStore a licensed pharmacy?',
        answer: 'Yes, PharmaStore is a fully licensed online pharmacy, registered with state boards of pharmacy and DEA. We maintain NABP accreditation and VIPPS certification, ensuring compliance with all federal and state pharmaceutical regulations.',
    },
    {
        question: 'How do I order prescription medications online?',
        answer: 'To order prescription medications, create an account, browse our catalog, and add items to your cart. During checkout, you can upload your prescription or have your doctor send it directly to us. Our licensed pharmacists verify every prescription before dispensing.',
    },
    {
        question: 'Are the medications FDA-approved?',
        answer: 'Yes, all medications sold on PharmaStore are FDA-approved and sourced from licensed manufacturers and authorized distributors. We never sell counterfeit, expired, or unapproved medications.',
    },
    {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for most orders. Temperature-sensitive medications are shipped in insulated packaging with cold chain tracking to ensure potency.',
    },
    {
        question: 'Is my personal health information secure?',
        answer: 'Absolutely. We implement HIPAA-compliant data security measures including end-to-end encryption, secure servers, and strict access controls. Your personal health information is never shared with third parties without your explicit consent.',
    },
    {
        question: 'Can I consult a pharmacist before ordering?',
        answer: 'Yes, our licensed pharmacists are available 24/7 for consultations. You can reach them via live chat, phone, or email. They can answer questions about drug interactions, dosing, side effects, and medication management.',
    },
];

export default function FAQSection() {
    const faqSchema = generateFAQSchema(homeFAQs);

    return (
        <section id="faq" className="section-padding bg-white">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-pharma-50 text-pharma-700 text-xs font-bold tracking-wider uppercase mb-4">
                        Have Questions?
                    </span>
                    <h2 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-clinical-muted text-lg max-w-2xl mx-auto">
                        Find answers to common questions about ordering medications,
                        our pharmacy licensing, and patient safety.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {homeFAQs.map((faq, index) => (
                        <details
                            key={index}
                            className="group card-elevated overflow-hidden"
                        >
                            <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                                <h3 className="heading-font text-base font-semibold text-pharma-900 pr-8">
                                    {faq.question}
                                </h3>
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pharma-50 flex items-center justify-center group-open:bg-pharma-100 transition-colors">
                                    <svg
                                        className="w-4 h-4 text-pharma-600 transition-transform group-open:rotate-180"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 -mt-1">
                                <p className="text-clinical-muted leading-relaxed text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
