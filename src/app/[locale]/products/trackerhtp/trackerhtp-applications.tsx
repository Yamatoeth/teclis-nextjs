"use client";

import { useTranslations } from "next-intl";
import { Fuel, Cloud, Droplets, Factory } from "lucide-react";

const applicationIcons = [Fuel, Cloud, Droplets, Factory];

export default function TrackerHTPApplications() {
  const t = useTranslations();

  const applications = [
    {
      titleKey: "products.trackerHTHP.applications.cards.0.title",
      descriptionKey: "products.trackerHTHP.applications.cards.0.description",
    },
    {
      titleKey: "products.trackerHTHP.applications.cards.1.title",
      descriptionKey: "products.trackerHTHP.applications.cards.1.description",
    },
    {
      titleKey: "products.trackerHTHP.applications.cards.2.title",
      descriptionKey: "products.trackerHTHP.applications.cards.2.description",
    },
    {
      titleKey: "products.trackerHTHP.applications.cards.3.title",
      descriptionKey: "products.trackerHTHP.applications.cards.3.description",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-red-600/10 to-orange-500/10 text-red-700 dark:text-red-300 border border-red-500/20 mb-4">
            {t("products.trackerHTHP.applications.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.trackerHTHP.applications.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.trackerHTHP.applications.description")}
          </p>
        </div>

        {/* Applications Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => {
              const Icon = applicationIcons[index];
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
                >
                  {/* Decorative gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-red-600/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-linear-to-br group-hover:from-red-600 group-hover:to-orange-500 group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-7 h-7 text-red-600 dark:text-red-400 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300">
                        {t(app.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(app.descriptionKey)}
                      </p>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
