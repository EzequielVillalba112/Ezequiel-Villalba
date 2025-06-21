import styled from "styled-components";
import { FaAsterisk } from "react-icons/fa";
import { textProjects } from "../../utils/Text";
import { Title } from "../atomo/Title";

export const TitleSectProyects = () => {
  return (
    <Container>
      <div className="div2">
        <FaAsterisk color="#ff7e00" size="6rem" />
      </div>
      <div className="div4">
        <Title text={textProjects[0].title} size="6rem" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 20dvh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  .div2 {
    grid-column: span 2 / span 2;
    grid-row: span 3 / span 3;
    border-top: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    border-bottom: 1px solid var(--border_color);
    display: flex;
    justify-content: start;
    align-items: center;
    svg {
      margin-left: 40px;
    }
  }
  .div4 {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 3;
    border-left: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
    border-bottom: 1px solid var(--border_color);
  }
`;
