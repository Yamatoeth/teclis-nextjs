import Image from 'next/image';
import { ArrowRight, Users, Award, Globe, Lightbulb, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { values, team, stats } from "@/types/about";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = 'https://www.teclis-scientific.com';
  const otherLocales = ['en', 'fr', 'es', 'de', 'it', 'pt', 'th', 'vi', 'ja', 'ko', 'zh'];

  const alternates: { hrefLang: string; href: string }[] = otherLocales.map(l => ({
    hrefLang: l,
    href: `${baseUrl}/${l}/about`,
  }));

  return {
    title: t('about.title'),
    description: t('about.description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: alternates.reduce((acc, cur) => {
        acc[cur.hrefLang] = cur.href;
        return acc;
      }, {} as Record<string, string>),
    },
  };
}

export default async function About({ params }: { params: { locale: string } }) {
  const locale = await params.locale
  const t = await getTranslations({locale});

  return (
    <Layout>
      {/* Company Timeline */}
      <Section
        background="muted"
        subtitle={t("about.journey.subtitle")}
        title={t("about.journey.title")}
        description={t("about.journey.description")}
      >
        <div className="w-full flex justify-center mt-8">
          <Image
            src="/images/about/timeline.png"
            alt="Timeline of TECLIS Scientific"
            width={1200}
            height={600}
            className="object-contain w-full"
          />
        </div>
      </Section>

      {/* Why Choose TECLIS Scientific */}
      <Section
        subtitle={t("about.why.subtitle")}
        title={t("about.why.title")}
      >
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-premium place-items-center">
            <Image
              src="/images/about/about-us-1.avif"
              alt="Experts in Interface Science"
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("about.why.card1.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.why.card1.text")}
            </p>
          </div>

          <div className="card-premium place-items-center">
            <Image
              src="/images/about/Module elastic.avif"
              alt="Reliable & repeatable measurements"
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("about.why.card2.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.why.card2.text")}
            </p>
          </div>

          <div className="card-premium place-items-center">
            <Image
              src="/images/about/Modular.avif"
              alt="Smart-modular instruments"
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("about.why.card3.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.why.card3.text")}
            </p>
          </div>

          <div className="card-premium place-items-center">
            <Image
              src="/images/about/world network.avif"
              alt="Global distribution network"
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("about.why.card4.title")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.why.card4.text")}
            </p>
          </div>
        </div>
      </Section>

      {/* Our Laboratory and Plant */}
      <Section
        subtitle={t("about.lab.subtitle")}
        title={t("about.lab.title")}
      >
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <a
              href="https://www.cnrs.fr/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mx-auto mb-4 h-48 flex items-center justify-center">
                <Image
                  src="/images/about/LOGO6.avif"
                  alt="Laboratory Logo"
                  width={400}
                  height={200}
                  className="max-h-full w-auto object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.lab.block1.line1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              {t("about.lab.block1.line2")}
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://www.mga-tech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mx-auto mb-4 h-48 flex items-center justify-center ">
                <Image
                  src="/images/about/logo-1.avif"
                  alt="MGA Technologies Logo"
                  width={400}
                  height={200}
                  className="max-h-full w-auto object-contain rounded-lg mt-7"
                />
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.lab.block2.line1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              {t("about.lab.block2.line2")}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              {t("about.lab.block2.line3")}
            </p>
          </div>
        </div>
      </Section>

      {/* Company Values */}
      <Section
        subtitle={t("about.values.subtitle")}
        title={t("about.values.title")}
        description={t("about.values.description")}
      >
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(`about.values.value.${index}.title`)}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`about.values.value.${index}.text`)}
              </p>
            </div>
          ))}
        </div>z``
      </Section>

      {/* Team Section */}
      <Section
        background="gradient"
        subtitle={t("about.team.subtitle")}
        title={t("about.team.title")}
        description={t("about.team.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {team.map((member, index) => (
            <div key={index} className="card-premium text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-subtle flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>

              <p className="text-sm text-primary font-medium mb-3">
                {member.position}
              </p>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-1 justify-center">
                {member.expertise.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section
        subtitle={t("about.stats.subtitle")}
        title={t("about.stats.title")}
        description={t("about.stats.description")}
      >
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-foreground mb-2">
              {t("about.stats.iso.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("about.stats.iso.text")}
            </p>
          </div>

          <div className="text-center">
            <Users size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-foreground mb-2">
              {t("about.stats.support.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("about.stats.support.text")}
            </p>
          </div>

          <div className="text-center">
            <Globe size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-foreground mb-2">
              {t("about.stats.network.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("about.stats.network.text")}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        description={t("cta.description")}
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero" asChild>
              <a href="/contact">
                {t("cta.contact")}
                <ArrowRight size={20} className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/careers">{t("cta.careers")}</a>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            {t("cta.footerText")}
          </div>
        </div>
      </Section>
    </Layout>
  );
};
