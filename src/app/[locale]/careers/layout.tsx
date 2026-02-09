import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

export const generateMetadata = async (
  props: { params: Promise<{ locale: string }> }
) => {
  const params = await props.params;
  return generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "careers",
  });
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
