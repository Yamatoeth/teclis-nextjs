"use client";
import { ArrowLeft, Droplet, TestTubes, Package, Sprout, Coffee, TestTube, Wind } from 'lucide-react';
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

import { useTranslation } from "react-i18next";

const FoodBeverages = () => {
  const { t } = useTranslation();

  const applications = [
    {
      title: "Emulsions",
      description: "Oil-water interface microgels, properties of plant and dairy proteins, incorporation of hibiscus extracts in yogurt for enhanced stability and texture.",
      image: "/images/foodbeverages/emulsion.avif"
    },
    {
      title: "Lipids",
      description: "Adsorption of polar lipids at water-oil interface, network formation by protein aggregates for improved emulsion stability.",
      image: "/images/foodbeverages/lipids.avif"
    },
    {
      title: "Capsules",
      description: "Oil-in-water and water-in-oil capsules for flavor protection and controlled release applications in food products.",
      image: "/images/foodbeverages/capsules.avif"
    },
    {
      title: "Proteins",
      description: "Foaming properties of quinoa proteins, temperature effect on ovalbumin-stabilized foams for food applications.",
      image: "/images/foodbeverages/proteins.avif"
    },
    {
      title: "Beverages",
      description: "Beer-air interface properties, crema formation and stabilization in coffee, bovine whey foaming properties for beverages.",
      image: "/images/foodbeverages/beverages.avif"
    },
    {
      title: "Surfactants",
      description: "Relationship between interfacial and foaming properties of low-molecular-weight surfactants in food systems.",
      image: "/images/foodbeverages/surfactant.avif"
    },
    {
      title: "Foams",
      description: "Improved foaming properties of whey protein concentrates, interfacial properties, film dynamics, and bulk rheology in dairy protein foams.",
      image: "/images/foodbeverages/foams.avif"
    }
  ];

  const products = [
    "TRACKER™ Tensiometer",
    "FOAMSCAN™ Foam Analyzer",
    "RHEOSCAN™ Interface Rheometer"
  ];

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
                <Link to="/applications">Applications</Link>
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
        subtitle={t("applications.data.foodBeverages.header.subtitle")}
        title={t("applications.data.foodBeverages.header.title")}
        description={t("applications.data.foodBeverages.header.description")}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {products.map((product, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2">
              {product}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Applications Grid */}
      <Section background="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="card-premium group hover-scale">
              <div className="aspect-video bg-gradient-subtle rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <span class="text-white text-2xl">🔬</span>
                      </div>
                    `;
                  }}
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
        background="gradient"
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        description={t("cta.description")}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="btn-hero" asChild>
            <Link to="/contact">{t("cta.buttonContact")}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">{t("cta.ViewProducts")}</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default FoodBeverages;
