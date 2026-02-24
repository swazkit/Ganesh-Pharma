'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/types/product';

interface AddToCartButtonProps {
    product: Product;
    variant?: 'primary' | 'compact';
}

export default function AddToCartButton({ product, variant = 'primary' }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (variant === 'compact') {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product, 1);
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1500);
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 ${added
                        ? 'bg-green-500 text-white scale-95'
                        : 'gradient-pharma text-white hover:opacity-90 hover:shadow-md'
                    }`}
            >
                {added ? (
                    <span className="flex items-center justify-center gap-1.5">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Added!
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-1.5">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        Add to Cart
                    </span>
                )}
            </button>
        );
    }

    return (
        <div className="flex flex-col sm:flex-row gap-3">
            {/* Quantity selector */}
            <div className="flex items-center border border-clinical-border rounded-xl overflow-hidden">
                <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-pharma-600 hover:bg-pharma-50 transition-colors font-bold"
                >
                    −
                </button>
                <span className="px-5 py-3 font-semibold text-pharma-900 min-w-[3rem] text-center border-x border-clinical-border">
                    {quantity}
                </span>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-pharma-600 hover:bg-pharma-50 transition-colors font-bold"
                >
                    +
                </button>
            </div>

            {/* Add to cart */}
            <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-8 rounded-xl font-semibold text-sm transition-all duration-300 ${added
                        ? 'bg-green-500 text-white scale-[0.98]'
                        : 'btn-primary pulse-glow'
                    }`}
            >
                {added ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Added to Cart!
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        Add to Cart — ${(product.price * quantity).toFixed(2)}
                    </span>
                )}
            </button>
        </div>
    );
}
