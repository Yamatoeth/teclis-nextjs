"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Droplets,
  Waves,
  Activity,
  Gauge,
  Microscope,
  Thermometer,
  Compass,
  Zap,
  FlaskConical,
  CircleDot,
  Layers,
  BarChart3,
  Beaker,
  Wind,
  ArrowRight,
} from "lucide-react";

const surfaceIcons = [
  Droplets,
  Compass,
  Activity,
  Waves,
  Gauge,
  Zap,
  CircleDot,
  Layers,
  Thermometer,
  Microscope,
];

const foamIcons = [
  FlaskConical,
  Beaker,
  Droplets,
  Gauge,
  Wind,
  CircleDot,
  BarChart3,
  Thermometer,
];

export default function ServicesLaboratory() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  const surfaceItems = Array.from({ length: 10 }, (_, i) =>
    t(`services.laboratory.surface.item${i + 1}`)
  );

  const foamItems = Array.from({ length: 8 }, (_, i) =>
    t(`services.laboratory.foam.item${i + 1}`)
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-indigo-600/10 to-blue-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-4">
            {t("services.laboratory.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.laboratory.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            State-of-the-art laboratory facilities equipped with our own instruments
            for comprehensive surface, interface, and foam analysis.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Surface & Interface Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-linear-to-br from-indigo-600/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/20 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-indigo-600 to-blue-500 flex items-center justify-center shrink-0">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t("services.laboratory.surface.title")}
                </h3>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {surfaceItems.map((item, index) => {
                  const Icon = surfaceIcons[index];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 group/item p-2 rounded-lg hover:bg-indigo-500/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-600/10 to-blue-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover/item:from-indigo-600 group-hover/item:to-blue-500 group-hover/item:border-transparent transition-all duration-300">
                        <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
            </div>
          </div>

          {/* Foam Study Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-linear-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/20 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <FlaskConical className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t("services.laboratory.foam.title")}
                </h3>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {foamItems.map((item, index) => {
                  const Icon = foamIcons[index];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 group/item p-2 rounded-lg hover:bg-blue-500/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:from-blue-600 group-hover/item:to-cyan-500 group-hover/item:border-transparent transition-all duration-300">
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
            </div>
          </div>
        </div>

        {/* Related Products Links */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-4">
            {t("services.laboratory.relatedText") || "All measurements performed using our precision instruments:"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/products/trackertensiometer`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors text-sm font-medium"
            >
              TRACKER™ Tensiometer
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href={`/${locale}/products/foamscan`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors text-sm font-medium"
            >
              FOAMSCAN™ Analyzer
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href={`/${locale}/products/trackerhtp`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors text-sm font-medium"
            >
              TRACKER™ HTP
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
