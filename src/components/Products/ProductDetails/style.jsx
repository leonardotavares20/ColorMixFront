import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  justify-items: center;
`;

export const ContainerItem = styled.div`
  width: 80%;
  background-color: #f1f1f1;
  display: grid;
  grid-template-areas:
    "title addItem"
    "image addItem"
    "description addItem";
  grid-template-columns: 1.5fr 1fr;
  min-height: 500px;
  align-items: center;
  padding: 40px;
  gap: 30px 40px;
  margin-bottom: 50px;

  .title {
    grid-area: title;
    color: #136c35;
    font-size: 1.6rem;
  }

  img {
    width: 100%;
    max-width: 350px;
    grid-area: image;
  }

  .descriptionText {
    grid-area: description;

    h3 {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-areas:
      "title addItem"
      "image addItem"
      "description description";
  }

  @media screen and (max-width: 820px) {
    grid-template-areas:
      "title title"
      "image imagem"
      "addItem addItem"
      "description description";
  }

  @media screen and (max-width: 600px) {
    img {
      min-width: 200px;
    }

    .title {
      font-size: 1.2rem;
    }
  }
`;

export const Description = styled.div`
  background-color: gray;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    margin: 20px 0px;
  }
`;
