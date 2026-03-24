"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';

const HeaderLink = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + '/');

  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group ${isActive ? 'text-primary' : 'text-foreground/70'} ${className}`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: t("nav.home"), href: "/" },
    {
      name: t("nav.products"),
      href: "/products",
      subItems: [
        { name: "TRACKER™ - Surface Tensiometer", href: "/products/trackertensiometer", description: "Precision surface tension measurement" },
        { name: "FOAMSCAN™ - Foam Analyzer", href: "/products/foamscan", description: "Advanced foam characterization" },
        { name: "BubbleStatistics™ Software", href: "/products/bubbleanalyser", description: "Intelligent bubble analysis" },
        { name: "FOAMSCAN™ - HTMP", href: "/products/foamscanhtmp", description: "High temperature & pressure" },
        { name: "TRACKER™ - HTP", href: "/products/trackerhtp", description: "Extreme conditions testing" },
        { name: "JETSCAN™ - Defoamer Tester", href: "/products/jetscan", description: "Defoamer performance analysis" },
      ],
    },
    {
      name: t("nav.applications"),
      href: "/applications",
      subItems: [
        { name: t("nav.applications_sub.dailychemicals"), href: "/applications/dailychemicals", description: "Cosmetics & personal care" },
        { name: t("nav.applications_sub.foodbeverages"), href: "/applications/foodbeverages", description: "Food science & brewing" },
        { name: t("nav.applications_sub.lifesciences"), href: "/applications/lifesciences", description: "Pharma & biotech" },
        { name: t("nav.applications_sub.oilgas"), href: "/applications/oilgas", description: "Petroleum & energy" }
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
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5' 
        : 'bg-transparent'
    }`}>
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image
              src="/images/logo.webp"
              alt="Teclis Logo"
              width={160}
              height={40}
              quality={60}
              className="object-contain h-10 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <div
              key={item.name}
              className="relative px-4 py-2"
              onMouseEnter={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                setHoveredMenu(item.name);
              }}
              onMouseLeave={() => {
                hoverTimeout.current = setTimeout(() => setHoveredMenu(null), 200);
              }}
            >
              <HeaderLink href={item.href}>
                <span className="flex items-center gap-1">
                  {item.name}
                  {item.subItems && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${hoveredMenu === item.name ? 'rotate-180' : ''}`} 
                    />
                  )}
                </span>
              </HeaderLink>
              
              {/* Dropdown menu */}
              {item.subItems && (
                <div className={`absolute left-0 top-full pt-2 transition-all duration-300 ${
                  hoveredMenu === item.name 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="w-72 rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-xl shadow-primary/10 overflow-hidden">
                    {/* Gradient top border */}
                    <div className="h-0.5 bg-linear-to-r from-primary via-accent to-primary" />
                    
                    <div className="p-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="group/item flex flex-col px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/5"
                        >
                          <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                            {sub.name}
                          </span>
                          {'description' in sub && (
                            <span className="text-xs text-muted-foreground mt-0.5">
                              {sub.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                    
                    {/* View all link */}
                    <div className="border-t border-border/50 p-2">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium text-primary hover:bg-primary/5 transition-colors group/all"
                      >
                        <span>View all {item.name.toLowerCase()}</span>
                        <ArrowRight size={14} className="group-hover/all:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Theme Toggle, Language Switcher & CTA Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <Link href="/contact">
            <Button className="btn-hero group" size="sm">
              <span>{t("nav.contact")}</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-xl hover:bg-secondary/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} />
            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
        isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-border/50 bg-card/95 backdrop-blur-xl">
          <nav className="container py-6 space-y-2">
            {navigationItems.map((item, index) => (
              <div 
                key={item.name} 
                className="space-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    onClick={() => !item.subItems && setIsMenuOpen(false)}
                    className="flex-1 py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <button
                      className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                      onClick={() => setOpenSubMenu(openSubMenu === item.name ? null : item.name)}
                    >
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${openSubMenu === item.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile submenu */}
                {item.subItems && (
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openSubMenu === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 py-2 space-y-1 border-l-2 border-primary/20 ml-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-6 space-y-4 border-t border-border/50 mt-4">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="btn-hero w-full group">
                  <span>{t('nav.contact')}</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
