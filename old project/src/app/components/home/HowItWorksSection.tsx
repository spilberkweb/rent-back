import { Card, CardContent } from "../ui/card";
import { Search, FileSignature, Building2, TrendingUp } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative border-2 hover:border-[#f59e0b] transition-colors">
                <CardContent className="p-6">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mb-4 mt-4">
                    <Icon className="w-6 h-6 text-[#f59e0b]" />
                  </div>
                  <h3 className="text-xl mb-2 text-[#1e3a8a]">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}