import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 50% auto;
    grid-template-rows: 18% auto 18%;
    grid-template-areas: 
    "topLines VHS"
    "login VHS"
    "bottomLines VHS";

    overflow: hidden;

    .topLines, .bottomLines {
        display: flex;
        justify-content: center;
    }
    
    .topLines {
        grid-area: topLines;
        align-items: flex-start;
    }
    
    .bottomLines {
        grid-area: bottomLines;
        align-items: flex-end;
    }
    
`;

export const Form = styled.form`
    grid-area: login;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 4rem 0;


    .logo {
        display: flex;
        flex-direction: column;
        text-align: center;

        > p {
            color: ${({ theme }) => theme.COLORS.GREY_300};
            line-height: 1.5rem;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 30rem;

        margin: 6.2rem 0 2rem;

        > span {
            font-weight: 500;
            font-size: 2.4rem;
            line-height: 3.2rem;

            margin-bottom: 3.3rem;
        }

        > p, a {
            color: ${({ theme }) => theme.COLORS.SALMON_200};
        }

        > p {
            font-weight: 300;
            margin-top: 2.6rem;
        }

        > a {
            text-decoration: none;
            font-weight: bold;
            
            margin-top: 1rem;
        }
    }
`;

export const VHS = styled.div`
    grid-area: VHS;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end; 

    >img {
        max-width: 100%;
        min-width: 80rem;
        transform: rotate(40deg);
    }
`;