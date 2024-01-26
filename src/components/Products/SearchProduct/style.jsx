import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  margin: 0px 30px;
  grid-area: search;
  grid-template-columns: 2fr 1fr;
  align-content: center;

  @media screen and (max-width: 820px) {
    margin: 0;
    height: 80px;
    background-color: white;
    padding: 0px 30px;
    border-bottom: 1px solid #2CAC6B;
  }
`;
