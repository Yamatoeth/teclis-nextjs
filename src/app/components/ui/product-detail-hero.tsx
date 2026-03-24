"use client";

import Image from "next/image";
import { ArrowRight, Download, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductDetailHeroProps {
  locale: string;
  breadcrumbLabel: string;
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  accentColor?: string;
  pdfUrl?: string;
}

const ProductDetailHero = ({
  locale,
  breadcrumbLabel,
  badge,
  subtitle,
  title,
  description,
  highlights,
  image,
  imageAlt,
  accentColor = "from-primary to-accent",
  pdfUrl,
}: ProductDetailHeroProps) => {
  const t = useTranslations();

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 pt-6 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{t("nav.home")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/products">{t("nav.products")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-linear-to-br ${accentColor} opacity-[0.03]`} />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-5">
              <div className="space-y-3">
                <Badge
                  variant="outline"
                  className={`px-4 py-1.5 text-sm border-primary/30 bg-linear-to-r ${accentColor} bg-clip-text text-transparent font-medium`}
                >
                  {badge}
                </Badge>
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  {subtitle}
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {title}
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 text-primary`} />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <Link href="/contact" locale={locale}>
                  <Button
                    size="lg"
                    className={`bg-linear-to-r ${accentColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6 group`}
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    {t("cta.requestQuote")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                {pdfUrl && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl px-6 border-2"
                    asChild
                  >
                    <a href={pdfUrl} download>
                      <Download className="mr-2 w-4 h-4" />
                      {t("cta.buttonCatalog")}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-secondary/50 to-secondary shadow-2xl p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-linear-to-br ${accentColor} rounded-3xl opacity-20 blur-2xl`} />
              <div className={`absolute -top-4 -left-4 w-20 h-20 bg-linear-to-br ${accentColor} rounded-full opacity-30 blur-xl`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailHero;
