import Link from 'next/link';
import { Product } from '@/types/product';
import AddToCartButton from '@/components/ui/AddToCartButton';

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);

    return (
        <div className="card-elevated group overflow-hidden flex flex-col">
            {/* Image — clickable to product page */}
            <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-48 bg-gradient-to-br from-pharma-50 to-trust-50 flex items-center justify-center overflow-hidden">
                    {discount > 0 && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-red-500 text-white text-xs font-bold z-10">
                            -{discount}%
                        </div>
                    )}
                    <div className="absolute top-3 right-3 z-10">
                        {product.requiresPrescription ? (
                            <span className="badge-rx">Rx</span>
                        ) : (
                            <span className="badge-otc">OTC</span>
                        )}
                    </div>
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                        {index % 4 === 0 ? '💊' : index % 4 === 1 ? '💉' : index % 4 === 2 ? '🧴' : '💎'}
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <Link href={`/products/${product.slug}`} className="block flex-1">
                    <p className="text-xs font-medium text-pharma-500 mb-1.5">{product.category}</p>
                    <h3 className="heading-font text-sm font-bold text-pharma-900 mb-1 line-clamp-2 group-hover:text-pharma-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-xs text-clinical-muted mb-3">
                        {product.genericName} • {product.dosage} • {product.form}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'star-filled' : 'text-gray-200'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-xs text-clinical-muted">({product.reviewCount})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="heading-font text-xl font-bold text-pharma-800">${product.price.toFixed(2)}</span>
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-clinical-muted line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                    </div>
                </Link>

                {/* Add to Cart */}
                <AddToCartButton product={product} variant="compact" />
            </div>
        </div>
    );
}
