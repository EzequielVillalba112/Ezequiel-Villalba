import { useState } from "react";
import { textAboutMe } from "./utils/Text";
import { Nav } from "./components/organismos/Nav";
import { Hero } from "./components/organismos/Hero";
import { AboutMe } from "./components/organismos/AboutMe";

function App() {
  const [lang, setLang] = useState("es");

  const content = textAboutMe.find((t) => t.lang === lang);

  return (
    // <section className="py-10 px-6 max-w-3xl mx-auto text-gray-800">
    //   <div className="flex justify-end mb-4">
    //     <button onClick={() => setLang(lang === "es" ? "en" : "es")}>
    //       {lang === "es" ? "EN" : "ES"}
    //     </button>
    //   </div>
    //   <h2 c>{lang === "es" ? "Sobre mí" : "About Me"}</h2>
    //   <div>
    //     {content.introduction}
    //     {content.skills}
    //     {content.interests}
    //     {content.experience}
    //   </div>
    // </section>
    <>
      <Nav />
      <Hero />
      <AboutMe/>
    </>
  );
}

export default App;
