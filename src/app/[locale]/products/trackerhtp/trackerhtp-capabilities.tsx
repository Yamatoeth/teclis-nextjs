"use client";

import { useTranslations } from "next-intl";
import { Flame, Gauge, Zap, CheckCircle2 } from "lucide-react";

const capabilityIcons = [Flame, Gauge, Zap];

export default function TrackerHTPCapabilities() {
  const t = useTranslations();

  const capabilities = [
    {
      titleKey: "products.trackerHTHP.measurementCapabilities.0.title",
      descriptionKey: "products.trackerHTHP.measurementCapabilities.0.description",
    },
    {
      titleKey: "products.trackerHTHP.measurementCapabilities.1.title",
      descriptionKey: "products.trackerHTHP.measurementCapabilities.1.description",
    },
    {
      titleKey: "products.trackerHTHP.measurementCapabilities.2.title",
      descriptionKey: "products.trackerHTHP.measurementCapabilities.2.description",
    },
  ];

  const features = Array.from({ length: 12 }, (_, i) =>
    t(`products.trackerHTHP.features.${i}`)
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-red-600/10 to-orange-500/10 text-red-700 dark:text-red-300 border border-red-500/20 mb-4">
            {t("products.trackerHTHP.measurements.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.trackerHTHP.measurements.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.trackerHTHP.measurements.description")}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 text-center"
                >
                  {/* Decorative gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-red-600 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {t(capability.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(capability.descriptionKey)}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              );
            })}
          </div>
        </div>

        {/* All Features Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t("products.trackerHTHP.measurements.allFeaturesTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-linear-to-br from-red-600/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:from-red-600 group-hover/item:to-orange-500 transition-all duration-300">
                    <CheckCircle2 className="w-3 h-3 text-red-600 dark:text-red-400 group-hover/item:text-white transition-colors duration-300" />
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
    </section>
  );
}
