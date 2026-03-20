import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'cs' as const, label: 'CZ', flag: '🇨🇿' },
    { code: 'en' as const, label: 'EN', flag: '🇬🇧' },
    { code: 'it' as const, label: 'IT', flag: '🇮🇹' },
  ];

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-gray-600" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-sm ${
            language === lang.code
              ? 'bg-[#f59e0b] text-white hover:bg-[#d97706]'
              : 'text-gray-600 hover:text-[#1e3a8a]'
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
