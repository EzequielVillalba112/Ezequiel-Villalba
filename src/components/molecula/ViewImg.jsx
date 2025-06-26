import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const ViewImg = ({ src, state, alt }) => {
  return (
    <Container>
      <div className="close">
        <IoClose color="#e27100" size="2.5rem" onClick={() => state()} />
      </div>

      <img src={src} alt={alt + " img"} />
    </Container>
  );
};

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  z-index: 200;
  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 40px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    &:hover {
      scale: 1.1;
      background-color: #ffff;
    }
  }
`;
