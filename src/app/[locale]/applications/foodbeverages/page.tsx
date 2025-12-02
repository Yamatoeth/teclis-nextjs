import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { ArrowLeft, Droplet, TestTubes, Package, Sprout, Coffee, TestTube, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { Link } from '@/i18n/routing';
import { Metadata } from 'next';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = (props: { params: { locale: string } }) =>
  generatePageMetadata({ 
    params: props.params, 
    namespace: "Metadata.foodBeverages", 
    path: "applications/foodbeverages" 
  });

export default async function FoodBeverages({ params }: { params: { locale: string } }) {
  const locale = await params.locale
  const t = await getTranslations({locale});

  const applications = [
    {image: "/images/foodbeverages/emulsion.avif"},
    {image: "/images/foodbeverages/lipids.avif"},
    {image: "/images/foodbeverages/capsules.avif"},
    {image: "/images/foodbeverages/proteins.avif"},
    {image: "/images/foodbeverages/beverages.avif"},
    {image: "/images/foodbeverages/surfactant.avif"},
    {image: "/images/foodbeverages/foams.avif"}
  ];

  const products = [
    "TRACKER™ Tensiometer",
    "FOAMSCAN™ Foam Analyzer",
    "RHEOSCAN™ Interface Rheometer"
  ];

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 pt-6 pb-4">
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
              <BreadcrumbPage>Food & Beverages</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header Section */}
      <Section
        headingLevel="h1"
        subtitle={t("applications.data.foodBeverages.header.subtitle")}
        title={t("applications.data.foodBeverages.header.title")}
        description={t("applications.data.foodBeverages.header.description")}
      >
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {products.map((product, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2">
              {product}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Applications Grid */}
      <Section background="muted" headingLevel="h2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="card-premium group hover-scale">
              <div className="aspect-video bg-gradient-subtle rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                <Image
                  src={app.image}
                  alt={t(`applications.data.foodBeverages.applications.${index}.title`)}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t(`applications.data.foodBeverages.applications.${index}.title`)}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {t(`applications.data.foodBeverages.applications.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section
        headingLevel="h2"
        subtitle={t("applications.data.foodBeverages.benefits.subtitle")}
        title={t("applications.data.foodBeverages.benefits.title")}
        description={t("applications.data.foodBeverages.benefits.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.data.foodBeverages.benefits.cards.quality.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.data.foodBeverages.benefits.cards.quality.text")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">🔬</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.data.foodBeverages.benefits.cards.development.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.data.foodBeverages.benefits.cards.development.text")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.data.foodBeverages.benefits.cards.research.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.data.foodBeverages.benefits.cards.research.text")}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        headingLevel="h2"
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
