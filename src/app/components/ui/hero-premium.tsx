"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeroPremiumProps {
  locale: string;
}

const HeroPremium = ({ locale }: HeroPremiumProps) => {
  const t = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-hero"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-80" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <div
          className="absolute -right-32 -top-32 w-150 h-150 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        {/* Accent blob */}
        <div
          className="absolute -left-20 bottom-1/4 w-100 h-100 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Floating elements with animation */}
        <div
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-primary/30"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-accent/40"
          style={{ animation: "float 8s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-primary/25"
          style={{ animation: "float 7s ease-in-out infinite 0.5s" }}
        />

        {/* Decorative lines */}
        <svg
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-20 lg:py-0">
          {/* Left column - Text content */}
          <div className="space-y-8 max-w-2xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                {t("home.hero.badge") || "Scientific Instrumentation Excellence"}
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`text-hero text-balance transition-all duration-700 delay-100 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">{t("home.hero.title")}</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t("home.hero.description")}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link href="/products" locale={locale}>
                <Button className="btn-hero group">
                  <span>{t("cta.discover")}</span>
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
              <Link href="/contact" locale={locale}>
                <Button className="btn-ghost-premium group">
                  <Play size={18} className="mr-2" />
                  <span>{t("cta.requestDemo")}</span>
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex items-center gap-8 pt-8 transition-all duration-700 delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">25+</span>
                <span className="text-sm text-muted-foreground">
                  Years Experience
                </span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">100+</span>
                <span className="text-sm text-muted-foreground">
                  Research Partners
                </span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">95%</span>
                <span className="text-sm text-muted-foreground">
                  Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-95"
            }`}
          >
            {/* Product showcase card */}
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />

              {/* Main product image container */}
              <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent/30 rounded-br-3xl" />

                {/* Product image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-secondary/50 to-secondary/20">
                  <Image
                    src="/images/products/tracker-tensiometer.avif"
                    alt="TRACKER Tensiometer"
                    fill
                    className="object-contain p-4"
                    priority
                  />

                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                </div>

                {/* Product info */}
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    TRACKER™ Tensiometer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced surface tension analysis with unparalleled precision
                  </p>
                </div>

                {/* Quick stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-xl bg-secondary/50">
                    <span className="block text-lg font-bold text-primary">
                      0.01
                    </span>
                    <span className="text-xs text-muted-foreground">
                      mN/m Accuracy
                    </span>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary/50">
                    <span className="block text-lg font-bold text-accent">
                      Auto
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Calibration
                    </span>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary/50">
                    <span className="block text-lg font-bold text-primary">
                      USB
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Connectivity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-700 delay-500 cursor-pointer ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xs font-medium uppercase tracking-wider">
          Scroll to explore
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </div>
  );
};

export default HeroPremium;
