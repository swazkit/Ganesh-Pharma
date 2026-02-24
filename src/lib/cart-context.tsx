'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { Product } from '@/types/product';

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (slug: string) => void;
    updateQuantity: (slug: string, quantity: number) => void;
    clearCart: () => void;
    getItemCount: () => number;
    getSubtotal: () => number;
    getTax: () => number;
    getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'pharmastore-cart';

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(CART_STORAGE_KEY);
            if (stored) {
                setItems(JSON.parse(stored));
            }
        } catch {
            // ignore parse errors
        }
        setIsLoaded(true);
    }, []);

    // Persist cart to localStorage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addToCart = useCallback((product: Product, quantity = 1) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.product.slug === product.slug);
            if (existing) {
                return prev.map((item) =>
                    item.product.slug === product.slug
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { product, quantity }];
        });
    }, []);

    const removeFromCart = useCallback((slug: string) => {
        setItems((prev) => prev.filter((item) => item.product.slug !== slug));
    }, []);

    const updateQuantity = useCallback((slug: string, quantity: number) => {
        if (quantity <= 0) {
            setItems((prev) => prev.filter((item) => item.product.slug !== slug));
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                item.product.slug === slug ? { ...item, quantity } : item
            )
        );
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const getItemCount = useCallback(
        () => items.reduce((sum, item) => sum + item.quantity, 0),
        [items]
    );

    const getSubtotal = useCallback(
        () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        [items]
    );

    const getTax = useCallback(() => getSubtotal() * 0.08, [getSubtotal]);

    const getTotal = useCallback(() => getSubtotal() + getTax(), [getSubtotal, getTax]);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getItemCount,
                getSubtotal,
                getTax,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
