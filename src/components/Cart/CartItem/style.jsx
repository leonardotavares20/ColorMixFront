import styled from "styled-components";

export const ContainerItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "nameImage amount price subtotalItem";
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.JadeGreen};
  padding-bottom: 30px;
  align-items: center;
  gap: 30px;

  h4 {
    font-size: 1rem;
  }

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
  }

  .productImageName {
    display: grid;
    font-size: 1.1rem;
    grid-area: nameImage;

    .divImageNameProduct {
      display: flex;
      gap: 0px 10px;
      align-items: center;

      p {
        color: ${(props) => props.theme.colors.LigthGray};
        font-weight: 300;
        width: 80%;
      }
    }
  }

  .amount {
    display: grid;
    grid-area: amount;

    .amountTablet {
      color: black;
    }

    .divAmount {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      height: 33px;
      justify-items: center;
      width: 60%;
      border-radius: 5px;
      border: 1px solid #00000033;

      button {
        background-color: transparent;
        border: none;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
          fill: ${(props) => props.theme.colors.JadeGreen};
        }
      }

      p {
        font-size: 1.1rem;
        color: ${(props) => props.theme.colors.LigthGray};
        text-align: center;
      }
    }
  }

  .price {
    color: ${(props) => props.theme.colors.LigthGray};
    font-size: 1rem;
    grid-area: price;
  }

  .subtotalItemPrice {
    font-weight: 600;
    font-size: 1rem;
    grid-area: subtotalItem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-areas:
      "nameImage amount price"
      "subtotalItem subtotalItem subtotalItem ";

    .productImageName {
      display: grid;
      grid-template-rows: 50px 60px;
      gap: 0px;

      .divImageNameProduct {
        display: flex;

        img {
          width: 50px;
          height: 50px;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    .amount {
      display: grid;
      grid-template-rows: 50px 60px;

      .divAmount {
        width: 80%;
      }
    }

    .price {
      display: grid;
      grid-template-rows: 50px 60px;

      h4 {
        color: black;
      }
    }

    .subtotalItemPrice {
      display: grid;
      grid-template-rows: 50px 60px;
    }
  }

  @media screen and (max-width: 820px) {
    grid-template-areas:
      "nameImage nameImage nameImage"
      "amount amount amount"
      "price price price"
      "subtotalItem subtotalItem subtotalItem";
  }

  @media screen and (max-width: 500px) {
    grid-template-areas:
      "nameImage nameImage nameImage nameImage"
      "amount amount amount amount"
      "price price price price"
      "subtotalItem subtotalItem subtotalItem subtotalItem";

    p {
      font-size: 1rem;
    }
  }
`;
