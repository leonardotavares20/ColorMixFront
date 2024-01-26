import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
`;

export const ContainerPagination = styled.div`
  width: 80vw;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  ul {
    list-style-type: none;
  }

  .page-link {
    width: 25px;
    height: 25px;
    display: flex;
    border-radius: 100%;
    align-items: center;
    border-radius: 100%;
    justify-content: center;
  }

  .next-item,
  .previous-item {
    background-color: white;
  }

  .page-item {
    background-color: #d9d9d9;
    height: 25px;
    display: flex;
    border-radius: 100%;
    align-items: center;
    border-radius: 100%;
    justify-content: center;
    transition: all.3s;
  }

  .pagination {
    display: flex;
    gap: 10px;
    margin-bottom: 50px;
  }

  .active {
    background-color: ${(props) => props.theme.colors.Jewel};
    transition: all.3s;
    color: white;
    border-radius: 100%;
  }

  svg {
    fill: ${(props) => props.theme.colors.Jewel};
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  img {
    margin-bottom: 50px;
    width: 90%;
  }
`;

export const Title = styled.div`
  width: 80vw;
  margin-bottom: 50px;
  transform: translateY(50px);
  color: ${(props) => props.theme.colors.Jewel};
  text-align: center;
`;
