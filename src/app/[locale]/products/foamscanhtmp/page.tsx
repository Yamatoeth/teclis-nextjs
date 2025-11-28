import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Download, Mail, CheckCircle, Thermometer, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { Link } from '@App/useRouter';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { foamscanhtmp } from '@/types/foamscanhtmp';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale });
  return {
    title: t('products.foamscanHTMP.overview.title'),
    description: t('products.foamscanHTMP.overview.description'),
    robots: {
      index: true,
      follow: true,
    },
  };
}

const measurements = foamscanhtmp.measurements;
const applications = foamscanhtmp.applications;
const features = foamscanhtmp.features;
const specifications = foamscanhtmp.specifications;

const FoamScanHTMP = () => {
 const t = useTranslations();
  
  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 pt-24 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">{t("nav.home")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/products">{t("nav.products")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("products.foamscanHTMP.title")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product Overview */}
      <Section
        headingLevel="h1"
        subtitle={t("products.foamscanHTMP.overview.subtitle")}
        title={t("products.foamscanHTMP.overview.title")}
        description={t("products.foamscanHTMP.overview.description")}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden relative h-64 w-full">
            <Image
              src="/images/products/foamscan.avif"
              alt="FOAMSCAN™ HTMP"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{t("products.foamscanHTMP.overview.modularTitle")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("products.foamscanHTMP.overview.modularDescription")}
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{t(`products.foamscanHTMP.features.list.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Measurements */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t("products.foamscanHTMP.measurements.subtitle")}
        title={t("products.foamscanHTMP.measurements.title")}
        description={t("products.foamscanHTMP.measurements.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {measurements.map((measurement, index) => (
            <div key={index} className="card-premium text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <measurement.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`products.foamscanHTMP.measurements.cards.${index}.title`)}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`products.foamscanHTMP.measurements.cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Special Features */}
      <Section
        headingLevel="h2"
        subtitle={t("products.foamscanHTMP.featuresSection.subtitle")}
        title={t("products.foamscanHTMP.featuresSection.title")}
        description={t("products.foamscanHTMP.featuresSection.description")}
      >
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("products.foamscanHTMP.featuresSection.cards.depressurization.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("products.foamscanHTMP.featuresSection.cards.depressurization.text")}
              </p>
            </div>
            
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("products.foamscanHTMP.featuresSection.cards.hcl.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("products.foamscanHTMP.featuresSection.cards.hcl.text")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t("products.foamscanHTMP.applications.subtitle")}
        title={t("products.foamscanHTMP.applications.title")}
        description={t("products.foamscanHTMP.applications.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {applications.map((app, index) => (
            <div key={index} className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t(`products.foamscanHTMP.applications.cards.${index}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`products.foamscanHTMP.applications.cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section
        headingLevel="h2"
        subtitle={t("products.foamscanHTMP.specs.subtitle")}
        title={t("products.foamscanHTMP.specs.title")}
        description={t("products.foamscanHTMP.specs.description")}
      >
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="card-premium flex justify-between items-center">
                <span className="font-medium text-foreground">{t(`products.foamscanHTMP.specs.list.${index}.parameter`)}</span>
                <span className="text-muted-foreground">{t(`products.foamscanHTMP.specs.list.${index}.value`)}</span>
              </div>
            ))}
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
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero">
              {t("cta.buttonDownload")}
              <Download size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/contact" className="flex items-center">
              {t("cta.requestQuote")}
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

export default FoamScanHTMP;
