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