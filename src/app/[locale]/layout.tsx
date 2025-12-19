import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "@/../index.css";
import Providers from "../providers";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}

export default async function LocaleLayout({ children, params }: Props) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
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