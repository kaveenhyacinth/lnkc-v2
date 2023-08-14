import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

const Heading1 = tw.h1`text-3xl font-bold`;
const Heading3 = tw.h3`text-xl`;
const Button = tw.button`p-2 mt-4 rounded bg-amber-400`;

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <Suspense fallback="loading">
      <div className="p-4">
        <Heading1>{t("hello")}</Heading1>
        <Heading3>{t("description")}</Heading3>
        <Button type="button" onClick={handleChangeLanguage}>
          Change Language to {currentLanguage === "en" ? "French" : "English"}
        </Button>
      </div>
    </Suspense>
  );
}

export default App;
