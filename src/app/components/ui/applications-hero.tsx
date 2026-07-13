"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, Beaker, Microscope, Zap, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface ApplicationsHeroProps {
  locale: string;
}

// Animated floating particles
const FloatingParticle = ({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) => (
  <div
    className="absolute rounded-full bg-linear-to-r from-primary/20 to-accent/20"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      animation: `float 8s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

// Industry icon with orbit animation
const OrbitIcon = ({ 
  Icon, 
  angle, 
  delay, 
  color 
}: { 
  Icon: React.ElementType; 
  angle: number; 
  delay: number;
  color: string;
}) => {
  const radius = 180;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  
  return (
    <div
      className="absolute w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg transition-transform duration-500 hover:scale-125"
      style={{
        left: `calc(50% + ${x}px - 28px)`,
        top: `calc(50% + ${y}px - 28px)`,
        background: `linear-gradient(135deg, ${color}20, ${color}05)`,
        animation: `pulse 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon className="w-6 h-6" style={{ color }} />
    </div>
  );
};

const ApplicationsHero = ({ locale }: ApplicationsHeroProps) => {
  const t = useTranslations();
  const isLoaded = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    { Icon: Beaker, color: "#22c55e", name: t("applications.industries.foodBeverages.title") },
    { Icon: Microscope, color: "#3b82f6", name: t("applications.industries.lifeSciences.title") },
    { Icon: Zap, color: "#f97316", name: t("applications.industries.oilGas.title") },
    { Icon: Globe, color: "#ec4899", name: t("applications.industries.dailyChemicals.title") },
  ];

  useEffect(() => {
    // Rotate through industries
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [industries.length]);

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
    const contentSection = document.getElementById("industries-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-linear-to-b from-background via-primary/5 to-background"
    >
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at ${30 + mousePosition.x * 40}% ${20 + mousePosition.y * 30}%, hsl(var(--primary) / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at ${70 - mousePosition.x * 30}% ${70 + mousePosition.y * 20}%, hsl(var(--accent) / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 50%, hsl(210 100% 50% / 0.05) 0%, transparent 60%)
          `,
          transition: "background 0.5s ease-out",
        }}
      />

      {/* Animated grid with perspective */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `perspective(500px) rotateX(60deg) translateY(-50%)`,
          transformOrigin: "center top",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingParticle delay={0} size={8} x="10%" y="20%" />
        <FloatingParticle delay={1} size={6} x="85%" y="15%" />
        <FloatingParticle delay={2} size={10} x="75%" y="70%" />
        <FloatingParticle delay={3} size={5} x="20%" y="80%" />
        <FloatingParticle delay={1.5} size={7} x="60%" y="30%" />
        <FloatingParticle delay={2.5} size={9} x="30%" y="60%" />
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      {/* Content */}
      <div className="relative container h-full min-h-[90vh] flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-8 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("applications.page.badge")}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-foreground">{t("applications.page.title.line1")}</span>
              <br />
              <span className="relative">
                <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-[gradientShift_6s_ease-in-out_infinite]">
                  {t("applications.page.title.line2")}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t("applications.page.description")}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button onClick={scrollToContent} className="btn-hero group">
                {t("applications.page.cta.explore")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-ghost-premium" asChild>
                <Link href="/contact" locale={locale}>
                  {t("applications.page.cta.contact")}
                </Link>
              </Button>
            </div>

            {/* Active industry indicator */}
            <div
              className={`mt-12 transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {t("applications.page.servingIndustries")}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndustry(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeIndustry === index
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual element - Orbiting icons */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-100 h-100">
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse" />
              </div>
              
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-3xl bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Orbit ring */}
              <div 
                className="absolute inset-0 rounded-full border border-dashed border-primary/20"
                style={{
                  animation: "spin 30s linear infinite",
                }}
              />

              {/* Orbiting icons */}
              {industries.map((industry, index) => (
                <OrbitIcon
                  key={index}
                  Icon={industry.Icon}
                  angle={index * 90 - 45}
                  delay={index * 0.5}
                  color={industry.color}
                />
              ))}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: "rotate(-45deg)" }}>
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="5%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-30"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="95%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-30"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="95%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-30"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="5%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-30"
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default ApplicationsHero;
