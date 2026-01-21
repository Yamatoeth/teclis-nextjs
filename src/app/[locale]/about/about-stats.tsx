"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Award, Users, Globe, ChevronRight, Sparkles } from "lucide-react";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Countries Worldwide" },
  { value: "1000+", label: "Satisfied Customers" },
  { value: "25", label: "Expert Team Members" },
];

interface AboutStatsProps {
  locale: string;
}

export default function AboutStats({ locale }: AboutStatsProps) {
  const t = useTranslations();

  const statIcons = [
    { icon: Award, gradient: "from-teal-600 to-emerald-500" },
    { icon: Globe, gradient: "from-emerald-600 to-cyan-500" },
    { icon: Users, gradient: "from-cyan-600 to-teal-500" },
    { icon: Sparkles, gradient: "from-teal-600 to-cyan-500" },
  ];

  const achievements = [
    {
      icon: Award,
      titleKey: "about.stats.iso.title",
      textKey: "about.stats.iso.text",
      gradient: "from-teal-600 to-emerald-500",
    },
    {
      icon: Users,
      titleKey: "about.stats.support.title",
      textKey: "about.stats.support.text",
      gradient: "from-emerald-600 to-cyan-500",
    },
    {
      icon: Globe,
      titleKey: "about.stats.network.title",
      textKey: "about.stats.network.text",
      gradient: "from-cyan-600 to-teal-500",
    },
  ];

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
            {t("about.stats.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about.stats.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("about.stats.description")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const { icon: Icon, gradient } = statIcons[index];

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-teal-600/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p
                    className={`text-3xl md:text-4xl font-bold bg-linear-to-r ${gradient} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="relative">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br ${achievement.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(achievement.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(achievement.textKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-linear-to-br from-teal-600/10 to-emerald-500/10 border border-teal-500/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-teal-500/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-emerald-500/20 to-transparent rounded-full blur-2xl" />

            <div className="relative text-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {t("cta.title")}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {t("cta.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-teal-600 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-teal-500/25"
                >
                  {t("cta.contact")}
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/${locale}/careers`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-teal-500/30 text-foreground font-semibold hover:bg-teal-500/10 transition-colors"
                >
                  {t("cta.careers")}
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                {t("cta.footerText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
