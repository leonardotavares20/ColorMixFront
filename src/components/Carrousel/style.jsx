import styled from "styled-components";

export const ContainerCarrousel = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.colors.JadeGreen};
  border-top: 1px solid ${(props) => props.theme.colors.JadeGreen};
  min-height: 400px;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mySwiper {
    width: 70%;
  }

  .arrows {
    display: flex;
    justify-content: space-between;
    width: 70%;
    z-index: 5;

    svg {
      cursor: pointer;
      color: ${(props) => props.theme.colors.JadeGreen};
    }
  }

  h2 {
    font-family: "Unineue";
  }

  .similar {
    font-family: "Unineue Bold";
  }

  .titleCarrousel {
    width: 70%;
    margin-bottom: 20px;
  }

  .arrow {
    transform: translateY(-140px);
    position: relative;
    z-index: 100;
  }
`;
