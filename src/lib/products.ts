import { Product } from '@/types/product';
import productsData from '@/data/products.json';

const products: Product[] = productsData as Product[];

export function getAllProducts(): Product[] {
    return products;
}

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getBestSellers(): Product[] {
    return products.filter((p) => p.tags.includes('best-seller'));
}

export function getProductsByCategory(categorySlug: string): Product[] {
    return products.filter((p) => p.categorySlug === categorySlug);
}

export function getAllSlugs(): string[] {
    return products.map((p) => p.slug);
}

export function getCategories() {
    const categoryMap = new Map<string, { name: string; slug: string; count: number }>();
    products.forEach((p) => {
        const existing = categoryMap.get(p.categorySlug);
        if (existing) {
            existing.count++;
        } else {
            categoryMap.set(p.categorySlug, {
                name: p.category,
                slug: p.categorySlug,
                count: 1,
            });
        }
    });
    return Array.from(categoryMap.values());
}
