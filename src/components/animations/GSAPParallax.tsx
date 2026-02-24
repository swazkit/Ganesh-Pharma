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
                const pills = containerRef.current!.querySelectorAll('.floating-pill');

                pills.forEach((pill, i) => {
                    const speed = 0.3 + (i * 0.15);
                    const direction = i % 2 === 0 ? 1 : -1;

                    gsap.to(pill, {
                        y: direction * 80 * speed,
                        rotation: direction * 10,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1.5,
                        },
                    });

                    // Floating animation
                    gsap.to(pill, {
                        y: `+=${direction * 15}`,
                        duration: 2.5 + (i * 0.5),
                        ease: 'sine.inOut',
                        yoyo: true,
                        repeat: -1,
                    });
                });
            }, containerRef);
        }

        // Delay loading to not impact LCP
        const timer = setTimeout(initGSAP, 1000);

        return () => {
            clearTimeout(timer);
            ctx?.revert();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            {/* Decorative floating pills */}
            <div className="floating-pill absolute top-[15%] right-[8%] w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-pharma-200/30 backdrop-blur-sm border border-pharma-300/20 rotate-12 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl">💊</span>
            </div>
            <div className="floating-pill absolute top-[30%] right-[25%] w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-trust-200/30 backdrop-blur-sm border border-trust-300/20 -rotate-6 flex items-center justify-center">
                <span className="text-xl sm:text-3xl">🩺</span>
            </div>
            <div className="floating-pill absolute top-[55%] right-[12%] w-14 h-14 sm:w-18 sm:h-18 rounded-xl bg-pharma-100/40 backdrop-blur-sm border border-pharma-200/20 rotate-6 flex items-center justify-center">
                <span className="text-xl sm:text-3xl">🧬</span>
            </div>
            <div className="floating-pill absolute top-[10%] right-[40%] w-10 h-10 sm:w-16 sm:h-16 rounded-lg bg-accent-gold/10 backdrop-blur-sm border border-accent-gold/20 rotate-45 flex items-center justify-center">
                <span className="text-lg sm:text-2xl rotate-[-45deg]">⚕️</span>
            </div>
            <div className="floating-pill absolute top-[65%] right-[35%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pharma-300/20 backdrop-blur-sm border border-pharma-400/10 -rotate-12 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">🏥</span>
            </div>
        </div>
    );
}
