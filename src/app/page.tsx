import HeroSection from '@/components/home/HeroSection';
import BestSellers from '@/components/home/BestSellers';
import ConditionNav from '@/components/home/ConditionNav';
import TrustSection from '@/components/home/TrustSection';
import FAQSection from '@/components/home/FAQSection';
import EducationalContent from '@/components/home/EducationalContent';
import GSAPParallaxLoader from '@/components/animations/GSAPParallaxLoader';

export default function HomePage() {
  return (
    <>
      {/* Hero – server rendered with GSAP decorative overlay */}
      <div className="relative">
        <HeroSection />
        <GSAPParallaxLoader />
      </div>

      {/* Best Sellers – server rendered grid */}
      <BestSellers />

      {/* Condition Navigation – server rendered */}
      <ConditionNav />

      {/* Trust Section */}
      <TrustSection />

      {/* FAQ with structured data */}
      <FAQSection />

      {/* Educational content – below fold, SEO rich */}
      <EducationalContent />
    </>
  );
}
