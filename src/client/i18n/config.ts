import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
// import fr from './fr.json';
// import es from './es.json';
// import ko from './ko.json';
// import pt from './pt.json';
// import zh from './zh.json';
// import ja from './ja.json';
// import vi from './vi.json';
// import th from './th.json';


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    // fr: { translation: fr },
    // es: { translation: es },
    // ko: { translation: ko },
    // pt: { translation: pt },
    // zh: { translation: zh },
    // ja: { translation: ja },
    // vi: { translation: vi },
    // th: { translation: th },
  },
  lng:
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "en"
      : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
