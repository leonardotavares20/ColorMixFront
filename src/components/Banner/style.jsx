import styled from "styled-components";

export const ContainerBanner = styled.section`
  margin-bottom: 20px;
  max-height: 500px;

  img {
    width: 100%;
    max-height: 450px;
    display: flex;
    object-fit: contain;
  }

  .mySwiper {
    width: 95%;
    margin-top: 30px;
    object-fit: cover;
  }

  .arrowsContainer {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  .arrows {
    display: flex;
    width: 7%;
    justify-content: space-around;
    color: ${(props) => props.theme.colors.Jewel};

    svg {
      cursor: pointer;
    }
  }
`;
