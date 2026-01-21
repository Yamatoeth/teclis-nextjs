"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { FileText, Globe, GraduationCap, Building2 } from "lucide-react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

const AnimatedCounter = ({ 
  value, 
  suffix, 
  isVisible 
}: { 
  value: number; 
  suffix: string;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const ImpactStats = () => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: 1000, suffix: "+", label: t("applications.stats.publications"), icon: FileText },
    { value: 50, suffix: "+", label: t("applications.stats.countries"), icon: Globe },
    { value: 200, suffix: "+", label: t("applications.stats.universities"), icon: GraduationCap },
    { value: 150, suffix: "+", label: t("applications.stats.partners"), icon: Building2 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`
                group relative p-6 lg:p-8 rounded-2xl text-center
                bg-card/50 backdrop-blur-sm border border-border/50
                hover:border-primary/30 hover:bg-card
                transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
              `}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              {/* Value */}
              <div className="text-3xl lg:text-5xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Label */}
              <div className="text-sm lg:text-base text-muted-foreground">
                {stat.label}
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactStats;
