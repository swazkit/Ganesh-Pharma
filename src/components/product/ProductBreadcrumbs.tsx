import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface ProductBreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function ProductBreadcrumbs({ items }: ProductBreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 flex-wrap text-sm">
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        {index > 0 && (
                            <svg className="w-3.5 h-3.5 text-clinical-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        )}
                        {index === items.length - 1 ? (
                            <span className="font-medium text-pharma-700">{item.label}</span>
                        ) : (
                            <Link href={item.href} className="text-clinical-muted hover:text-pharma-600 transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
