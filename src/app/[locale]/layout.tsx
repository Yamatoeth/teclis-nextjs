import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "@/../index.css";
import Providers from "../providers";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}



// ----------------------------------------------------------------------
// Root Layout for Localized Routes
// This layout wraps all pages within the [locale] directory.
// It handles:
// 1. Html structure with correct lang attribute
// 2. Font loading (Inter)
// 3. NextIntlClientProvider for client-side translations
// 4. Global providers (ThemeProvider, etc.)
// 5. Common UI elements (Navbar, Footer, Toaster)
// ----------------------------------------------------------------------

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