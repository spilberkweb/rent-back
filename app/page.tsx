import { HeroSection } from "@/components/home/HeroSection";
import { InvestorBenefitsSection } from "@/components/home/InvestorBenefitsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PropertyGallerySection } from "@/components/home/PropertyGallerySection";
import { FinancialSection } from "@/components/home/FinancialSection";
import { InvestmentModel } from "@/components/InvestmentModel";
import { CTASection } from "@/components/home/CTASection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <InvestorBenefitsSection />
      <BenefitsSection />
      <PropertyGallerySection />
      <FinancialSection />
      <HowItWorksSection />
      <InvestmentModel />
      <CTASection />
    </div>
  );
}
