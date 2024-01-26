import styled from "styled-components";

export const MainContentGrid = styled.div`
  background-color: ${(props) => props.theme.colors.JadeGreen};
  display: grid;
  align-content: center;
  grid-template-columns: repeat(9, 1fr);
  padding: 0px 30px;
  gap: 0px 10px;
  min-height: 150px;
  color: white;

  @media screen and (max-width: 1024px) {
    padding: 20px 20px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .selected {
    color: ${(props) => props.theme.colors.GoldenYellow};

    img {
      filter: invert(1);
      filter: brightness(0) saturate(100%) invert(77%) sepia(96%)
        saturate(1472%) hue-rotate(349deg) brightness(104%) contrast(104%);
    }
  }
`;
