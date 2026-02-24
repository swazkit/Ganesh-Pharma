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

            if (!containerRef.current) return;

            ctx = gsap.context(() => {
                const elements = containerRef.current!.querySelectorAll('.parallax-el');

                // 1. Idle floating animation
                elements.forEach((el, i) => {
                    const direction = i % 2 === 0 ? 1 : -1;
                    gsap.to(el, {
                        y: `+=${direction * 15}`,
                        rotation: `+=${direction * 3}`,
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

                    const normalizedX = (clientX - centerX) / centerX;
                    const normalizedY = (clientY - centerY) / centerY;

                    elements.forEach((el) => {
                        const depth = parseFloat(el.getAttribute('data-depth') || '0.2');

                        gsap.to(el, {
                            x: normalizedX * 80 * depth,
                            y: normalizedY * 80 * depth,
                            rotateX: -normalizedY * 20 * depth,
                            rotateY: normalizedX * 20 * depth,
                            duration: 1.5,
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

        const timer = setTimeout(initGSAP, 600);

        return () => {
            clearTimeout(timer);
            ctx?.revert();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden [perspective:1200px]"
            aria-hidden="true"
        >
            {/* Soft Glowing Abstract Orbs (Molecule/Atom feel) */}
            <div data-depth="0.1" className="parallax-el absolute top-[20%] right-[15%] w-96 h-96 rounded-full bg-gradient-to-tr from-pharma-200/40 to-trust-200/40 blur-[80px] opacity-60 [transform-style:preserve-3d]" />
            <div data-depth="0.15" className="parallax-el absolute bottom-[10%] right-[30%] w-64 h-64 rounded-full bg-gradient-to-br from-accent-gold/20 to-pharma-300/30 blur-[60px] opacity-50 [transform-style:preserve-3d]" />

            {/* Floating Glassmorphic UI Card 1 - Vital Signs */}
            <div data-depth="0.4" className="parallax-el absolute top-[25%] right-[10%] p-5 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-2xl shadow-pharma-500/15 rotate-3 flex flex-col gap-3 z-20 [transform-style:preserve-3d] w-48">
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-trust-100 flex items-center justify-center text-trust-600 shadow-inner">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-trust-800 uppercase tracking-wider mb-1">System Status</p>
                    <p className="text-sm font-extrabold text-pharma-900">Optimal</p>
                </div>
                {/* Mini decorative chart */}
                <div className="flex items-end gap-1 h-8 mt-1 opacity-70">
                    <div className="w-full bg-pharma-200 rounded-t-sm h-[40%]" />
                    <div className="w-full bg-pharma-300 rounded-t-sm h-[70%]" />
                    <div className="w-full bg-pharma-400 rounded-t-sm h-[50%]" />
                    <div className="w-full bg-pharma-500 rounded-t-sm h-[90%]" />
                    <div className="w-full bg-trust-400 rounded-t-sm h-[60%]" />
                    <div className="w-full bg-trust-500 rounded-t-sm h-[100%]" />
                </div>
            </div>

            {/* Floating Glassmorphic UI Card 2 - Pharmacist Verified */}
            <div data-depth="0.6" className="parallax-el absolute top-[60%] right-[25%] p-4 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white/60 shadow-xl shadow-trust-500/20 -rotate-6 flex items-center gap-4 z-30 [transform-style:preserve-3d]">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pharma-400 to-pharma-600 flex items-center justify-center text-white shadow-lg shadow-pharma-500/30">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />
                    </div>
                </div>
                <div className="pr-4">
                    <p className="text-xs font-extrabold text-pharma-950 mb-0.5">Pharmacist Verified</p>
                    <p className="text-[10px] font-semibold text-clinical-muted">Clinical Excellence</p>
                </div>
            </div>

            {/* Floating Glassmorphic UI Card 3 - Quick Delivery */}
            <div data-depth="0.3" className="parallax-el absolute top-[15%] right-[38%] p-3.5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 shadow-xl shadow-pharma-900/5 rotate-12 flex items-center gap-3 z-10 [transform-style:preserve-3d]">
                <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold shadow-inner border border-accent-gold/20">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                </div>
                <div className="pr-2">
                    <p className="text-[11px] font-bold text-pharma-900">2-Day Shipping</p>
                </div>
            </div>

            {/* Subtle floating medical cross (Foreground) */}
            <div data-depth="0.8" className="parallax-el absolute bottom-[20%] right-[12%] w-16 h-16 rounded-3xl bg-gradient-to-br from-trust-400/80 to-trust-500/60 shadow-2xl shadow-trust-500/30 rotate-12 flex items-center justify-center z-40 backdrop-blur-md border border-white/40 [transform-style:preserve-3d]">
                <svg className="w-8 h-8 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 10h-5V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5H5a1 1 0 00-1 1v2a1 1 0 001 1h5v5a1 1 0 001 1h2a1 1 0 001-1v-5h5a1 1 0 001-1v-2a1 1 0 00-1-1z" />
                </svg>
            </div>
        </div>
    );
}
