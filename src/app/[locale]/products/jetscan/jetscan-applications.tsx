"use client";

import { useTranslations } from "next-intl";
import {
  UtensilsCrossed,
  Shirt,
  FileText,
  Droplets,
  Sparkles,
  Paintbrush,
} from "lucide-react";

const applicationIcons = [
  UtensilsCrossed, // Food & Beverage
  Shirt,           // Laundry Detergent
  FileText,        // Paper Industry
  Droplets,        // Wastewater
  Sparkles,        // Home & Personal Care
  Paintbrush,      // Paints & Varnishes
];

export default function JetscanApplications() {
  const t = useTranslations();

  const applications = Array.from({ length: 6 }, (_, i) => ({
    titleKey: `products.jetscan.applications.cards.${i}.title`,
    descriptionKey: `products.jetscan.applications.cards.${i}.description`,
  }));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-violet-600/10 to-purple-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 mb-4">
            {t("products.jetscan.applications.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.jetscan.applications.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.jetscan.applications.description")}
          </p>
        </div>

        {/* Applications Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, index) => {
              const Icon = applicationIcons[index];
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5"
                >
                  {/* Decorative gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-violet-600/10 to-purple-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-linear-to-br group-hover:from-violet-600 group-hover:to-purple-500 group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">
                        {t(app.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(app.descriptionKey)}
                      </p>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-violet-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
