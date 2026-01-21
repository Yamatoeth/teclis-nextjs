"use client";

import { useTranslations } from "next-intl";
import { Droplet, ArrowDown, ArrowUp, Circle, Maximize2, Wind } from "lucide-react";

export default function TrackerHTPModes() {
  const t = useTranslations();

  const dropMethods = [
    {
      icon: ArrowDown,
      titleKey: "products.trackerHTHP.modes.dropMethods.pendantDrop.title",
      descriptionKey: "products.trackerHTHP.modes.dropMethods.pendantDrop.description",
    },
    {
      icon: ArrowUp,
      titleKey: "products.trackerHTHP.modes.dropMethods.risingDrop.title",
      descriptionKey: "products.trackerHTHP.modes.dropMethods.risingDrop.description",
    },
    {
      icon: Droplet,
      titleKey: "products.trackerHTHP.modes.dropMethods.sessileDrop.title",
      descriptionKey: "products.trackerHTHP.modes.dropMethods.sessileDrop.description",
    },
  ];

  const bubbleControl = [
    {
      icon: Circle,
      titleKey: "products.trackerHTHP.modes.bubbleControl.captiveBubble.title",
      descriptionKey: "products.trackerHTHP.modes.bubbleControl.captiveBubble.description",
    },
    {
      icon: Maximize2,
      titleKey: "products.trackerHTHP.modes.bubbleControl.volumeArea.title",
      descriptionKey: "products.trackerHTHP.modes.bubbleControl.volumeArea.description",
    },
    {
      icon: Wind,
      titleKey: "products.trackerHTHP.modes.bubbleControl.gasCompatibility.title",
      descriptionKey: "products.trackerHTHP.modes.bubbleControl.gasCompatibility.description",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-red-600/10 to-orange-500/10 text-red-700 dark:text-red-300 border border-red-500/20 mb-4">
            {t("products.trackerHTHP.modes.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.trackerHTHP.modes.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.trackerHTHP.modes.description")}
          </p>
        </div>

        {/* Modes Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Drop Methods Card */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-red-600 to-orange-500 flex items-center justify-center">
                  <Droplet className="w-5 h-5 text-white" />
                </div>
                {t("products.trackerHTHP.modes.dropMethods.title")}
              </h3>
              
              <div className="space-y-5">
                {dropMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group/item">
                      <div className="w-9 h-9 rounded-lg bg-linear-to-br from-red-600/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover/item:from-red-600 group-hover/item:to-orange-500 group-hover/item:border-transparent transition-all duration-300">
                        <Icon className="w-4 h-4 text-red-600 dark:text-red-400 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {t(method.titleKey)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(method.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>

            {/* Bubble & Control Card */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-red-600 to-orange-500 flex items-center justify-center">
                  <Circle className="w-5 h-5 text-white" />
                </div>
                {t("products.trackerHTHP.modes.bubbleControl.title")}
              </h3>
              
              <div className="space-y-5">
                {bubbleControl.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group/item">
                      <div className="w-9 h-9 rounded-lg bg-linear-to-br from-red-600/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover/item:from-red-600 group-hover/item:to-orange-500 group-hover/item:border-transparent transition-all duration-300">
                        <Icon className="w-4 h-4 text-red-600 dark:text-red-400 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {t(item.titleKey)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(item.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
