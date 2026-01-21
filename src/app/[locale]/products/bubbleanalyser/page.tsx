import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, Download, Mail, CheckCircle, Waves, Settings, TrendingUp } from 'lucide-react';
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
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import { TECLIS_SITE_URL as SITE_URL, TECLIS_SITE_NAME as SITE_NAME } from "@/lib/constants";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "bubbleAnalyser"
  });

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bubble Analyser",
    "brand": {
      "@type": "Brand",
      "name": SITE_NAME
    },
    "manufacturer": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "description": baseMetadata.description,
    "url": `${SITE_URL}/products/bubbleanalyser`,
    "category": "Industrial analysis software",
    "applicationCategory": "Scientific analysis",
    "offers": {
      "@type": "Offer",
      "url": `${SITE_URL}/contact`,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  return {
    ...baseMetadata,
    other: {
      ...baseMetadata.other,
      "script:ld+json": JSON.stringify(productSchema)
    }
  };
};

export default async function BubbleAnalyser({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
    setRequestLocale(locale);
  const t = await getTranslations({locale});

  const perBubbleStats = [
    "Diameter (min, max, mean)",
    "Mean Radius",
    "Perimeter",
    "Area",
    "Elliptical ratio",
    "Eccentricity",
    "Circularity"
  ];

  const overTimeStats = [
    "Bubble count",
    "Density",
    "Sauter Diameter",
    "Bubble area",
    "Liquid area",
    "Polydispersity index",
    "Liquid fraction"
  ];

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 pt-24 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{t('nav.home')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/products">{t('nav.products')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t('nav.products_sub.bubble')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product Overview */}
      <Section
        headingLevel="h1"
        subtitle={t("products.bubbleAnalyser.overview.subtitle")}
        title={t("products.bubbleAnalyser.overview.title")}
        description={t("products.bubbleAnalyser.overview.description")}
      >
        <div className="max-w-4xl mx-auto mt-10">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t("products.bubbleAnalyser.overview.paragraph1")}
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("products.bubbleAnalyser.overview.paragraph2")}
          </p>
        </div>
      </Section>

      {/* Video/GIF Box */}
      <Section
        headingLevel="h2"
        background="muted"
      >
        <div className="max-w-4xl mx-auto">
          <div className="card-premium">
            <div className="aspect-video bg-secondary/30 rounded-xl flex items-center justify-center">
              <video 
                controls 
                className="w-full h-full rounded-xl"
                poster="/images/products/rheoscan-interface-rheometer.avif"
              >
                <source src="/images/products/bubblestatsvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Section>

      {/* Statistics Calculated */}
      <Section
        headingLevel="h2"
        subtitle={t("products.bubbleAnalyser.stats.subtitle")}
        title={t("products.bubbleAnalyser.stats.title")}
        description={t("products.bubbleAnalyser.stats.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-premium">
            <h3 className="text-xl font-semibold text-foreground mb-6">{t("products.bubbleAnalyser.stats.perBubble.title")}</h3>
            <div className="space-y-3">
              {perBubbleStats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-3 shrink-0" />
                  <span className="text-muted-foreground">{t(`products.bubbleAnalyser.stats.perBubble.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium">
            <h3 className="text-xl font-semibold text-foreground mb-6">{t("products.bubbleAnalyser.stats.overTime.title")}</h3>
            <div className="space-y-3">
              {overTimeStats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-3 shrink-0" />
                  <span className="text-muted-foreground">{t(`products.bubbleAnalyser.stats.overTime.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Analysis Features */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t("products.bubbleAnalyser.features.subtitle")}
        title={t("products.bubbleAnalyser.features.title")}
      >
        <div className="max-w-3xl mx-auto card-premium">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t("products.bubbleAnalyser.features.description")}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-start">
              <CheckCircle size={20} className="text-primary mr-3 mt-1 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">{t("products.bubbleAnalyser.features.cards.classification.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("products.bubbleAnalyser.features.cards.classification.text")}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle size={20} className="text-primary mr-3 mt-1 shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-1">{t("products.bubbleAnalyser.features.cards.image.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("products.bubbleAnalyser.features.cards.image.text")}</p>
              </div>
            </div>
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
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 mb-6">
            <Button className="btn-hero">
              <Link href="/contact" locale={locale} className="flex items-center">
              {t("cta.requestQuote")}
              <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {t("cta.footerText")}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

