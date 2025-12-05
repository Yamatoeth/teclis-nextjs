"use client";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English', flag: '' },
    { code: 'fr', name: 'Français', flag: '' },
    { code: 'es', name: 'Español', flag: '' },
    { code: 'de', name: 'Deutsch', flag: '' },
    { code: 'ko', name: '한국어', flag: '' },
    { code: 'zh', name: '中文', flag: '' },
    { code: 'ja', name: '日本語', flag: '' },
    { code: 'vi', name: 'Tiếng Việt', flag: '' },
    { code: 'th', name: 'ไทย', flag: '' },
    { code: 'pt', name: 'Portuguese', flag: ''},
    { code: 'it', name: 'Italian', flag:''}
  ];

  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  const changeLanguage = (langCode: string) => {
    router.push(pathname, { locale: langCode });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe size={18} />
          <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.name}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background z-50">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`cursor-pointer ${
              locale === language.code ? 'bg-accent' : ''
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
