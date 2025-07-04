import styled from "styled-components";
import { FaAsterisk } from "react-icons/fa";
import { Title } from "../atomo/Title";

export const SectTitle = ({ text }) => {
  return (
    <Container id={text}>
      <div className="div2">
        <FaAsterisk color="#ff7e00" size="6rem" />
      </div>
      <div className="div4">
        <Title text={text} size="6rem" />
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
    grid-column: span 1 / span 1;
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
    grid-column: span 4 / span 4;
    grid-row: span 3 / span 3;
    border-left: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
    border-bottom: 1px solid var(--border_color);
  }

  @media (max-width: 1000px) {
     height: 15dvh;
    .div2 {
      svg {
        height: 4rem;
      }
    }
  }
   @media (max-width: 800px) {
    .div2 {
      svg {
        height: 3rem;
      }
    }
  }
`;
