import styled from "styled-components";

export const MainContentGrid = styled.div`
  background-color: ${(props) => (props.inHome ? "#E20613" : "white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  gap: 0px 10px;
  min-height: 205px;
  height: 100%;

  .container {
    width: 80%;
  }

  .arrowsContainer {
    height: 0px;
    overflow: visible;
    width: 90%;
    transform: translateY(-60px);
    .arrows {
      display: flex;
      justify-content: space-between;

      .arrowLeft,
      .arrowRight {
      }

      svg {
        fill: ${(props) => (props.inHome ? "white" : "#243982")};
        cursor: pointer;
      }
    }
  }

  .selected {
    color: #E20613;

    
    img {
      filter: invert(1);
      filter: brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(7421%) hue-rotate(355deg) brightness(98%) contrast(109%);
    }
  }
`;
