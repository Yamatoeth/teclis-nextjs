import Layout from "@/components/Layout/Layout";
import { setRequestLocale } from "next-intl/server";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import { WorldMapDemo } from "@/components/world-map";
import AboutHero from "./about-hero";
import AboutWhyChoose from "./about-why-choose";
import AboutPartners from "./about-partners";
import AboutValues from "./about-values";
import AboutTeam from "./about-team";
import AboutStats from "./about-stats";

export const generateMetadata = async (
  props: { params: Promise<{ locale: string }> }
) => {
  const params = await props.params;
  return generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "about",
  });
};

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Layout>
      {/* Hero with Timeline */}
      <AboutHero locale={locale} />

      {/* Why Choose TECLIS */}
      <AboutWhyChoose />

      {/* World Map */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <WorldMapDemo />
      </section>

      {/* Partners & Laboratory */}
      <AboutPartners />

      {/* Company Values */}
      <AboutValues />

      {/* Team Section */}
      <AboutTeam />

      {/* Stats & CTA */}
      <AboutStats locale={locale} />
    </Layout>
  );
}
