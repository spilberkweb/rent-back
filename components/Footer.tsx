"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
const logoWhite = "/rent-back-white.svg";

export function Footer() {
  const { t, language } = useLanguage();

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

        <div className="border-t border-gray-800 mt-12 pt-12 pb-8">
          <div className="max-w-5xl mx-auto text-center space-y-8 text-gray-400 text-[11px] leading-relaxed opacity-80">
            <p>{t.footer.disclaimer.spilberk}</p>
            <p>{t.footer.disclaimer.avant}</p>
            <p>
              {language === "cs" ? (
                <>
                  Sdělení klíčových informací fondu (KID) je k dispozici na{" "}
                  <a
                    href="https://www.avantfunds.cz/cz/informacni-povinnost/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    https://www.avantfunds.cz/cz/informacni-povinnost/
                  </a>
                  . V listinné podobě lze uvedené informace získat v sídle
                  společnosti AVANT investiční společnost, a.s., City Tower,
                  Hvězdova 1716/2b, 140 00 Praha 4 - Nusle. Další důležité
                  informace pro investory na:{" "}
                  <a
                    href="https://www.avantfunds.cz/cz/dulezite-informace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    https://www.avantfunds.cz/cz/dulezite-informace/
                  </a>
                  .
                </>
              ) : (
                t.footer.disclaimer.kid
              )}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Rent|Back. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
