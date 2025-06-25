import styled from "styled-components"

export const ItemLogoTech = ({img, alt}) => {
  return (
    <Container>
        <img src={img} alt={alt} />
    </Container>
  )
}

const Container = styled.div`
    width: 40px;
    height: 40px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;