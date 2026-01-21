"use client";

import { ArrowRight, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface CTASectionProps {
  locale: string;
}

const CTASection = ({ locale }: CTASectionProps) => {
  const t = useTranslations();

  const features = [
    { icon: Users, label: t("cta.featureSupport") },
    { icon: Award, label: t("cta.featureExperience") },
    { icon: Globe, label: t("cta.featureGlobal") },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-accent p-8 md:p-12">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("cta.title")}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          {t("cta.description")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/contact" locale={locale}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 rounded-2xl px-8 py-6 text-base font-semibold group"
            >
              <span>{t("cta.contact")}</span>
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
          <Link href="/news" locale={locale}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-2xl px-8 py-6 text-base font-semibold backdrop-blur-sm"
            >
              {t("cta.buttonCatalog")}
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/90 text-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <feature.icon size={16} />
              </div>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full" />
    </div>
  );
};

export default CTASection;
