import styled from "styled-components";

export const ContainerTitle = styled.div`
  background: url(${(props) => props.back});
  height: 240px;
  width: 100vw;
  background-repeat: no-repeat;
  margin-bottom: 50px;
  display: grid;
  padding-left: 40px;
  justify-content: start;
  align-items: center;

  div {
    h1 {
      color: white;
      font-weight: 800;
    }
  }

  .fontLigth {
    font-weight: 300;
    font-size: 1.4rem;
  }
`;

export const ContainerGrid = styled.div`
  min-height: 500px;
  padding: 0px 50px;
  display: grid;
  gap: 70px 0px;
  margin-bottom: 100px;
`;

export const GridImageText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 50px;

  img {
    max-width: 768px;
    width: 100%;
  }

  p {
    margin: 15px 0px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const GridAboutCompany = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 0px 100px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }

  h2 {
    padding-bottom: 20px;
    border-bottom: 1px solid #d1d1d1;
    color: #016d4d;
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    width: 30px;
    left: 0;
    bottom: 0;
    height: 10px;
    background-color: #a0cab5;
  }

  p {
    padding-top: 15px;
  }
`;
