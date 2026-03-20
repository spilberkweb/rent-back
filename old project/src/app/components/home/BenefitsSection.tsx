import { Card, CardContent } from "../ui/card";
import { DollarSign, Wrench, TrendingUp, FileCheck, Users, Building } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function BenefitsSection() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: DollarSign,
      title: t.benefits.fixedIncome,
      description: t.benefits.fixedIncomeDesc
    },
    {
      icon: Wrench,
      title: t.benefits.noManagement,
      description: t.benefits.noManagementDesc
    },
    {
      icon: TrendingUp,
      title: t.benefits.capitalAppreciation,
      description: t.benefits.capitalAppreciationDesc
    },
    {
      icon: FileCheck,
      title: t.benefits.security,
      description: t.benefits.securityDesc
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a]">
            {t.benefits.title} <span className="text-[#f59e0b]">{t.benefits.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-xl mb-2 text-[#1e3a8a]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}