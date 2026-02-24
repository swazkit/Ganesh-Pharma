export default function HeroSection() {
    return (
        <section className="relative overflow-hidden gradient-pharma-soft">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-pharma-200/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-trust-200/20 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pharma-100/10 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
                <div className="max-w-3xl">
                    {/* Trust badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-pharma-200/50 shadow-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-pharma-700 tracking-wide uppercase">Licensed & Verified Pharmacy</span>
                    </div>

                    {/* Main heading – server rendered, SEO critical */}
                    <h1 className="heading-font text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-pharma-950 mb-6">
                        Licensed Prescription Medications Delivered{' '}
                        <span className="gradient-text-pharma">Securely</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-clinical-muted max-w-2xl leading-relaxed mb-10">
                        Order from verified, state-licensed pharmacies with complete transparency.
                        Every medication is FDA-approved, pharmacist-verified, and shipped directly
                        to your door in tamper-proof packaging.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#best-sellers" className="btn-primary shimmer">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            Browse Medications
                        </a>
                        <a href="#trust" className="btn-secondary">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            Verify Our License
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
                        {[
                            { value: '50K+', label: 'Patients Served' },
                            { value: '99.8%', label: 'Order Accuracy' },
                            { value: '4.9★', label: 'Patient Rating' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="heading-font text-2xl sm:text-3xl font-bold text-pharma-800">{stat.value}</p>
                                <p className="text-xs sm:text-sm text-clinical-muted mt-0.5">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
