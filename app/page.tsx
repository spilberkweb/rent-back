import { HeroSection } from "@/components/home/HeroSection";
import { InvestorBenefitsSection } from "@/components/home/InvestorBenefitsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PropertyGallerySection } from "@/components/home/PropertyGallerySection";
import { FinancialSection } from "@/components/home/FinancialSection";
import { InvestmentModel } from "@/components/InvestmentModel";
import { CTASection } from "@/components/home/CTASection";
import { ChartSection } from "@/components/home/Chart";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <InvestorBenefitsSection />
      <BenefitsSection />
      <PropertyGallerySection />
      <FinancialSection />
      <ChartSection />
      <HowItWorksSection />
      <InvestmentModel />
      <CTASection />
    </div>
  );
}
