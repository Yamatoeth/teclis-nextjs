"use client";
import { ArrowRight, CheckCircle, BarChart3, Droplets, Settings, Zap, Beaker, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { generationModes, foamingProperties, stabilityProperties, applications } from '@/types/products'; 
import { useTranslation } from "react-i18next";

const FoamScan = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-6 pt-24 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/products">Products</Link>
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
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.foamingCapacity")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.density")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.stability")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.antifoam")}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{t("products.foamscan.hero.list.structure")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                <p className="text-foreground font-medium">
                  {t("products.foamscan.hero.paragraph3")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button className="btn-hero">
                  {t("cta.buttonCatalog")}
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/contact">
                  {t("cta.contact")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%] flex items-center">
            <img
              src="/images/products/foamscan-foam-analyzer.avif"
              alt="FOAMSCAN Measurement Example 1"
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
      >       
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[40%] flex items-center">
            <img
              src="/images/products/foam2.avif"
              alt="FOAMSCAN Measurement Example 2"
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{t(`products.foamscan.features.stability.list.${index}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-premium mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <div className="flex items-start">
                  <Beaker className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
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
      >
        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="card-premium flex items-start">
                <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{t(`products.foamscan.applications.list.${index}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Second Image Carousel Section */}
      <div className="max-w-5xl mx-auto mt-12">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={true}
          autoplay={true}
          autoplaySpeed={4000}
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/products/foamscan_image3.png"
              alt={t("products.foamscan.carousel.alt1")}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/products/foamscan_image4.png"
              alt={t("products.foamscan.carousel.alt2")}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/products/foamscan_image5.png"
              alt={t("products.foamscan.carousel.alt3")}
              className="w-full h-auto object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* CTA Section */}
      <Section
        background="gradient"
        subtitle={t("products.foamscan.cta.subtitle")}
        title={t("products.foamscan.cta.title")}
        description={t("products.foamscan.cta.description")}
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero">
              {t("cta.buttonDownload")}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Link to="/contact">
            <Button variant="outline" size="lg">
              {t("cta.")}
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

export default FoamScan;
