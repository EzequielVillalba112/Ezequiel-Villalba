import styled from "styled-components";
import { Title } from "../atomo/Title";
import { ItemLogoTech } from "../atomo/itemLogoTech";
import { Btn } from "../molecula/Btn";
import { Carousel } from "./Carousel";

export const ProyectItem = ({ data }) => {
  return (
    <Container>
      <div className="div1">
        <Title text={data.nProyect} text2={data.title} />
      </div>
      <div className="div2">
        <p>{data.detail}</p>
        <div className="tech">
          <h2>Tecnologías utilizadas:</h2>
          <div className="item-tech">
            {data.Tech.map((item, i) => (
              <ItemLogoTech img={item} alt={data.title + ` img`} key={i} />
            ))}
          </div>

          <Btn text={"Ver página"} url={data.url} target={"_blank"}/>
        </div>
      </div>
      <div className="div3">
        <Carousel data={data.imgProyect} alt={data.title}/>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 100%;
  height: auto;
  .div1 {
    display: flex;
    align-items: center;
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
    padding: 40px;
  }

  .div2 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 1;
    grid-row-start: 3;
    border-bottom: 1px solid var(--border_color);
    border-right: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
    padding: 40px;
    p,h2 {
      font-size: 20px;
      font-family: "Open Sans", sans-serif;
      color: var(--text_color);
    }

    .tech {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      
      .item-tech{
        display: flex;
        gap: 10px;
      }
    }
  }

  .div3 {
    padding: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: span 3 / span 3;
    grid-row: span 6 / span 6;
    grid-column-start: 3;
    grid-row-start: 1;
    border-bottom: 1px solid var(--border_color);
    border-left: 1px solid var(--border_color);
    border-top: 1px solid var(--border_color);
  }

   @media (max-width: 800px) {
    height: auto;
    display: flex;
    flex-direction: column;
   .div3{
    border-left: none;
   }
  }
`;
