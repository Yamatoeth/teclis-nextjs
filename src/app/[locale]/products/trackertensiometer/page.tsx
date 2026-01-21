import { getTranslations, setRequestLocale } from "next-intl/server";
import Layout from "@/components/Layout/Layout";
import ProductDetailHero from "@/components/ui/product-detail-hero";
import {
  ProductMeasurementList,
  ProductTwoColumnFeature,
  ProductFeaturesGrid,
  ProductModuleShowcase,
  ProductCTA,
} from "@/components/ui/product-detail-sections";
import { trackertensiometer } from "@/types/products";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  createProductSchema,
  attachSchemaToMetadata,
} from "@/lib/metadata-schemas";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "products/trackertensiometer",
  });

  const productSchema = createProductSchema({
    name: "Tracker Tensiometer",
    description: baseMetadata.description,
    url: `${SITE_URL}/products/trackertensiometer`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    productType: "Drop tensiometry instrumentation",
    category: "Surface and interfacial tension analysis",
  });

  return attachSchemaToMetadata(baseMetadata, productSchema);
};

export default async function TrackerTensiometer({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const measurements = trackertensiometer.measurements.map(
    (_, index) => `products.trackerTensiometer.measurements.items.${index}`
  );

  const applications = trackertensiometer.applications.map((_, index) => ({
    titleKey: `products.trackerTensiometer.applications.cards.${index}.title`,
    descriptionKey: `products.trackerTensiometer.applications.cards.${index}.description`,
  }));

  const modules = trackertensiometer.modules.map((module, index) => ({
    titleKey: `products.trackerTensiometer.modules.items.${index}.title`,
    descriptionKey: `products.trackerTensiometer.modules.items.${index}.description`,
    image: module.image,
  }));

  const modularFeatures = trackertensiometer.moduleFeatures.map(
    (_, index) => `products.trackerTensiometer.modular.features.${index}`
  );

  return (
    <Layout>
      {/* Hero Section */}
      <ProductDetailHero
        locale={locale}
        breadcrumbLabel={t("nav.products_sub.tracker")}
        badge={t("products.tracker.hero.subtitle")}
        subtitle={t("products.trackerTensiometer.hero.subtitle")}
        title={t("products.trackerTensiometer.hero.title")}
        description={t("products.trackerTensiometer.hero.paragraph1")}
        highlights={[
          t("products.trackerTensiometer.hero.check1"),
          t("products.trackerTensiometer.hero.check2"),
          t("products.trackerTensiometer.hero.check3"),
        ]}
        image="/images/products/Tracker-tensiometer.avif"
        imageAlt="TRACKER™ Standard Drop Tensiometer"
        accentColor="from-blue-600 to-cyan-500"
        pdfUrl="/pdf/tracker-catalog.pdf"
      />

      {/* Measurements */}
      <ProductMeasurementList
        titleKey="products.trackerTensiometer.measurements.title"
        subtitleKey="products.trackerTensiometer.measurements.subtitle"
        measurements={measurements}
        accentColor="from-blue-600 to-cyan-500"
      />

      {/* Drop Shape Analysis */}
      <ProductTwoColumnFeature
        titleKey="products.trackerTensiometer.dropShape.title"
        subtitleKey="products.trackerTensiometer.dropShape.subtitle"
        descriptionKey="products.trackerTensiometer.dropShape.description"
        image="/images/products/drop-shape-analysis.avif"
        imageAlt="Drop Shape Analysis"
        accentColor="from-blue-600 to-cyan-500"
      />

      {/* Modular Design */}
      <ProductTwoColumnFeature
        titleKey="products.trackerTensiometer.modular.title"
        subtitleKey="products.trackerTensiometer.modular.subtitle"
        image="/images/products/smart-modular-design.avif"
        imageAlt="Smart Modular Design"
        reversed
        features={modularFeatures}
        accentColor="from-blue-600 to-cyan-500"
      />

      {/* Applications */}
      <ProductFeaturesGrid
        titleKey="products.trackerTensiometer.applications.title"
        subtitleKey="products.trackerTensiometer.applications.subtitle"
        features={applications}
        columns={3}
        accentColor="from-blue-600 to-cyan-500"
      />

      {/* Modules Showcase */}
      <ProductModuleShowcase
        titleKey="products.trackerTensiometer.modules.title"
        subtitleKey="products.trackerTensiometer.modules.subtitle"
        descriptionKey="products.trackerTensiometer.modules.description"
        modules={modules}
        accentColor="from-blue-600 to-cyan-500"
      />

      {/* CTA */}
      <ProductCTA
        locale={locale}
        pdfUrl="/pdf/tracker-catalog.pdf"
        accentColor="from-blue-600 to-cyan-500"
      />
    </Layout>
  );
}
