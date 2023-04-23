import styled from "styled-components";

export const Container = styled.div`
    padding: 1.8rem 1.6rem;
    
    display: flex;
    align-items: center;

    height: 2.4rem;

    border-radius: .8rem;

    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.GREY_400};
`;