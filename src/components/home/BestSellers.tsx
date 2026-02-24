import Link from 'next/link';
import { getBestSellers } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';

export default function BestSellers() {
    const products = getBestSellers();

    return (
        <section id="best-sellers" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-pharma-50 text-pharma-700 text-xs font-bold tracking-wider uppercase mb-4">
                        Most Popular
                    </span>
                    <h2 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-4">
                        Best Selling Medications
                    </h2>
                    <p className="text-clinical-muted text-lg max-w-2xl mx-auto">
                        Trusted by thousands of patients. FDA-approved medications at competitive prices
                        with free pharmacist consultation.
                    </p>
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(0, 8).map((product, index) => (
                        <ProductCard key={product.slug} product={product} index={index} />
                    ))}
                </div>

                {/* View all */}
                <div className="text-center mt-12">
                    <Link href="/#best-sellers" className="btn-secondary">
                        View All Medications
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
