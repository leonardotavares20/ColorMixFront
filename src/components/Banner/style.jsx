import styled from "styled-components";

export const ContainerBanner = styled.section`
  img {
    width: 100%;
    display: flex;
    object-fit: contain;
  }

  .swiper-pagination-bullet {
    background-color: #243982;
    width: 10px;
    height: 10px; 
  }

  .mySwiper {
    width: 100%;
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
