import styled from "styled-components";

export const CentralButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  button {
    width: 200px;
    height: 50px;
    border-radius: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #2cac6b;
    color: white;
    cursor: pointer;

    svg {
      transform: translateX(-10px);
    }
  }
`;
