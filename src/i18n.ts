import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export default i18next
    .use(I18nextBrowserLanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        ns: ['home'],
        backend: {
            loadPath: './locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
        },
        supportedLngs: ['en'],
        react: {
            useSuspense: false,
        },
        interpolation: { escapeValue: false },
    });
