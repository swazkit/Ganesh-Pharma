import Link from 'next/link';
import { getBestSellers } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import ScrollParallax from '@/components/animations/ScrollParallax';

export default function BestSellers() {
    const products = getBestSellers();

    return (
        <section id="best-sellers" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-pharma-50/50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <ScrollParallax speed={0.05}>
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-pharma-50 text-pharma-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm border border-pharma-100/50">
                            Most Popular
                        </span>
                        <h2 className="heading-font text-3xl sm:text-4xl font-extrabold text-pharma-950 mb-4 tracking-tight">
                            Best Selling Medications
                        </h2>
                        <p className="text-clinical-muted text-lg max-w-2xl mx-auto leading-relaxed">
                            Trusted by thousands of patients. FDA-approved medications at competitive prices
                            with free pharmacist consultation.
                        </p>
                    </div>
                </ScrollParallax>

                {/* Product grid with staggered parallax */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(0, 8).map((product, index) => (
                        <ScrollParallax key={product.slug} speed={0.05 + (index % 4) * 0.03}>
                            <ProductCard product={product} index={index} />
                        </ScrollParallax>
                    ))}
                </div>

                {/* View all */}
                <ScrollParallax speed={0.1}>
                    <div className="text-center mt-16">
                        <Link href="/products" className="btn-secondary group">
                            View All Medications
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </ScrollParallax>
            </div>
        </section>
    );
}
