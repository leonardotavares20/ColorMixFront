import styled from "styled-components";

export const ContainerGrid = styled.section`
  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 500px;
  padding: 50px 0px;

  .warning {
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

export const GridDiv = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  display: grid;
  justify-items: center;
  gap: 40px 0px;
  width: 70vw;
`;
