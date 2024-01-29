import styled from "styled-components";

export const DivItem = styled.div`
  .container {
    display: grid;
    justify-items: center;
  }

  .itemDescription {
    display: grid;
    padding: 10px 20px;
    gap: 5px 0px;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    text-align: center;
    align-content: start;
    height: 270px;
    width: 220px;
    border-radius: 5px;
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
    display: flex;
    align-items: end;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 900;
    color: #243982;
  }

  img {
    width: 160px;
    height: 160px;
    object-fit: contain;
  }
`;
