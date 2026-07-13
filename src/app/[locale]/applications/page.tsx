import { CheckCircle2, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import { createCollectionPageSchema, attachSchemaToMetadata } from "@/lib/metadata-schemas";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import ApplicationsHero from '@/components/ui/applications-hero';
import IndustryShowcase from '@/components/ui/industry-showcase';
import ResearchAreasGrid from '@/components/ui/research-areas-grid';
import ImpactStats from '@/components/ui/impact-stats';
import CTASection from '@/components/ui/cta-section';

export const generateMetadata = async (
  props: { params: Promise<{ locale: string }> }
) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: "applications"
  });

  const applicationsPageSchema = createCollectionPageSchema({
    name: baseMetadata.title as string,
    description: baseMetadata.description,
    url: `${SITE_URL}/applications`,
    siteUrl: SITE_URL,
    siteName: SITE_NAME
  });

  return attachSchemaToMetadata(baseMetadata, applicationsPageSchema);
};

export default async function Applications({ params }: { params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale});

  return (
    <Layout>
      {/* Hero Section */}
      <ApplicationsHero locale={locale} />

      {/* Introduction Section */}
      <Section
        headingLevel="h2"
        background="muted"
        decorated
        subtitle={t('applications.header.subtitle')}
        title={t('applications.page.intro.title')}
      >
        <div className="max-w-4xl mx-auto">
          {/* Main intro text */}
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            {t('applications.header.description')}
          </p>

          {/* Investigation areas */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{t('applications.page.intro.col1Title')}</h3>
              </div>
              <ul className="space-y-3">
                {(t.raw('applications.intro.list1') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{t('applications.page.intro.col2Title')}</h3>
              </div>
              <ul className="space-y-3">
                {(t.raw('applications.intro.list2') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-foreground">{t('applications.page.intro.col3Title')}</h3>
              </div>
              <ul className="space-y-3">
                {(t.raw('applications.intro.list3') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-6 rounded-2xl bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 border border-border/50 text-center">
            <p className="text-muted-foreground italic">
              {t('applications.intro.conclusion')}
            </p>
          </div>
        </div>
      </Section>

      {/* Industries Showcase */}
      <Section
        headingLevel="h2"
        id="industries-section"
        subtitle={t("applications.industries.subtitle")}
        title={t("applications.industries.title")}
        description={t("applications.industries.description")}
      >
        <div className="mt-12">
          <IndustryShowcase locale={locale} />
        </div>
      </Section>

      {/* Research Areas */}
      <Section
        headingLevel="h2"
        background="mesh"
        decorated
        subtitle={t("applications.research.subtitle")}
        title={t("applications.research.title")}
        description={t("applications.research.description")}
      >
        <div className="mt-12">
          <ResearchAreasGrid />
        </div>
      </Section>

      {/* Impact Statistics */}
      <Section
        headingLevel="h2"
        subtitle={t("applications.stats.subtitle")}
        title={t("applications.stats.title")}
        description={t("applications.stats.description")}
      >
        <div className="mt-12">
          <ImpactStats />
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection locale={locale} />
    </Layout>
  );
};
