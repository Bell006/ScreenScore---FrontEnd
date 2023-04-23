import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 2.3rem;
    height: 100%;

    ${props =>
    props.color &&
    css`
      border-right: 2rem solid ${props.color};
    `};
`;