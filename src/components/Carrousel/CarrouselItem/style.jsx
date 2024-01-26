import styled from "styled-components";

export const DivCarrouselItem = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 10px;
  padding: 5px 0px;

  img {
    width: 170px;
    height: 200px;
    object-fit: contain;
  }

  .name {
    font-weight: 300;
    margin-top: 5px;
    color: ${(props) => props.theme.colors.LigthGray};
  }

  .priceDiv {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0px 30px;
    width: 100%;
  }

  .price {
    margin-top: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.JadeGreen};
  }
`;
