import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as resources from "./locales";

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};
const initTranslation = (lng: string) => {
  i18n.use(initReactI18next).init({
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            translation: value,
          },
        }),
        {}
      ),
    },
    lng,
    // lng: "ar",
  });
};

export default initTranslation;
