import { Link } from "react-scroll";
import "./Contact.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName(
      "form"
    )) {
      form.reset();
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section__container contact">
      <h2
        className="section__container--title"
        data-aos-delay="500"
        data-aos="fade-right"
      >
        <span>&#60;</span>Contacto
        <span>&#47;&#62;</span>
      </h2>

      <div
        className="contact-wrapper"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="contact-form">
          <h3>Contáctanos</h3>
          <form
            id="formulario"
            className="contact-form"
            action="https://formspree.io/f/xoqzvzpd"
            method="POST"
          >
            <p>
              <label>Nombre</label>
              <input type="text" name="fullname" required />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" required />
            </p>
            <p>
              <label>Número</label>
              <input type="tel" name="phone" required />
            </p>
            <p>
              <label>Asunto</label>
              <input type="text" name="affair" required />
            </p>
            <p className="block">
              <label>Mensaje</label>
              <textarea
                name="message"
                rows="3"
                required
              ></textarea>
            </p>
            <p className="block">
              <button>Enviar</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Más Información</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/guillermobpy/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GuillermoBPY"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github"></i>Github
              </a>
            </li>
            <li>
              <a
                href="mailto:guillermo-benitez@outlook.com"
                rel="noreferrer"
              >
                <i className="bx bx-envelope"></i>
                guillermo-benitez@outlook.com
              </a>
            </li>
          </ul>
          <p className="llamada">
            ¡Contáctame hoy y llevemos tu proyecto al
            siguiente nivel!
          </p>
          <Link to="home" smooth={true} duration={500}>
            <figure className="contactlogo">
              <img src="./../../../logo.png" alt="" />
            </figure>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
