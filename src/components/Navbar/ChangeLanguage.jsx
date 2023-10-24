import { useTranslation } from "react-i18next";
import "./ChangeLanguage.css";
const ChangeLanguage = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation("global");
  const handleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="myButton__ctn">
      <button
        className="myButton"
        onClick={() => {
          handleLanguage("es");
        }}
      >
        ES
      </button>
      <button
        className="myButton"
        onClick={() => {
          handleLanguage("en");
        }}
      >
        EN
      </button>
    </div>
  );
};

export default ChangeLanguage;
