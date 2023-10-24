import { useState, useEffect } from "react";
import TextScramble from "react-textscramble";
import "./ScrambleText.css";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const MainScreen = ({ setshowArrow }) => {
  const [shouldRender, setShouldRender] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
      setshowArrow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [setshowArrow]);

  if (!shouldRender) {
    return null;
  }

  const phrases = t("home.scrambleText");

  const freezeDuration = 1600;

  return (
    <div className="MainScreen">
      <div className="scramble-container">
        <TextScramble
          phrases={phrases}
          freezeDuration={freezeDuration}
          isInfiniteLoop={true}
        />
      </div>
    </div>
  );
};

MainScreen.propTypes = {
  setshowArrow: PropTypes.func.isRequired,
};

export default MainScreen;
