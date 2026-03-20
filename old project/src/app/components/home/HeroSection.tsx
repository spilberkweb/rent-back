import { Button } from "../ui/button";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
const balconyImage = "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80";
const bedroomImage = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80";
const studioImage = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80";

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#f59e0b]/20 border border-[#f59e0b]/30 rounded-full text-[#fbbf24] text-sm">
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              {t.hero.title} <span className="text-[#fbbf24]">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/kalkulacka">
                <Button size="lg" className="bg-[#f59e0b] hover:bg-[#d97706] text-white">
                  {t.hero.ctaLearnMore} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100">
                  {t.contact.joinWaitingList}
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t.hero.fixedIncome}</div>
                  <div className="text-sm text-gray-400">{t.hero.fixedIncomeSub}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t.hero.noWorries}</div>
                  <div className="text-sm text-gray-400">{t.hero.noWorriesSub}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{t.hero.monthlyPayout}</div>
                  <div className="text-sm text-gray-400">{t.hero.monthlyPayoutSub}</div>
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