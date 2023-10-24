import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation("global");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section__container about">
      <h2
        className="section__container--title"
        data-aos-delay="500"
        data-aos="fade-right"
      >
        <span>&#60;</span>
        {t("about.title")}
        <span>&#47;&#62;</span>
      </h2>
      <div
        className="about__info"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <figure className="about__figure">
          <img src="./../../../developer.gif" alt="" />
        </figure>
        <article
          className="about__info--data"
          data-aos-delay="500"
          data-aos="fade-left"
        >
          <h1>{t("about.salutation")}</h1>
          <p>{t("about.paragrah1")}</p>
          <p>
            <p>{t("about.paragrah2")}</p>
          </p>
          <p>
            <p>{t("about.paragrah3")}</p>
          </p>
          <p>
            <p>{t("about.paragrah4")}</p>
          </p>
          <p>
            <p>{t("about.paragrah5")}</p>
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
