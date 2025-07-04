import styled from "styled-components";

export const Title = ({ text, text2 = ""}) => {
  return (
    <Container >
      <h2>
        {text}
        {text2 !== "" && (
          <>
            <br />
            {text2}
          </>
        )}
        <span className="punto"></span>
      </h2>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;

  h2 {
    font-weight: 600;
    font-size: clamp(2.5rem, 6vw, 6rem);
    text-transform: uppercase;
    color: var(--text_color);
    font-family: "Source Sans 3", sans-serif;
    align-items: baseline;
  }

  .punto {
    display: inline-block;
    margin-left: 0.1em;
    width: 0.2em;
    height: 0.2em;
    border-radius: 50%;
    background-color: var(--text_color_nav);
  }

`;
