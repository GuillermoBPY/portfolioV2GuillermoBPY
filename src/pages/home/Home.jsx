import { useState } from "react";
import MainScreen from "../../components/ScrambleText/ScrambleText";
import TypeWriterText from "../../components/TypeWriterText/TypeWriterText";
import "./Home.css";
const Home = () => {
  const [showArrow, setshowArrow] = useState(false);
  return (
    <section className="home">
      <div className="home__animation">
        <TypeWriterText />
        <div className="MainScreenContainer">
          <MainScreen setshowArrow={setshowArrow} />
        </div>
        <i
          className={`bx bx-chevrons-down ${
            showArrow && "visible"
          }`}
        ></i>
      </div>
    </section>
  );
};

export default Home;
