import styled from "styled-components";

export const ContainerAddItem = styled.div`
  grid-area: addItem;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 30px;
  border-left: 2px solid #d6d6d6;
  padding: 0px 30px;

  @media screen and (max-width: 820px) {
    padding: 0;
    display: block;
    border: none;
  }

  .gap {
    display: grid;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .price {
      color: #2cac6b;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .amount {
      color: white;
      display: grid;
      grid-template-columns: 1fr 1fr;
      background-color: #2cac6b;
      width: 220px;
      height: 33px;
      border-radius: 5px;
      margin: 20px 0px;
      align-items: center;
      justify-items: center;

      .buttons {
        display: grid;
        grid-template-columns: 50px 30px 50px;
        align-items: center;
        justify-items: center;
        justify-content: space-between;

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;

          svg {
            color: white;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .gap {
      h2 {
        font-size: 1rem;
      }

      .price {
        font-size: 1rem;
      }
    }
  }
`;
