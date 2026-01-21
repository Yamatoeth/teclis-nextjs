"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { industries } from "@/types/applications";

interface IndustryShowcaseProps {
  locale: string;
}

const IndustryShowcase = ({ locale }: IndustryShowcaseProps) => {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % industries.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + industries.length) % industries.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const activeIndustry = industries[activeIndex];

  return (
    <div className="relative">
      {/* Main showcase */}
      <div 
        ref={containerRef}
        className="relative bg-card/30 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 min-h-150">
          {/* Left: Content */}
          <div className="relative p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
            {/* Industry tabs - Desktop */}
            <div className="hidden lg:flex gap-2 mb-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`
                      relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                      transition-all duration-300
                      ${isActive 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden xl:inline">
                      {t(`applications.industries.${industry.key}.title`)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Icon & Title */}
            <div 
              className={`transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${activeIndustry.color} flex items-center justify-center shadow-lg`}>
                  <activeIndustry.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {t("applications.page.industry")}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {t(`applications.industries.${activeIndustry.key}.title`)}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t(`applications.industries.${activeIndustry.key}.description`)}
              </p>

              {/* Applications grid */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  {t("applications.keyApplications")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeIndustry.applications?.slice(0, 4).map((app, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-linear-to-r ${activeIndustry.color}`} />
                      <span className="text-sm text-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button asChild className="group w-fit">
                <Link href={activeIndustry.link} locale={locale}>
                  {t("applications.page.exploreIndustry")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-75 lg:h-auto order-1 lg:order-2">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-l from-card/80 via-card/20 to-transparent z-10 pointer-events-none" />
            
            {/* Image */}
            <div 
              className={`absolute inset-0 transition-all duration-700 ${isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
            >
              <Image
                src={activeIndustry.image}
                alt={activeIndustry.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Color accent overlay */}
            <div 
              className={`absolute inset-0 bg-linear-to-br ${activeIndustry.color} opacity-20 mix-blend-multiply transition-opacity duration-500`}
            />

            {/* Navigation arrows - Mobile */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-20 lg:hidden">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary/50">
          <div 
            className={`h-full bg-linear-to-r ${activeIndustry.color} transition-all duration-300`}
            style={{ width: `${((activeIndex + 1) / industries.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide indicators - Desktop */}
      <div className="hidden lg:flex justify-center gap-2 mt-6">
        {industries.map((industry, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === activeIndex 
                ? `scale-100 bg-linear-to-r ${industry.color}` 
                : "scale-75 bg-secondary hover:bg-primary/30"
              }
            `}
            aria-label={`Go to ${industry.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustryShowcase;
