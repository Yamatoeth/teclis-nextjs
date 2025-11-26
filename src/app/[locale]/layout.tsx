import { IntlProvider } from 'next-intl';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = (await import(`../../messages/${params.locale}.json`)).default;

  return (
    <html lang={params.locale}>
      <body>
        <IntlProvider locale={params.locale} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}