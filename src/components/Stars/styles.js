import styled from "styled-components";

export const Container = styled.div`
    margin: .3rem 0;
`;

export const StarContainer = styled.div`
    display: flex;
    gap: .5rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.SALMON};
    }
`;