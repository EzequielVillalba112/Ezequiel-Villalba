import styled from "styled-components";

export const Btn = ({ text, url, target = "" }) => {
  return <Container href={url} target={target}>{text}</Container>;
};

const Container = styled.a`
  text-decoration: none;
  height: 40px;
  width: 150px;
  background: var(--btn-background);
  font-size: 20px;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  color: var(--text_color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  transition: 0.3s ease-in;
  letter-spacing: 1.4px;
  &:hover{
    scale: 1.1;
    background: var(--btn-background-hover);
  }
`;
