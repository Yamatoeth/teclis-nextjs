"use client";

import { useTranslations } from "next-intl";
import { Thermometer, Zap, Settings } from "lucide-react";

const measurementIcons = [Thermometer, Zap, Settings];

export default function FoamscanHTMPMeasurements() {
  const t = useTranslations();

  const measurements = [
    {
      titleKey: "products.foamscanHTMP.measurements.cards.0.title",
      descriptionKey: "products.foamscanHTMP.measurements.cards.0.description",
    },
    {
      titleKey: "products.foamscanHTMP.measurements.cards.1.title",
      descriptionKey: "products.foamscanHTMP.measurements.cards.1.description",
    },
    {
      titleKey: "products.foamscanHTMP.measurements.cards.2.title",
      descriptionKey: "products.foamscanHTMP.measurements.cards.2.description",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-orange-600/10 to-amber-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/20 mb-4">
            {t("products.foamscanHTMP.measurements.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.foamscanHTMP.measurements.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.foamscanHTMP.measurements.description")}
          </p>
        </div>

        {/* Measurements Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {measurements.map((measurement, index) => {
              const Icon = measurementIcons[index];
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 text-center"
                >
                  {/* Decorative gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-orange-600 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {t(measurement.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(measurement.descriptionKey)}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
