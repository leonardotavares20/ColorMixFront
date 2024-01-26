import styled from "styled-components";

export const DivIndustrialLineItem = styled.div`
  border-radius: 7px;
  height: 260px;
  border: 1px solid ${(props) => props.theme.colors.LigthGray};
  display: grid;
  justify-items: center;
  align-items: center;

  .name {
    font-weight: 600;
  }

  button {
    color: ${(props) => props.theme.colors.JadeGreen};
    width: 80%;
    display: flex;
    align-items: center;
    gap: 0px 5px;
    justify-content: center;
    font-weight: 600;
  }
`;
