import styled from "styled-components";

export const PopUpContainer = styled.div`
  position: fixed;
  z-index: 20;
  display: flex;
  justify-items: center;
  align-items: center;
  color: white;
  text-align: center;
  border-radius: 20px;
  background-color: #2cac6b;
  width: 150px;
  border: 2px solid white;
  height: 60px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;
