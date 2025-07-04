import styled from "styled-components";
import { textNav } from "../../utils/Text";
import { ItemMenu } from "../atomo/ItemMenu";

export const Nav = () => {
  return (
    <Container>
      <ul className="container-menu">
        {textNav[0].items.map((item, key) => (
          <ItemMenu item={item} key={key} />
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  .container-menu {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 1.5rem;
    list-style: none;
  }
  @media (max-width: 800px) {
    height: auto;
    display: flex;
    ul {
      flex-wrap: wrap;
    }
  }
`;
