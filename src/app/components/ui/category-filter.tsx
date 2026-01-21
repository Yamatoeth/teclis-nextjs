"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Droplets, Wind, Beaker, LayoutGrid } from "lucide-react";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const t = useTranslations();

  const categories = [
    { 
      id: "all", 
      label: t("products.page.filters.all"),
      icon: LayoutGrid,
      description: t("products.page.filters.allDesc")
    },
    { 
      id: "tension", 
      label: t("products.page.filters.tension"),
      icon: Droplets,
      description: t("products.page.filters.tensionDesc")
    },
    { 
      id: "foam", 
      label: t("products.page.filters.foam"),
      icon: Wind,
      description: t("products.page.filters.foamDesc")
    },
    { 
      id: "rheology", 
      label: t("products.page.filters.rheology"),
      icon: Beaker,
      description: t("products.page.filters.rheologyDesc")
    },
  ];

  return (
    <div className="w-full">
      {/* Desktop filter - horizontal tabs */}
      <div className="hidden md:flex justify-center">
        <div className="inline-flex items-center p-1.5 bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border/50">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium
                  transition-all duration-300 ease-out
                  ${isActive 
                    ? "bg-background text-foreground shadow-lg shadow-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl border border-primary/20 pointer-events-none" />
                )}
                
                <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-primary" : ""}`} />
                <span>{category.label}</span>
                
                {/* Glow effect when active */}
                {isActive && (
                  <div className="absolute -inset-px rounded-xl bg-linear-to-r from-primary/10 via-accent/5 to-primary/10 blur-sm pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile filter - cards grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                relative flex flex-col items-center gap-2 p-4 rounded-xl text-center
                transition-all duration-300 ease-out border
                ${isActive 
                  ? "bg-primary/5 border-primary/30 text-foreground" 
                  : "bg-card/50 border-border/50 text-muted-foreground hover:border-primary/20 hover:bg-card"
                }
              `}
            >
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center
                transition-colors duration-300
                ${isActive 
                  ? "bg-primary/10 text-primary" 
                  : "bg-secondary text-muted-foreground"
                }
              `}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Category description (desktop only) */}
      <div className="hidden lg:block mt-6 text-center">
        <p className="text-sm text-muted-foreground max-w-lg mx-auto">
          {categories.find(c => c.id === activeCategory)?.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryFilter;
