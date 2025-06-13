import styled from "styled-components";
import { textNav } from "../../utils/Text";
import { useLanguage } from "../../hooks/UseLanguage";
import { ItemMenu } from "../molecula/ItemMenu";

export const Nav = () => {
  const { language, setLanguage, toggleLanguag } = useLanguage();
  const content = textNav.find((t) => t.lang === language);
  return (
    <Container>
      <ul className="container-menu">
        {content.items.map((item, key) => (
            <ItemMenu item={item} key={key}/>
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
    .container-menu{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 2rem;
        list-style: none;
    }
`;
