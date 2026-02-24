import HeroContent from './HeroContent';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden gradient-pharma-soft min-h-[95vh] flex items-center">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-[-10%] sm:-top-20 -right-20 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-pharma-200/30 blur-[100px]" />
                <div className="absolute -bottom-20 left-[-10%] sm:-left-20 w-80 sm:w-[600px] h-80 sm:h-[600px] rounded-full bg-trust-200/20 blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] rounded-full bg-pharma-100/20 blur-[150px]" />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pb-20">
                <HeroContent />
            </div>
        </section>
    );
}
