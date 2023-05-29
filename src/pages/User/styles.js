import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 14rem auto;
    grid-template-areas: "header" "content";

    > header, a {
        display: flex;
        align-items: center;
    }

    a {
        gap: .5rem;
        color: ${({ theme }) => theme.COLORS.SALMON_200};

        margin-left: 8rem;
    };

    > header {
        grid-area: header;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;

export const Main = styled.div`
    grid-area: content;

    margin: 0 auto;
    width: 34rem;
`;

export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    margin:  -9rem auto 3.2rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.SALMON_200};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        left: 22rem;

        cursor: pointer;

        > svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            
            width: 2rem;
            height: 2rem;
        }
        
        > input {
            display: none;
        }
    } 

`;

export const Form = styled.div`
    > :nth-child(2) {
        margin-bottom: 3rem;
    }

    > :nth-child(4) {
        margin-bottom: 2rem;
    }
`;

