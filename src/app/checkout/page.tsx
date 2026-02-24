'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { FormEvent, useState } from 'react';

export default function CheckoutPage() {
    const { items, getTotal, getSubtotal, getTax } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate order processing
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-clinical-bg pt-32 pb-20">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <span className="text-5xl">🎉</span>
                    </div>
                    <h1 className="heading-font text-3xl font-bold text-pharma-900 mb-4">Order Confirmed!</h1>
                    <p className="text-clinical-muted mb-8">
                        Thank you for your order. We've sent a confirmation email with your order details and prescription instructions.
                    </p>
                    <Link href="/products" className="btn-primary">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-clinical-bg pt-32 text-center">
                <h1 className="heading-font text-2xl font-bold mb-4">Your cart is empty.</h1>
                <Link href="/products" className="text-pharma-600 hover:underline">Go back to shop</Link>
            </div>
        );
    }

    const hasPrescriptionItems = items.some(item => item.product.requiresPrescription);

    return (
        <div className="min-h-screen bg-clinical-bg pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="heading-font text-3xl sm:text-4xl font-bold text-pharma-950 mb-8 sm:mb-12">Secure Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Form */}
                    <div className="lg:col-span-7 lg:pr-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Shipping Info */}
                            <div className="card-elevated p-6 sm:p-8">
                                <h2 className="heading-font text-xl font-bold text-pharma-900 mb-6">Shipping Address</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-pharma-800 mb-2">Email Address</label>
                                        <input required type="email" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-pharma-800 mb-2">First Name</label>
                                        <input required type="text" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-pharma-800 mb-2">Last Name</label>
                                        <input required type="text" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-semibold text-pharma-800 mb-2">Address</label>
                                        <input required type="text" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-pharma-800 mb-2">City</label>
                                        <input required type="text" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-pharma-800 mb-2">Postal Code</label>
                                        <input required type="text" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Prescription Notice */}
                            {hasPrescriptionItems && (
                                <div className="card-elevated p-6 sm:p-8 bg-blue-50 border-blue-100">
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl">⚕️</span>
                                        <div>
                                            <h2 className="heading-font text-lg font-bold text-blue-900 mb-2">Prescription Required</h2>
                                            <p className="text-sm text-blue-800">
                                                Your order contains prescription medications. After checkout, you will be prompted to upload a valid prescription or authorize us to contact your doctor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Payment Info */}
                            <div className="card-elevated p-6 sm:p-8">
                                <h2 className="heading-font text-xl font-bold text-pharma-900 mb-6">Payment Method</h2>
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-pharma-800 mb-2">Card Number</label>
                                        <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-pharma-800 mb-2">Expiry Date</label>
                                            <input required type="text" placeholder="MM/YY" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-pharma-800 mb-2">CVC</label>
                                            <input required type="text" placeholder="123" className="w-full bg-white border border-clinical-border rounded-xl p-3 focus:ring-pharma-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary py-4 text-lg pulse-glow flex justify-center items-center"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    `Place Order — $${getTotal().toFixed(2)}`
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-5">
                        <div className="card-elevated p-6 sm:p-8 lg:sticky lg:top-28">
                            <h2 className="heading-font text-xl font-bold text-pharma-950 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 pb-6 border-b border-clinical-border max-h-64 overflow-y-auto pr-2">
                                {items.map(({ product, quantity }) => (
                                    <div key={product.slug} className="flex justify-between items-start gap-4">
                                        <div>
                                            <p className="text-sm font-bold text-pharma-900 line-clamp-1">{product.name}</p>
                                            <p className="text-xs text-clinical-muted">Qty: {quantity}</p>
                                        </div>
                                        <p className="text-sm font-semibold text-pharma-800">${(product.price * quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-clinical-border">
                                <div className="flex justify-between">
                                    <span className="text-clinical-muted">Subtotal</span>
                                    <span className="font-semibold text-pharma-900">${getSubtotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-clinical-muted">Estimated Tax</span>
                                    <span className="font-semibold text-pharma-900">${getTax().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-clinical-muted">Standard Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-6">
                                <span className="heading-font text-lg font-bold text-pharma-900">Total</span>
                                <span className="heading-font text-3xl font-bold text-pharma-800">${getTotal().toFixed(2)}</span>
                            </div>

                            {/* Trust block */}
                            <div className="bg-trust-50 rounded-xl p-4 border border-trust-100 mt-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-trust-600">🔒</span>
                                    <span className="text-xs font-bold text-trust-800 uppercase tracking-wider">HIPAA Compliant</span>
                                </div>
                                <p className="text-[10px] text-trust-700 leading-relaxed">
                                    Your medical data is encrypted and securely transmitted. We never share your health information with third parties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
