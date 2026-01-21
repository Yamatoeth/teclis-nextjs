"use client";

import { useTranslations } from "next-intl";
import { TrendingDown, Clock, CheckCircle2 } from "lucide-react";

export default function JetscanMeasurements() {
  const t = useTranslations();

  const effectivenessList = [
    "products.jetscan.measurements.effectiveness.list.0",
    "products.jetscan.measurements.effectiveness.list.1",
    "products.jetscan.measurements.effectiveness.list.2",
  ];

  const persistenceList = [
    "products.jetscan.measurements.persistence.list.0",
    "products.jetscan.measurements.persistence.list.1",
    "products.jetscan.measurements.persistence.list.2",
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-violet-600/10 to-purple-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-4">
            {t("products.jetscan.measurements.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.jetscan.measurements.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.jetscan.measurements.description")}
          </p>
        </div>

        {/* Measurements Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Effectiveness Card */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <TrendingDown className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {t("products.jetscan.measurements.effectiveness.title")}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {t("products.jetscan.measurements.effectiveness.description")}
              </p>
              
              <div className="space-y-3">
                {effectivenessList.map((itemKey, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-linear-to-br from-violet-600/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:from-violet-600 group-hover/item:to-purple-500 transition-all duration-300">
                      <CheckCircle2 className="w-3 h-3 text-violet-600 dark:text-violet-400 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      {t(itemKey)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-violet-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>

            {/* Persistence Card */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {t("products.jetscan.measurements.persistence.title")}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {t("products.jetscan.measurements.persistence.description")}
              </p>
              
              <div className="space-y-3">
                {persistenceList.map((itemKey, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-linear-to-br from-violet-600/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:from-violet-600 group-hover/item:to-purple-500 transition-all duration-300">
                      <CheckCircle2 className="w-3 h-3 text-violet-600 dark:text-violet-400 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      {t(itemKey)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-violet-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
