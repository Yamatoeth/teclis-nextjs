"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  GraduationCap,
  Wrench,
  Monitor,
  MapPin,
  ChevronRight,
  Headphones,
  CheckCircle2,
} from "lucide-react";

interface ServicesTechnicalProps {
  locale: string;
}

const technicalCards = [
  {
    icon: GraduationCap,
    gradient: "from-indigo-600 to-purple-500",
    bgGradient: "from-indigo-600/10 to-purple-500/10",
    borderColor: "border-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/40",
    features: ["On-site training", "Software tutorials", "Best practices"],
  },
  {
    icon: Wrench,
    gradient: "from-blue-600 to-indigo-500",
    bgGradient: "from-blue-600/10 to-indigo-500/10",
    borderColor: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
    features: ["Preventive maintenance", "Calibration services", "Parts replacement"],
  },
  {
    icon: Monitor,
    gradient: "from-cyan-600 to-blue-500",
    bgGradient: "from-cyan-600/10 to-blue-500/10",
    borderColor: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    features: ["Screen sharing", "Remote diagnostics", "Software updates"],
  },
  {
    icon: MapPin,
    gradient: "from-violet-600 to-indigo-500",
    bgGradient: "from-violet-600/10 to-indigo-500/10",
    borderColor: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    features: ["Emergency repairs", "Relocations", "Recommissioning"],
  },
];

export default function ServicesTechnical({ locale }: ServicesTechnicalProps) {
  const t = useTranslations();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-indigo-600/10 to-blue-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-4">
            {t("services.technical.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.technical.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive support throughout your instrument's lifecycle, ensuring
            optimal performance and reliability.
          </p>
        </div>

        {/* Technical Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((num, index) => {
            const card = technicalCards[index];
            const Icon = card.icon;

            return (
              <div
                key={num}
                className={`group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm ${card.hoverBorder} transition-all duration-300 overflow-hidden`}
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {t(`services.technical.card${num}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(`services.technical.card${num}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pl-16 space-y-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-linear-to-br from-indigo-600/10 to-blue-500/10 border border-indigo-500/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-indigo-500/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-indigo-600 to-blue-500 flex items-center justify-center shrink-0">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Need Technical Assistance?
                  </h3>
                  <p className="text-muted-foreground">
                    Our support team is ready to help you with any questions or issues.
                  </p>
                </div>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25 shrink-0"
              >
                Contact Support
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
