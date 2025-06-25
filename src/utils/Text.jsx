//Tech Img
import ReactImg from "../assets/proyects/icon tec/react.svg";
import SupaBaseImg from "../assets/proyects/icon tec/supabase.png";
import ViteImg from "../assets/proyects/icon tec/vite.svg";
import StyledCompImg from "../assets/proyects/icon tec/styled-components.svg";
//Inveon Img
import LogoInveon from "../assets/proyects/Inveon/logo.png";
import LoginImgInv from "../assets/proyects/Inveon/login.png";
import ConfigProd from "../assets/proyects/Inveon/conf-prod.png";
import Kardex from "../assets/proyects/Inveon/kardex.png";
import ListProd from "../assets/proyects/Inveon/list-prod.png";

export const textAboutMe = [
  {
    title: "Sobre mí",
    introduction: (
      <p>
        ¡Hola!, Soy técnico en Análisis de Sistemas Informáticos de Misiones,
        Argentina.
      </p>
    ),
    skills: (
      <p>
        Me especializo en desarrollo front-end con tecnologías como{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>{" "}
        y <strong>React</strong>.
      </p>
    ),
    interests: (
      <p>
        Me gusta aprender nuevas tecnologías y desarrollar interfaces reales que
        sean fluidas y fáciles de usar.
      </p>
    ),
    experience: (
      <p>
        Actualmente estoy en búsqueda de mi primera oportunidad profesional como
        desarrollador front-end.
      </p>
    ),
  },
];

export const textProjects = [
  {
    title: "Proyectos",
    description: "Algunos de mis proyectos.",
  },
];

export const proyects = [
  {
    nProyect: "01",
    title: "Inveon",
    logo: LogoInveon,
    detail:
      "Aplicación web desarrollada para la gestión eficiente de inventario, diseñada con un enfoque intuitivo y adaptable. Permite registrar productos, categorías y marcas para los respectivos productos.",
    Tech: [ViteImg, ReactImg, SupaBaseImg, StyledCompImg],
    imgProyect: [LoginImgInv, ConfigProd, Kardex, ListProd],
  }
];

export const textContact = [
  {
    title: "Contacto",
    description: "Si tienes alguna pregunta, no dudes en contactarme.",
  },
];

export const textFooter = [
  {
    description: "Desarrollado por Ezequiel Villalba.",
  },
];

export const textNav = [
  {
    items: [
      { text: "Inicio", url: "#" },
      { text: "Sobre mi", url: "#" },
      { text: "Proyectos", url: "#" },
      { text: "Contacto", url: "#" },
    ],
  },
];
