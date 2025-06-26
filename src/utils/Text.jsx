//Tech Img
import ReactImg from "../assets/proyects/icon tec/react.svg";
import SupaBaseImg from "../assets/proyects/icon tec/supabase.png";
import ViteImg from "../assets/proyects/icon tec/vite.svg";
import StyledCompImg from "../assets/proyects/icon tec/styled-components.svg";
import CssImg from "../assets/proyects/icon tec/css.svg";
import JavaImg from "../assets/proyects/icon tec/java-logo.svg";
import SQLiteImg from "../assets/proyects/icon tec/SQLite.svg";
//Inveon Img
import LoginImgInv from "../assets/proyects/Inveon/login.png";
import ConfigProd from "../assets/proyects/Inveon/conf-prod.png";
import Kardex from "../assets/proyects/Inveon/kardex.png";
import ListProd from "../assets/proyects/Inveon/list-prod.png";
//Flag game Img
import GameOver from "../assets/proyects/flag game/game-over.png";
import Interfaz from "../assets/proyects/flag game/interfaz-1.png";
import MessageFail from "../assets/proyects/flag game/message-fail.png";
import Start from "../assets/proyects/flag game/start.png";
//El rojo img
import AddProduct from "../assets/proyects/sistema android/add-product.jpg";
import Carrito from "../assets/proyects/sistema android/carrito.jpg";
import Home from "../assets/proyects/sistema android/home.jpg";
import ListProduct from "../assets/proyects/sistema android/list-product.jpg";
import Login from "../assets/proyects/sistema android/login.jpg";
import LogoAndroid from "../assets/proyects/sistema android/logo.png";

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
    detail:
      "Aplicación web desarrollada para la gestión eficiente de inventario, diseñada con un enfoque intuitivo y adaptable. Permite registrar productos, categorías y marcas para los respectivos productos.",
    Tech: [ViteImg, ReactImg, SupaBaseImg, StyledCompImg],
    imgProyect: [LoginImgInv, ConfigProd, Kardex, ListProd],
    url: "https://controlar-inventarios-con-react-pos-omega.vercel.app/login",
  },
  {
    nProyect: "02",
    title: "Flag Game",
    detail:
      "Es una aplicación interactiva donde el usuario debe adivinar el nombre del país correspondiente a cada bandera que se muestra. Las banderas se obtienen dinámicamente a través de la API de flagpedia.net. Es ideal para poner a prueba tus conocimientos de geografía.",
    Tech: [ViteImg, ReactImg, CssImg],
    imgProyect: [Start, Interfaz, MessageFail, GameOver],
    url: "https://ezequielvillalba112.github.io/Flag-Game/",
  },
  {
    nProyect: "03",
    title: "El rojo",
    detail:
      "El sistema El Rojo fue diseñado para gestionar ventas y cuentas corrientes en un maxikiosco, optimizando procesos de control de stock, registros de ventas y administración de cuentas corrientes.Su objetivo principal es agilizar la operatoria diaria, minimizando errores y facilitando el trabajo del usuario.",
    Tech: [JavaImg, SQLiteImg],
    imgProyect: [Login, Home, ListProduct, AddProduct, Carrito],
    url: "https://github.com/EzequielVillalba112/App-Android-para-control-de-inventario-cuenta-corriente-y-venta.git",
  },
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
