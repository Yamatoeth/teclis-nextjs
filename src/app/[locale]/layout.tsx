import { NextIntlClientProvider } from 'next-intl';
import en from '@/../messages/en.json';
import fr from '@/../messages/fr.json';

interface Props {
  children: React.ReactNode;
  params?: { locale?: string };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

const messagesMap: Record<string, object> = {
  en,
  fr,
};

export default async function LocaleLayout({ children, params }: Props) {
  const locale = params?.locale ?? 'en';
  const messages = messagesMap[locale] ?? {};

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