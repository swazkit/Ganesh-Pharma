'use client';

import { useEffect, useRef } from 'react';

export default function GSAPParallax() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | undefined;
        let loaded = false;

        async function initGSAP() {
            if (loaded) return;
            loaded = true;

            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);

            if (!containerRef.current) return;

            ctx = gsap.context(() => {
                const elements = containerRef.current!.querySelectorAll('.parallax-el');

                // 1. Scroll Parallax
                elements.forEach((el, i) => {
                    const depth = parseFloat(el.getAttribute('data-depth') || '0.2');
                    const direction = i % 2 === 0 ? 1 : -1;

                    // Vertical scroll movement
                    gsap.to(el, {
                        y: direction * 150 * depth,
                        rotation: direction * 15,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1.5,
                        },
                    });

                    // Idle floating animation
                    gsap.to(el, {
                        y: `+=${direction * 20}`,
                        rotation: `+=${direction * 5}`,
                        duration: 3 + (i * 0.5),
                        ease: 'sine.inOut',
                        yoyo: true,
                        repeat: -1,
                    });
                });

                // 2. Interactive Mouse 2.5D Parallax
                const onMouseMove = (e: MouseEvent) => {
                    const { clientX, clientY } = e;
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;

                    // Calculate distance from center (-1 to 1)
                    const normalizedX = (clientX - centerX) / centerX;
                    const normalizedY = (clientY - centerY) / centerY;

                    elements.forEach((el) => {
                        const depth = parseFloat(el.getAttribute('data-depth') || '0.2');

                        // Move elements based on depth and mouse position
                        gsap.to(el, {
                            x: normalizedX * 50 * depth,
                            y: normalizedY * 50 * depth,
                            rotateX: -normalizedY * 15 * depth,
                            rotateY: normalizedX * 15 * depth,
                            duration: 1,
                            ease: 'power2.out',
                        });
                    });
                };

                window.addEventListener('mousemove', onMouseMove);

                return () => {
                    window.removeEventListener('mousemove', onMouseMove);
                };
            }, containerRef);
        }

        const timer = setTimeout(initGSAP, 800);

        return () => {
            clearTimeout(timer);
            ctx?.revert();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden [perspective:1000px]"
            aria-hidden="true"
        >
            {/* Background Medical Cross */}
            <div data-depth="0.1" className="parallax-el absolute top-[20%] right-[15%] w-32 h-32 rounded-[2rem] bg-pharma-100/20 backdrop-blur-sm border border-pharma-200/20 rotate-12 flex items-center justify-center opacity-50">
                <svg className="w-16 h-16 text-pharma-300/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 10h-5V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5H5a1 1 0 00-1 1v2a1 1 0 001 1h5v5a1 1 0 001 1h2a1 1 0 001-1v-5h5a1 1 0 001-1v-2a1 1 0 00-1-1z" />
                </svg>
            </div>

            {/* Premium Glassmorphic Card 1 - FDA Approved */}
            <div data-depth="0.4" className="parallax-el absolute top-[55%] right-[8%] p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-2xl shadow-pharma-500/10 rotate-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-trust-100 flex items-center justify-center text-trust-600">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>
                </div>
                <div className="pr-2">
                    <p className="text-[10px] font-bold text-trust-800 uppercase tracking-wider mb-0.5">FDA Approved</p>
                    <p className="text-xs font-semibold text-pharma-900">100% Verified</p>
                </div>
            </div>

            {/* Glowing Capsule - Foreground */}
            <div data-depth="0.6" className="parallax-el absolute top-[25%] right-[28%] w-16 h-16 rounded-full bg-gradient-to-tr from-pharma-400 to-pharma-300 shadow-lg shadow-pharma-400/30 -rotate-12 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.5 20.5A7 7 0 1020.5 10.5L10.5 20.5z" />
                    <path d="M10.5 20.5l-7-7a7 7 0 119.9-9.9l7 7" />
                    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
                </svg>
            </div>

            {/* Premium Glassmorphic Card 2 - Delivery */}
            <div data-depth="0.3" className="parallax-el absolute top-[12%] right-[45%] p-3.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-xl shadow-trust-500/5 rotate-[-8deg] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <div className="pr-1">
                    <p className="text-[11px] font-bold text-pharma-900">Discreet Shipping</p>
                </div>
            </div>

            {/* Background Medical Leaf / Natural */}
            <div data-depth="0.15" className="parallax-el absolute top-[65%] right-[32%] w-20 h-20 rounded-[2rem] bg-trust-50/40 backdrop-blur-sm border border-trust-200/30 -rotate-15 flex items-center justify-center opacity-60">
                <svg className="w-10 h-10 text-trust-400/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0114 9l1.87-1.87a2.83 2.83 0 014 4L18 13v1a7 7 0 01-7 7v-1z" />
                    <path d="M18 13l-4-4" />
                </svg>
            </div>

            {/* Foreground floating DNA */}
            <div data-depth="0.8" className="parallax-el absolute bottom-[15%] right-[10%] w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-gold/80 to-accent-gold/60 shadow-lg shadow-accent-gold/20 rotate-12 flex items-center justify-center">
                <span className="text-2xl drop-shadow-md">🧬</span>
            </div>
        </div>
    );
}
