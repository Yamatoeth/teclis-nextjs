"use client";

import { useTranslations } from "next-intl";
import { 
  Sparkles, 
  FlaskConical, 
  Droplets, 
  Flame, 
  Building2, 
  Pickaxe, 
  Layers, 
  Fuel, 
  ShieldOff 
} from "lucide-react";

const applicationIcons = [
  Sparkles,      // Daily products
  FlaskConical,  // Product Formulation
  Droplets,      // Cleaning and coating
  Flame,         // Firefighting foams
  Building2,     // Construction materials
  Pickaxe,       // Natural resources
  Layers,        // Froth flotation
  Fuel,          // Enhanced Oil Recovery
  ShieldOff,     // Anti-foams
];

export default function FoamscanApplications() {
  const t = useTranslations();

  const applications = Array.from({ length: 9 }, (_, i) => 
    t(`products.foamscan.applications.list.${i}`)
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-emerald-600/10 to-teal-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-4">
            {t("products.foamscan.applications.subtitle")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.foamscan.applications.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("products.foamscan.applications.description")}
          </p>
        </div>

        {/* Applications Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((application, index) => {
              const Icon = applicationIcons[index];
              return (
                <div
                  key={index}
                  className="group relative flex items-start gap-4 p-5 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-600/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-linear-to-br group-hover:from-emerald-600 group-hover:to-teal-500 transition-all duration-300">
                    <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {application}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-600 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
