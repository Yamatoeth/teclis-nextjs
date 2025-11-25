"use client";
import { ArrowLeft, Droplets, Gauge, Factory } from 'lucide-react';
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

const OilGas = () => {
  const { t } = useTranslation();

  const applications = [
    {
      title: "Upstream",
      description: "Foam stabilized by fly ash nanoparticles for enhanced oil recovery, CO₂ aqueous foam for improved extraction efficiency in oil fields.",
      image: "/images/oilgas/upstream.avif"
    },
    {
      title: "Midstream",
      description: "Crude stabilizer and demulsifier interactions, effects of asphaltene sub-fraction polarity on transportation and processing stability.",
      image: "/images/oilgas/midstream.avif"
    },
    {
      title: "Downstream",
      description: "Physicochemical properties of diesel-biodiesel-ethanol mixtures, contaminated soil remediation techniques using surfactant solutions.",
      image: "/images/oilgas/downstream.avif"
    }
  ];

  const products = [
    t("applications.data.oilGas.products.tracker"),
    t("applications.data.oilGas.products.foamscan"),
    t("applications.data.oilGas.products.highPressureModules")
  ];

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
                <Link to="/applications">{t("nav.applications")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("applications.data.oilGas.title")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header Section */}
      <Section
        subtitle={t("applications.data.oilGas.header.subtitle")}
        title={t("applications.data.oilGas.header.title")}
        description={t("applications.data.oilGas.header.description")}
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
      <Section background="muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="card-premium group hover-scale">
              <div className="aspect-video bg-gradient-subtle rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={app.image}
                  alt={t(`applications.oilGas.applications.${index}.title`)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <span class="text-white text-2xl">⚡</span>
                      </div>
                    `;
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t(`applications.data.oilGas.applications.${index}.title`)}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {t(`applications.data.oilGas.applications.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section
        subtitle={t("applications.data.oilGas.benefits.subtitle")}
        title={t("applications.data.oilGas.benefits.title")}
        description={t("applications.data.oilGas.benefits.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">🔥</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.oilGas.benefits.cards.extreme.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.oilGas.benefits.cards.extreme.text")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.data.oilGas.benefits.cards.recovery.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.data.oilGas.benefits.cards.recovery.text")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("applications.data.oilGas.benefits.cards.safety.title")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("applications.data.oilGas.benefits.cards.safety.text")}
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
            <Link to="/contact">{t("cta.contact")}</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">{t("cta.viewProducts")}</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default OilGas;
