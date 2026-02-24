import Link from 'next/link';

const footerLinks = {
    shop: [
        { label: 'All Medications', href: '/products' },
        { label: 'Prescription Meds', href: '/products?category=all' },
        { label: 'Over-the-Counter', href: '/products?category=all' },
        { label: 'Best Sellers', href: '/#best-sellers' },
    ],
    conditions: [
        { label: 'Diabetes Care', href: '/categories/diabetes-care' },
        { label: 'Heart Health', href: '/categories/heart-health' },
        { label: 'Mental Health', href: '/categories/mental-health' },
        { label: 'Digestive Health', href: '/categories/digestive-health' },
    ],
    support: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQs', href: '/#faq' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'About Us', href: '/about' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'HIPAA Compliance', href: '/privacy' },
        { label: 'Licensing Info', href: '/about' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-pharma-950 text-white">
            {/* Trust banner */}
            <div className="border-b border-pharma-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🔒', title: 'Secure Ordering', desc: 'SSL-encrypted transactions' },
                            { icon: '✅', title: 'Licensed Pharmacy', desc: 'Fully regulated and certified' },
                            { icon: '🚚', title: 'Discreet Delivery', desc: 'Plain, unmarked packaging' },
                            { icon: '📞', title: '24/7 Support', desc: 'Pharmacist on call always' },
                        ].map((item) => (
                            <div key={item.title} className="flex items-center gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <p className="text-sm font-semibold text-pharma-200">{item.title}</p>
                                    <p className="text-xs text-pharma-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Links grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {Object.entries({ Shop: footerLinks.shop, Conditions: footerLinks.conditions, Support: footerLinks.support, Legal: footerLinks.legal }).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="heading-font text-sm font-bold text-pharma-300 uppercase tracking-wider mb-4">{title}</h3>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-pharma-400 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-pharma-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg gradient-pharma flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M2 12h20" />
                            </svg>
                        </div>
                        <span className="heading-font text-sm font-bold text-pharma-300">PharmaStore</span>
                    </div>
                    <p className="text-xs text-pharma-500 text-center">
                        © {new Date().getFullYear()} PharmaStore. All rights reserved. Licensed pharmacy. DEA License #AP0000000.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-pharma-500">HIPAA Compliant</span>
                        <span className="text-pharma-700">•</span>
                        <span className="text-xs text-pharma-500">NABP Accredited</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
