import styled from "styled-components";

export const Title = ({ text, size }) => {
  return <Container $size={size}>{text}</Container>;
};

const Container = styled.h2`
  font-weight: 600;
  font-size: ${(props)=>props.$size};
  text-transform: uppercase;
  color: var(--text_color);
  margin-left: 40px;
`;
