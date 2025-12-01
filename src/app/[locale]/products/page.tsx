import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import ProductListClient from '../products/ProductListClient';
import { Link } from '@/i18n/routing';
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from 'next';

export async function generateMetadata({params}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('products.title'),
    description: t('products.description')
  };
}

export default async function Products({ params }: {params: { locale: string } }) {
  const locale = await params.locale
  const t = await getTranslations({locale});

  return (
    <Layout>
      {/* Products Section */}
      <Section headingLevel="h1">
        <ProductListClient />
      </Section>

      {/* Features Overview */}
      <Section
        headingLevel="h2"
        background="muted"
        subtitle={t('chooseTeclis.subtitle')}
        title={t('chooseTeclis.title')}
        description={t('chooseTeclis.description')}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{t('chooseTeclis.p1.title')}</h3>
            <p className="text-muted-foreground">
              {t('chooseTeclis.p1.description')}
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{t('chooseTeclis.p2.title')}</h3>
            <p className="text-muted-foreground">
              {t('chooseTeclis.p2.description')}
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{t('chooseTeclis.p3.title')}</h3>
            <p className="text-muted-foreground">
              {t('chooseTeclis.p3.description')}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        headingLevel="h2"
        subtitle={t("products.subtitle")}
        title={t("products.title")}
        description={t("products.description")}
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Ces boutons sont statiques pour SSR, si interaction spécifique, les déplacer dans un sous-composant client */}
            <Link href="/contact" className="btn-hero">
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
