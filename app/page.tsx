import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { InvestorBenefitsSection } from "@/components/home/InvestorBenefitsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PropertyGallerySection } from "@/components/home/PropertyGallerySection";
import { FinancialSection } from "@/components/home/FinancialSection";
import { InvestmentModel } from "@/components/InvestmentModel";
import { CTASection } from "@/components/home/CTASection";
import { ChartSection } from "@/components/home/Chart";
import PropertyCatalogueSection from "@/components/home/PropertyCatalogueSection";

export const metadata: Metadata = {
  title: "Rent|Back - Investujte do nemovitostí bez starostí",
  description:
    "Inovativní model investování do nemovitostí s garantovaným výnosem a profesionální správou.",
};

export default function Page() {
  return (
    <div>
      <HeroSection />
      <InvestorBenefitsSection />
      <BenefitsSection />
      <PropertyGallerySection />
      <PropertyCatalogueSection />
      <FinancialSection />
      <ChartSection />
      <HowItWorksSection />
      <InvestmentModel />
      <CTASection />
    </div>
  );
}
