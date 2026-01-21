import Layout from "@/components/Layout/Layout";
import { setRequestLocale } from "next-intl/server";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import ServicesHero from "./services-hero";
import ServicesLaboratory from "./services-laboratory";
import ServicesTechnical from "./services-technical";

export const generateMetadata = async (
  props: { params: Promise<{ locale: string }> }
) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "services",
  });

  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: baseMetadata.title,
    description: baseMetadata.description,
    url: `${SITE_URL}/services`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return {
    ...baseMetadata,
    other: {
      ...baseMetadata.other,
      "script:ld+json": JSON.stringify(servicesPageSchema),
    },
  };
};

export default async function Services({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Layout>
      {/* Hero Section */}
      <ServicesHero locale={locale} />

      {/* Laboratory Services */}
      <ServicesLaboratory />

      {/* Technical Services */}
      <ServicesTechnical locale={locale} />
    </Layout>
  );
}
