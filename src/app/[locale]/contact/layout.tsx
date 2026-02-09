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
    path: "contact",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/${params.locale}` },
    { name: "Contact", url: `${SITE_URL}/${params.locale}/contact` },
  ]);

  return attachSchemaToMetadata(baseMetadata, breadcrumbSchema);
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
