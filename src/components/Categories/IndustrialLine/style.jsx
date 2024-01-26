import styled from "styled-components";

export const ContainerIndustrialCategories = styled.section`
  h2 {
    margin: 50px 0px;
  }

  min-height: 450px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const DivCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0px 15px;
  align-content: center;
  width: 80vw;
  gap: 30px;
`;
