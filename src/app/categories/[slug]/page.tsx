import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsByCategory, getCategories } from '@/lib/products';
import ProductCatalog from '@/components/product/ProductCatalog';

export const revalidate = 86400; // 24 hours ISR

export async function generateStaticParams() {
    const categories = getCategories();
    return categories.map((category) => ({
        slug: category.slug, // It's already slugified in getCategories
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    const categories = getCategories();
    const category = categories.find(c => c.slug === slug);

    if (!category) {
        return { title: 'Category Not Found' };
    }

    return {
        title: `${category.name} Medications | PharmaStore`,
        description: `Browse licensed prescription and over-the-counter medications for ${category.name}.`,
        alternates: {
            canonical: `https://pharmastore.com/categories/${slug}`,
        },
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const categories = getCategories();

    const activeCategory = categories.find(cat => cat.slug === slug);

    if (!activeCategory) {
        notFound();
    }

    const products = getProductsByCategory(activeCategory.slug);

    return (
        <div className="bg-clinical-bg min-h-screen">
            <ProductCatalog
                products={products}
                categories={categories}
                initialCategorySlug={activeCategory.slug}
            />
        </div>
    );
}
