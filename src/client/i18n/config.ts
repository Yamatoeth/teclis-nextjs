import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import es from './es.json';
import ko from './ko.json';
import pt from './pt.json';
import zh from './zh.json';
import ja from './ja.json';
import vi from './vi.json';
import th from './th.json';
import de from './de.json';

const options: InitOptions & { react?: Record<string, unknown> } = {
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es },
    ko: { translation: ko },
    pt: { translation: pt },
    zh: { translation: zh },
    ja: { translation: ja },
    vi: { translation: vi },
    th: { translation: th },
    de: { translation: de },
  },
  lng:
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "en"
      : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false, returnObjects: true },
};

i18n.use(initReactI18next).init(options);

export default i18n;