import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Navbar";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Portafolio from "./components/portafolio/Portafolio";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
