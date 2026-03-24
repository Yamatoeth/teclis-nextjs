"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { researchAreas } from "@/types/applications";

const ResearchAreasGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500", 
    "from-amber-500 to-orange-500",
    "from-emerald-500 to-teal-500",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {researchAreas.map((area, index) => {
        const Icon = area.icon;
        const isHovered = hoveredIndex === index;
        const gradient = gradients[index % gradients.length];
        
        return (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Card */}
            <div 
              className={`
                relative h-full p-6 rounded-2xl border transition-all duration-500
                ${isHovered 
                  ? "bg-card border-primary/30 shadow-xl shadow-primary/10 -translate-y-2" 
                  : "bg-card/50 border-border/50 hover:border-border"
                }
              `}
            >
              {/* Gradient background on hover */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl bg-linear-to-br ${gradient} opacity-0 
                  transition-opacity duration-500
                  ${isHovered ? "opacity-5" : ""}
                `}
              />

              {/* Icon */}
              <div 
                className={`
                  relative w-14 h-14 rounded-xl flex items-center justify-center mb-5
                  transition-all duration-500 bg-linear-to-br ${gradient}
                  ${isHovered ? "scale-110 shadow-lg" : ""}
                `}
                style={{
                  boxShadow: isHovered ? `0 10px 40px -10px var(--tw-shadow-color)` : undefined,
                }}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {area.description}
              </p>

              {/* Applications badges */}
              <div className="flex flex-wrap gap-2">
                {area.applications.map((app, appIndex) => (
                  <Badge
                    key={appIndex}
                    variant="secondary"
                    className={`
                      text-xs transition-all duration-300
                      ${isHovered 
                        ? "bg-primary/10 text-primary border-primary/20" 
                        : "bg-secondary/50"
                      }
                    `}
                  >
                    {app}
                  </Badge>
                ))}
              </div>

              {/* Hover indicator line */}
              <div 
                className={`
                  absolute bottom-0 left-4 right-4 h-1 rounded-full bg-linear-to-r ${gradient}
                  transition-all duration-500
                  ${isHovered ? "opacity-100" : "opacity-0"}
                `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResearchAreasGrid;
