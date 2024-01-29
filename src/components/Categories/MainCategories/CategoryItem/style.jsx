import styled from "styled-components";

export const CategoryItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  gap: 20px 0px;
  cursor: pointer;
  color: ${(props) => (props.inHome ? "white" : "#243982")};
  text-align: center;
  font-size: 1.1rem;

  img {
    height: 45px;
    filter: invert(1);
    filter: ${(props) =>
      props.inHome
        ? "brightness(0) saturate(100%) invert(100%) sepia(46%) saturate(2%) hue-rotate(215deg) brightness(110%) contrast(100%)"
        : "brightness(0) saturate(100%) invert(15%) sepia(65%) saturate(3099%) hue-rotate(221deg) brightness(79%) contrast(83%)"};
  }

  &:hover {
    color: ${(props) => (props.inHome ? "#243982" : "#E20613")};

    img {
      filter: invert(1);
      filter: ${(props) =>
        props.inHome
          ? "brightness(0) saturate(100%) invert(19%) sepia(19%) saturate(6185%) hue-rotate(212deg) brightness(91%) contrast(90%)"
          : "brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(7421%) hue-rotate(355deg) brightness(98%) contrast(109%)"};
    }
  }
`;
