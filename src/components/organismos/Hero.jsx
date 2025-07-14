import styled from "styled-components";
import { FaAsterisk } from "react-icons/fa";
import { Title } from "../atomo/Title";
import { Btn } from "../molecula/Btn";

export const Hero = () => {
  const handleDownload = () => {
    fetch("/CV_Ezequiel_Villalba.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;

        // Obtener fecha actual
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0"); 
        const dd = String(today.getDate()).padStart(2, "0");
        const fecha = `${yyyy}-${mm}-${dd}`;

        a.download = `Ezequiel_Villalba_CV_${fecha}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      });
  };
  return (
    <Container>
      <div className="div1">
        <Title text={"Ezequiel Villalba"} />
      </div>
      <div className="div2">
        <FaAsterisk color="#ff7e00" size="9rem" />
      </div>
      <div className="div3"></div>
      <div className="div4">
        <h3>
          Front-end web <br /> development
        </h3>
        <Btn text={"Descargar CV"} onclick={handleDownload}/>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: calc(100dvh - 80px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border-top: 1px solid var(--border_color);
  font-family: "Source Sans 3", sans-serif;
  .div1 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    padding: 40px;
  }

  .div2 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 1;
    grid-row-start: 3;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    svg {
      margin-left: 40px;
      margin-bottom: 40px;
    }
  }

  .div3 {
    grid-row: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 1;
    border-bottom: 1px solid var(--border_color);
    border-left: 1px solid var(--border_color);
  }

  .div4 {
    grid-row: span 4 / span 4;
    grid-column-start: 3;
    grid-row-start: 3;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    justify-content: end;
    border-left: 1px solid var(--border_color);
    border-bottom: 1px solid var(--border_color);
    padding: 40px;
    h2 {
      font-weight: 600;
      font-size: 4rem;
      color: var(--text_color);
      text-align: center;
    }
    h3 {
      font-weight: 600;
      font-size: 1.5rem;
      text-transform: uppercase;
      color: var(--text_color);
      text-align: center;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 800px) {
    .div3 {
      display: none;
    }
    .div2 {
      display: none;
    }
    .div1 {
      grid-column: span 3 / span 2;
      h2 {
        font-size: 3rem !important;
      }
    }
    .div4 {
      grid-column: span 3 / span 2;
    }
  }
`;
