import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
    }
`;

export const Form = styled.form`

    max-width: 110rem;

    margin: 3rem auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    > header {
        
        > h1 {
            margin-top: 2rem;
        }

        
        > a {
            display: flex;
            align-items: center;
            gap: .5rem;

            color: ${({ theme }) => theme.COLORS.SALMON_200};
        }    
    }

    .movieInfo, .tags, footer {
        display: flex;

        gap: 1.5rem;
    }

    .tags {
        flex-wrap: wrap;
    }

    > footer {

        .delete {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.SALMON};
        }
    }
`;

export const TextArea = styled.textarea`
    resize: none;
    height: 15rem;

    margin-bottom: 0.8rem;
    border-radius: 1rem;
    padding: 1.6rem;

    border: none;   
    resize: none;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};    
`;
