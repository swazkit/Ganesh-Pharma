'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartIcon from '@/components/ui/CartIcon';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileOpen(false)}>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-pharma flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M2 12h20" />
                            </svg>
                        </div>
                        <div>
                            <span className="heading-font text-lg sm:text-xl font-bold text-pharma-800 tracking-tight">
                                Pharma<span className="text-pharma-500">Store</span>
                            </span>
                            <p className="text-[10px] text-clinical-muted font-medium -mt-0.5 tracking-wider uppercase hidden sm:block">Licensed Online Pharmacy</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${pathname === link.href
                                        ? 'text-pharma-700 bg-pharma-50'
                                        : 'text-clinical-muted hover:text-pharma-700 hover:bg-pharma-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + Cart */}
                    <div className="flex items-center gap-2">
                        <CartIcon />

                        <Link
                            href="/products"
                            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl gradient-pharma hover:opacity-90 transition-opacity shadow-lg"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            Shop Now
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-pharma-50 transition-colors"
                            aria-label="Menu"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-clinical-border bg-white/95 backdrop-blur-xl">
                    <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${pathname === link.href
                                        ? 'text-pharma-700 bg-pharma-50'
                                        : 'text-clinical-muted hover:text-pharma-700 hover:bg-pharma-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/products"
                            onClick={() => setMobileOpen(false)}
                            className="block mt-3 text-center px-4 py-3 text-sm font-semibold text-white rounded-xl gradient-pharma"
                        >
                            Shop All Medications
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
