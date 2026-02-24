'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CartIcon() {
    const { getItemCount } = useCart();
    const count = getItemCount();

    return (
        <Link
            href="/cart"
            className="relative p-2.5 rounded-xl hover:bg-pharma-50 transition-colors group"
            aria-label={`Shopping cart with ${count} items`}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-pharma-700 group-hover:text-pharma-500 transition-colors"
            >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full gradient-pharma text-white text-[10px] font-bold flex items-center justify-center shadow-md animate-bounce">
                    {count > 9 ? '9+' : count}
                </span>
            )}
        </Link>
    );
}
