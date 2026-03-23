"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSelector } from "./LanguageSelector";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
const logoLight = "/imports/RENTBACK_02_primary_light.svg";

export function Header() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src={(logoLight as any).src || (logoLight as any)}
            alt="Rent|Back"
            className="h-20"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/jak-to-funguje"
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/jak-to-funguje") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.howItWorks}
          </Link>
          <Link
            href="/kalkulacka"
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/kalkulacka") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.calculator}
          </Link>
          <Link
            href="/kontakt"
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/kontakt") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSelector />
          <Link href="/kontakt">
            <Button className="bg-[#243B66] hover:bg-[#1c2e50] text-white rounded-lg h-11 px-8 text-base font-medium">
              {t.contact.getInTouch}
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex justify-end items-center gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-[#1e3a8a] text-[#1e3a8a]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[350px] p-0 border-l border-gray-100 shadow-2xl bg-white">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between mt-6">
                <SheetTitle className="text-xl font-bold text-[#1e3a8a] tracking-tight">Navigace</SheetTitle>
              </div>
              <div className="flex flex-col gap-2 p-4 flex-1">
                <Link onClick={() => setIsOpen(false)} href="/" className={`block px-4 py-3 rounded-lg text-lg transition-all ${isActive("/") ? "bg-[#1e3a8a]/5 text-[#1e3a8a] font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-[#1e3a8a]"}`}>
                  {t.nav.home}
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/jak-to-funguje" className={`block px-4 py-3 rounded-lg text-lg transition-all ${isActive("/jak-to-funguje") ? "bg-[#1e3a8a]/5 text-[#1e3a8a] font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-[#1e3a8a]"}`}>
                  {t.nav.howItWorks}
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/kalkulacka" className={`block px-4 py-3 rounded-lg text-lg transition-all ${isActive("/kalkulacka") ? "bg-[#1e3a8a]/5 text-[#1e3a8a] font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-[#1e3a8a]"}`}>
                  {t.nav.calculator}
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/kontakt" className={`block px-4 py-3 rounded-lg text-lg transition-all ${isActive("/kontakt") ? "bg-[#1e3a8a]/5 text-[#1e3a8a] font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-[#1e3a8a]"}`}>
                  {t.nav.contact}
                </Link>
              </div>
              
              <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    JAZYK / LANGUAGE
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { code: "cs", flag: "🇨🇿", label: "CZ" },
                      { code: "en", flag: "🇬🇧", label: "EN" },
                      { code: "it", flag: "🇮🇹", label: "IT" },
                    ].map((lang) => {
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any);
                          }}
                          className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                            language === lang.code
                              ? "bg-[#1e3a8a] border-[#1e3a8a] text-white font-bold shadow-md"
                              : "bg-white border-gray-200 text-gray-600 hover:border-[#1e3a8a]/30"
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm">{lang.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <Link onClick={() => setIsOpen(false)} href="/kontakt">
                  <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white shadow-lg shadow-[#1e3a8a]/20 text-lg h-14 rounded-xl transition-all hover:scale-[1.02]">
                    {t.contact.getInTouch}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
