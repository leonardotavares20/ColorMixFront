import styled from "styled-components";

export const MainContentGrid = styled.div`
  background-color: #e20613;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  gap: 0px 10px;
  min-height: 205px;
  color: white;
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
        cursor: pointer;
      }
    }
  }

  .selected {
    color: #243982;

    img {
      filter: invert(1);
      filter: brightness(0) saturate(100%) invert(15%) sepia(65%)
        saturate(3099%) hue-rotate(221deg) brightness(79%) contrast(83%);
    }
  }
`;
