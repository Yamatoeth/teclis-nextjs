import { getTranslations } from "next-intl/server";
import Image from 'next/image';
import { ArrowRight, CheckCircle, Droplets, Target, Zap } from 'lucide-react';
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
import { jetscan } from '@/types/products';
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

const features = jetscan.features;
const applications  = jetscan.applications;
const capabilities = jetscan.capabilities;
const specifications = jetscan.specifications;


// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = (props: { params: { locale: string } }) =>
  generatePageMetadata({ 
    params: props.params, 
    namespace: "Metadata.jetscan", 
    path: "products/jetscan" 
  });

export default async function JetScan({ params }: { params: { locale: string } }) {
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
              <BreadcrumbPage>{t("products.jetscan.hero.title")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product Overview */}
      <Section
        headingLevel="h1"
        subtitle={t("products.jetscan.overview.subtitle")}
        title={t("products.jetscan.overview.title")}
        description={t("products.jetscan.overview.description")}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("products.jetscan.overview.keyFeatures")}</h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-primary mr-3 shrink-0" />
                  <span className="text-muted-foreground">{t(`products.jetscan.overview.features.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden relative w-full h-64 lg:h-96">
            <Image
              src="/images/products/jetscan.avif"
              alt={t('productsOverview.jetscan.description')}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Section>

      {/* Advanced Capabilities */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t("products.jetscan.capabilities.subtitle")}
        title={t("products.jetscan.capabilities.title")}
        description={t("products.jetscan.capabilities.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="card-premium text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-r from-primary to-accent flex items-center justify-center">
                <capability.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`products.jetscan.capabilities.cards.${index}.title`)}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`products.jetscan.capabilities.cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Measurement Parameters */}
      <Section
        headingLevel="h2"
        subtitle={t("products.jetscan.measurements.subtitle")}
        title={t("products.jetscan.measurements.title")}
        description={t("products.jetscan.measurements.description")}
      >
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("products.jetscan.measurements.effectiveness.title")}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t("products.jetscan.measurements.effectiveness.description")}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                  {t("products.jetscan.measurements.effectiveness.list.0")}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                  {t("products.jetscan.measurements.effectiveness.list.1")}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                  {t("products.jetscan.measurements.effectiveness.list.2")}
                </div>
              </div>
            </div>
            
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("products.jetscan.measurements.persistence.title")}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t("products.jetscan.measurements.persistence.description")}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                  {t("products.jetscan.measurements.persistence.list.0")}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                  {t("products.jetscan.measurements.persistence.list.1")}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                  {t("products.jetscan.measurements.persistence.list.2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t("products.jetscan.applications.subtitle")}
        title={t("products.jetscan.applications.title")}
        description={t("products.jetscan.applications.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {applications.map((app, index) => (
            <div key={index} className="card-premium">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`products.jetscan.applications.cards.${index}.title`)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`products.jetscan.applications.cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section
        headingLevel="h2"
        subtitle={t("products.jetscan.specs.subtitle")}
        title={t("products.jetscan.specs.title")}
        description={t("products.jetscan.specs.description")}
      >
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="card-premium flex justify-between items-center">
                <span className="font-medium text-foreground">{t(`products.jetscan.specs.list.${index}.parameter`)}</span>
                <span className="text-muted-foreground">{t(`products.jetscan.specs.list.${index}.value`)}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Automation Benefits */}
      <Section
        headingLevel="h2"
        background="gradient"
        subtitle={t("products.jetscan.automation.subtitle")}
        title={t("products.jetscan.automation.title")}
        description={t("products.jetscan.automation.description")}
      >
        <div className="max-w-4xl mx-auto mt-8">
          <div className="card-premium">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t("products.jetscan.automation.cards.automation.title")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("products.jetscan.automation.cards.automation.text")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">{t("products.jetscan.automation.cards.control.title")}</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.control.list.0")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.control.list.1")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.control.list.2")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.control.list.3")}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">{t("products.jetscan.automation.cards.highThroughput.title")}</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.highThroughput.list.0")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.highThroughput.list.1")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.highThroughput.list.2")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary mr-3 shrink-0" />
                    {t("products.jetscan.automation.cards.highThroughput.list.3")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        headingLevel="h2"
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        description={t("cta.description")}
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero">
              {t("cta.buttonDownload")}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Link href="/contact">
            <Button variant="outline" size="lg">
              {t("cta.requestQuote")}
            </Button>
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {t("cta.footerText")}
          </div>
        </div>
      </Section>
    </Layout>
  );
};
