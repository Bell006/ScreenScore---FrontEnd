import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;


    margin-bottom: 0.8rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > input {
        height: 5.6rem;
        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 1.2rem;
        border: 0;

        border-radius: 1rem;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    };

    >  svg {
            margin-left: 1.6rem;
            color: ${({ theme }) => theme.COLORS.GREY_300}; 
        }

`;
