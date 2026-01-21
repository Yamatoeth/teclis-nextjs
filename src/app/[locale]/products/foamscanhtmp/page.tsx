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
import FoamscanHTMPMeasurements from "./foamscanhtmp-measurements";
import FoamscanHTMPFeatures from "./foamscanhtmp-features";
import FoamscanHTMPApplications from "./foamscanhtmp-applications";
import FoamscanHTMPSpecs from "./foamscanhtmp-specs";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "products/foamscanhtmp",
  });

  const productSchema = createProductSchema({
    name: "FOAMSCAN™ HT/MP Foam Analyzer",
    description: baseMetadata.description,
    url: `${SITE_URL}/products/foamscanhtmp`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    productType: "Foam analysis instrumentation",
    category: "High temperature and pressure foam analysis",
  });

  return attachSchemaToMetadata(baseMetadata, productSchema);
};

export default async function FoamScanHTMP({
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
        breadcrumbLabel={t("nav.products_sub.foamscan_htmp")}
        badge={t("products.foamscanHTMP.overview.subtitle")}
        subtitle={t("products.foamscanHTMP.overview.subtitle")}
        title={t("products.foamscanHTMP.overview.title")}
        description={t("products.foamscanHTMP.overview.description")}
        highlights={[
          t("products.foamscanHTMP.features.list.0"),
          t("products.foamscanHTMP.features.list.1"),
          t("products.foamscanHTMP.features.list.4"),
          t("products.foamscanHTMP.features.list.6"),
        ]}
        image="/images/products/foamscan-htmp.avif"
        imageAlt="FOAMSCAN™ HTMP Foam Analyzer"
        accentColor="from-orange-600 to-amber-500"
        pdfUrl="/pdf/foamscan-htmp-catalog.pdf"
      />

      {/* Measurements Section */}
      <FoamscanHTMPMeasurements />

      {/* Special Features Section */}
      <FoamscanHTMPFeatures />

      {/* Applications Section */}
      <FoamscanHTMPApplications />

      {/* Technical Specifications */}
      <FoamscanHTMPSpecs />

      {/* CTA */}
      <ProductCTA
        locale={locale}
        pdfUrl="/pdf/foamscan-htmp-catalog.pdf"
        accentColor="from-orange-600 to-amber-500"
      />
    </Layout>
  );
}
