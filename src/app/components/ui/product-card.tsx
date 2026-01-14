"use client";
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/routing';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ProductCardProps {
  productKey: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  features?: string[];
  price?: string;
  badge?: string;
  href?: string;
  to?: string;
  onDownload?: () => void;
}

const ProductCard = ({ 
  productKey,
  title, 
  description, 
  image, 
  video,
  features, 
  price, 
  badge,
  href,
  to,
  onDownload
}: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.remove("opacity-0", "translate-y-4");
    });
  }, []);

 const t = useTranslations();
  const learnMoreLabel = `${t("learnMoreAbout")} ${t(`productsOverview.${productKey}.title`)}`;
  const isLongLabel = learnMoreLabel.length > 40;

  return (
    <div
      ref={cardRef}
      className="card-premium group cursor-pointer flex flex-col h-full opacity-0 translate-y-4 transition-all duration-700 ease-out"
    >
      {/* Image placeholder */}
     <div className="relative w-full h-48 md:h-56 lg:h-64 mb-6 rounded-xl overflow-hidden bg-white border-radius shadow-xs group-hover:shadow-lg group-hover:scale-[1.02] transition-shadow duration-300">
       {video ? (
         <video
           src={video}
           autoPlay
           loop
           muted
           playsInline
           className="w-full h-full object-contain rounded-xl"
         />
       ) : (
         <Image
           src={image ?? ""}
           alt={title}
           fill
           sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
           style={{ objectFit: "contain" }}
           className="rounded-xl"
         />
       )}

       {badge && (
         <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
           {badge}
         </Badge>
       )}
     </div>

      {/* Content area: will grow and keep buttons pinned below */}
      <div className="flex-1 flex flex-col">
        <div className="space-y-4 flex flex-col">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {t(`productsOverview.${productKey}.title`)}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(`productsOverview.${productKey}.description`)}
            </p>
          </div>

          {features && features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">{t("keyFeatures")}</h4>
              <ul className="space-y-1">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0" />
                    {t(`productsOverview.${productKey}.features.${index}`)}
                  </li>
                ))}
              </ul>
            </div>
          )}         
        </div>
      </div>

      {/* Buttons pinned at the bottom as a sibling so they always sit at the card's base */}
      {price && (
            <div className="text-lg font-semibold text-primary mt-6">
              {t("ContactforQuote")}
            </div>
          )}
      <div className="flex flex-col sm:flex-row gap-2 pt-2 items-stretch">
        {to && (
          <Link
            href={to}
            className={`flex-1 group/btn inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors ${isLongLabel ? "text-sm" : "text-base"}`}
          >
            {learnMoreLabel}
            <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        )}
        
        {onDownload && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onDownload}
            className="text-primary hover:text-primary-hover h-full flex items-center justify-center"
          >
            <Download size={16} className="mr-2" />
            PDF
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
