import styled from "styled-components";

export const Menu = styled.nav`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 50vw;
  background: #136c35;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 11;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 576px) {
    width: 100%;
  }

  .containerMenu {
    width: 100%;
  }

  menu {
    display: grid;
    width: 100%;
    justify-items: center;
    text-align: center;

    a {
      width: 100%;
      font-size: 0.7rem;
      padding: 30px 0px;
      border-bottom: 1px solid white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      color: #effffa;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 500px) {
        text-align: center;
      }
    }
  }

  .socials {
    display: grid;
    justify-items: center;
    text-align: center;

    a {
      padding: 20px 0px;
      width: 100%;
      border-bottom: 1px solid white;
    }

    .facebook {
      border-bottom: none;
    }
  }
`;
