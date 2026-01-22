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

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("products.trackerHTHP.video.title") || "See TRACKER™ HTHP in Action"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("products.trackerHTHP.video.description") || "Discover how our high temperature and pressure tensiometer delivers precise measurements"}
              </p>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="/images/products/tracker-high-temperature-pressure.mp4"
                title="TRACKER HTHP Product Video"
              
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

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
