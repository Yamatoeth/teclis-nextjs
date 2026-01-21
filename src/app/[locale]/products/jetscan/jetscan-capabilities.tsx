"use client";

import { useTranslations } from "next-intl";
import { Droplets, Target, Zap } from "lucide-react";

const capabilityIcons = [Droplets, Target, Zap];

export default function JetscanCapabilities() {
  const t = useTranslations();

  const capabilities = [
    {
      titleKey: "products.jetscan.capabilities.cards.0.title",
      descriptionKey: "products.jetscan.capabilities.cards.0.description",
    },
    {
      titleKey: "products.jetscan.capabilities.cards.1.title",
      descriptionKey: "products.jetscan.capabilities.cards.1.description",
    },
    {
      titleKey: "products.jetscan.capabilities.cards.2.title",
      descriptionKey: "products.jetscan.capabilities.cards.2.description",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-violet-600/10 to-purple-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-4">
            {t("products.jetscan.capabilities.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.jetscan.capabilities.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.jetscan.capabilities.description")}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 text-center"
                >
                  {/* Decorative gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-violet-600 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/20">
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-violet-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
