'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollParallaxProps {
    children: ReactNode;
    speed?: number; // How fast the element moves relative to scroll (e.g., 0.5 is half speed, -0.5 moves backwards)
    className?: string;
}

export default function ScrollParallax({ children, speed = 0.2, className = '' }: ScrollParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    // We track the scroll progress relative to this specific element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    // Transform scroll progress (0 to 1) into a Y translation based on speed
    // negative speeds make it move slower than scroll (parallax depth back)
    // positive speeds make it move faster than scroll (parallax pop out)
    const y = useTransform(scrollYProgress, [0, 1], [150 * speed, -150 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}
