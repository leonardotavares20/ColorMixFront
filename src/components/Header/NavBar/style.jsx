import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: grid;
  position: relative;
  z-index: 10;
  background-color: white;
  grid-template-columns: 1fr 0.7fr 1fr 0.8fr;
  grid-template-areas: "logo links search cart";
  box-shadow: 0px 10px 10px 0px #11111115;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
    position: fixed;
  }

  @media screen and (max-width: 820px) {
    grid-template-areas:
      "logo logo cart cart"
      "search search search search";
    grid-template-rows: 2.5fr 1fr;
    height: 160px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0px 30px;

  img {
    width: 100%;
    min-width: 170px;
  }

  @media screen and (max-width: 820px) {
    padding: 0px;
    padding-left: 30px;
  }

  @media screen and (max-width: 500px) {
    img {
      min-width: 130px;
    }
  }
`;

export const DivMenu = styled.div`
  display: grid;
  justify-content: center;

  .menu {
    display: grid;
    align-content: center;
    justify-content: end;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    .linksMenu {
      display: flex;
      justify-content: flex-end;
      gap: 0px 15px;
    }

    menu {
      display: flex;
      align-items: center;
      list-style-type: none;
      gap: 5px 25px;
      padding-right: 10px;
    }

    a {
      color: black;
      padding: 5px 0px;
      transition: 0.5s;
      border-bottom: 5px solid transparent;
    }

    a:hover {
      border-bottom: 5px solid #243982;
      transition: 0.5s;
    }
  }
`;

export const DivCartSocials = styled.div`
  display: flex;
  height: 100%;

  .socialLinks {
    display: flex;
    margin: 0px 10px;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;

    a {
      border-bottom: none;
    }

    a:hover {
      border-bottom: none;
    }

    img {
      height: 25px;
    }
  }
`;

export const Wrap = styled.div`
  height: 0px;

  @media screen and (max-width: 1024px) {
    height: 100px;
  }

  @media screen and (max-width: 820px) {
    height: 160px;
  }
`;
