"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Calendar, Percent, BarChart3, Home } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinancialSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#f59e0b]/20 border border-[#f59e0b]/30 rounded-full text-[#fbbf24] text-sm mb-4">
            {t.financial.badge}
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            {t.financial.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.financial.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-7xl mx-auto">
          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#fbbf24] rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#fbbf24] mb-2">5 000 000 Kč</div>
              <h3 className="text-base mb-1">{t.financial.propertyPrice || "Cena nemovitosti"}</h3>
              <p className="text-xs text-gray-300">Modelový příklad pro jeden dům/byt</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#f59e0b] rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#fbbf24] mb-2">14 600 Kč</div>
              <h3 className="text-base mb-1">{t.financial.monthlyIncome}</h3>
              <p className="text-xs text-gray-300">{t.financial.monthlyIncomeDesc}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center mb-4">
                <Percent className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#fbbf24] mb-2">~3,5%</div>
              <h3 className="text-base mb-1">{t.financial.yearlyYield}</h3>
              <p className="text-xs text-gray-300">{t.financial.yearlyYieldDesc}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#fbbf24] mb-2">1,74M Kč</div>
              <h3 className="text-base mb-1">{t.financial.totalReturn}</h3>
              <p className="text-xs text-gray-300">{t.financial.totalReturnDesc}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#8b5cf6] rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#fbbf24] mb-2">+5,0M Kč</div>
              <h3 className="text-base mb-1">{t.financial.capitalGrowth}</h3>
              <p className="text-xs text-gray-300">{t.financial.capitalGrowthDesc}</p>
            </CardContent>
          </Card>
        </div>

        {/* Highlight that property stays with investor */}
        <div className="max-w-4xl mx-auto mb-12 p-8 bg-gradient-to-r from-[#f59e0b]/20 to-[#fbbf24]/20 border-2 border-[#f59e0b] rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#f59e0b] rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#fbbf24] mb-2">
                {t.financial.propertyOwnership || 'Po 10 letech je nemovitost Vaše!'}
              </h3>
              <p className="text-lg text-gray-200">
                {t.financial.propertyOwnershipDesc || 'Celkové zhodnocení: 1,74M Kč z nájmu + 5,0M Kč zhodnocení = 6,74M Kč zisk při investici 5M Kč'}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-300 mb-6">{t.financial.tryCalculator}</p>
          <Link href="/kalkulacka">
            <Button size="lg" className="bg-[#f59e0b] hover:bg-[#d97706] text-white">
              {t.financial.calculateReturn}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}