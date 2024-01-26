import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 15;

  .div {
    width: 2rem;
    height: 0.35rem;
    background: ${({ open }) => (open ? "#2a866c" : "#1C7045")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  &:focus {
    outline: none;
  }

  .barOne {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  .barTwo {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  .barThree {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media screen and (max-width: 1024px) {
    .div {
      background: ${({ open }) => (open ? "#ffffff" : "#1C7045")};
    }
  }

  @media screen and (max-width: 820px) {
    .div {
      background: white;
    }
  }

  @media screen and (max-width: 500px) {
    transform: translateX(-10px);
  }
`;
