import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getProductBySlug } from '@/lib/products';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import ProductDetail from '@/components/product/ProductDetail';
import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';

// ISR: revalidate every hour
export const revalidate = 3600;

// Static generation for all product pages
export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata per product
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return { title: 'Product Not Found' };
    }

    return {
        title: `${product.name} — Buy ${product.genericName} ${product.dosage} Online`,
        description: product.description,
        keywords: [
            product.name,
            product.genericName,
            `buy ${product.genericName} online`,
            `${product.genericName} ${product.dosage}`,
            product.category,
            'online pharmacy',
            'prescription medication',
        ],
        openGraph: {
            title: `${product.name} — ${product.price.toFixed(2)} USD | PharmaStore`,
            description: product.description,
            url: `https://pharmastore.com/products/${product.slug}`,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 600,
                    alt: product.name,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${product.name} | PharmaStore`,
            description: product.description,
            images: [product.image],
        },
        alternates: {
            canonical: `https://pharmastore.com/products/${product.slug}`,
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: product.category, url: `/#conditions` },
        { name: product.name, url: `/products/${product.slug}` },
    ];

    const productSchema = generateProductSchema(product);
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

    return (
        <div className="pt-24 sm:pt-28 pb-20">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <ProductBreadcrumbs
                    items={breadcrumbItems.map((item) => ({
                        label: item.name,
                        href: item.url,
                    }))}
                />

                {/* Product Detail */}
                <ProductDetail product={product} />
            </div>
        </div>
    );
}
