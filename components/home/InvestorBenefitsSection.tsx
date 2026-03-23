"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Percent, PiggyBank, Calculator, BarChart3, Home } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function InvestorBenefitsSection() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: TrendingUp,
      title: t.investorBenefits.fixedYield,
      value: "~3,5%",
      description: t.investorBenefits.fixedYieldDesc,
      color: "from-[#f59e0b] to-[#d97706]"
    },
    {
      icon: PiggyBank,
      title: t.investorBenefits.monthlyCashflow,
      value: t.investorBenefits.monthlyCashflow.split(' ')[0],
      description: t.investorBenefits.monthlyCashflowDesc,
      color: "from-[#3b82f6] to-[#2563eb]"
    },
    {
      icon: BarChart3,
      title: t.investorBenefits.capitalGrowth,
      value: "5-8% p.a.",
      description: t.investorBenefits.capitalGrowthDesc,
      color: "from-[#8b5cf6] to-[#7c3aed]"
    },
    {
      icon: Calculator,
      title: t.investorBenefits.minimalCosts,
      value: t.investorBenefits.minimalCosts.split(' ')[0],
      description: t.investorBenefits.minimalCostsDesc,
      color: "from-[#10b981] to-[#059669]"
    },
    {
      icon: Home,
      title: t.investorBenefits.ownership,
      value: "100%",
      description: t.investorBenefits.ownershipDesc,
      color: "from-[#f59e0b] to-[#d97706]"
    },
    {
      icon: Percent,
      title: t.investorBenefits.totalReturn,
      value: "80-120%",
      description: t.investorBenefits.totalReturnDesc,
      color: "from-[#ef4444] to-[#dc2626]"
    }
  ];

  return (
    <section id="investor-benefits" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3b82f6]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full text-[#f59e0b] text-sm mb-4">
            {t.investorBenefits.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
            {t.investorBenefits.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.investorBenefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white overflow-hidden group"
              >
                <CardContent className="p-4 md:p-6">
                  <div className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${benefit.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
                    {benefit.value}
                  </div>
                  <h3 className="text-base md:text-xl mb-1 md:mb-2 text-[#1e3a8a] font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-2 border-[#f59e0b]/20 bg-gradient-to-br from-white to-[#f59e0b]/5 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-[#1e3a8a]">
                  {t.investorBenefits.exampleTitle}
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white/70 rounded-xl p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{t.investorBenefits.investment}</div>
                    <div className="text-2xl font-bold text-[#1e3a8a]">5,0 mil Kč</div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{t.investorBenefits.monthlyRent}</div>
                    <div className="text-2xl font-bold text-[#f59e0b]">14 500 Kč</div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{t.investorBenefits.rent10Years}</div>
                    <div className="text-2xl font-bold text-[#10b981]">1,74 mil Kč</div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">
                      {t.investorBenefits.propertyValue}
                    </div>
                    <div className="text-2xl font-bold text-[#3b82f6]">~10,0 mil Kč</div>
                    <div className="text-[10px] text-gray-400 font-normal leading-tight mt-1">{t.investorBenefits.appreciationRate}</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">{t.investorBenefits.totalProfit}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#ef4444] bg-clip-text text-transparent">
                    +6,74 mil Kč
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{t.investorBenefits.roi}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}