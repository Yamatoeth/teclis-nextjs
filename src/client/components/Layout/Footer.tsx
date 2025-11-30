"use client";
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing'
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';
import { useTranslations } from "next-intl";


const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`block ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'} hover:text-primary transition-colors`}>
      {children}
    </Link>
  );
};

const Footer = () => {
 const t = useTranslations();

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Image src="/images/logo.png" alt="Teclis Scientific Logo" width={64} height={32} className="h-8" />
                <Image src="/images/logoara.avif" alt="Ava Logo" width={64} height={32} className="h-8" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              {t("footer.companyDescription")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.products.title")}</h3>
            <div className="space-y-2 text-sm">
              <FooterLink href="/products">
                {t("footer.products.all")}
              </FooterLink>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.products.surface")}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.products.foam")}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.products.rheometers")}
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.company.title")}</h3>
            <div className="space-y-2 text-sm">
              <FooterLink href="/about">
                {t("footer.company.about")}
              </FooterLink>
              <FooterLink href="/news">
                {t("footer.company.news")}
              </FooterLink>
              <FooterLink href="/careers">
                {t("footer.company.careers")}
              </FooterLink>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("footer.company.support")}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.contact.title")}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  {t("footer.contact.address")}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">{t("footer.contact.phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">{t("footer.contact.email")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            {t("footer.legal.copyright")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.legal.privacy")}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.legal.terms")}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.legal.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
