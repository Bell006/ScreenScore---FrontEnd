import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 2.3rem;
    height: 100%;

    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    > div {
      border-right: 2rem solid;
      height: 100%;
    }
`;