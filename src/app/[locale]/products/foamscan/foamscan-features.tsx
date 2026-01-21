"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { BarChart3, Sparkles, Beaker, Waves, Wind, Droplets } from "lucide-react";

const generationModeIcons = [Waves, Wind, Droplets];

export default function FoamscanFeatures() {
  const t = useTranslations();

  const generationModes = [
    {
      titleKey: "products.foamscan.features.generationModes.0.title",
      descriptionKey: "products.foamscan.features.generationModes.0.description",
    },
    {
      titleKey: "products.foamscan.features.generationModes.1.title",
      descriptionKey: "products.foamscan.features.generationModes.1.description",
    },
    {
      titleKey: "products.foamscan.features.generationModes.2.title",
      descriptionKey: "products.foamscan.features.generationModes.2.description",
    },
  ];

  const foamingProperties = [
    "products.foamscan.features.foaming.list.0",
    "products.foamscan.features.foaming.list.1",
    "products.foamscan.features.foaming.list.2",
    "products.foamscan.features.foaming.list.3",
    "products.foamscan.features.foaming.list.4",
    "products.foamscan.features.foaming.list.5",
    "products.foamscan.features.foaming.list.6",
    "products.foamscan.features.foaming.list.7",
  ];

  const stabilityProperties = [
    "products.foamscan.features.stability.list.0",
    "products.foamscan.features.stability.list.1",
    "products.foamscan.features.stability.list.2",
    "products.foamscan.features.stability.list.3",
    "products.foamscan.features.stability.list.4",
    "products.foamscan.features.stability.list.5",
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-emerald-600/10 to-teal-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-4">
            {t("products.foamscan.features.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.foamscan.features.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.foamscan.features.description")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Image */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-linear-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/products/foam2.avif"
                    alt={t("products.foamscan.features.description")}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              {/* Generation Modes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {generationModes.map((mode, index) => {
                  const Icon = generationModeIcons[index];
                  return (
                    <div
                      key={index}
                      className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-600 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {t(mode.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(mode.descriptionKey)}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Properties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Foaming Properties */}
                <div className="group p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-600 to-teal-500 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {t("products.foamscan.features.foaming.title")}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {foamingProperties.map((propKey, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {t(propKey)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stability Properties */}
                <div className="group p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-600 to-teal-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {t("products.foamscan.features.stability.title")}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {stabilityProperties.map((propKey, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {t(propKey)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="relative p-6 rounded-2xl bg-linear-to-r from-emerald-600/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-emerald-500/10 to-transparent rounded-full blur-2xl" />
                
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-600 to-teal-500 flex items-center justify-center shrink-0">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t("products.foamscan.features.bottomCard.title")}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("products.foamscan.features.bottomCard.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
