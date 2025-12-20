import { JSX, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient' | 'gray';
  /** niveau de titre principal : h1, h2, h3… */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Section = ({
  title,
  subtitle,
  description,
  children,
  className,
  background = 'default',
  headingLevel = 'h2',
}: SectionProps) => {
  const TitleTag = headingLevel as keyof JSX.IntrinsicElements;

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-secondary/20',
    gradient: 'bg-white',
    gray: 'bg-gray-100',
  };

  return (
    <section className={cn(
      "py-4 md:py-12",
      backgroundClasses[background],
      className
    )}>
      <div className="container">
        {(title || subtitle || description) && (
          <div className="max-w-3xl mx-auto text-center mb-1">
            {subtitle && (
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                {subtitle}
              </p>
            )}

            {title && (
              <TitleTag className="text-section-title mb-6 text-foreground">
                {title}
              </TitleTag>
            )}

            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;
