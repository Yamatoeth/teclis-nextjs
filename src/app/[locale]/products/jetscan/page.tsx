import { getTranslations, setRequestLocale } from "next-intl/server";
import Layout from "@/components/Layout/Layout";
import ProductDetailHero from "@/components/ui/product-detail-hero";
import { ProductCTA } from "@/components/ui/product-detail-sections";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  createProductSchema,
  attachSchemaToMetadata,
} from "@/lib/metadata-schemas";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import JetscanCapabilities from "./jetscan-capabilities";
import JetscanMeasurements from "./jetscan-measurements";
import JetscanApplications from "./jetscan-applications";
import JetscanAutomation from "./jetscan-automation";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "products/jetscan",
  });

  const productSchema = createProductSchema({
    name: "JETSCAN™ Surface Rheology",
    description: baseMetadata.description,
    url: `${SITE_URL}/products/jetscan`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    productType: "Foam and defoamer testing instrumentation",
    category: "Defoamer efficiency analysis",
  });

  return attachSchemaToMetadata(baseMetadata, productSchema);
};

export default async function JetScan({
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
        breadcrumbLabel={t("nav.products_sub.jetscan")}
        badge={t("products.jetscan.overview.subtitle")}
        subtitle={t("products.jetscan.overview.subtitle")}
        title={t("products.jetscan.overview.title")}
        description={t("products.jetscan.overview.description")}
        highlights={[
          t("products.jetscan.overview.features.0"),
          t("products.jetscan.overview.features.2"),
          t("products.jetscan.overview.features.4"),
          t("products.jetscan.overview.features.5"),
        ]}
        image="/images/products/jetscan-defoamer-tester.avif"
        imageAlt="JETSCAN™ Defoamer Tester"
        accentColor="from-violet-600 to-purple-500"
        pdfUrl="/pdf/jetscan-catalog.pdf"
      />

      {/* Capabilities Section */}
      <JetscanCapabilities />

      {/* Measurements Section */}
      <JetscanMeasurements />

      {/* Applications Section */}
      <JetscanApplications />

      {/* Automation Benefits Section */}
      <JetscanAutomation />

      {/* CTA */}
      <ProductCTA
        locale={locale}
        pdfUrl="/pdf/jetscan-catalog.pdf"
        accentColor="from-violet-600 to-purple-500"
      />
    </Layout>
  );
}
