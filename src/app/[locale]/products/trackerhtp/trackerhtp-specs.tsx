"use client";

import { useTranslations } from "next-intl";
import {
  Thermometer,
  Gauge,
  ShieldCheck,
  Layers,
  Droplets,
  Waves,
  CircleDot,
  Activity,
  Maximize2,
  Wind,
} from "lucide-react";

const specIcons = [
  Thermometer,  // Max Temperature
  Gauge,        // Max Pressure
  ShieldCheck,  // Certification
  Layers,       // Measurement Modes
  Droplets,     // Interfacial Tension
  Waves,        // Surface Tension
  CircleDot,    // Contact Angle
  Activity,     // Rheology
  Maximize2,    // Volume Control
  Wind,         // Gas Compatibility
];

export default function TrackerHTPSpecs() {
  const t = useTranslations();

  const specifications = Array.from({ length: 10 }, (_, i) => ({
    parameterKey: `products.trackerHTHP.specs.list.${i}.parameter`,
    valueKey: `products.trackerHTHP.specs.list.${i}.value`,
  }));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-red-600/10 to-orange-500/10 text-red-700 dark:text-red-300 border border-red-500/20 mb-4">
            {t("products.trackerHTHP.specs.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.trackerHTHP.specs.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.trackerHTHP.specs.description")}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specifications.map((spec, index) => {
              const Icon = specIcons[index];
              return (
                <div
                  key={index}
                  className="group relative flex items-center gap-4 p-5 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-red-500/30 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg bg-linear-to-br from-red-600/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:from-red-600 group-hover:to-orange-500 group-hover:border-transparent transition-all duration-300">
                    <Icon className="w-5 h-5 text-red-600 dark:text-red-400 group-hover:text-white transition-colors duration-300" />
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
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CETIM Certification Highlight */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="relative p-6 rounded-2xl bg-linear-to-r from-red-600/10 to-orange-500/10 border border-red-500/20 backdrop-blur-sm overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-red-500/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-red-600 to-orange-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {t("products.trackerHTHP.overview.cetimTitle")}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t("products.trackerHTHP.overview.cetimDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
