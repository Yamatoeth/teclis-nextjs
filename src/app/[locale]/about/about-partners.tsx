"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ExternalLink, Factory, FlaskConical, Award } from "lucide-react";

export default function AboutPartners() {
  const t = useTranslations();

  const partners = [
    {
      logo: "/images/about/LOGO6.avif",
      name: "CNRS",
      url: "https://www.cnrs.fr/en",
      icon: FlaskConical,
      gradient: "from-teal-600 to-emerald-500",
      lines: [
        t("about.lab.block1.line1"),
        t("about.lab.block1.line2"),
      ],
    },
    {
      logo: "/images/about/logo-1.avif",
      name: "MGA Technologies",
      url: "https://www.mga-tech.com/",
      icon: Factory,
      gradient: "from-emerald-600 to-cyan-500",
      lines: [
        t("about.lab.block2.line1"),
        t("about.lab.block2.line2"),
        t("about.lab.block2.line3"),
      ],
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-teal-600/10 to-emerald-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-4">
            {t("about.lab.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("about.lab.title")}
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-teal-600/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Logo */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-6 group/logo"
                  >
                    <div className="relative h-32 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 group-hover/logo:border-teal-500/30 transition-colors">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={300}
                        height={120}
                        className="max-h-full w-auto object-contain"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                    </div>
                  </a>

                  {/* Header with icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-linear-to-br ${partner.gradient} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {partner.name}
                    </h3>
                  </div>

                  {/* Description lines */}
                  <div className="space-y-3">
                    {partner.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="text-muted-foreground leading-relaxed text-sm"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${partner.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                />
              </div>
            );
          })}
        </div>

        {/* Made in France badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-teal-600/10 to-emerald-500/10 border border-teal-500/20">
            <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span className="text-sm font-medium text-foreground">
              100% Made in France • ISO-13485 Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
