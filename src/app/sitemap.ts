import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/products';

const SITE_URL = 'https://pharmastore.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const productSlugs = getAllSlugs();

    const productPages = productSlugs.map((slug) => ({
        url: `${SITE_URL}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const staticPages = [
        '/products',
        '/cart',
        '/checkout',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/shipping',
    ].map((path) => ({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        ...staticPages,
        ...productPages,
    ];
}
