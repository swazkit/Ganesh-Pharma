import { Metadata } from 'next';
import { getAllProducts, getCategories } from '@/lib/products';
import ProductCatalog from '@/components/product/ProductCatalog';

export const metadata: Metadata = {
    title: 'All Medications',
    description: 'Browse our complete catalog of FDA-approved prescription and over-the-counter medications.',
};

export default function ProductsPage() {
    const products = getAllProducts();
    const categories = getCategories();

    return (
        <div className="bg-clinical-bg min-h-screen">
            <ProductCatalog products={products} categories={categories} />
        </div>
    );
}
