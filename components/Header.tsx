"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSelector } from "./LanguageSelector";
import { Button } from "./ui/button";
const logoLight = "/imports/RENTBACK_02_primary_light.svg";

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();

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
          <LanguageSelector />
        </nav>

        <Link href="/kontakt">
          <Button className="bg-[#1e3a8a] hover:bg-[#1e40af]">
            {t.contact.getInTouch}
          </Button>
        </Link>
      </div>
    </header>
  );
}
