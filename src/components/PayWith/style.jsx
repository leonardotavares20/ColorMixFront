import styled from "styled-components";

export const ContainerPayWith = styled.section`
  background-color: ${(props) => props.theme.colors.SoftPeach};
  min-height: 300px;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  align-content: center;

  h2 {
    font-size: 1.5rem;
  }

  .title {
    display: flex;
    align-items: center;
  }
`;

export const ContainerPayMethods = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 30px 30px;
  width: 70vw;
  margin-bottom: 30px;
`;

export const ContainerOpeningHours = styled.div`
  background-color: ${(props) => props.theme.colors.Geyser};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0px 10px;
  color: ${(props) => props.theme.colors.IrishGreen};
`;
