"use client";

import { useTranslations } from "next-intl";
import {
  Thermometer,
  Gauge,
  TestTube,
  Wind,
  Monitor,
  Sparkles,
  Play,
  ShieldCheck,
} from "lucide-react";

const specIcons = [
  Thermometer,  // Temperature Range
  Gauge,        // Pressure Range
  TestTube,     // Standard Tube Range
  Wind,         // Foam Generation
  Monitor,      // Control
  Sparkles,     // Cleaning
  Play,         // Measurement Start
  ShieldCheck,  // Special Compatibility
];

export default function FoamscanHTMPSpecs() {
  const t = useTranslations();

  const specifications = Array.from({ length: 8 }, (_, i) => ({
    parameterKey: `products.foamscanHTMP.specs.list.${i}.parameter`,
    valueKey: `products.foamscanHTMP.specs.list.${i}.value`,
  }));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-orange-600/10 to-amber-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/20 mb-4">
            {t("products.foamscanHTMP.specs.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.foamscanHTMP.specs.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.foamscanHTMP.specs.description")}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specifications.map((spec, index) => {
              const Icon = specIcons[index];
              return (
                <div
                  key={index}
                  className="group relative flex items-center gap-4 p-5 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-orange-500/30 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-600/10 to-amber-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:from-orange-600 group-hover:to-amber-500 group-hover:border-transparent transition-all duration-300">
                    <Icon className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-medium text-foreground">
                      {t(spec.parameterKey)}
                    </span>
                    <span className="text-sm text-muted-foreground sm:text-right">
                      {t(spec.valueKey)}
                    </span>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-orange-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
