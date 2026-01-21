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
import Image from "next/image";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import HeroPremium from "@/components/ui/hero-premium";
import CompanyBanner from "@/components/ui/company-banner";
import PartnersMarquee from "@/components/ui/partners-marquee";
import FAQGrid from "@/components/ui/faq-grid";
import CTASection from "@/components/ui/cta-section";

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

// eslint-disable-next-line react-refresh/only-export-components
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
        "name": "What types of industries do your automation solutions support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our automation solutions are designed to support a wide range of industries including manufacturing, energy, automotive, pharmaceuticals, and logistics, tailored to meet the unique requirements of each sector."
        }
      },
      {
        "@type": "Question",
        "name": "How can your products improve operational efficiency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By integrating our advanced automation products, businesses can streamline workflows, reduce downtime, and optimize resource utilization, resulting in significant improvements in operational efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer customized solutions for specific applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we work closely with clients to develop customized automation solutions that address their specific application needs, ensuring seamless integration and optimal performance."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of support do you provide after installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our dedicated support team offers comprehensive assistance including training, maintenance, and troubleshooting to ensure your automation systems operate smoothly and efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Are your automation products compliant with industry standards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our products comply with all relevant industry standards and regulations, ensuring safety, reliability, and quality in every solution we deliver."
        }
      },
      {
        "@type": "Question",
        "name": "How do your solutions help with predictive maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our automation systems incorporate real-time monitoring and analytics capabilities that enable predictive maintenance, helping to anticipate equipment failures before they occur and reducing costly downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Can your products integrate with existing industrial systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our products are designed for seamless integration with a variety of existing industrial systems, allowing for flexible and scalable automation solutions."
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

  const faqItems = [
    {
      question: "What types of industries do your automation solutions support?",
      answer: "Our automation solutions are designed to support a wide range of industries including manufacturing, energy, automotive, pharmaceuticals, and logistics, tailored to meet the unique requirements of each sector."
    },
    {
      question: "How can your products improve operational efficiency?",
      answer: "By integrating our advanced automation products, businesses can streamline workflows, reduce downtime, and optimize resource utilization, resulting in significant improvements in operational efficiency."
    },
    {
      question: "Do you offer customized solutions for specific applications?",
      answer: "Yes, we work closely with clients to develop customized automation solutions that address their specific application needs, ensuring seamless integration and optimal performance."
    },
    {
      question: "What kind of support do you provide after installation?",
      answer: "Our dedicated support team offers comprehensive assistance including training, maintenance, and troubleshooting to ensure your automation systems operate smoothly and efficiently."
    },
    {
      question: "Are your automation products compliant with industry standards?",
      answer: "Absolutely. Our products comply with all relevant industry standards and regulations, ensuring safety, reliability, and quality in every solution we deliver."
    },
    {
      question: "How do your solutions help with predictive maintenance?",
      answer: "Our automation systems incorporate real-time monitoring and analytics capabilities that enable predictive maintenance, helping to anticipate equipment failures before they occur and reducing costly downtime."
    }
  ];

  return (
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
  );
}