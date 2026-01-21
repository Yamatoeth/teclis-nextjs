import { Target, Microscope, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import SubApplicationPage from "@/components/ui/sub-application-page";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  createApplicationPageSchema,
  attachSchemaToMetadata,
} from "@/lib/metadata-schemas";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "foodBeverages",
  });

  const applicationPageSchema = createApplicationPageSchema({
    name: baseMetadata.title as string,
    description: baseMetadata.description,
    url: `${SITE_URL}/applications/foodbeverages`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
  });

  return attachSchemaToMetadata(baseMetadata, applicationPageSchema);
};

export default async function FoodBeverages({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const applications = [
    {
      image: "/images/foodbeverages/emulsion.avif",
      titleKey: "applications.data.foodBeverages.applications.0.title",
      descriptionKey: "applications.data.foodBeverages.applications.0.description",
    },
    {
      image: "/images/foodbeverages/lipids.avif",
      titleKey: "applications.data.foodBeverages.applications.1.title",
      descriptionKey: "applications.data.foodBeverages.applications.1.description",
    },
    {
      image: "/images/foodbeverages/capsules.avif",
      titleKey: "applications.data.foodBeverages.applications.2.title",
      descriptionKey: "applications.data.foodBeverages.applications.2.description",
    },
    {
      image: "/images/foodbeverages/proteins.avif",
      titleKey: "applications.data.foodBeverages.applications.3.title",
      descriptionKey: "applications.data.foodBeverages.applications.3.description",
    },
    {
      image: "/images/foodbeverages/beverages.avif",
      titleKey: "applications.data.foodBeverages.applications.4.title",
      descriptionKey: "applications.data.foodBeverages.applications.4.description",
    },
    {
      image: "/images/foodbeverages/surfactant.avif",
      titleKey: "applications.data.foodBeverages.applications.5.title",
      descriptionKey: "applications.data.foodBeverages.applications.5.description",
    },
    {
      image: "/images/foodbeverages/foams.avif",
      titleKey: "applications.data.foodBeverages.applications.6.title",
      descriptionKey: "applications.data.foodBeverages.applications.6.description",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-5 h-5" />,
      titleKey: "applications.data.foodBeverages.benefits.cards.quality.title",
      textKey: "applications.data.foodBeverages.benefits.cards.quality.text",
    },
    {
      icon: <Microscope className="w-5 h-5" />,
      titleKey: "applications.data.foodBeverages.benefits.cards.innovation.title",
      textKey: "applications.data.foodBeverages.benefits.cards.innovation.text",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      titleKey: "applications.data.foodBeverages.benefits.cards.safety.title",
      textKey: "applications.data.foodBeverages.benefits.cards.safety.text",
    },
  ];

  const products = [
    t("Metadata.trackertensiometer.title"),
    t("Metadata.foamscan.title"),
    t("Metadata.jetscan.title"),
  ];

  return (
    <Layout>
      <SubApplicationPage
        locale={locale}
        breadcrumbKey="nav.applications_sub.foodbeverages"
        heroImage="/images/foodbeverages/emulsion.avif"
        badge={t("applications.data.foodBeverages.header.subtitle")}
        title={t("applications.data.foodBeverages.header.title")}
        subtitle={t("applications.data.foodBeverages.header.subtitle")}
        description={t("applications.data.foodBeverages.header.description")}
        products={products}
        applications={applications}
        benefits={benefits}
        accentColor="from-emerald-600 to-teal-500"
      />
    </Layout>
  );
}
