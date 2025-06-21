import styled from "styled-components";
import { textAboutMe } from "../../utils/Text";
import { Title } from "../atomo/Title";
import { PiArrowBendDownRightFill } from "react-icons/pi";

export const AboutMe = () => {

  return (
    <Container>
      <div className="div1">
        <Title text={textAboutMe[0].title} size="4rem" />
      </div>
      <div className="div2">
        <PiArrowBendDownRightFill color="#ff7e00" size="9rem" />
      </div>
      <div className="div3">
        {textAboutMe[0].introduction}
        {textAboutMe[0].skills}
        {textAboutMe[0].interests}
        {textAboutMe[0].experience}
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 80dvh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  color: var(--text_color);
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  .div1 {
    grid-column: span 2 / span 2;
    grid-row: span 1 / span 1;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
  }

  .div2 {
    grid-column: span 2 / span 2;
    grid-row: span 5 / span 5;
    grid-column-start: 1;
    grid-row-start: 2;
    border-top: 1px solid var(--border_color);
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    display: flex;
    justify-content: end;
    
    svg{
        margin-right: 40px;
    }
  }

  .div3 {
    grid-column: span 2 / span 2;
    grid-row: span 6 / span 6;
    grid-column-start: 3;
    grid-row-start: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    font-size: 1.5rem;
    border-left: 1px solid var(--border_color);
    border-bottom: 1px solid var(--border_color);
  }
`;
