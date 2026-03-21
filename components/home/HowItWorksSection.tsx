"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, FileSignature, Building2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function HowItWorksSection() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      icon: Search,
      title: t.howItWorks.step1,
      description: t.howItWorks.step1Desc
    },
    {
      number: "02",
      icon: FileSignature,
      title: t.howItWorks.step2,
      description: t.howItWorks.step2Desc
    },
    {
      number: "03",
      icon: Building2,
      title: t.howItWorks.step3,
      description: t.howItWorks.step3Desc
    },
    {
      number: "04",
      icon: TrendingUp,
      title: t.howItWorks.step4,
      description: t.howItWorks.step4Desc
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
            {t.howItWorks.title} <span className="text-[#f59e0b]">{t.howItWorks.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 pt-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative bg-white overflow-visible border border-gray-200 hover:border-[#f59e0b] hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md z-10">
                    {step.number}
                  </div>
                  
                  <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-[#1e3a8a]">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}