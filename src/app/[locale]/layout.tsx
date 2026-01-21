import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "@/../index.css";
import Providers from "../providers";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { setRequestLocale } from 'next-intl/server';

const SITE_URL = "https://www.teclis-scientific.com";
const SITE_NAME = "Teclis Scientific";
interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}

export default async function LocaleLayout({ children, params }: Props) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": SITE_NAME,
                "url": SITE_URL,
                "logo": `${SITE_URL}/logo.png`,
                "sameAs": []
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": SITE_NAME,
                "url": SITE_URL,
                "inLanguage": locale
              }
            ])
          }}
        />
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}