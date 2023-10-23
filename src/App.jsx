import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
    </main>
  );
}

export default App;
