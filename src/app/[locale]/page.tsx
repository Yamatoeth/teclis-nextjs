import Layout from "@/components/Layout/Layout";
import HeroSwiper from "../components/heroswiper";
import Section from "@/components/ui/section";
import { products, industries, stats, partners } from "@/types/data";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Globe } from "lucide-react";
import { Link } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";
import Image from "next/image";

const SITE_URL = "https://www.teclis.com";
const SITE_NAME = "Teclis";

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;

  const baseMetadata = await generatePageMetadata({
    params,
    namespace: "Metadata.home",
    path: "/"
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

  return (
    <Layout>
      <div className="relative w-full h-screen">
        <HeroSwiper />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)]">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] max-w-2xl">
            {t("home.hero.description")}
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link href="/products" locale={locale}>
              <Button className="btn-hero">
                {t("cta.discover")}
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="btn-ghost-premium">
              {t("cta.requestDemo")}
            </Button>
          </div>
        </div>
      </div>

      <Section
        subtitle={t("home.company.subtitle")}
        title={t("home.company.title")}
        description={t("home.company.description")}
        headingLevel="h2"
      >
      <div className="mt-6 w-full max-w-6xl mx-auto bg-secondary/20 p-6 rounded-xl">
        <p className="mb-4 text-muted-foreground text-lg leading-relaxed">
          {t('home.company.intro')}
        </p>
        <div className="prose max-w-none mt-6 text-muted-foreground">
          <p>
            Our company specializes in delivering cutting-edge industrial automation solutions that enhance efficiency, safety, and productivity across a diverse range of sectors. We design, develop, and implement advanced products tailored to meet the unique challenges faced by modern industries. By leveraging state-of-the-art technology and deep industry expertise, we empower businesses to optimize their operations and maintain a competitive edge in an ever-evolving market.
          </p>
          <p>
            Serving industries such as manufacturing, energy, automotive, pharmaceuticals, and logistics, our solutions address critical operational needs including process automation, real-time monitoring, predictive maintenance, and quality control. Our comprehensive portfolio of <Link href="/products" locale={locale}>industrial automation products</Link> integrates seamlessly with existing systems to streamline workflows and reduce downtime. Additionally, our focus on adaptability ensures that our offerings can be customized to fit specific <Link href="/applications" locale={locale}>industry applications</Link>, from large-scale production lines to specialized manufacturing processes.
          </p>
          <p>
            The main challenges we solve for our clients include minimizing operational costs, enhancing safety standards, increasing production throughput, and ensuring regulatory compliance. Our solutions are designed to tackle complex problems such as equipment failure prediction, energy consumption optimization, and data-driven decision-making. By providing intuitive interfaces and robust analytics, we enable operators to gain actionable insights and respond proactively to potential issues.
          </p>
          <p>
            What sets us apart is our commitment to innovation, quality, and customer-centric service. We combine in-depth industry knowledge with agile development practices to deliver solutions that not only meet but exceed client expectations. Our dedicated support teams work closely with customers throughout the project lifecycle, ensuring smooth integration and ongoing optimization. Furthermore, our emphasis on sustainable practices and energy-efficient technologies aligns with the growing demand for environmentally responsible industrial operations.
          </p>
          <p>
            Explore our extensive range of <Link href="/products" locale={locale}>automation products</Link> designed to revolutionize your manufacturing processes, or learn more about how our tailored <Link href="/applications" locale={locale}>industry applications</Link> can address your specific operational challenges. Partner with us to unlock the full potential of your industrial systems and drive your business forward.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-lg text-black">
          {(t.raw('home.company.solutions') as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center opacity-0 animate-slide-in-right">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        background="gray"
        subtitle={t("home.products.subtitle")}
        title={t("home.products.title")}
        description={t("home.products.description")}
        headingLevel="h2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
            <Button variant="outline" size="lg" className="mt-6">
              {t("cta.viewProducts")}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section
        subtitle={t("home.industries.subtitle")}
        title={t("home.industries.title")}
        description={t("home.industries.description")}
        headingLevel="h2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center group opacity-0 animate-slide-in-left">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <industry.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t(`applications.industries.${industry.key}.title`)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`applications.industries.${industry.key}.description`)}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/applications" locale={locale}>
            <Button variant="outline" size="lg">
              {t("cta.applications")}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>

      <Section
        background="gradient"
        subtitle={t("home.partners.subtitle")}
        title={t("home.partners.title")}
        description={t("home.partners.description")}
        headingLevel="h2"
      >
        <div className="overflow-hidden w-full py-8">
          <div className="animate-marquee flex items-center gap-12">
            {partners.concat(partners).map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={`${partner.name} industrial automation partner logo`}
                width={160}
                height={80}
                quality={60}
                sizes="160px"
                className="h-20 object-contain"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        headingLevel="h2"
        subtitle="Frequently Asked Questions"
        title="FAQs"
        description="Answers to common questions about our products and services."
      >
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What types of industries do your automation solutions support?</h3>
            <p className="text-muted-foreground">Our automation solutions are designed to support a wide range of industries including manufacturing, energy, automotive, pharmaceuticals, and logistics, tailored to meet the unique requirements of each sector.</p>
          </div>
          <div>
            <h3 className="font-semibold">How can your products improve operational efficiency?</h3>
            <p className="text-muted-foreground">By integrating our advanced automation products, businesses can streamline workflows, reduce downtime, and optimize resource utilization, resulting in significant improvements in operational efficiency.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do you offer customized solutions for specific applications?</h3>
            <p className="text-muted-foreground">Yes, we work closely with clients to develop customized automation solutions that address their specific application needs, ensuring seamless integration and optimal performance.</p>
          </div>
          <div>
            <h3 className="font-semibold">What kind of support do you provide after installation?</h3>
            <p className="text-muted-foreground">Our dedicated support team offers comprehensive assistance including training, maintenance, and troubleshooting to ensure your automation systems operate smoothly and efficiently.</p>
          </div>
          <div>
            <h3 className="font-semibold">Are your automation products compliant with industry standards?</h3>
            <p className="text-muted-foreground">Absolutely. Our products comply with all relevant industry standards and regulations, ensuring safety, reliability, and quality in every solution we deliver.</p>
          </div>
          <div>
            <h3 className="font-semibold">How do your solutions help with predictive maintenance?</h3>
            <p className="text-muted-foreground">Our automation systems incorporate real-time monitoring and analytics capabilities that enable predictive maintenance, helping to anticipate equipment failures before they occur and reducing costly downtime.</p>
          </div>
          <div>
            <h3 className="font-semibold">Can your products integrate with existing industrial systems?</h3>
            <p className="text-muted-foreground">Yes, our products are designed for seamless integration with a variety of existing industrial systems, allowing for flexible and scalable automation solutions.</p>
          </div>
        </div>
      </Section>

      <Section
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        description={t("cta.description")}
        headingLevel="h2"
      >
        <div className="max-w-2xl mx-auto text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" locale={locale}>
              <Button className="btn-hero">
                {t("cta.contact")}
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link href="/News" locale={locale}>
              <Button variant="outline" size="lg">{t("cta.buttonCatalog")}</Button>
            </Link>
          </div>
          <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center"><Users size={16} className="mr-2" />{t("cta.featureSupport")}</div>
              <div className="flex items-center"><Award size={16} className="mr-2" />{t("cta.featureExperience")}</div>
              <div className="flex items-center"><Globe size={16} className="mr-2" />{t("cta.featureGlobal")}</div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}