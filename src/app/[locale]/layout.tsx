import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "@/index.css";
import Providers from "../providers";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, 
          { locale: 'fr' }, 
          { locale: 'de' }, 
          { locale: 'it' },
          { locale: 'pt' },
          { locale: 'ko' },
          { locale: 'ja' },
          { locale: 'zh' },
          { locale: 'vi' },
          { locale: 'th' },
          { locale: 'es' }
        ];
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
      </body>
    </html>
  );
}