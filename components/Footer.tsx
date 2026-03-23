"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
const logoWhite = "/rent-back-white.svg";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logoWhite} alt="Rent|Back" className="h-12 mb-4" />
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/jak-to-funguje"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.nav.howItWorks}
              </Link>
              <Link
                href="/kalkulacka"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.nav.calculator}
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/zasady-ochrany-osobnich-udaju"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.footer.privacy}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{t.contact.emailValue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{t.contact.phoneValue}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{t.contact.addressValue}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Rent|Back. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
