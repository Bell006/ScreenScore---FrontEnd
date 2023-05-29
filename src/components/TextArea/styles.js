import styled from "styled-components";

export const Container = styled.div`
    > editor {
        resize: none;
        height: 15rem;

        margin-bottom: 0.8rem;
        border-radius: 1rem;
        padding: 1.6rem;

        border: none;   
        resize: none;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE}; 
    }

`;