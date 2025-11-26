"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';


const HeaderLink = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground/60'} ${className}`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  const navigationItems = [
    { name: t("nav.home"), href: "/" },
    {
      name: t("nav.products"),
      href: "/products",
      subItems: [
        { name: "TRACKER - Surface Tensiometer", href: "/products/trackertensiometer" },
        { name: "FOAMSCAN - Foam Analyzer", href: "/products/foamscan" },
        { name: "BubbleStatistics Software", href: "/products/bubbleanalyser" },
        { name: "FOAMSCAN - High Temperature Mid Pressure", href: "/products/foamscanhtmp" },
        { name: "TRACKER - High Temperature-Pressure", href: "/products/trackerhtp" },
        { name: "JETSCAN - Defoamer Tester", href: "/products/jetscan" },
      ],
    },
    {
      name: t("nav.applications"),
      href: "/applications",
      subItems: [
        { name: t("nav.applications_sub.dailychemicals"), href: "/applications/dailychemicals" },
        { name: t("nav.applications_sub.foodbeverages"), href: "/applications/foodbeverages" },
        { name: t("nav.applications_sub.lifesciences"), href: "/applications/lifesciences" },
        { name: t("nav.applications_sub.oilgas"), href: "/applications/oilgas" }
      ],
    },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.news"), href: "/news" },
    { name: t("nav.careers"), href: "/careers" },
  ];

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Teclis Logo"
            width={160}
            height={40}
            className="object-contain h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                setHoveredMenu(item.name);
              }}
              onMouseLeave={() => {
                hoverTimeout.current = setTimeout(() => setHoveredMenu(null), 300); // 300ms délai
              }}
            >
              <HeaderLink href={item.href}>
                {item.name}
              </HeaderLink>
              {item.subItems && hoveredMenu === item.name && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-md border bg-background shadow-md">
                  {item.subItems.map((sub) => (
                    <HeaderLink
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-gray-50"
                    >
                      {sub.name}
                    </HeaderLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Language Switcher & CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button className="btn-hero" size="sm">
              {t("nav.contact")}
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between items-center">
                  <HeaderLink
                    href={item.href}
                    className="block py-2 text-sm font-medium text-foreground/60 hover:text-primary"
                  >
                    {item.name}
                  </HeaderLink>
                  {item.subItems && (
                    <button
                      className="p-1"
                      onClick={() => setOpenSubMenu(openSubMenu === item.name ? null : item.name)}
                    >
                      <ChevronDown size={16} className={`transition-transform ${openSubMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {item.subItems && openSubMenu === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.subItems.map((sub) => (
                      <HeaderLink
                        key={sub.name}
                        href={sub.href}
                        className="block py-1 text-sm text-foreground/70 hover:text-primary"
                      >
                        {sub.name}
                      </HeaderLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <LanguageSwitcher />
              <Button className="btn-hero w-full">
                {t('nav.contact')}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
