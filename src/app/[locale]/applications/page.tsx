import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Beaker, Microscope, Zap, Globe, Droplets, Factory, TestTube, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout/Layout';
import Section from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/routing';
import { industries, researchAreas } from '@/types/applications';
import { useTranslations } from 'next-intl';



const Applications = () => {
  const t = useTranslations();

  return (
    <Layout>
      {/* Main Industries */}
      <Section
        subtitle={t("applications.industries.subtitle")}
        title={t("applications.industries.title")}
        description={t("applications.industries.description")}
      >
        <div className="space-y-16 mt-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`card-premium ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } lg:flex lg:items-center lg:gap-12`}
            >
              <div
                className="lg:flex-1"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center mr-4`}
                  >
                    <industry.icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {t(`applications.industries.${industry.key}.title`)}
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t(`applications.industries.${industry.key}.description`)}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t("applications.keyApplications")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(() => {
                      const applications = t(`applications.industries.${industry.key}.applications`, { returnObjects: true });
                      const applicationsArray = Array.isArray(applications) ? applications : [];
                      return applicationsArray.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {app}
                        </div>
                      ));
                    })()}
                  </div>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-foreground mb-2">
                    {t(`applications.data.caseStudy.${index}`)}
                  </h4>                
                </div>

                <div className="mb-6 flex justify-center ">
                  <Button variant="outline" className="group px-6 py-3 text-lg">
                    <Link href={industry.link} className="flex items-center">
                      {t("cta.learnMore")}
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Button>
                </div>
              </div>

              <div
                className="lg:flex-1"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={720}
                  height={288}
                  className="w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Research Areas */}
      <Section
        background="muted"
        subtitle={t("applications.research.subtitle")}
        title={t("applications.research.title")}
        description={t("applications.research.description")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <area.icon size={28} className="text-white" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                {area.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {area.description}
              </p>

              <div className="space-y-1">
                {area.applications.map((app, appIndex) => (
                  <Badge
                    key={appIndex}
                    variant="secondary"
                    className="text-xs mr-1 mb-1"
                  >
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Statistics */}
      <Section
        subtitle={t("applications.stats.subtitle")}
        title={t("applications.stats.title")}
        description={t("applications.stats.description")}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              1000+
            </div>
            <div className="text-sm text-muted-foreground">
              {t("applications.stats.publications")}
            </div>
          </div>
          <div
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              50+
            </div>
            <div className="text-sm text-muted-foreground">
              {t("applications.stats.countries")}
            </div>
          </div>
          <div
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              200+
            </div>
            <div className="text-sm text-muted-foreground">{t("applications.stats.universities")}</div>
          </div>
          <div
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              150+
            </div>
            <div className="text-sm text-muted-foreground">
              {t("applications.stats.partners")}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        background="gradient"
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        description={t("cta.description")}
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-hero">
              {t("cta.ScheduleReview")}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Link href="/News">
            <Button variant="outline" size="lg">
              {t("cta.buttonCatalog")}
            </Button>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            {t("cta.footerText")}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Applications;
