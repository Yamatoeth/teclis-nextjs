import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import { TECLIS_SITE_URL as SITE_URL, TECLIS_SITE_NAME as SITE_NAME } from "@/lib/constants";

export const generateMetadata = async (
  props: { params: Promise<{ locale: string }> }
) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "services"
  });

  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": baseMetadata.title,
    "description": baseMetadata.description,
    "url": `${SITE_URL}/services`,
    "isPartOf": {
      "@type": "WebSite",
      "name": SITE_NAME,
      "url": SITE_URL
    }
  };

  return {
    ...baseMetadata,
    other: {
      ...baseMetadata.other,
      "script:ld+json": JSON.stringify(servicesPageSchema)
    }
  };
};

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
   const {locale} = await params;
   setRequestLocale(locale);
  const t = await getTranslations({locale});

  return (
    <Layout>
      {/* Introduction */}
      <Section
        headingLevel="h1"
        subtitle={t('services.introduction.subtitle')}
        title={t('services.introduction.title')}
        description={t('services.introduction.description')}
      >
        <div className="mt-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {t('services.introduction.paragraph')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div 
              className="h-48 bg-muted rounded-lg flex items-center justify-center"
            >
              <span className="text-muted-foreground">{t('services.introduction.image1')}</span>
            </div>
            <div 
              className="h-48 bg-muted rounded-lg flex items-center justify-center"
            >
              <span className="text-muted-foreground">{t('services.introduction.image2')}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Laboratory services */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t('services.laboratory.subtitle')}
        title={t('services.laboratory.title')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('services.laboratory.surface.title')}</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>{t('services.laboratory.surface.item1')}</li>
              <li>{t('services.laboratory.surface.item2')}</li>
              <li>{t('services.laboratory.surface.item3')}</li>
              <li>{t('services.laboratory.surface.item4')}</li>
              <li>{t('services.laboratory.surface.item5')}</li>
              <li>{t('services.laboratory.surface.item6')}</li>
              <li>{t('services.laboratory.surface.item7')}</li>
              <li>{t('services.laboratory.surface.item8')}</li>
              <li>{t('services.laboratory.surface.item9')}</li>
              <li>{t('services.laboratory.surface.item10')}</li>
            </ul>
          </div>
          <div className="card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('services.laboratory.foam.title')}</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>{t('services.laboratory.foam.item1')}</li>
              <li>{t('services.laboratory.foam.item2')}</li>
              <li>{t('services.laboratory.foam.item3')}</li>
              <li>{t('services.laboratory.foam.item4')}</li>
              <li>{t('services.laboratory.foam.item5')}</li>
              <li>{t('services.laboratory.foam.item6')}</li>
              <li>{t('services.laboratory.foam.item7')}</li>
              <li>{t('services.laboratory.foam.item8')}</li>
            </ul>
          </div>
        </div>      
      </Section>

      {/* Technical services */}
      <Section headingLevel="h2" subtitle={t('services.technical.subtitle')} title={t('services.technical.title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('services.technical.card1.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('services.technical.card1.description')}</p>
          </div>
          <div className="card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('services.technical.card2.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('services.technical.card2.description')}</p>
          </div>
          <div className="card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('services.technical.card3.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('services.technical.card3.description')}</p>
          </div>
          <div className="card-premium">
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('services.technical.card4.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('services.technical.card4.description')}</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
