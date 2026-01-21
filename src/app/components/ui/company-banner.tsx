"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface Stat {
  value: string;
  label: string;
}

interface CompanyBannerProps {
  stats: Stat[];
}

const CompanyBanner = ({ stats }: CompanyBannerProps) => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-12 md:py-16 overflow-hidden bg-linear-to-br from-primary/5 via-background to-accent/5"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        
        {/* Diagonal animated lines */}
        <div 
          className={`absolute -right-1/4 top-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent transform skew-x-12 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        />
        <div 
          className={`absolute -right-1/3 top-0 w-1/3 h-full bg-linear-to-l from-accent/3 to-transparent transform skew-x-12 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Stats (compact) */}
          <div className="w-full lg:w-auto shrink-0">
            <div className="grid grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-medium mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px h-20 bg-linear-to-b from-transparent via-border to-transparent shrink-0" />

          {/* Right: Text content with 3D slide animation */}
          <div 
            className={`flex-1 perspective-1000 ${
              isVisible ? 'animate-slide-in-3d' : 'opacity-0'
            }`}
          >
            <div className="space-y-3">
              {/* Subtitle badge */}
              <div className={`inline-flex items-center gap-2 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  {t("home.company.subtitle")}
                </span>
              </div>

              {/* Title */}
              <h2 
                className={`text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
                }`}
              >
                {t("home.company.title")}
              </h2>

              {/* Description */}
              <p 
                className={`text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                {t("home.company.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium edge glow effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-linear-to-b from-transparent via-primary/50 to-transparent blur-sm" />
      
      <style jsx>{`
        @keyframes slide-in-3d {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-15deg) translateX(100px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) translateX(0);
          }
        }
        .animate-slide-in-3d {
          animation: slide-in-3d 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default CompanyBanner;
