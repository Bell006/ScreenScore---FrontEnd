import styled from "styled-components";

export const Container = styled.button`
    grid-area: button;

    width: 100%;

    background: #D1455D;
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 500;
`;
