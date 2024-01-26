import styled from "styled-components";

export const ContainerDescription = styled.div`
    img {
      min-width: 400px;
    }

    display: grid;
    gap: 20px;
    padding: 20px;

    h2 {
      color: ${(props) => props.theme.colors.Jewel};
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
`