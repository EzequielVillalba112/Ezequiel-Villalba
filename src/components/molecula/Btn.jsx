import styled from "styled-components";

const orag = "#e27100";

export const Btn = ({ text, url, target = "_blank" }) => {
  return (
    <StyledLink
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {text}
      <span className="svg">
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
    </StyledLink>
  );
};

const StyledLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  padding: 20px 35px;
  font-size: 1.2rem;
  color: ${orag};
  font-weight: 500;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
  border: 2px solid ${orag};
  border-radius: 38px;
  overflow: hidden;
  text-decoration: none;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 75px;
  max-width: 300px;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${orag};
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

    .svg {
      animation: button-arrow-right 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) both;
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
`;
