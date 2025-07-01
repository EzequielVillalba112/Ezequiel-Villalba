import { useState } from "react";
import styled from "styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { ViewImg } from "../molecula/ViewImg";

export const Carousel = ({ data, alt }) => {
  const [viewImg, setViewImg] = useState(false);
  const [current, setCurrent] = useState(0);
  const checkClick = (navigation) => {
    navigation === "left" ? setCurrent(current - 1) : setCurrent(current + 1);
  };

  return (
    <>
      {viewImg === false ? (
        <Container>
          {current != 0 && (
            <FaArrowCircleLeft
              color="#e4e4e4"
              size="2rem"
              className="arrow-left"
              onClick={() => checkClick("left")}
            />
          )}
          <img
            src={data[current]}
            alt={alt + " img"}
            onClick={() => setViewImg(!viewImg)}
          />
          {current < data.length - 1 && (
            <FaArrowCircleRight
              color="#e4e4e4"
              size="2rem"
              className="arrow-right"
              onClick={() => checkClick("right")}
            />
          )}
        </Container>
      ) : (
        <ViewImg
          src={data[current]}
          state={() => setViewImg(!viewImg)}
          alt={alt}
        />
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 90%;
  max-height: 60dvh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  svg {
    position: absolute;
    cursor: pointer;
  }

  .arrow-left {
    left: -40px;
    top: 50%;
  }

  .arrow-right {
    top: 50%;
    right: -40px;
  }
`;
