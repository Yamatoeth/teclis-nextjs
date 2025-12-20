import { ArrowRight, CheckCircle, BarChart3, Droplets, Settings, Zap, Beaker, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

import { generationModes, foamingProperties, stabilityProperties, applications } from '@/types/products'; 
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from 'next/image';
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;
  return generatePageMetadata({ 
    params, 
    namespace: "Metadata.foamscan", 
    path: "products/foamscan" 
  });
};

export default async function FoamScan({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale});
  
  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 pt-24 pb-4">
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
                <Link href="/products">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>FOAMSCAN™</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <Section
        subtitle={t("products.foamscan.hero.subtitle")}
        title={t("products.foamscan.hero.title")}
        description={t("products.foamscan.hero.description")}
        headingLevel="h1"
      >
        <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[70%]">
            <div className="card-premium p-8 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("products.foamscan.hero.paragraph1")}
              </p>
              
              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <p className="text-foreground font-medium mb-4">
                  {t("products.foamscan.hero.paragraph2")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.capacity")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.density")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.stability")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.antifoam")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.structure")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                <p className="text-foreground font-medium">
                  {t("products.foamscan.hero.paragraph3")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button className="btn-hero">
                  {t("cta.buttonCatalog")}
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/contact" locale={locale}>
                  {t("cta.contact")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%] flex items-center self-center">
            <Image
              src="/images/products/foamscan-foam-analyzer.avif"
              alt={t('products.foamscan.hero.title')}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section
        background="muted"
        subtitle={t("products.foamscan.features.subtitle")}
        title={t("products.foamscan.features.title")}
        description={t("products.foamscan.features.description")}
        className="text-center"
        headingLevel="h2"
      >       
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[40%] flex items-center">
            <Image
              src="/images/products/foam2.avif"
              alt={t("products.foamscan.features.description")}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8">
              {generationModes.map((mode, index) => (
                <div key={index} className="card-premium text-center">                  
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t(`products.foamscan.features.generationModes.${index}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`products.foamscan.features.generationModes.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card-premium">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-foreground">{t("products.foamscan.features.foaming.title")}</h3>
                  </div>
                  <div className="space-y-2">
                    {foamingProperties.map((prop, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
                        <span className="text-muted-foreground">{t(`products.foamscan.features.foaming.list.${index}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-premium">
                  <div className="flex items-center mb-4">
                    <Sparkles className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-foreground">{t("products.foamscan.features.stability.title")}</h3>
                  </div>
                  <div className="space-y-2">
                    {stabilityProperties.map((prop, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
                        <span className="text-muted-foreground">{t(`products.foamscan.features.stability.list.${index}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-premium mt-8 bg-linear-to-r from-primary/5 to-accent/5 border-primary/20">
                <div className="flex items-start">
                  <Beaker className="text-primary mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t("products.foamscan.features.bottomCard.title")}</h4>
                    <p className="text-muted-foreground">
                      {t("products.foamscan.features.bottomCard.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section
        subtitle={t("products.foamscan.applications.subtitle")}
        title={t("products.foamscan.applications.title")}
        description={t("products.foamscan.applications.description")}
        headingLevel="h2"
      >
        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="card-premium flex items-start">
                <CheckCircle size={18} className="text-primary mr-3 shrink-0 mt-1" />
                <p className="text-muted-foreground">{t(`products.foamscan.applications.list.${index}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        background="gradient"
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        description={t("cta.description")}
        headingLevel="h2"
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero">
              {t("cta.buttonDownload")}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Link href="/contact" locale={locale}>
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
}
