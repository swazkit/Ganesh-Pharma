export default function EducationalContent() {
    return (
        <section className="section-padding bg-clinical-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust-700 text-xs font-bold tracking-wider uppercase mb-4">
                        Health Education
                    </span>
                    <h2 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-4">
                        Understanding Your Medications
                    </h2>
                    <p className="text-clinical-muted text-lg max-w-2xl mx-auto">
                        Expert-reviewed educational content to help you make informed decisions
                        about your health and medication management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Article 1 */}
                    <article className="card-elevated overflow-hidden group">
                        <div className="h-48 bg-gradient-to-br from-pharma-100 to-pharma-200 flex items-center justify-center">
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-500">📋</span>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-pharma-500 uppercase tracking-wider">Medication Safety</span>
                            <h3 className="heading-font text-lg font-bold text-pharma-900 mt-2 mb-3">
                                How to Safely Manage Multiple Prescription Medications
                            </h3>
                            <p className="text-sm text-clinical-muted leading-relaxed mb-4">
                                Taking multiple medications requires careful management to avoid dangerous drug interactions.
                                Learn about medication reconciliation, the importance of maintaining an updated medication list,
                                and how to communicate effectively with your pharmacist about potential interactions.
                                Our licensed pharmacists recommend regular medication reviews and using pill organizers
                                for complex regimens.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-clinical-muted">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                8 min read • Reviewed by Clinical Team
                            </div>
                        </div>
                    </article>

                    {/* Article 2 */}
                    <article className="card-elevated overflow-hidden group">
                        <div className="h-48 bg-gradient-to-br from-trust-100 to-trust-200 flex items-center justify-center">
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🔬</span>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-trust-500 uppercase tracking-wider">Generic vs Brand</span>
                            <h3 className="heading-font text-lg font-bold text-pharma-900 mt-2 mb-3">
                                Generic Medications: Same Quality, Better Value
                            </h3>
                            <p className="text-sm text-clinical-muted leading-relaxed mb-4">
                                Generic medications contain the same active ingredients, dosage, and efficacy as their
                                brand-name counterparts but at a fraction of the cost. The FDA requires generics to meet
                                identical standards for quality, strength, purity, and stability. Switching to generics
                                can save patients 30-80% on medication costs without compromising therapeutic outcomes.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-clinical-muted">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                6 min read • Reviewed by Clinical Team
                            </div>
                        </div>
                    </article>

                    {/* Article 3 */}
                    <article className="card-elevated overflow-hidden group">
                        <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🏥</span>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Online Pharmacy</span>
                            <h3 className="heading-font text-lg font-bold text-pharma-900 mt-2 mb-3">
                                How to Verify a Legitimate Online Pharmacy
                            </h3>
                            <p className="text-sm text-clinical-muted leading-relaxed mb-4">
                                Protecting yourself from rogue online pharmacies is critical. Always verify VIPPS certification,
                                check state licensing, and confirm the pharmacy requires valid prescriptions for controlled
                                medications. Legitimate pharmacies employ licensed pharmacists and provide secure, encrypted
                                ordering systems. Look for NABP accreditation and verified internet pharmacy practice sites.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-clinical-muted">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                10 min read • Reviewed by Clinical Team
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
