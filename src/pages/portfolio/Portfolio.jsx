import "./Portfolio.css";
const Portfolio = () => {
  return (
    <section className="section__container portfolio">
      <h2
        className="section__container--title skills__title"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <span>&#60;</span>Portfolio
        <span>&#47;&#62;</span>
      </h2>
      <figure className="portfolio__grid">
        <div
          className="portfolio__grid--box"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="./../../../galeria/1.png"
            alt="portfolio1"
          />
          <figcaption>
            <p>
              E-commerce que utiliza JavaScript Vainilla
              para implementar sus funcionalidades. Se ha
              utilizado el localstorage para gestionar el
              inicio de sesión, guardar la información del
              carrito de compras y habilitar la función de
              modo oscuro.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/GuillermoBPY/eCommerceGuillermoBPY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-github"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://ecommerceguillermobpy.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxs-slideshow"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
            </ul>
          </figcaption>
        </div>
        <div
          className="portfolio__grid--box"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="./../../../galeria/2.png"
            alt="portfolio2"
          />
          <figcaption>
            <p>
              App que consume la API openweathermap y
              geolocalización, permitiendo brindar
              información de la ubicación establecida. Se
              implemento un fondo dinámico, que se muestra
              según el clima de la ubicación. Desarrollado
              con React.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/GuillermoBPY/entregable2-gen22.1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-github"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://weatherapp-guillermobpy.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxs-slideshow"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
            </ul>
          </figcaption>
        </div>
        <div
          className="portfolio__grid--box"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="./../../../galeria/3.png"
            alt="portfolio3"
          />
          <figcaption>
            <p>
              Esta web utiliza la POKEapi, y Redux, para
              almacenar el nombre del entrenador. La web
              permite a los usuarios explorar y buscar
              diferentes Pokémon, obteniendo detalles como
              su nombre, tipo, habilidades y estadísticas.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/GuillermoBPY/entregable5-gen22.1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-github"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://pokeapi-guillermobpy.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxs-slideshow"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
            </ul>
          </figcaption>
        </div>
        <div
          className="portfolio__grid--box"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="./../../../galeria/4.png"
            alt="portfolio4"
          />
          <figcaption>
            <p>
              API de usuarios con validación de correo
              electrónico utilizando Nodemailer y JWT.
              Diseñé endpoints para registro, inicio de
              sesión y validación de usuarios. Front-end
              demostrativo
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/GuillermoBPY/users_emails_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-github"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://users-emails-front.netlify.app/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxs-slideshow"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
            </ul>
          </figcaption>
        </div>
        <div
          className="portfolio__grid--box"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="./../../../galeria/5.png"
            alt="portfolio5"
          />
          <figcaption>
            <p>
              API de películas con endpoints para asignar
              actores, géneros y directores a películas,
              brindando flexibilidad y eficiencia en la
              gestión de datos. Diseño de API escalable y
              versátil. Front-end demostrativo
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/GuillermoBPY/movies_project_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-github"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://movies-project-front.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxs-slideshow"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
            </ul>
          </figcaption>
        </div>
        <div
          className="portfolio__grid--box"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="./../../../galeria/6.png"
            alt="portfolio6"
          />
          <figcaption>
            <p>
              Aplicación de e-commerce con React y Node.js,
              incluyendo funcionalidades como registro de
              usuarios, carrito de compras y filtros, etc.
              Implementé solicitudes HTTP con Axios y
              autenticación mediante token Bearer.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/GuillermoBPY/e-commerce-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-github"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://e-commerce-guillermobpy.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxs-slideshow"
                    style={{ color: "#d62c40" }}
                  ></i>
                </a>
              </li>
            </ul>
          </figcaption>
        </div>
      </figure>
    </section>
  );
};

export default Portfolio;
