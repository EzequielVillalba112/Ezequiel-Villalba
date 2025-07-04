import { Nav } from "./components/organismos/Nav";
import { Hero } from "./components/organismos/Hero";
import { AboutMe } from "./components/organismos/AboutMe";
import { SectProyects } from "./components/organismos/SectProyects";
import { SectTitle } from "./components/organismos/SectTitle";
import { Contact } from "./components/organismos/Contact";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <SectTitle text={"Proyectos"}/>
      <SectProyects/>
      <SectTitle text={"Contacto"}/>
      <Contact/>
    </>
  );
}

export default App;
