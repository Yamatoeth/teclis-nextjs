import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "@/index.css";
import Providers from "../providers";

console.log('✅ PAGE IS RENDERING!');

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}


export default async function LocaleLayout({ children, params }: Props) {
   const awaitedParams = await params;
    const locale = awaitedParams.locale;
      const messages = await getMessages({ locale });


  return (
    <html lang={locale || 'en'}>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale || 'en'} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}