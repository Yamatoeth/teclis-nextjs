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
import TrackerHTPCapabilities from "./trackerhtp-capabilities";
import TrackerHTPModes from "./trackerhtp-modes";
import TrackerHTPApplications from "./trackerhtp-applications";
import TrackerHTPSpecs from "./trackerhtp-specs";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "products/trackerhtp",
  });

  const productSchema = createProductSchema({
    name: "Tracker HTP",
    description: baseMetadata.description,
    url: `${SITE_URL}/products/trackerhtp`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    productType: "High temperature and pressure tensiometer",
    category: "Interfacial tension measurement",
  });

  return attachSchemaToMetadata(baseMetadata, productSchema);
};

export default async function TrackerHTHP({
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
        breadcrumbLabel={t("nav.products_sub.tracker_htp")}
        badge={t("products.trackerHTHP.overview.subtitle")}
        subtitle={t("products.trackerHTHP.overview.subtitle")}
        title={t("products.trackerHTHP.overview.title")}
        description={t("products.trackerHTHP.overview.description")}
        highlights={[
          t("products.trackerHTHP.features.0"),
          t("products.trackerHTHP.features.1"),
          t("products.trackerHTHP.features.2"),
          t("products.trackerHTHP.features.11"),
        ]}
        image="/images/products/tracker-hthp.avif"
        imageAlt="TRACKER™ HTHP Tensiometer"
        accentColor="from-red-600 to-orange-500"
        pdfUrl="/pdf/tracker-hthp-catalog.pdf"
      />

      {/* Measurement Capabilities */}
      <TrackerHTPCapabilities />

      {/* Measurement Modes */}
      <TrackerHTPModes />

      {/* Applications */}
      <TrackerHTPApplications />

      {/* Technical Specifications */}
      <TrackerHTPSpecs />

      {/* CTA */}
      <ProductCTA
        locale={locale}
        pdfUrl="/pdf/tracker-hthp-catalog.pdf"
        accentColor="from-red-600 to-orange-500"
      />
    </Layout>
  );
}
