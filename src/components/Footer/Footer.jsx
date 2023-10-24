import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="links">
            <a
              href="https://github.com/GuillermoBPY"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/guillermobpy/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:guillermo-benitez@outlook.com">
              Email
            </a>
          </div>
        </div>
        <div className="copyright">
          <div className="logo">
            <img
              src="./../../../../logo.png"
              alt="Logo de la empresa"
            />
          </div>
          <p>&copy;Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
