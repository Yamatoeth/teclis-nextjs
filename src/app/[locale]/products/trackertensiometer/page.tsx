import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { ArrowRight, Download, CheckCircle, Mail } from 'lucide-react';
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
import { trackertensiometer } from '@/types/products';
import type { Metadata } from 'next';


const measurements = trackertensiometer.measurements
const modules = trackertensiometer.modules
const moduleFeatures = trackertensiometer.moduleFeatures
const applications = trackertensiometer.applications

export async function generateMetadata({params}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  const baseUrl = 'https://www.teclis-scientific.com';
  const otherLocales = ['en', 'fr', 'es', 'de', 'it', 'pt', 'th', 'vi', 'ja' , 'ko', 'zh']; 
  const alternates: { hrefLang: string; href: string }[] = otherLocales.map(l => ({
    hrefLang: l,
    href: `${baseUrl}/${l}/products/trackertensiometer`,
  }));
 
  return {
    title: t('trackerTensiometer.title'),
    description: t('trackerTensiometer.description'),
     alternates: {
      canonical: `${baseUrl}/${locale}/products/trackertensiometer`,
      languages: alternates.reduce((acc, cur) => {
        acc[cur.hrefLang] = cur.href;
        return acc;
      }, {} as Record<string, string>),
    },
  };
}

export default async function TrackerTensiometer({ params }: { params: { locale: string } }) {
  const locale = await params.locale
  const t = await getTranslations({locale});

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 pt-24 pb-4">
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
              <BreadcrumbPage>{t("products.trackerTensiometer.title")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <Section
        subtitle={t("products.trackerTensiometer.hero.subtitle")}
        title={t("products.trackerTensiometer.hero.title")}
        headingLevel="h1"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t("products.trackerTensiometer.hero.paragraph1")}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t("products.trackerTensiometer.hero.paragraph2")}
          </p>

          <div className="space-y-4 mb-12">
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-primary mr-3 flex-shrink-0 mt-1"
              />
              <span className="text-muted-foreground">
                {t("products.trackerTensiometer.hero.check1")}
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-primary mr-3 flex-shrink-0 mt-1"
              />
              <span className="text-muted-foreground">
                {t("products.trackerTensiometer.hero.check2")}
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle
                size={20}
                className="text-primary mr-3 flex-shrink-0 mt-1"
              />
              <span className="text-muted-foreground">
                {t("products.trackerTensiometer.hero.check3")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/products/Tracker01.avif"
                alt={t('products.tracker.header.subtitle')}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                TRACKER™ Standard Drop Tensiometer
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full">
                <Download className="mr-2" size={20} />
                {t("cta.buttonCatalog")}
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link href="/contact">
                  <Mail className="mr-2" size={20} />
                  {t("cta.requestQuote")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Full Range of Measurements */}
      <Section
        background="muted"
        subtitle={t("products.trackerTensiometer.measurements.subtitle")}
        title={t("products.trackerTensiometer.measurements.title")}
        headingLevel="h2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {measurements.map((measurement, index) => (
            <div key={index} className="flex items-center card-premium">
              <CheckCircle
                size={18}
                className="text-primary mr-3 flex-shrink-0"
              />
              <span className="text-muted-foreground">{t(`products.trackerTensiometer.measurements.items.${index}`)}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Drop Shape Analysis */}
      <Section
        title={t("products.trackerTensiometer.dropShape.title")}
        headingLevel="h2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              {t("products.trackerTensiometer.dropShape.subtitle")}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("products.trackerTensiometer.dropShape.description")}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden relative w-full h-64">
            <Image
              src="/images/products/drop-shape-analysis.avif"
              alt={t('products.trackerTensiometer.dropShape.subtitle')}
              fill
              sizes="100vw"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Smart Modular Design */}
      <Section
        background="muted"
        subtitle={t("products.trackerTensiometer.modular.subtitle")}
        title={t("products.trackerTensiometer.modular.title")}
        headingLevel="h2"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden relative w-full h-64">
              <Image
                src="/images/products/smart-modular-design.avif"
                alt={t('products.tracker.modular.title')}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="space-y-4">
              {moduleFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-primary mr-3 flex-shrink-0 mt-1"
                  />
                  <span className="text-muted-foreground">{t(`products.trackerTensiometer.modular.features.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section subtitle={t("products.trackerTensiometer.applications.subtitle")} title={t("products.trackerTensiometer.applications.title")} headingLevel="h2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-13">
          {applications.map((app, index) => (
            <div key={index} className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t(`products.trackerTensiometer.applications.cards.${index}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(`products.trackerTensiometer.applications.cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button size="lg">
            <Download className="mr-2" size={20} />
            {t("cta.buttonCatalog")}
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <Mail className="mr-2" size={20} />
              {t("cta.requestQuote")}
            </Link>
          </Button>
        </div>
      </Section>

      {/* TRACKER Modules */}
      <Section
        background="muted"
        subtitle={t("products.trackerTensiometer.modules.subtitle")}
        title={t("products.trackerTensiometer.modules.title")}
        description={t("products.trackerTensiometer.modules.description")}
        headingLevel="h2"
      >
        <div className="space-y-12 max-w-6xl mx-auto mt-8">
          {modules.map((module, index) => (
            <div key={index} className="card-premium">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div
                  className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t(`products.trackerTensiometer.modules.items.${index}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`products.trackerTensiometer.modules.items.${index}.description`)}
                  </p>
                </div>

                <div
                  className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}
                >
                  <div className="rounded-xl overflow-hidden relative w-full h-64">
                    <Image
                      src={module.image}
                      alt={`TRACKER™ ${module.title}`}
                      fill
                      sizes="100vw"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* TRACKER™ Measurements Overview */}
      <Section
        subtitle={t("products.trackerTensiometer.overview.subtitle")}
        title={t("products.trackerTensiometer.overview.title")}
        headingLevel="h2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="card-premium">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t("products.trackerTensiometer.overview.cards.0.title")}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t("products.trackerTensiometer.overview.cards.0.description")}
            </p>
            <div className="rounded-2xl overflow-hidden relative w-full h-64">
              <Image
                src="/images/products/measurement1.avif"
                alt={t('products.trackerTensiometer.overview.title')}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="card-premium">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t("products.trackerTensiometer.overview.cards.1.title")}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t("products.trackerTensiometer.overview.cards.1.description")}
            </p>
            <div className="rounded-2xl overflow-hidden relative w-full h-64">
              <Image
                src="/images/products/sessile-drop-captive-bubble-overview.avif"
                alt="Sessile drop and captive bubble Measurements Overview"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
