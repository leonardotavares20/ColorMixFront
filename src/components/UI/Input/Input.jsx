import styled from "styled-components";

export const Input = styled.input`
  height: 40px;
  border-radius: 20px 0px 0px 20px;
  border: 1.2px solid #243982;
  min-width: 200px;
  z-index: 1;
  transform: translateX(5px);

  &::placeholder {
    color: #3D3636;
    font-size: 13px;
    text-align: center;
  }

  &:focus {
    border: 1.2px solid ${(props) => props.theme.colors.Gray};
  }
`;
