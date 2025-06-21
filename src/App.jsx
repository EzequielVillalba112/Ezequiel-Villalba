import { Nav } from "./components/organismos/Nav";
import { Hero } from "./components/organismos/Hero";
import { AboutMe } from "./components/organismos/AboutMe";
import { TitleSectProyects } from "./components/organismos/TitleSectProyects";
import { ProyectItem } from "./components/organismos/ProyectItem";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <TitleSectProyects />
      <ProyectItem/>
    </>
  );
}

export default App;
