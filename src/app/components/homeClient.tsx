"use client";
import  Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Globe } from "lucide-react";
import { Link } from "@App/useRouter";
import { products, industries, stats, partners } from "@/types/data";
import Section from "@/components/ui/section";
import ProductCard from "@/components/ui/product-card";
import { useTranslation } from "react-i18next";
import HeroSwiper from "./heroswiper";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      
        {/* Hero Section */}
        <div className="relative w-full h-screen">
          {/* Background Swiper */}
          <HeroSwiper />

          {/* Centered Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)]">
              {t("cta.title")}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] max-w-2xl">
              {t("cta.description")}
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <Link href="/products">
                <Button className="btn-hero">
                  {t("cta.discover")}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="btn-ghost-premium">
                {t("cta.requestDemo")}
              </Button>
            </div>
          </div>
        </div>

        {/* Company Introduction */}
        <Section
          subtitle={t("home.company.subtitle")}
          title={t("home.company.title")}
          description={t("home.company.description")}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-slideInRight"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Products */}
        <Section
          background="gray"
          subtitle={t("home.products.subtitle")}
          title={t("home.products.title")}
          description={t("home.products.description")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                productKey={product.productKey} 
                title={product.title}
                description={product.description}
                features={product.features}
                image={product.image}
                to="/products"
                onDownload={() => console.log("Download PDF")}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg" className="mt-6">
                {t("cta.viewProducts")}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Industries */}
        <Section
          subtitle={t("home.industries.subtitle")}
          title={t("home.industries.title")}
          description={t("home.industries.description")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center group opacity-0 animate-slideInLeft"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <industry.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/applications">
              <Button variant="outline" size="lg">
                {t("cta.applications")}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Testimonials/Credibility */}
        <Section
          background="gradient"
          subtitle={t("home.partners.subtitle")}
          title={t("home.partners.title")}
          description={t("home.partners.description")}
        >
          <div className="overflow-hidden w-full py-8">
            <div className="animate-marquee">
              {partners.concat(partners).map((partner, index) => (
                <img
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 object-contain"
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section
          subtitle={t("cta.subtitle")}
          title={t("cta.title")}
          description={t("cta.description")}
        >
          <div className="max-w-2xl mx-auto text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero">
                  {t("cta.contact")}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/News">
                <Button variant="outline" size="lg">
                  {t("cta.buttonCatalog")}
                </Button>
              </Link>
            </div>

            <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  {t("cta.featureSupport")}
                </div>
                <div className="flex items-center">
                  <Award size={16} className="mr-2" />
                  {t("cta.featureExperience")}
                </div>
                <div className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  {t("cta.featureGlobal")}
                </div>
              </div>
            </div>
          </div>
        </Section>
      
    </>
  );
};
export default Home;