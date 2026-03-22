"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
const balconyImage = "/assets/hero-img-1.png";
const bedroomImage = "/assets/hero-img-2.png";
const studioImage = "/assets/hero-img-3.png";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full text-[#f59e0b] text-sm font-medium tracking-wide">
              {t.hero.badge}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold leading-[1.1] tracking-tight">
              {t.hero.title}{" "}
              <span className="text-[#fbbf24]">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-xl md:text-[22px] text-gray-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#investor-benefits">
                <Button
                  size="lg"
                  className="bg-[#f59e0b] hover:bg-[#d97706] text-white"
                >
                  {t.hero.ctaLearnMore} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/kontakt#waiting-list">
                <Button
                  size="lg"
                  className="bg-white text-[#1e3a8a] hover:bg-gray-100"
                >
                  {t.contact.joinWaitingList}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t.hero.fixedIncome}</div>
                  <div className="text-sm text-gray-400">
                    {t.hero.fixedIncomeSub}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t.hero.noWorries}</div>
                  <div className="text-sm text-gray-400">
                    {t.hero.noWorriesSub}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t.hero.monthlyPayout}</div>
                  <div className="text-sm text-gray-400">
                    {t.hero.monthlyPayoutSub}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-3xl blur-xl opacity-20"></div>

            {/* Image collage */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={balconyImage}
                  alt="Moderní balkón s výhledem na město"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
              </div>
              <div>
                <img
                  src={bedroomImage}
                  alt="Útulná ložnice"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
              </div>
              <div>
                <img
                  src={studioImage}
                  alt="Studio byt s kuchyňským koutem"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
