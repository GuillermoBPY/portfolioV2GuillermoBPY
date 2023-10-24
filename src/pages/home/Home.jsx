import { useState } from "react";
import MainScreen from "../../components/ScrambleText/ScrambleText";
import TypeWriterText from "../../components/TypeWriterText/TypeWriterText";
import "./Home.css";
import { Link } from "react-scroll";
const Home = () => {
  const [showArrow, setshowArrow] = useState(false);
  return (
    <section className="home">
      <div className="home__animation">
        <TypeWriterText />
        <div className="MainScreenContainer">
          <MainScreen setshowArrow={setshowArrow} />
        </div>
        <Link
          className={`homearrow ${showArrow && "visible"}`}
          to="about"
          smooth={true}
          offset={-40}
          duration={500}
        >
          <i className="bx bx-chevrons-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
