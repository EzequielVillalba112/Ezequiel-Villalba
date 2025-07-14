import styled from "styled-components";

export const Btn = ({ text, url, target = "_blank", onclick = null }) => {
  return (
    <StyledLink
      onClick={onclick}
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {text}
      {text === "Descargar CV" ? (
        <span className="svg arrow-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 511.93 511.93"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M476.738 280.436c-4.16-4.16-10.88-4.16-15.04 0l-195.2 195.2V10.996c0-5.333-3.84-10.133-9.067-10.88-6.613-.96-12.267 4.16-12.267 10.56v464.96l-195.093-195.2c-4.267-4.053-10.987-3.947-15.04.213-3.947 4.16-3.947 10.667 0 14.827l213.333 213.333c4.16 4.16 10.88 4.16 15.04 0l213.333-213.333c4.16-4.16 4.16-10.987 0-15.147z" />
          </svg>
        </span>
      ) : (
        <span className="svg arrow-right">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 31.49 31.49"
          >
            <path
              d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
              C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
              c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
            />
          </svg>
        </span>
      )}
    </StyledLink>
  );
};

const StyledLink = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  padding: 10px 30px;
  font-size: 1.2rem;
  color: #e27100;
  font-weight: 500;
  letter-spacing: 0.24rem;
  cursor: pointer;
  border: 2px solid #e27100;
  border-radius: 38px;
  overflow: hidden;
  text-decoration: none;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 50px;
  max-width: 300px;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #e27100;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: -1;
  }

  &:hover {
    color: white;

    &::after {
      transform: scaleX(1);
      transform-origin: 0% 50%;
    }

    .arrow-down {
      animation: button-arrow-down 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
    .arrow-right {
      animation: button-arrow-right 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
  }

  .svg {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 25px;
    fill: currentColor;
  }

  @keyframes button-arrow-right {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    10% {
      opacity: 1;
      transform: translateX(0);
    }
    49% {
      opacity: 0;
      transform: translateX(-25px);
    }
  }

  @keyframes button-arrow-down {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    49% {
      opacity: 0;
      transform: translateY(-25px);
    }
  }
`;
