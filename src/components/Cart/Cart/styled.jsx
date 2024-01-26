import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerCart = styled.section`
  display: grid;
  justify-content: center;
  margin: 40px 0px;
  min-height: 400px;
  width: 80%;

  .subtotalAndButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }

  .buttonsSubtotal {
    display: flex;
    gap: 15px;
  }

  .subtotal {
    font-size: 1.1rem;
    font-weight: 600;

    .subtotalSpan {
      color: ${(props) => props.theme.colors.Jewel};
      padding-left: 5px;
    }
  }

  @media screen and (max-width: 540px) {
    .subtotalAndButtons {
      flex-direction: column;
      gap: 20px 0px;
    }
  }

  .container {
    width: 80vw;
    display: grid;

    p {
      font-size: 1.2rem;
    }

    .colums {
      display: grid;
      transform: translateY(30px);
      height: 50px;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      margin-bottom: 50px;

      h2 {
        font-size: 1.2rem;
      }
    }

    @media screen and (max-width: 1024px) {
      .colums {
        display: none;
      }
    }
  }
`;

export const Title = styled.div`
  background-color: white;
  color: ${(props) => props.theme.colors.Jewel};
  font-size: 1.1rem;
  margin-bottom: 30px;
`;
