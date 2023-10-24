import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <article className="whatsappLogo">
        <div className="pulse"></div>
        <div className="pulse"></div>
        <div className="pulse"></div>
        <a
          href="https://wa.me/+595975639565"
          target="_blank"
          className="whatsapp-info pulse"
          rel="noreferrer"
        >
          <span className="whatsapp">
            <i className="bx bxl-whatsapp"></i>
          </span>
        </a>
      </article>
    </main>
  );
}

export default App;
