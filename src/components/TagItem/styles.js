import styled from "styled-components";

export const Container = styled.div`
    white-space: nowrap;
    

    display: flex;
    align-items: center;
    padding: 1.5rem;

    background-color: ${({ theme, isNew }) => isNew ?  "transparent" : `${ theme.COLORS.GREY_400}`};

    border:  ${({ theme, isNew }) => isNew ? `.1rem dashed ${ theme.COLORS.WHITE}` : "none"};
    border-radius: 1rem;


    > input {
        
        border: none;
        border-radius: 1rem;

        background: transparent;

        width: 100%;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button {
        background: transparent;
        border: none;
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.SALMON};
    }
    `;