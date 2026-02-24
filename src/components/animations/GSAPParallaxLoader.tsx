'use client';

import dynamic from 'next/dynamic';

const GSAPParallax = dynamic(
    () => import('@/components/animations/GSAPParallax'),
    { ssr: false }
);

export default function GSAPParallaxLoader() {
    return <GSAPParallax />;
}
