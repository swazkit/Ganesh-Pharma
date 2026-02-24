'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, getSubtotal, getTax, getTotal } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-clinical-bg pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-32 h-32 mx-auto bg-pharma-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
                        <svg className="w-16 h-16 text-pharma-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </div>
                    <h1 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-4">
                        Your cart is empty
                    </h1>
                    <p className="text-clinical-muted text-lg mb-8">
                        Looks like you haven't added any medications to your cart yet.
                    </p>
                    <Link href="/products" className="btn-primary inline-flex pulse-glow">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-clinical-bg pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-8 sm:mb-12">
                    Your Cart <span className="text-pharma-400 font-medium">({items.length} items)</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-8 space-y-6">
                        {items.map(({ product, quantity }) => (
                            <div key={product.slug} className="card-elevated p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                                {/* Image Placeholder */}
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="w-full sm:w-32 h-32 bg-gradient-to-br from-pharma-50 to-trust-50 rounded-2xl flex-shrink-0 flex items-center justify-center group"
                                >
                                    <span className="text-4xl group-hover:scale-110 transition-transform">💊</span>
                                </Link>

                                {/* Details */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between gap-4">
                                        <div>
                                            <p className="text-xs font-medium text-pharma-500 mb-1">{product.category}</p>
                                            <Link href={`/products/${product.slug}`} className="hover:text-pharma-600 transition-colors">
                                                <h3 className="heading-font text-lg font-bold text-pharma-900 mb-1 line-clamp-2">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <p className="text-xs text-clinical-muted mb-2">
                                                {product.dosage} • {product.form}
                                            </p>
                                            {product.requiresPrescription && (
                                                <span className="badge-rx py-0.5 px-2 text-[10px]">Rx Required</span>
                                            )}
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="heading-font text-lg font-bold text-pharma-800">
                                                ${(product.price * quantity).toFixed(2)}
                                            </p>
                                            {quantity > 1 && (
                                                <p className="text-xs text-clinical-muted mt-1">
                                                    ${product.price.toFixed(2)} each
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-clinical-border">
                                        <div className="flex items-center border border-clinical-border rounded-lg overflow-hidden h-9">
                                            <button
                                                onClick={() => updateQuantity(product.slug, quantity - 1)}
                                                className="px-3 text-pharma-600 hover:bg-pharma-50 transition-colors h-full flex items-center justify-center font-bold"
                                            >
                                                −
                                            </button>
                                            <span className="px-3 font-semibold text-pharma-900 text-sm h-full flex items-center justify-center min-w-[2.5rem] text-center border-x border-clinical-border">
                                                {quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(product.slug, quantity + 1)}
                                                className="px-3 text-pharma-600 hover:bg-pharma-50 transition-colors h-full flex items-center justify-center font-bold"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(product.slug)}
                                            className="text-sm font-medium text-red-500 hover:text-red-600 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
                                        >
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                            </svg>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4">
                        <div className="card-elevated p-6 lg:p-8 lg:sticky lg:top-28">
                            <h2 className="heading-font text-xl font-bold text-pharma-950 mb-6">Order Summary</h2>

                            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-clinical-border">
                                <div className="flex justify-between">
                                    <span className="text-clinical-muted">Subtotal</span>
                                    <span className="font-semibold text-pharma-900">${getSubtotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-clinical-muted">Estimated Tax (8%)</span>
                                    <span className="font-semibold text-pharma-900">${getTax().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-clinical-muted">Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-8">
                                <span className="heading-font text-lg font-bold text-pharma-900">Total</span>
                                <span className="heading-font text-3xl font-bold text-pharma-800">
                                    ${getTotal().toFixed(2)}
                                </span>
                            </div>

                            <Link href="/checkout" className="btn-primary w-full justify-center pulse-glow mb-4">
                                Proceed to Checkout
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>

                            <div className="flex items-start gap-3 p-4 bg-trust-50 rounded-xl border border-trust-100 mt-6">
                                <span className="text-xl">🔒</span>
                                <div>
                                    <h4 className="text-xs font-bold text-trust-800 mb-0.5">Secure SSL Checkout</h4>
                                    <p className="text-[10px] text-trust-600 leading-relaxed">
                                        Your personal and payment information is HIPAA compliant and encrypted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
