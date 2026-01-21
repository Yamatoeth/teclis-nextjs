"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Beaker, Microscope, FlaskConical, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface ProductsHeroProps {
  locale: string;
}

const ProductsHero = ({ locale }: ProductsHeroProps) => {
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

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-grid");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating icons data
  const floatingIcons = [
    { Icon: Beaker, delay: 0, position: { top: "15%", left: "8%" } },
    { Icon: Microscope, delay: 0.5, position: { top: "25%", right: "12%" } },
    { Icon: FlaskConical, delay: 1, position: { bottom: "30%", left: "15%" } },
    { Icon: Atom, delay: 1.5, position: { bottom: "20%", right: "8%" } },
  ];

  return (
    <div
      ref={heroRef}
      className="relative min-h-[70vh] w-full overflow-hidden bg-linear-to-b from-background via-secondary/20 to-background"
    >
      {/* Animated mesh gradient background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at ${30 + mousePosition.x * 20}% ${20 + mousePosition.y * 20}%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at ${70 - mousePosition.x * 20}% ${60 + mousePosition.y * 10}%, hsl(var(--accent) / 0.1) 0%, transparent 50%)
          `,
          transition: "background 0.5s ease-out",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${mousePosition.x * 10 - 5}px, ${mousePosition.y * 10 - 5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Floating scientific icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className="absolute hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30"
          style={{
            ...position,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${delay}s`,
            opacity: isLoaded ? 0.6 : 0,
            transition: "opacity 1s ease-out",
            transitionDelay: `${delay + 0.5}s`,
          }}
        >
          <Icon className="w-7 h-7 text-primary/60" />
        </div>
      ))}

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

      {/* Content container */}
      <div className="relative container h-full min-h-[70vh] flex flex-col justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-8 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {t("products.page.badge")}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-foreground">{t("products.page.title.line1")}</span>
            <br />
            <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-[gradientShift_6s_ease-in-out_infinite]">
              {t("products.page.title.line2")}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {t("products.page.description")}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              onClick={scrollToProducts}
              className="btn-hero group"
            >
              {t("products.page.cta.explore")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="btn-ghost-premium"
              asChild
            >
              <Link href="/contact" locale={locale}>
                {t("products.page.cta.contact")}
              </Link>
            </Button>
          </div>

          {/* Stats row */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: "6+", label: t("products.page.stats.instruments") },
              { value: "25+", label: t("products.page.stats.years") },
              { value: "100+", label: t("products.page.stats.institutions") },
              { value: "24/7", label: t("products.page.stats.support") },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default ProductsHero;
