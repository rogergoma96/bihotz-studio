import { useLocale } from "../useLocale/useLocale";

export const useTranslate = () => {
  const { locale } = useLocale();
  const lang = require(`../../public/i18n/${locale}.json`);
  return lang;
};

export default useTranslate;
