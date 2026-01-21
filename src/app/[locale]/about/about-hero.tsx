"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Users, Globe, Award } from "lucide-react";

interface AboutHeroProps {
  locale: string;
}

export default function AboutHero({ locale }: AboutHeroProps) {
  const t = useTranslations();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link
            href={`/${locale}`}
            className="hover:text-foreground transition-colors"
          >
            {t("nav.home")}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{t("nav.about")}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-teal-600/10 to-emerald-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
              {t("about.journey.subtitle")}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("about.journey.title")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t("about.journey.description")}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Calendar, value: "25+", label: "Years" },
                { icon: Globe, value: "50+", label: "Countries" },
                { icon: Users, value: "1000+", label: "Customers" },
                { icon: Award, value: "ISO", label: "Certified" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-1 text-teal-600 dark:text-teal-400" />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-teal-600 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-teal-500/25"
              >
                {t("ContactforQuote")}
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/careers`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-teal-500/30 text-foreground font-semibold hover:bg-teal-500/10 transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>

          {/* Timeline Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-white dark:bg-gray-900">
              <Image
                src="/images/about/timeline.png"
                alt={t("timeline")}
                width={800}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
