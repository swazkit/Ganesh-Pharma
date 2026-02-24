'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
};

export default function HeroContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl relative z-10 pt-8 sm:pt-0"
        >
            {/* Trust badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/70 backdrop-blur-sm border border-pharma-200/50 shadow-sm mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold text-pharma-700 tracking-wide uppercase">Licensed & Verified Pharmacy</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 variants={itemVariants} className="heading-font text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-pharma-950 mb-5 sm:mb-6 drop-shadow-sm">
                Licensed Prescription Medications Delivered{' '}
                <span className="gradient-text-pharma block mt-1 sm:mt-2">Securely</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-clinical-muted max-w-2xl leading-relaxed mb-8 sm:mb-10">
                Order from verified, state-licensed pharmacies with complete transparency.
                Every medication is FDA-approved, pharmacist-verified, and shipped directly
                to your door in tamper-proof packaging.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
                <a href="#best-sellers" className="btn-primary shimmer shadow-xl shadow-pharma-500/20 text-center justify-center w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Browse Medications
                </a>
                <a href="#trust" className="btn-secondary bg-white/80 hover:bg-white backdrop-blur-md text-center justify-center w-full sm:w-auto">
                    <svg className="w-5 h-5 mr-2 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Verify Our License
                </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
                {[
                    { value: '50K+', label: 'Patients Served' },
                    { value: '99.8%', label: 'Order Accuracy' },
                    { value: '4.9★', label: 'Patient Rating' },
                ].map((stat) => (
                    <div key={stat.label} className="group cursor-default">
                        <p className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold text-pharma-800 group-hover:text-pharma-600 transition-colors">{stat.value}</p>
                        <p className="text-[10px] sm:text-xs lg:text-sm text-clinical-muted mt-0.5 font-medium">{stat.label}</p>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
