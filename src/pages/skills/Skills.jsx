import "./Skills.css";
const Skills = () => {
  return (
    <section className="section__container">
      <h2
        className="section__container--title skills__title"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <span>&#60;</span>Habilidades Técnicas
        <span>&#47;&#62;</span>
      </h2>
      <article className="skills__logos">
        <h3 data-aos="fade-right" data-aos-delay="300">
          Convirtiendo tu visión en realidad: Habilidades
          tecnológicas para materializar tus proyectos.
        </h3>
        <div className="tech__grid">
          <ul data-aos="flip-right" data-aos-delay="600">
            <li className="reactlogo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
              />
              <span>#react</span>
            </li>
            <li className="nodejslogo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
              />
              <span>#node</span>
            </li>
            <li className="expresslogo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
              />
              <span>#expressjs</span>
            </li>
            <li className="javascriptlogo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
              />
              <span>#javascript</span>
            </li>
            <li className="html5logo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
              />
              <span>#html5</span>
            </li>
            <li className="css3logo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
              />
              <span>#css</span>
            </li>
            <li className="reduxlogo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
              />
              <span> #redux</span>
            </li>
            <li className="gitlogo">
              <img
                className="logoicon"
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
              />
              <span>#git</span>
            </li>
            <li className="postgresqllogo">
              <img
                className="logoicon"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
              />
              <span>#postgresql</span>
            </li>
            <li className="postmanlogo">
              <img
                className="logoicon"
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
              />
              <span>#postman</span>
            </li>
            <li className="jestlogo">
              <img
                className="logoicon"
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                alt="jest"
              />
              <span>#jest</span>
            </li>
            <li className="techlogo">
              <img
                className="logoicon"
                src="./../../../technologies/frontend.png"
                alt=""
              />
              <span>#front-end</span>
            </li>
            <li className="techlogo">
              <img
                className="logoicon"
                src="./../../../technologies/backend.png"
                alt=""
              />
              <span>#back-end</span>
            </li>
            <li className="techlogo">
              <img
                className="logoicon"
                src="./../../../technologies/api.png"
                alt=""
              />
              <span>#restful-api</span>
            </li>
            <li className="techlogo">
              <img
                className="logoicon"
                src="./../../../technologies/fullstack.png"
                alt=""
              />
              <span>#full-stack</span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Skills;