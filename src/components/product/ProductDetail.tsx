import { Product } from '@/types/product';
import { generateFAQSchema } from '@/lib/structured-data';
import AddToCartButton from '@/components/ui/AddToCartButton';

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const faqSchema = generateFAQSchema(product.faqs);

    return (
        <div>
            {/* Product FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Product Image */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pharma-50 to-trust-50 flex items-center justify-center min-h-[400px]">
                    {discount > 0 && (
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-red-500 text-white text-sm font-bold z-10">
                            Save {discount}%
                        </div>
                    )}
                    <div className="absolute top-4 right-4 z-10">
                        {product.requiresPrescription ? (
                            <span className="badge-rx text-sm px-3 py-1.5">Prescription Required</span>
                        ) : (
                            <span className="badge-otc text-sm px-3 py-1.5">Over The Counter</span>
                        )}
                    </div>
                    <span className="text-[120px]">💊</span>
                </div>

                {/* Product Info */}
                <div>
                    <div className="mb-2">
                        <span className="text-sm font-medium text-pharma-500">{product.category}</span>
                    </div>

                    <h1 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-2">
                        {product.name}
                    </h1>

                    <p className="text-clinical-muted text-sm mb-4">
                        Generic: {product.genericName} | {product.dosage} | {product.form} | {product.manufacturer}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'star-filled' : 'text-gray-200'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm font-medium text-pharma-800">{product.rating}</span>
                        <span className="text-sm text-clinical-muted">({product.reviewCount} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="heading-font text-4xl font-bold text-pharma-800">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice > product.price && (
                            <span className="text-xl text-clinical-muted line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                        {discount > 0 && (
                            <span className="text-sm font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-lg">
                                {discount}% OFF
                            </span>
                        )}
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-2 mb-6">
                        {product.inStock ? (
                            <>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                <span className="text-sm font-medium text-green-700">In Stock — Ready to Ship</span>
                            </>
                        ) : (
                            <>
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <span className="text-sm font-medium text-red-700">Out of Stock</span>
                            </>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-clinical-muted leading-relaxed">{product.longDescription}</p>
                    </div>

                    {/* CTA */}
                    <div className="mb-8">
                        <AddToCartButton product={product} />
                    </div>

                    {/* Trust indicators */}
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { icon: '🔒', text: 'SSL Encrypted' },
                            { icon: '🚚', text: 'Free Shipping $50+' },
                            { icon: '↩️', text: '30-Day Returns' },
                            { icon: '✅', text: 'Pharmacist Verified' },
                        ].map((item) => (
                            <div key={item.text} className="flex items-center gap-2 text-xs text-clinical-muted bg-clinical-bg rounded-lg px-3 py-2.5">
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Side Effects */}
            <div className="mt-16">
                <h2 className="heading-font text-2xl font-bold text-pharma-950 mb-4">Side Effects & Warnings</h2>
                <div className="card-elevated p-6">
                    <p className="text-sm text-clinical-muted mb-4">
                        Common side effects may include:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.sideEffects.map((effect) => (
                            <span key={effect} className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                                {effect}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-clinical-muted">
                        This is not a complete list of side effects. Consult your healthcare provider for medical advice about side effects.
                        If you experience any serious side effects, seek immediate medical attention.
                    </p>
                </div>
            </div>

            {/* Product FAQs */}
            <div className="mt-12">
                <h2 className="heading-font text-2xl font-bold text-pharma-950 mb-4">Product Questions</h2>
                <div className="space-y-3">
                    {product.faqs.map((faq, index) => (
                        <details key={index} className="card-elevated overflow-hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-5 list-none">
                                <h3 className="heading-font text-sm font-semibold text-pharma-900 pr-8">
                                    {faq.question}
                                </h3>
                                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pharma-50 flex items-center justify-center group-open:bg-pharma-100 transition-colors">
                                    <svg className="w-3.5 h-3.5 text-pharma-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-5 pb-5 -mt-1">
                                <p className="text-clinical-muted text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}
