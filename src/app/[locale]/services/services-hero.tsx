"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, FlaskConical, Users, Award, Clock } from "lucide-react";

interface ServicesHeroProps {
  locale: string;
}

export default function ServicesHero({ locale }: ServicesHeroProps) {
  const t = useTranslations();

  const highlights = [
    { icon: Clock, text: "25+ Years Experience" },
    { icon: FlaskConical, text: "Advanced Laboratory" },
    { icon: Users, text: "Expert Scientists" },
    { icon: Award, text: "ISO Certified" },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)]" />
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
          <span className="text-foreground font-medium">{t("nav.services")}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-indigo-600/10 to-blue-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
              {t("services.introduction.subtitle")}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t("services.introduction.title")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t("services.introduction.description")}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600/10 to-blue-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
              >
                {t("ContactforQuote")}
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-500/30 text-foreground font-semibold hover:bg-indigo-500/10 transition-colors"
              >
                {t("learnMore")}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-indigo-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-60" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/products/services.png"
                alt="Teclis Scientific Services"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 shadow-xl">
              <p className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                25+
              </p>
              <p className="text-sm text-muted-foreground">Years of Expertise</p>
            </div>
          </div>
        </div>

        {/* Intro paragraph */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm">
            <div className="absolute top-0 left-8 w-1 h-full bg-linear-to-b from-indigo-600 to-blue-500 rounded-full" />
            <p className="pl-6 text-lg text-muted-foreground leading-relaxed">
              {t("services.introduction.paragraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
