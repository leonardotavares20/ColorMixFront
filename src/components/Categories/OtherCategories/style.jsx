import styled from "styled-components";

const url = `${import.meta.env.VITE_REACT_APP_STRAPI_URL}/other-materials`;

export const ContainerAllCategories = styled.section`
  background: url(${(props) => props.back});
  min-height: 450px;
  display: grid;
  grid-template-rows: 0.1fr 2fr;
  justify-content: center;
  padding: 50px 0px;

  h1 {
    margin-top: 20px;
    text-align: center;
    color: white;
    margin-bottom: 50px;
  }
`;

export const ContainerDiv = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 1.1rem;
  gap: 0px 15px;
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px 15px;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const DivCategories = styled.div`
  background-color: white;
  border-radius: 10px;
  min-width: 280px;
  height: 320px;
  display: grid;
  min-height: 85%;
  justify-items: center;
  align-items: center;

  .last-item {
    border-bottom: none;
  }

  li {
    position: relative;
    margin: 5px;
    color: ${(props) => props.theme.colors.JadeGreen};
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid ${(props) => props.theme.colors.JadeGreen};
    width: 230px;
  }

  ul {
    list-style-type: none;
  }
`;
