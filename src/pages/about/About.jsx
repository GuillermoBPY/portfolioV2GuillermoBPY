import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
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
        <span>&#60;</span>Sobre Mí
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
          <h1>¡Hola!, Soy Guillermo Benitez</h1>
          <p>
            Soy un desarrollador full stack centrado en la
            creación de experiencias digitales innovadoras.
          </p>
          <p>
            En mi portfolio, te invito a explorar mis
            destacadas habilidades y proyectos en el
            desarrollo web, que incluyen aplicaciones
            personalizadas, sistemas de gestión de usuarios
            y sitios de comercio electrónico.
          </p>
          <p>
            Trabajo en equipo para diseñar soluciones
            creativas y efectivas.
          </p>
          <p>
            Poseo un sólido dominio de tecnologías clave
            como HTML5, CSS3, JavaScript, así como
            frameworks de vanguardia como React y entornos
            de ejecución como Node.js. Estas herramientas me
            permiten crear aplicaciones web dinámicas y
            altamente escalables.
          </p>
          <p>¡Te doy la bienvenida a mi portfolio!</p>
        </article>
      </div>
    </section>
  );
};

export default About;
