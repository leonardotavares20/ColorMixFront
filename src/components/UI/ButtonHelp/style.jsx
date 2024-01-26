import styled from "styled-components";

export const Div = styled.div``;

export const DivHelp = styled.div`
  background-color: ${(props) => props.theme.colors.JadeGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  right: 0;
  top: 50%;
  bottom: 50%;
`;
