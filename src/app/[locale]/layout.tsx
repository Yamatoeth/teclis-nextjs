// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; params: { locale: string } };

  // src/app/[locale]/layout.tsx (export)
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  // charge les messages pour la locale (build-time friendly si generateStaticParams)
  const messages = await getMessages({ locale });



  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}