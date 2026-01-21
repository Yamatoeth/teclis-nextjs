"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Microscope, Cog, Headphones, Globe } from "lucide-react";

const whyCards = [
  {
    icon: Microscope,
    image: "/images/about/about-us-1.avif",
    gradient: "from-teal-600 to-emerald-500",
    bgGradient: "from-teal-600/10 to-emerald-500/10",
  },
  {
    icon: Cog,
    image: "/images/about/module-elastic.avif",
    gradient: "from-emerald-600 to-cyan-500",
    bgGradient: "from-emerald-600/10 to-cyan-500/10",
  },
  {
    icon: Headphones,
    image: "/images/about/Modular.avif",
    gradient: "from-cyan-600 to-teal-500",
    bgGradient: "from-cyan-600/10 to-teal-500/10",
  },
  {
    icon: Globe,
    image: "/images/about/world network.avif",
    gradient: "from-teal-600 to-cyan-500",
    bgGradient: "from-teal-600/10 to-cyan-500/10",
  },
];

export default function AboutWhyChoose() {
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
            {t("about.why.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about.why.title")}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((num, index) => {
            const card = whyCards[index];
            const Icon = card.icon;

            return (
              <div
                key={num}
                className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={t(`about.why.card${num}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-linear-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(`about.why.card${num}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`about.why.card${num}.text`)}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
