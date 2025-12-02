import { ArrowLeft, ArrowRight, Download, Mail, CheckCircle, Flame, Gauge, Zap } from 'lucide-react';
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
import { trackerhtp } from '@/types/products';
import { getTranslations } from "next-intl/server";
import Image from 'next/image';
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";


const features = trackerhtp.features
const applications = trackerhtp.applications
const specifications = trackerhtp.specifications
const measurementCapabilities = trackerhtp.measurementCapabilities

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = (props: { params: { locale: string } }) =>
  generatePageMetadata({ 
    params: props.params, 
    namespace: "Metadata.trackerhtp", 
    path: "products/trackerhtp" 
  });

export default async function TrackerHTHP({ params }: { params: { locale: string } }) {
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
              <BreadcrumbPage>{t("products.trackerHTHP.hero.title")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product Overview */}
      <Section
        headingLevel="h1"
        subtitle={t("products.trackerHTHP.overview.subtitle")}
        title={t("products.trackerHTHP.overview.title")}
        description={t("products.trackerHTHP.overview.description")}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <div className="rounded-2xl overflow-hidden">
            <video
              className="w-full h-auto object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/images/products/tracker-high-temperature-pressure.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{t("products.trackerHTHP.overview.cetimTitle")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              TRACKER™ HTHP can measure under a temperature up to 200°C and a pressure up to 700 bar. 
              High pressure cell's design has been certified by CETIM (Centre Technique des Industries Mécaniques), 
              ensuring the highest safety and performance standards.
            </p>
            <h4 className="text-xl font-bold text-foreground mb-4">{t("products.trackerHTHP.overview.capabilitiesTitle")}</h4>
            <div className="space-y-3">
              {features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{t(`products.trackerHTHP.features.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Measurement Capabilities */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t("products.trackerHTHP.measurements.subtitle")}
        title={t("products.trackerHTHP.measurements.title")}
        description={t("products.trackerHTHP.measurements.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8">
          {measurementCapabilities.map((capability, index) => (
            <div key={index} className="card-premium text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <capability.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`products.trackerHTHP.measurementCapabilities.${index}.title`)}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`products.trackerHTHP.measurementCapabilities.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-premium">
            <h3 className="text-xl font-semibold text-foreground mb-6">{t("products.trackerHTHP.measurements.allFeaturesTitle")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{t(`products.trackerHTHP.features.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Measurement Modes */}
      <Section
        headingLevel="h2"
        subtitle={t("products.trackerHTHP.modes.subtitle")}
        title={t("products.trackerHTHP.modes.title")}
        description={t("products.trackerHTHP.modes.description")}
      >
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("products.trackerHTHP.modes.dropMethods.title")}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t("products.trackerHTHP.modes.dropMethods.pendantDrop.title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("products.trackerHTHP.modes.dropMethods.pendantDrop.description")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t("products.trackerHTHP.modes.dropMethods.risingDrop.title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("products.trackerHTHP.modes.dropMethods.risingDrop.description")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t("products.trackerHTHP.modes.dropMethods.sessileDrop.title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("products.trackerHTHP.modes.dropMethods.sessileDrop.description")}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("products.trackerHTHP.modes.bubbleControl.title")}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t("products.trackerHTHP.modes.bubbleControl.captiveBubble.title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("products.trackerHTHP.modes.bubbleControl.captiveBubble.description")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t("products.trackerHTHP.modes.bubbleControl.volumeArea.title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("products.trackerHTHP.modes.bubbleControl.volumeArea.description")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t("products.trackerHTHP.modes.bubbleControl.gasCompatibility.title")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("products.trackerHTHP.modes.bubbleControl.gasCompatibility.description")}
                  </p>
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
        subtitle={t("products.trackerHTHP.applications.subtitle")}
        title={t("products.trackerHTHP.applications.title")}
        description={t("products.trackerHTHP.applications.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {applications.map((app, index) => (
            <div key={index} className="card-premium">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t(`products.trackerHTHP.applications.cards.${index}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`products.trackerHTHP.applications.cards.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section
        headingLevel="h2"
        subtitle={t("products.trackerHTHP.specs.subtitle")}
        title={t("products.trackerHTHP.specs.title")}
        description={t("products.trackerHTHP.specs.description")}
      >
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="card-premium flex justify-between items-center">
                <span className="font-medium text-foreground">{t(`products.trackerHTHP.specs.list.${index}.parameter`)}</span>
                <span className="text-muted-foreground">{t(`products.trackerHTHP.specs.list.${index}.value`)}</span>
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
              {t("cta.buttonCatalog")}
              <Download size={20} className="ml-2" />
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
