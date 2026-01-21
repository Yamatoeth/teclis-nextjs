"use client";

import { useTranslations } from "next-intl";
import {
  Circle,
  Ruler,
  Square,
  Maximize,
  Ratio,
  Target,
  CircleDot,
  Hash,
  Gauge,
  CircleDashed,
  Layers,
  Droplets,
  Activity,
  Percent,
} from "lucide-react";

const perBubbleIcons = [Ruler, CircleDot, Square, Maximize, Ratio, Target, Circle];
const overTimeIcons = [Hash, Gauge, CircleDashed, Layers, Droplets, Activity, Percent];

export default function BubbleAnalyserStats() {
  const t = useTranslations();

  const perBubbleStats = Array.from({ length: 7 }, (_, i) =>
    t(`products.bubbleAnalyser.stats.perBubble.${i}`)
  );

  const overTimeStats = Array.from({ length: 7 }, (_, i) =>
    t(`products.bubbleAnalyser.stats.overTime.${i}`)
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-sky-600/10 to-cyan-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 mb-4">
            {t("products.bubbleAnalyser.stats.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.bubbleAnalyser.stats.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.bubbleAnalyser.stats.description")}
          </p>
        </div>

        {/* Video Demo */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-br from-sky-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/5">
              <video
                controls
                className="w-full h-auto rounded-2xl"
                poster="/images/products/rheoscan-interface-rheometer.avif"
              >
                <source src="/images/products/bubblestatsvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Per Bubble Stats */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-sky-600 to-cyan-500 flex items-center justify-center">
                  <Circle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t("products.bubbleAnalyser.stats.perBubble.title")}
                </h3>
              </div>

              <div className="space-y-3">
                {perBubbleStats.map((stat, index) => {
                  const Icon = perBubbleIcons[index];
                  return (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-sky-600/10 to-cyan-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover/item:from-sky-600 group-hover/item:to-cyan-500 group-hover/item:border-transparent transition-all duration-300">
                        <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {stat}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-sky-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>

            {/* Over Time Stats */}
            <div className="group relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-sky-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-sky-600 to-cyan-500 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t("products.bubbleAnalyser.stats.overTime.title")}
                </h3>
              </div>

              <div className="space-y-3">
                {overTimeStats.map((stat, index) => {
                  const Icon = overTimeIcons[index];
                  return (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-sky-600/10 to-cyan-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover/item:from-sky-600 group-hover/item:to-cyan-500 group-hover/item:border-transparent transition-all duration-300">
                        <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {stat}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-sky-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
