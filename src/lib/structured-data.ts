import { Product } from '@/types/product';

const SITE_URL = 'https://pharmastore.com';

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'PharmaStore',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: 'Licensed online pharmacy delivering prescription and over-the-counter medications securely to your door.',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-800-PHARMA',
            contactType: 'customer service',
            availableLanguage: ['English'],
        },
        sameAs: [
            'https://twitter.com/pharmastore',
            'https://facebook.com/pharmastore',
        ],
    };
}

export function generateProductSchema(product: Product) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `${SITE_URL}${product.image}`,
        sku: product.sku,
        brand: {
            '@type': 'Brand',
            name: product.manufacturer,
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating.toString(),
            reviewCount: product.reviewCount.toString(),
        },
        offers: {
            '@type': 'Offer',
            url: `${SITE_URL}/products/${product.slug}`,
            priceCurrency: product.currency,
            price: product.price.toString(),
            availability: product.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            seller: {
                '@type': 'Organization',
                name: 'PharmaStore',
            },
        },
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateBreadcrumbSchema(
    items: { name: string; url: string }[]
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}

export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PharmaStore',
        url: SITE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };
}
