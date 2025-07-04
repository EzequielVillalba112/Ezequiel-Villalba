import styled from "styled-components";
import { MdAttachEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <Container id="contact">
      <Info>
        <MdAttachEmail color="#ff7e00" size="3rem" />{" "}
        ezequielvillalba0000@gmail.com
      </Info>
      <Info>
        <IoIosPhonePortrait color="#ff7e00" size="3rem" /> +54 3743-585057
      </Info>

      <SocialLinks>
        <a
          href="https://github.com/EzequielVillalba112"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#ff7e00" size="3rem" /> Ezequiel Villalba
        </a>
      </SocialLinks>
    </Container>
  );
};

const Container = styled.section`
  padding: 3rem 1rem;
  text-align: center;
  font-family: "Source Sans 3", sans-serif;
  border-bottom: 1px solid var(--border_color);
  border-top: 1px solid var(--border_color);
`;

const Info = styled.p`
  font-size: clamp(0.5rem, 5vw, 2rem);
  margin: 0.5rem 0;
  color: var(--text_color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    color: var(--text_color);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: clamp(0.5rem, 5vw, 2rem);
    &:hover {
      color: var(--text_color_nav_hover);
    }
  }
`;
