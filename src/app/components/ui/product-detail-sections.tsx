"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight, Beaker, Droplets, FlaskConical, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface Feature {
  titleKey: string;
  descriptionKey: string;
  image?: string;
}

interface ProductFeaturesGridProps {
  titleKey: string;
  subtitleKey?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  showImages?: boolean;
  accentColor?: string;
}

const ProductFeaturesGrid = ({
  titleKey,
  subtitleKey,
  features,
  columns = 3,
  showImages = false,
  accentColor = "from-primary to-accent",
}: ProductFeaturesGridProps) => {
  const t = useTranslations();

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          {subtitleKey && (
            <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
              {t(subtitleKey)}
            </p>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t(titleKey)}
          </h2>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-5`}>
          {features.map((feature, index) => (
            <article
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image if provided */}
              {showImages && feature.image && (
                <div className="relative h-40 overflow-hidden bg-secondary/30 rounded-t-xl">
                  <Image
                    src={feature.image}
                    alt={t(feature.titleKey)}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-xl"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>

              {/* Hover accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

interface MeasurementListProps {
  titleKey: string;
  subtitleKey?: string;
  measurements: string[];
  accentColor?: string;
}

const ProductMeasurementList = ({
  titleKey,
  subtitleKey,
  measurements,
}: MeasurementListProps) => {
  const t = useTranslations();

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          {subtitleKey && (
            <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
              {t(subtitleKey)}
            </p>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t(titleKey)}
          </h2>
        </div>

        {/* Measurements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {measurements.map((measurementKey, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 text-primary" />
              <span className="text-muted-foreground text-sm">{t(measurementKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ModuleShowcaseProps {
  titleKey: string;
  subtitleKey?: string;
  descriptionKey?: string;
  modules: {
    titleKey: string;
    descriptionKey: string;
    image: string;
  }[];
  accentColor?: string;
}

const ProductModuleShowcase = ({
  titleKey,
  subtitleKey,
  descriptionKey,
  modules,
}: ModuleShowcaseProps) => {
  const t = useTranslations();

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          {subtitleKey && (
            <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
              {t(subtitleKey)}
            </p>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t(titleKey)}
          </h2>
          {descriptionKey && (
            <p className="text-muted-foreground">
              {t(descriptionKey)}
            </p>
          )}
        </div>

        {/* Modules */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border/50 hover:border-primary/30 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className={`grid md:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-56 md:h-64 bg-secondary/30 rounded-xl overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <Image
                    src={module.image}
                    alt={t(module.titleKey)}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {t(module.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(module.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TwoColumnFeatureProps {
  titleKey: string;
  subtitleKey?: string;
  descriptionKey?: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  features?: string[];
  accentColor?: string;
}

const ProductTwoColumnFeature = ({
  titleKey,
  subtitleKey,
  descriptionKey,
  image,
  imageAlt,
  reversed = false,
  features,
}: TwoColumnFeatureProps) => {
  const t = useTranslations();

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto ${reversed ? 'md:grid-flow-dense' : ''}`}>
          {/* Image */}
          <div className={`relative ${reversed ? 'md:col-start-2' : ''}`}>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-secondary/30 shadow-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {subtitleKey && (
              <p className="text-sm uppercase tracking-wider text-primary font-medium">
                {t(subtitleKey)}
              </p>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t(titleKey)}
            </h2>
            {descriptionKey && (
              <p className="text-muted-foreground leading-relaxed">
                {t(descriptionKey)}
              </p>
            )}

            {/* Features list if provided */}
            {features && features.length > 0 && (
              <div className="space-y-2 pt-2">
                {features.map((featureKey, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                    <span className="text-muted-foreground text-sm">{t(featureKey)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProductCTAProps {
  locale: string;
  pdfUrl?: string;
  accentColor?: string;
}

const ProductCTA = ({
  locale,
  pdfUrl,
  accentColor = "from-primary to-accent",
}: ProductCTAProps) => {
  const t = useTranslations();

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-6">
        <div className={`relative overflow-hidden rounded-2xl bg-linear-to-r ${accentColor} p-8 md:p-10`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t("cta.title")}
              </h2>
              <p className="text-white/80 max-w-lg">
                {t("cta.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" locale={locale}>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg rounded-xl px-6 group"
                >
                  {t("cta.requestQuote")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {pdfUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 rounded-xl px-6"
                  asChild
                >
                  <a href={pdfUrl} download>
                    {t("cta.buttonCatalog")}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProductRelatedApplicationsProps {
  accentColor?: string;
}

const applicationLinks = [
  { href: "/applications/oilgas", icon: Droplets, labelKey: "nav.applications_sub.oilgas" },
  { href: "/applications/dailychemicals", icon: Beaker, labelKey: "nav.applications_sub.chemicals" },
  { href: "/applications/lifesciences", icon: FlaskConical, labelKey: "nav.applications_sub.life" },
  { href: "/applications/foodbeverages", icon: Leaf, labelKey: "nav.applications_sub.food" },
];

const ProductRelatedApplications = ({
  accentColor = "from-primary to-accent",
}: ProductRelatedApplicationsProps) => {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className={`text-sm uppercase tracking-wider font-medium bg-linear-to-r ${accentColor} bg-clip-text text-transparent mb-2`}>
            {t("common.exploreApplications")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t("common.relatedApplications")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {applicationLinks.map((app) => {
            const Icon = app.icon;
            return (
              <Link
                key={app.href}
                href={app.href}
                locale={locale}
                className="group p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${accentColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                    {t(app.labelKey)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export {
  ProductFeaturesGrid,
  ProductMeasurementList,
  ProductModuleShowcase,
  ProductTwoColumnFeature,
  ProductCTA,
  ProductRelatedApplications,
};
