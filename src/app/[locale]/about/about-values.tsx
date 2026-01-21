"use client";

import { useTranslations } from "next-intl";
import { Lightbulb, Target, Heart, Globe } from "lucide-react";

const valueIcons = [Lightbulb, Target, Heart, Globe];
const valueGradients = [
  { gradient: "from-teal-600 to-emerald-500", bg: "from-teal-600/10 to-emerald-500/10" },
  { gradient: "from-emerald-600 to-cyan-500", bg: "from-emerald-600/10 to-cyan-500/10" },
  { gradient: "from-cyan-600 to-teal-500", bg: "from-cyan-600/10 to-teal-500/10" },
  { gradient: "from-teal-600 to-cyan-500", bg: "from-teal-600/10 to-cyan-500/10" },
];

export default function AboutValues() {
  const t = useTranslations();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-teal-600/10 to-emerald-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-4">
            {t("about.values.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about.values.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("about.values.description")}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[0, 1, 2, 3].map((index) => {
            const Icon = valueIcons[index];
            const colors = valueGradients[index];

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {t(`about.values.value.${index}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`about.values.value.${index}.text`)}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
