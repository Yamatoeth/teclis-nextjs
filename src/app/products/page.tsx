"use client";
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import ProductListClient from '../products/ProductListClient';
import { useTranslation } from 'react-i18next';
import { Link } from '@App/useRouter';

const Products = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Products Section */}
      <Section>
        <ProductListClient />
      </Section>

      {/* Features Overview */}
      <Section
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
        subtitle={t("products.subtitle")}
        title={t("products.title")}
        description={t("products.description")}
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Ces boutons sont statiques pour SSR, si interaction spécifique, les déplacer dans un sous-composant client */}
            <Link to="/contact" className="btn-hero">
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Products;