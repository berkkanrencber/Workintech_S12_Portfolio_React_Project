import { useGlobalContext } from "../context/GlobalContext";
import en from "../translations/en";
import tr from "../translations/tr";

const translations = {
  en,
  tr,
};

const useTranslation = () => {
  const { language } = useGlobalContext();
  return translations[language];
};

export default useTranslation;