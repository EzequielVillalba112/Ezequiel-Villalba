import styled from "styled-components";
import { FaAsterisk } from "react-icons/fa";
import { Title } from "../atomo/Title";

export const Hero = () => {
  return (
    <Container>
      <div className="div1">
        <Title text={"portafolio"} size="6rem"/>
      </div>
      <div className="div2">
        <FaAsterisk color="#ff7e00" size="9rem" />
      </div>
      <div className="div3"></div>
      <div className="div4">
        <h2>Ezequiel Villalba</h2>
        <h3>
          Front-end web <br /> development
        </h3>
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
`;
