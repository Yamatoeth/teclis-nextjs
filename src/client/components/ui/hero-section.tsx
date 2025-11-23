"use client";
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  children, 
  className,
  backgroundImage 
}: HeroSectionProps) => {
  return (
    <section className={cn(
      "relative py-24 md:py-32 overflow-hidden",
      backgroundImage ? "" : "bg-gradient-hero",
      className
    )}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-hero mb-6 text-foreground">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {children && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;