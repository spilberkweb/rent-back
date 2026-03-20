import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import logoLight from "../../imports/RENTBACK_02_primary_light.svg";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const location = useLocation();
  const { t } = useLanguage();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoLight} alt="Rent|Back" className="h-20" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.home}
          </Link>
          <Link 
            to="/jak-to-funguje" 
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/jak-to-funguje") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.howItWorks}
          </Link>
          <Link 
            to="/kalkulacka" 
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/kalkulacka") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.calculator}
          </Link>
          <Link 
            to="/kontakt" 
            className={`hover:text-[#1e3a8a] transition-colors ${isActive("/kontakt") ? "text-[#1e3a8a] font-medium" : "text-gray-600"}`}
          >
            {t.nav.contact}
          </Link>
          <LanguageSelector />
        </nav>

        <Link to="/kontakt">
          <Button className="bg-[#1e3a8a] hover:bg-[#1e40af]">
            {t.contact.getInTouch}
          </Button>
        </Link>
      </div>
    </header>
  );
}