import styled from "styled-components";

export const ButtonBlue = styled.button`
  background-color: #243982;
  min-width: 100px;
  border: none;
  cursor: pointer;
  color: white;
  z-index: 5;
  border-radius: 5px 20px 20px 5px;
`;

export const ButtonGray = styled.button`
  background-color: ${(props) => props.theme.colors.Gray};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 50%;
  padding: 0px 5px;
  color: white;
  height: 40px;
  transition: 0.5s;
  width: 110px;

  &:hover {
    background-color: ${(props) => props.theme.colors.JadeGreen};
    transition: 0.5s;
  }
`;

export const ButtonTransparent = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 50%;
  padding: 0px 5px;
  color: black;
  width: 110px;
  height: 40px;
  transition: 0.5s;

  &:hover {
    border: 1px solid black;
    transition: 0.5s;
  }
`;

export const ButtonGreen = styled(ButtonGray)`
  background-color: ${(props) => props.theme.colors.JadeGreen};
`;
