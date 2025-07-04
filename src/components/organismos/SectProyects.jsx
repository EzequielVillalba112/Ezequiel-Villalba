import styled from "styled-components";
import { proyects } from "../../utils/Text";
import { ProyectItem } from "./ProyectItem";

export const SectProyects = () => {
  return (
    <>
      <ContainerProyects>
        {proyects.map((item, i) => (
          <ProyectItem data={item} key={i} />
        ))}
      </ContainerProyects>
    </>
  );
};

const ContainerProyects = styled.section``;
