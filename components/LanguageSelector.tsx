"use client";

import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "cs" as const, label: "Czech", display: "CZ", flag: "🇨🇿" },
    { code: "en" as const, label: "English", display: "EN", flag: "🇬🇧" },
    { code: "it" as const, label: "Italian", display: "IT", flag: "🇮🇹" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-gray-600 hover:bg-gray-100/50 rounded-full px-3 h-9 transition-all duration-200 border border-gray-100 bg-white/50 backdrop-blur-sm shadow-sm"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-base leading-none">{currentLanguage.flag}</span>
            <span className="font-semibold text-xs tracking-wide">
              {currentLanguage.display}
            </span>
          </div>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border-gray-100 shadow-xl animate-in fade-in zoom-in-95 duration-200"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors ${
              language === lang.code
                ? "bg-amber-50 text-amber-600 font-semibold"
                : "text-gray-600 hover:bg-slate-50 hover:text-[#1e3a8a]"
            }`}
          >
            <span className="text-lg leading-none">{lang.flag}</span>
            <span className="flex-1 text-sm">{lang.label}</span>
            {language === lang.code && (
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
