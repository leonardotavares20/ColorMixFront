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
  background-color: #243982;
  border: none;
  cursor: pointer;
  border-radius: 0px 0px 0px 20px;
  width: 50%;
  color: white;
  height: 40px;
  transition: 0.5s;
  width: 110px;

  &:hover {
    background-color: #4362d2;
    transition: 0.5s;
  }
`;

export const ButtonTransparent = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 0px 0px 0px 20px;
  width: 50%;
  padding: 0px 5px;
  color: #243982;
  width: 110px;
  height: 40px;
  transition: 0.5s;

  &:hover {
    border: 1px solid #243982;
    transition: 0.5s;
  }
`;

export const ButtonGreen = styled(ButtonGray)`
  background-color: ${(props) => props.theme.colors.JadeGreen};
`;
