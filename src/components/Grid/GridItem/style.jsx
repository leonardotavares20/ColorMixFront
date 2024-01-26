import styled from "styled-components";

export const DivItem = styled.div`
  div {
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 10px 20px;
    justify-items: center;
    text-align: center;
    align-content: start;
    height: 350px;
    width: 220px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px #00000032;
  }

  button {
    margin-top: 5px;
  }

  a {
    max-width: 100%;
  }

  .name {
    margin-top: 5px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.LigthGray};
  }

  .price {
    margin-top: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.JadeGreen};
  }

  img {
    width: 160px;
    height: 160px;
    object-fit: contain;
  }
`;
