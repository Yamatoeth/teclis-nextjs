import { getTranslations, setRequestLocale } from "next-intl/server";
import Layout from "@/components/Layout/Layout";
import ProductDetailHero from "@/components/ui/product-detail-hero";
import { ProductCTA } from "@/components/ui/product-detail-sections";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  createProductSchema,
  createBreadcrumbSchema,
  attachSchemaToMetadata,
} from "@/lib/metadata-schemas";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import BubbleAnalyserStats from "./bubbleanalyser-stats";
import BubbleAnalyserFeatures from "./bubbleanalyser-features";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "products/bubbleanalyser",
  });

  const productSchema = createProductSchema({
    name: "BubbleStatistics™ Software",
    description: baseMetadata.description,
    url: `${SITE_URL}/${params.locale}/products/bubbleanalyser`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    productType: "Industrial analysis software",
    category: "Scientific analysis",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/${params.locale}` },
    { name: "Products", url: `${SITE_URL}/${params.locale}/products` },
    { name: "BubbleStatistics™", url: `${SITE_URL}/${params.locale}/products/bubbleanalyser` },
  ]);

  return attachSchemaToMetadata(baseMetadata, [productSchema, breadcrumbSchema]);
};

export default async function BubbleAnalyser({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <Layout>
      {/* Hero Section */}
      <ProductDetailHero
        locale={locale}
        breadcrumbLabel={t("nav.products_sub.bubble")}
        badge={t("products.bubbleAnalyser.overview.subtitle")}
        subtitle={t("products.bubbleAnalyser.overview.subtitle")}
        title={t("products.bubbleAnalyser.overview.title")}
        description={t("products.bubbleAnalyser.overview.description")}
        highlights={[
          "Smart design with powerful algorithms",
          "Bubble size and distribution statistics",
          "Automatic image binarization",
          "Compatible with FOAMSCAN™",
        ]}
        image="/images/products/rheoscan-interface-rheometer.avif"
        imageAlt="BubbleStatistics™ Software"
        accentColor="from-sky-600 to-cyan-500"
      />

      {/* Statistics Section */}
      <BubbleAnalyserStats />

      {/* Features Section */}
      <BubbleAnalyserFeatures />

      {/* CTA */}
      <ProductCTA
        locale={locale}
        accentColor="from-sky-600 to-cyan-500"
      />
    </Layout>
  );
}

