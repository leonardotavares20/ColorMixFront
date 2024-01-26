import styled from "styled-components";

export const CategoryItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  gap: 20px 0px;
  cursor: pointer;
  color: white;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 20px 0px;
  }

  img {
    height: 40px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.GoldenYellow};

    img {
      filter: invert(1);
      filter: brightness(0) saturate(100%) invert(77%) sepia(96%)
        saturate(1472%) hue-rotate(349deg) brightness(104%) contrast(104%);
    }
  }
`;
