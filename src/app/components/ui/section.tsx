import { JSX, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient' | 'gray' | 'mesh' | 'dots';
  /** niveau de titre principal : h1, h2, h3… */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Alignment: center or left */
  align?: 'center' | 'left';
  /** Add decorative elements */
  decorated?: boolean;
  /** Compact padding */
  compact?: boolean;
}

const Section = ({
  title,
  subtitle,
  description,
  children,
  className,
  background = 'default',
  headingLevel = 'h2',
  align = 'center',
  decorated = false,
  compact = false,
}: SectionProps) => {
  const TitleTag = headingLevel as keyof JSX.IntrinsicElements;

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-secondary/30',
    gradient: 'bg-gradient-hero',
    gray: 'bg-secondary/20',
    mesh: 'bg-mesh-gradient',
    dots: 'bg-background bg-dot-pattern',
  };

  return (
    <section className={cn(
      "relative overflow-hidden",
      compact ? "py-8 md:py-12" : "py-16 md:py-24",
      backgroundClasses[background],
      className
    )}>
      {/* Decorative elements */}
      {decorated && (
        <>
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
          
          {/* Floating accents */}
          <div className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 -right-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
          
          {/* Grid overlay for mesh/dots backgrounds */}
          {(background === 'mesh' || background === 'dots') && (
            <div className="absolute inset-0 bg-linear-to-b from-background/80 via-transparent to-background/80 pointer-events-none" />
          )}
        </>
      )}

      <div className="container relative z-10">
        {(title || subtitle || description) && (
          <div className={cn(
            "mb-12 md:mb-16",
            align === 'center' ? "max-w-3xl mx-auto text-center" : "max-w-2xl"
          )}>
            {/* Subtitle with decorative line */}
            {subtitle && (
              <div className={cn(
                "flex items-center gap-3 mb-6",
                align === 'center' && "justify-center"
              )}>
                <div className="h-px w-8 bg-linear-to-r from-transparent to-primary/50" />
                <p className="text-sm font-semibold text-primary tracking-widest uppercase">
                  {subtitle}
                </p>
                <div className="h-px w-8 bg-linear-to-l from-transparent to-primary/50" />
              </div>
            )}

            {/* Title with gradient accent */}
            {title && (
              <TitleTag className="text-section-title mb-6 text-foreground text-balance">
                {title}
              </TitleTag>
            )}

            {/* Description */}
            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>

      {/* Bottom decorative element */}
      {decorated && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      )}
    </section>
  );
};

export default Section;
