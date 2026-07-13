"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface Partner {
  logo: string;
  name: string;
}

interface PartnersMarqueeProps {
  partners: Partner[];
}

const PartnersMarquee = ({ partners }: PartnersMarqueeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Double the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee container */}
      <div
        ref={containerRef}
        className="flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex items-center gap-16 animate-marquee ${
            isHovered ? "paused" : ""
          }`}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group relative shrink-0"
            >
              {/* Logo container */}
              <div className="relative w-40 h-20 flex items-center justify-center transition-all duration-500">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Logo image */}
                <Image
                  src={partner.logo}
                  alt={`${partner.name} - industrial automation partner`}
                  width={160}
                  height={80}
                  quality={60}
                  className="h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-xs font-medium text-muted-foreground whitespace-nowrap bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
    </div>
  );
};

export default PartnersMarquee;
