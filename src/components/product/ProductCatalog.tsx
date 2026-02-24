'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ui/ProductCard';

interface CategoryInfo {
    name: string;
    slug: string;
    count: number;
}

interface ProductCatalogProps {
    products: Product[];
    categories: CategoryInfo[];
    initialCategorySlug?: string;
}

export default function ProductCatalog({ products, categories, initialCategorySlug = 'all' }: ProductCatalogProps) {
    const [activeCategorySlug, setActiveCategorySlug] = useState(initialCategorySlug);

    const filteredProducts = activeCategorySlug === 'all'
        ? products
        : products.filter(p => p.categorySlug === activeCategorySlug);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h1 className="heading-font text-4xl sm:text-5xl font-bold text-pharma-950 mb-4">
                        All Medications
                    </h1>
                    <p className="text-clinical-muted text-lg max-w-2xl">
                        Browse our complete catalog of FDA-approved prescription and over-the-counter medications.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex-shrink-0">
                    <label htmlFor="category" className="block text-sm font-semibold text-pharma-800 mb-2">
                        Filter by Category
                    </label>
                    <select
                        id="category"
                        value={activeCategorySlug}
                        onChange={(e) => setActiveCategorySlug(e.target.value)}
                        className="w-full md:w-64 bg-white border border-clinical-border text-pharma-900 text-sm rounded-xl focus:ring-pharma-500 focus:border-pharma-500 block p-3 shadow-sm transition-shadow hover:shadow-md outline-none"
                    >
                        <option value="all">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.slug} value={cat.slug}>{cat.name} ({cat.count})</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.slug} product={product} index={index} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-pharma-50 rounded-3xl border border-clinical-border border-dashed">
                    <span className="text-4xl mb-4 block">🔍</span>
                    <h3 className="heading-font text-xl font-bold text-pharma-900 mb-2">No medications found</h3>
                    <p className="text-clinical-muted">Try selecting a different category.</p>
                    <button
                        onClick={() => setActiveCategorySlug('all')}
                        className="mt-6 btn-secondary"
                    >
                        View All Medications
                    </button>
                </div>
            )}
        </div>
    );
}
