import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  attachSchemaToMetadata,
} from "@/lib/metadata-schemas";
import { SITE_URL } from "@/lib/constants";

export const generateMetadata = async (
  props: { params: Promise<{ locale: string }> }
) => {
  const params = await props.params;
  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "careers",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/${params.locale}` },
    { name: "Careers", url: `${SITE_URL}/${params.locale}/careers` },
  ]);

  return attachSchemaToMetadata(baseMetadata, breadcrumbSchema);
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
