import "./Services.css";
const Services = () => {
  return (
    <section className="services">
      <h2
        className="section__container--title"
        data-aos="fade-right"
      >
        <span>&#60;</span>Services
        <span>&#47;&#62;</span>
      </h2>
      <div className="services__info">
        <article data-aos="zoom-in">
          <h3>
            Desarrollo de Aplicaciones Web Personalizadas:
          </h3>
          <p>
            Creación de aplicaciones web personalizadas que
            se adapten a las necesidades específicas de tu
            negocio. Utilizo las últimas tecnologías y
            mejores prácticas de desarrollo para garantizar
            que tu aplicación sea eficiente, segura y
            altamente funcional.
          </p>
        </article>
        <article data-aos="zoom-in" data-aos-delay="300">
          <h3>
            Mantenimiento y Optimización de Aplicaciones
            Existentes:
          </h3>
          <p>
            Si ya tienes una aplicación web pero necesitas
            mejorar su rendimiento, seguridad o agregar
            nuevas características, puedo ayudarte. Realizo
            análisis detallados de tu código existente y
            aplico las correcciones necesarias para
            optimizar y mantener tu aplicación en
            funcionamiento de manera óptima.
          </p>
        </article>
        <article data-aos="zoom-in" data-aos-delay="600">
          <h3>
            Desarrollo de Aplicaciones de Comercio
            Electrónico:
          </h3>
          <p>
            Puedo ayudarte a crear una plataforma de
            comercio electrónico robusta y atractiva. Desde
            el desarrollo del frontend con React hasta la
            creación de un backend seguro y escalable con
            Node.js, puedo construir una solución de
            comercio electrónico completa que te permita
            vender tus productos en línea de manera
            efectiva.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
