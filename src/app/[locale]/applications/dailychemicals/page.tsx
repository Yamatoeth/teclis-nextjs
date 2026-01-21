import { Sparkles, Leaf, Target } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import SubApplicationPage from "@/components/ui/sub-application-page";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  createApplicationPageSchema,
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
    path: "applications/dailychemicals",
  });

  const applicationPageSchema = createApplicationPageSchema({
    name: baseMetadata.title as string,
    description: baseMetadata.description,
    url: `${SITE_URL}/applications/dailychemicals`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
  });

  return attachSchemaToMetadata(baseMetadata, applicationPageSchema);
};

export default async function DailyChemicals({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const applications = [
    {
      image: "/images/chemicals/formulation.avif",
      titleKey: "applications.dailyChemicals.applications.list.0.title",
      descriptionKey: "applications.dailyChemicals.applications.list.0.description",
    },
    {
      image: "/images/chemicals/encapsulation.avif",
      titleKey: "applications.dailyChemicals.applications.list.1.title",
      descriptionKey: "applications.dailyChemicals.applications.list.1.description",
    },
    {
      image: "/images/chemicals/environmental-protection.avif",
      titleKey: "applications.dailyChemicals.applications.list.2.title",
      descriptionKey: "applications.dailyChemicals.applications.list.2.description",
    },
    {
      image: "/images/chemicals/Cosmetic.avif",
      titleKey: "applications.dailyChemicals.applications.list.3.title",
      descriptionKey: "applications.dailyChemicals.applications.list.3.description",
    },
    {
      image: "/images/chemicals/eco-friendly-chemistry.avif",
      titleKey: "applications.dailyChemicals.applications.list.4.title",
      descriptionKey: "applications.dailyChemicals.applications.list.4.description",
    },
    {
      image: "/images/chemicals/Chemical-reactions.avif",
      titleKey: "applications.dailyChemicals.applications.list.5.title",
      descriptionKey: "applications.dailyChemicals.applications.list.5.description",
    },
    {
      image: "/images/chemicals/cleaning-decontamination.avif",
      titleKey: "applications.dailyChemicals.applications.list.6.title",
      descriptionKey: "applications.dailyChemicals.applications.list.6.description",
    },
  ];

  const benefits = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      titleKey: "applications.dailyChemicals.benefits.cards.productInnovation.title",
      textKey: "applications.dailyChemicals.benefits.cards.productInnovation.text",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      titleKey: "applications.dailyChemicals.benefits.cards.sustainability.title",
      textKey: "applications.dailyChemicals.benefits.cards.sustainability.text",
    },
    {
      icon: <Target className="w-5 h-5" />,
      titleKey: "applications.dailyChemicals.benefits.cards.quality.title",
      textKey: "applications.dailyChemicals.benefits.cards.quality.text",
    },
  ];

  const products = [t("Metadata.trackertensiometer.title"), t("Metadata.foamscan.title")];

  return (
    <Layout>
      <SubApplicationPage
        locale={locale}
        breadcrumbKey="nav.applications_sub.dailychemicals"
        heroImage="/images/chemicals/formulation.avif"
        badge={t("applications.dailyChemicals.subtitle")}
        title={t("applications.dailyChemicals.title")}
        subtitle={t("applications.dailyChemicals.subtitle")}
        description={t("applications.dailyChemicals.description")}
        products={products}
        applications={applications}
        benefits={benefits}
        accentColor="from-violet-600 to-purple-500"
      />
    </Layout>
  );
}
