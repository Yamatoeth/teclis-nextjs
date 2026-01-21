"use client";

import { useTranslations } from "next-intl";
import {
  Cog,
  Thermometer,
  Droplets,
  Gauge,
  FlaskConical,
  Layers,
  Syringe,
  Sparkles,
  Zap,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

const specIcons = [
  Thermometer,  // Temperature Range
  Cog,          // Control System
  Droplets,     // Foam Generation
  FlaskConical, // Analysis Technique
  Layers,       // Defoamer Capacity
  Gauge,        // Measurement Parameters
  Zap,          // Automation Level
  RefreshCw,    // Cleaning
];

export default function JetscanAutomation() {
  const t = useTranslations();

  const specifications = Array.from({ length: 8 }, (_, i) => ({
    parameterKey: `products.jetscan.specs.list.${i}.parameter`,
    valueKey: `products.jetscan.specs.list.${i}.value`,
  }));

  const controlList = Array.from({ length: 4 }, (_, i) =>
    t(`products.jetscan.automation.cards.control.list.${i}`)
  );

  const highThroughputList = Array.from({ length: 4 }, (_, i) =>
    t(`products.jetscan.automation.cards.highThroughput.list.${i}`)
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-600/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-violet-600/10 to-purple-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-4">
            {t("products.jetscan.automation.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.jetscan.automation.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.jetscan.automation.description")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-10">
          {/* Main Automation Card */}
          <div className="relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-violet-500/10 to-transparent rounded-full blur-2xl" />

            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center shrink-0">
                  <Cog className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t("products.jetscan.automation.cards.automation.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("products.jetscan.automation.cards.automation.text")}
                  </p>
                </div>
              </div>

              {/* Control and High-Throughput Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Automated Control */}
                <div className="p-5 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center">
                      <Syringe className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {t("products.jetscan.automation.cards.control.title")}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {controlList.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* High-Throughput */}
                <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {t("products.jetscan.automation.cards.highThroughput.title")}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {highThroughputList.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-6">
              {t("products.jetscan.specs.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specifications.map((spec, index) => {
                const Icon = specIcons[index];
                return (
                  <div
                    key={index}
                    className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-lg bg-linear-to-br from-violet-600/10 to-purple-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:from-violet-600 group-hover:to-purple-500 group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground truncate">
                        {t(spec.parameterKey)}
                      </p>
                      <p className="text-sm font-medium text-foreground truncate">
                        {t(spec.valueKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
