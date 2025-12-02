import { ArrowLeft, Beaker, Package, Shield, Sparkles, Leaf, FlaskConical, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { Link } from '@/i18n/routing';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = (props: { params: { locale: string } }) =>
  generatePageMetadata({ 
    params: props.params, 
    namespace: "Metadata", 
    path: "applications/dailychemicals" 
  });

export default async function DailyChemicals({ params }: { params: { locale: string } }) {
  const locale = await params.locale
  const t = await getTranslations({locale});

  const applications = [
    {image: "/images/chemicals/formulation.avif"},
    {image: "/images/chemicals/encapsulation.avif"},
    {image: "/images/chemicals/environmental-protection.avif"},
    {image: "/images/chemicals/Cosmetic.avif"},
    {image: "/images/chemicals/eco-friendly-chemistry.avif"},
    {image: "/images/chemicals/Chemical-reactions.avif"},
    {image: "/images/chemicals/cleaning-decontamination.avif"}
  ];

  const products = [
    "TRACKER™ Tensiometer",
    "FOAMSCAN™ Foam Analyzer"
  ];

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 pt-6 pb-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/applications">Applications</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Daily Chemicals & Cosmetics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header Section */}
      <Section
        headingLevel="h1"
        className="py-0"
        subtitle={t("applications.dailyChemicals.subtitle")}
        title={t("applications.dailyChemicals.title")}
        description={t("applications.dailyChemicals.description")}
      >
      </Section>

      {/* Applications Grid */}
      <Section background="muted" headingLevel="h2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="card-premium group hover-scale">
              <div className="aspect-video bg-gradient-subtle rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                <Image
                  src={app.image}
                  alt={t(`applications.dailyChemicals.applications.list.${index}.title`)}
                  fill
                  className="object-cover"
                />
              </div>  
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t(`applications.dailyChemicals.applications.list.${index}.title`)}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {t(`applications.dailyChemicals.applications.list.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section
        headingLevel="h2"
        className="py-12"
        subtitle={t("applications.dailyChemicals.benefits.subtitle")}
        title={t("applications.dailyChemicals.benefits.title")}
        description={t("applications.dailyChemicals.benefits.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">✨</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.dailyChemicals.benefits.cards.productInnovation.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.dailyChemicals.benefits.cards.productInnovation.text")}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.dailyChemicals.benefits.cards.sustainability.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.dailyChemicals.benefits.cards.sustainability.text")}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.dailyChemicals.benefits.cards.quality.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.dailyChemicals.benefits.cards.quality.text")}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        headingLevel="h2"
        className="py-12"
        background="gradient"
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        description={t("cta.description")}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="btn-hero" asChild>
            <Link href="/contact">{t("cta.contact")}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">{t("cta.viewProducts")}</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};
