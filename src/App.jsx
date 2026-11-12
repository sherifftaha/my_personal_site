import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Services />
      <CaseStudies />
      <Experience />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
