import Layout from "@/components/Layout/Layout";
import Section from "@/components/ui/section";
import { products } from "@/types/products";
import { industries } from "@/types/applications";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import HeroPremium from "@/components/ui/hero-premium";
import CompanyBanner from "@/components/ui/company-banner";
import PartnersMarquee from "@/components/ui/partners-marquee";
import FAQGrid from "@/components/ui/faq-grid";
import CTASection from "@/components/ui/cta-section";
import HomeClient from "./home-client";

// Home page stats and partners
const stats = [
  { value: "25+", label: "Years of Innovation" },
  { value: "10+", label: "Countries Served" },
  { value: "100+", label: "Research Institutions" },
  { value: "95%", label: "Customer Satisfaction" }
];

const partners = [
  { logo: '/images/partners/LOGO1.avif', name: 'BASF' },
  { logo: '/images/partners/LOGO2.avif', name: 'Solvay' },
  { logo: '/images/partners/LOGO3.avif', name: 'Petrobras' },
  { logo: '/images/partners/LOGO4.avif', name: 'LOreal' },
  { logo: '/images/partners/LOGO5.avif', name: 'Thor' },
  { logo: '/images/partners/LOGO6.avif', name: 'CNRS' },
  { logo: '/images/partners/LOGO7.avif', name: 'ENS' },
  { logo: '/images/partners/LOGO8.avif', name: 'SHELL' },
  { logo: '/images/partners/LOGO9.avif', name: 'Petrochina' },
  { logo: '/images/partners/LOGO10.avif', name: 'TOTAL' },
  { logo: '/images/partners/LOGO11.avif', name: 'BlueStar Silicones' },
  { logo: '/images/partners/LOGO12.avif', name: 'Harvard' },
  { logo: '/images/partners/LOGO13.avif', name: 'Colgate PalmoLive' },
  { logo: '/images/partners/LOGO14.avif', name: 'Baker Hughes' },
  { logo: '/images/partners/LOGO15.avif', name: 'Kraft Lafarge' },
  { logo: '/images/partners/LOGO16.avif', name: 'Dow' },
  { logo: '/images/partners/LOGO17.avif', name: 'Henkel' },
  { logo: '/images/partners/LOGO18.avif', name: 'Nalco Champion' },
  { logo: '/images/partners/LOGO19.avif', name: 'Unilever' },
  { logo: '/images/partners/LOGO20.avif', name: 'novo Nordisk' },
  { logo: '/images/partners/LOGO21.avif', name: 'Boston University' },
  { logo: '/images/partners/LOGO22.avif', name: 'Schlumberger' },
];

export const generateMetadata = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata",
    path: ""
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is surface tension and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surface tension is the elastic tendency of a fluid surface to acquire the least surface area possible. It's crucial in industries like pharmaceuticals, cosmetics, food & beverages, and oil & gas for understanding how liquids behave at interfaces and optimizing formulations."
        }
      },
      {
        "@type": "Question",
        "name": "What types of measurements can TRACKER™ tensiometer perform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The TRACKER™ tensiometer measures surface tension, interfacial tension, contact angles, interfacial rheology, and adsorption kinetics. It can operate at temperatures up to 200°C and analyze both pendant and sessile drops."
        }
      },
      {
        "@type": "Question",
        "name": "How does FOAMSCAN™ analyze foam properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FOAMSCAN™ combines image analysis and conductivity techniques to measure foam height, liquid content, bubble size distribution, foam stability, and drainage. It provides 100% software-controlled, reproducible foam characterization."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer on-site demonstrations and training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide on-site demonstrations and comprehensive training for all our instruments. Our technical team can visit your facility to demonstrate capabilities and train your staff on operation and analysis."
        }
      },
      {
        "@type": "Question",
        "name": "What support do you provide after purchase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive support including installation, training, technical assistance, software updates, and maintenance services. Extended warranty options and laboratory services are also available."
        }
      },
      {
        "@type": "Question",
        "name": "Can you develop custom solutions for specific applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we work closely with customers to develop custom solutions. Our engineering team can modify existing instruments or create specialized configurations for unique research requirements and industrial applications."
        }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": SITE_NAME,
    "url": SITE_URL,
    "isPartOf": {
      "@type": "WebSite",
      "url": SITE_URL
    }
  };

  return {
    ...baseMetadata,
    other: {
      ...baseMetadata.other,
      "script:ld+json": JSON.stringify([webPageSchema, faqSchema])
    }
  };
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const homeData = {
    title: t("home.hero.title"),
    subtitle: t("home.hero.description"),
    locale
  };

  const faqItems = [
    {
      question: "What is surface tension and why is it important?",
      answer: "Surface tension is the elastic tendency of a fluid surface to acquire the least surface area possible. It's crucial in industries like pharmaceuticals, cosmetics, food & beverages, and oil & gas for understanding how liquids behave at interfaces and optimizing formulations."
    },
    {
      question: "What types of measurements can TRACKER™ tensiometer perform?",
      answer: "The TRACKER™ tensiometer measures surface tension, interfacial tension, contact angles, interfacial rheology, and adsorption kinetics. It can operate at temperatures up to 200°C and analyze both pendant and sessile drops."
    },
    {
      question: "How does FOAMSCAN™ analyze foam properties?",
      answer: "FOAMSCAN™ combines image analysis and conductivity techniques to measure foam height, liquid content, bubble size distribution, foam stability, and drainage. It provides 100% software-controlled, reproducible foam characterization."
    },
    {
      question: "Do you offer on-site demonstrations and training?",
      answer: "Yes, we provide on-site demonstrations and comprehensive training for all our instruments. Our technical team can visit your facility to demonstrate capabilities and train your staff on operation and analysis."
    },
    {
      question: "What support do you provide after purchase?",
      answer: "We offer comprehensive support including installation, training, technical assistance, software updates, and maintenance services. Extended warranty options and laboratory services are also available."
    },
    {
      question: "Can you develop custom solutions for specific applications?",
      answer: "Yes, we work closely with customers to develop custom solutions. Our engineering team can modify existing instruments or create specialized configurations for unique research requirements and industrial applications."
    }
  ];

  return (
    <HomeClient {...homeData}>
      <Layout>
        {/* Premium Hero Section */}
        <HeroPremium locale={locale} />

        {/* Company Overview - Compact Banner */}
        <CompanyBanner stats={stats} />

        {/* Products Section */}
        <Section
          background="muted"
          subtitle={t("home.products.subtitle")}
          title={t("home.products.title")}
          description={t("home.products.description")}
          headingLevel="h2"
          decorated
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                productKey={product.productKey}
                title={product.title}
                description={product.description}
                features={product.features}
                image={product.image}
                video={product.video}
                to="/products"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" locale={locale}>
              <Button className="btn-ghost-premium group">
                <span>{t("cta.viewProducts")}</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Industries Section */}
        <Section
          subtitle={t("home.industries.subtitle")}
          title={t("home.industries.title")}
          description={t("home.industries.description")}
          headingLevel="h2"
          background="dots"
          decorated
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link 
                key={index} 
                href={`/applications/${industry.key}`} 
                locale={locale}
                className="group"
              >
                <div className="card-premium text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <industry.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(`applications.industries.${industry.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`applications.industries.${industry.key}.description`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/applications" locale={locale}>
              <Button className="btn-ghost-premium group">
                <span>{t("cta.applications")}</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Partners Section */}
        <Section
          background="gradient"
          subtitle={t("home.partners.subtitle")}
          title={t("home.partners.title")}
          description={t("home.partners.description")}
          headingLevel="h2"
        >
          <PartnersMarquee partners={partners} />
        </Section>

        {/* FAQ Section */}
        <Section
          headingLevel="h2"
          subtitle={t("home.faq.subtitle")}
          title={t("home.faq.title")}
          description={t("home.faq.description")}
          decorated
        >
          <FAQGrid items={faqItems} />

          {/* Contact CTA */}
          <div className="mt-16 card-glass rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-3">
              {t("home.faq.still_have_questions")}
            </h4>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {t("home.faq.contact_message")}
            </p>
            <Link href="/contact" locale={locale}>
              <Button className="btn-hero group">
                <span>{t("cta.contact")}</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Final CTA Section */}
        <Section headingLevel="h2" compact>
          <CTASection locale={locale} />
        </Section>
      </Layout>
    </HomeClient>
  );
}