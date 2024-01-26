import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.Gray};
  min-height: 350px;
  color: white;
  display: grid;
  grid-template-rows: 2fr 0.1fr;
  align-items: center;
  justify-items: center;
  text-transform: uppercase;

  ul {
    list-style-type: none;
    margin-top: 20px;
    display: grid;
    align-items: start;
  }

  a {
    color: white;
  }

  li {
    padding: 3px 0px;
  }

  .license {
    background-color: #383838;
    display: flex;
    width: 100%;
    padding: 10px 0px;
    justify-content: center;
  }

  @media screen and (max-width: 750px) {
    .license {
      justify-items: center;
      text-align: center;
    }
  }
`;

export const ContainerFooterLinks = styled.div`
  width: 80vw;
  display: grid;
  justify-items: center;
  grid-template-areas: "logo map socials contact";
  min-height: 200px;
  gap: 0px 30px;

  .insta,
  .face {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .map {
    grid-area: map;
  }

  .image {
    display: flex;
    grid-area: logo;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    grid-template-areas:
      "logo logo logo"
      "map socials contact";

    .image {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 750px) {
    grid-template-areas:
      "logo"
      "map"
      "concact"
      "socials";
    width: 65vw;

    .image {
      margin-top: 40px;
    }

    .media {
      display: grid;
      margin-bottom: 30px;
      justify-items: center;
      text-align: center;
    }

    .license {
      justify-items: center;
      text-align: center;
    }
  }
`;
