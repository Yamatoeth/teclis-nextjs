"use client";

import { useTranslations } from "next-intl";
import { Filter, ScanLine, Sparkles, Cpu } from "lucide-react";

export default function BubbleAnalyserFeatures() {
  const t = useTranslations();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-sky-600/10 to-cyan-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 mb-4">
            {t("products.bubbleAnalyser.features.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.bubbleAnalyser.features.title")}
          </h2>
        </div>

        {/* Main Feature Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-sky-500/10 to-transparent rounded-full blur-2xl" />

            <div className="relative">
              {/* Description */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-sky-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Smart Analysis Engine
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("products.bubbleAnalyser.features.description")}
                  </p>
                </div>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Classification Filters */}
                <div className="group relative p-5 rounded-xl bg-sky-500/5 border border-sky-500/10 hover:border-sky-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-linear-to-br from-sky-600/20 to-cyan-500/20 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:from-sky-600 group-hover:to-cyan-500 group-hover:border-transparent transition-all duration-300">
                      <Filter className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {t("products.bubbleAnalyser.features.cards.classification.title")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("products.bubbleAnalyser.features.cards.classification.text")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Analysis */}
                <div className="group relative p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-linear-to-br from-sky-600/20 to-cyan-500/20 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:from-sky-600 group-hover:to-cyan-500 group-hover:border-transparent transition-all duration-300">
                      <ScanLine className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {t("products.bubbleAnalyser.features.cards.image.title")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("products.bubbleAnalyser.features.cards.image.text")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How it Works */}
              <div className="mt-8 p-5 rounded-xl bg-linear-to-r from-sky-600/10 to-cyan-500/10 border border-sky-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-linear-to-br from-sky-600 to-cyan-500 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      How It Works
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("products.bubbleAnalyser.overview.paragraph2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
