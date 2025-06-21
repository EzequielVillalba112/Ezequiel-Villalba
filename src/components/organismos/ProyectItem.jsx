import styled from "styled-components";
import { Title } from "../atomo/Title";

export const ProyectItem = () => {
  return (
    <Container>
      <div className="div1">
        <Title text={"01"} text2={"Ctrl inventario"} size={"4rem"}/>
      </div>
      <div className="div2">2</div>
      <div className="div3">3</div>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 80dvh;
  .div1 {
    display: flex;
    align-items: center;
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
  }

  .div2 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 1;
    grid-row-start: 3;
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
  }

  .div3 {
    grid-column: span 3 / span 3;
    grid-row: span 6 / span 6;
    grid-column-start: 3;
    grid-row-start: 1;
    border-bottom: 1px solid var(--border_color);
    border-left: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
  }
`;
