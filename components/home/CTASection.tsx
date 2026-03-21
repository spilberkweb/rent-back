"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl mb-4">
          {t.cta.title}
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          {t.cta.subtitle}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/kalkulacka">
            <Button size="lg" className="bg-[#f59e0b] hover:bg-[#d97706] text-white">
              <Calculator className="mr-2 h-5 w-5" />
              {t.cta.calculate}
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3a8a] transition-colors">
              {t.cta.contact} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}