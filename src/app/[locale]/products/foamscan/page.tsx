import { getTranslations, setRequestLocale } from "next-intl/server";
import Layout from "@/components/Layout/Layout";
import ProductDetailHero from "@/components/ui/product-detail-hero";
import { ProductCTA, ProductRelatedApplications } from "@/components/ui/product-detail-sections";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  createProductSchema,
  createBreadcrumbSchema,
  attachSchemaToMetadata,
} from "@/lib/metadata-schemas";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import FoamscanFeatures from "./foamscan-features";
import FoamscanApplications from "./foamscan-applications";

export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "products/foamscan",
  });

  const productSchema = createProductSchema({
    name: "FOAMSCAN™ Foam Analyzer",
    description: baseMetadata.description,
    url: `${SITE_URL}/${params.locale}/products/foamscan`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    productType: "Foam analysis instrumentation",
    category: "Scientific analysis",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/${params.locale}` },
    { name: "Products", url: `${SITE_URL}/${params.locale}/products` },
    { name: "FOAMSCAN™", url: `${SITE_URL}/${params.locale}/products/foamscan` },
  ]);

  return attachSchemaToMetadata(baseMetadata, [productSchema, breadcrumbSchema]);
};

export default async function FoamScan({
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
        breadcrumbLabel={t("nav.products_sub.foamscan")}
        badge={t("products.foamscan.hero.subtitle")}
        subtitle={t("products.foamscan.hero.subtitle")}
        title={t("products.foamscan.hero.title")}
        description={t("products.foamscan.hero.paragraph1")}
        highlights={[
          t("products.foamscan.hero.list.capacity"),
          t("products.foamscan.hero.list.density"),
          t("products.foamscan.hero.list.stability"),
          t("products.foamscan.hero.list.antifoam"),
          t("products.foamscan.hero.list.structure"),
        ]}
        image="/images/products/foamscan2.png"
        imageAlt="FOAMSCAN™ Foam Analyzer"
        accentColor="from-emerald-600 to-teal-500"
        pdfUrl="/pdf/foamscan-catalog.pdf"
      />

      {/* Features Section - Custom component for complex layout */}
      <FoamscanFeatures />

      {/* Applications */}
      <FoamscanApplications />

      {/* Related Applications */}
      <ProductRelatedApplications accentColor="from-emerald-600 to-teal-500" />

      {/* CTA */}
      <ProductCTA
        locale={locale}
        pdfUrl="/pdf/foamscan-catalog.pdf"
        accentColor="from-emerald-600 to-teal-500"
      />
    </Layout>
  );
}
