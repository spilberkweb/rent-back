"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1e3a8a]">
          {t.cta.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.cta.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/kalkulacka">
            <Button size="lg" className="w-full sm:w-auto bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 h-14 text-lg shadow-lg shadow-orange-200 hover:shadow-xl transition-all">
              <Calculator className="mr-2 h-6 w-6" />
              {t.cta.calculate}
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 h-14 text-lg transition-all">
              {t.cta.contact} <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}