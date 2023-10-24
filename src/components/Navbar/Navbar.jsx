import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import classNames from "classnames";
import "./Navbar.css";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className={classNames("navbar scale-in-ver-top", {
        scrolled: isScrolled,
      })}
    >
      <div className="navbar__container">
        <div className="navlogo">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <img src="./../../../../logo.png" alt="logo" />
          </Link>
        </div>
        <nav className="navbar__container--navbox">
          <ul
            className={classNames("nav-links", {
              open: isMenuOpen,
            })}
          >
            <li>
              <Link
                className="hvr-underline-from-left"
                onClick={handleMenuToggle}
                to="about"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                className="hvr-underline-from-left"
                onClick={handleMenuToggle}
                to="skills"
                smooth={true}
                offset={-40}
                duration={500}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                className="hvr-underline-from-left"
                onClick={handleMenuToggle}
                to="portfolio"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="hvr-underline-from-left"
                onClick={handleMenuToggle}
                to="contact"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contacto
              </Link>
            </li>
          </ul>
          <DarkMode />
          <button
            onClick={handleMenuToggle}
            className={classNames("menu-button", {
              open: isMenuOpen,
            })}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
