import styled from "styled-components";

export const ItemMenu = ({ item }) => {
  return (
    <Container>
      <a href={item.url}>{item.text}</a>
    </Container>
  );
};

const Container = styled.li`
  position: relative;

  a {
    position: relative;
    display: flex;
    height: 40px;
    width: 150px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: "Source Sans 3", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    color: var(--text_color_nav);
    text-transform: uppercase;
    z-index: 1;
    &:hover {
      color: var(--text_color_nav_hover);
    }
    &::before {
      content: "";
      position: absolute;
      width: 200px;
      height: 100px;
      background: radial-gradient(
        circle,
        rgba(255, 128, 0, 0.219) 0%,
        transparent 60%
      );
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      filter: blur(20px);
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 0;
    }

    &:hover::before {
      opacity: 1;
    }
  }
`;
