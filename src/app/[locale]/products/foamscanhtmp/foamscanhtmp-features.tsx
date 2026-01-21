"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Gauge, FlaskConical, CheckCircle2 } from "lucide-react";

export default function FoamscanHTMPFeatures() {
  const t = useTranslations();

  const featuresList = Array.from({ length: 8 }, (_, i) =>
    t(`products.foamscanHTMP.features.list.${i}`)
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-orange-600/10 to-amber-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/20 mb-4">
            {t("products.foamscanHTMP.featuresSection.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.foamscanHTMP.featuresSection.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.foamscanHTMP.featuresSection.description")}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Two Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Depressurization Card */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-orange-600 to-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t("products.foamscanHTMP.featuresSection.cards.depressurization.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("products.foamscanHTMP.featuresSection.cards.depressurization.text")}
                  </p>
                </div>
              </div>
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-orange-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>

            {/* HCl Card */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-orange-600 to-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FlaskConical className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t("products.foamscanHTMP.featuresSection.cards.hcl.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("products.foamscanHTMP.featuresSection.cards.hcl.text")}
                  </p>
                </div>
              </div>
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-orange-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          </div>

          {/* Modular Design Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-linear-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/products/double-walled-glass-measuring-tube.avif"
                  alt="FOAMSCAN™ HTMP Modular Design"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Features List */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t("products.foamscanHTMP.overview.modularTitle")}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("products.foamscanHTMP.overview.modularDescription")}
              </p>
              <div className="space-y-3">
                {featuresList.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="w-5 h-5 rounded-full bg-linear-to-br from-orange-600/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:from-orange-600 group-hover/item:to-amber-500 transition-all duration-300">
                      <CheckCircle2 className="w-3 h-3 text-orange-600 dark:text-orange-400 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
