export default function TrustSection() {
    return (
        <section id="trust" className="section-padding gradient-pharma text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold tracking-wider uppercase mb-4 border border-white/20">
                        Your Safety, Our Priority
                    </span>
                    <h2 className="heading-font text-3xl sm:text-4xl font-bold mb-4">
                        Why Patients Trust PharmaStore
                    </h2>
                    <p className="text-pharma-100 text-lg max-w-2xl mx-auto">
                        We are fully licensed, regulated, and committed to the highest standards
                        of pharmaceutical care and patient safety.
                    </p>
                </div>

                {/* Trust pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            ),
                            title: 'State-Licensed Pharmacy',
                            description: 'Fully licensed and regulated by state boards of pharmacy. DEA registered for controlled substance dispensing. Regular compliance audits ensure adherence to all federal and state regulations.',
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            ),
                            title: 'HIPAA Compliant & Secure',
                            description: 'Your health data is protected by HIPAA-compliant systems. All transactions are SSL-encrypted with bank-level security. We never share your personal health information with third parties.',
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            ),
                            title: 'Licensed Pharmacists',
                            description: 'Every prescription is reviewed by licensed pharmacists before dispensing. Our clinical team is available 24/7 for medication consultations, drug interaction checks, and dosage guidance.',
                        },
                    ].map((pillar) => (
                        <div key={pillar.title} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                                {pillar.icon}
                            </div>
                            <h3 className="heading-font text-lg font-bold mb-3">{pillar.title}</h3>
                            <p className="text-sm text-pharma-100 leading-relaxed">{pillar.description}</p>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="mt-14 flex flex-wrap items-center justify-center gap-8 opacity-70">
                    {['NABP Accredited', 'FDA Registered', 'HIPAA Compliant', 'DEA Licensed', 'VIPPS Certified'].map((cert) => (
                        <div key={cert} className="flex items-center gap-2 text-sm font-medium">
                            <svg className="w-4 h-4 text-accent-gold-light" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            {cert}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
