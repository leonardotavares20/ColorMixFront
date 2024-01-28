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
  font-size: 1.1rem;

  img {
    height: 45px;
  }

  &:hover {
    color: #243982;

    img {
      filter: invert(1);
      filter: brightness(0) saturate(100%) invert(15%) sepia(65%)
        saturate(3099%) hue-rotate(221deg) brightness(79%) contrast(83%);
    }
  }
`;
