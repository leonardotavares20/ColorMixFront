import styled from "styled-components";

export const DivCartItem = styled.div`
  display: grid;
  align-items: center;
  padding: 0px 10px;
  grid-area: cart;
  gap: 20px;
  width: 100%;
  height: 100%;
  justify-items: start;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media screen and (max-width: 820px) {
    max-width: 300px;
    font-size: 8px;
    background-color: transparent;
  }

  .container {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #243982;
  }

  .link {
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
      width: 100px;
      height: 40px;
      border-radius: 20px 20px;
      padding: 0px;
    }

    @media screen and (max-width: 500px) {
      width: 120px;
      height: 30px;
    }
  }

  button {
    font-size: 12px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-content: center;
    text-align: start;
    position: relative;

    svg {
      color: white;
    }

    @media screen and (max-width: 500px) {
      font-size: 10px;
    }

    .numberOfCartItems {
      background-color: #ff3333;
      z-index: 5;
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      color: white;
      border-radius: 100%;
      height: 15px;
      width: 15px;
      left: 13px;
      font-size: 9px;
    }
  }
`;
