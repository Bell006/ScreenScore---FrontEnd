import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: "header" "content";

    overflow: hidden;
`;

export const Content = styled.div`
    grid-area: content;
    height: 100%;
    min-height: 10vh;
    max-width: 110rem;
    min-width: 70rem;

    display: flex;
    flex-direction: column;

    padding: 0 2rem;
    margin: 2rem auto;

    
    > header {

        width: 100%;
        
        margin-bottom: 4rem;

        display: grid;

        grid-template-columns: 20% 58% 18%;
        grid-template-areas: "movies search button";
        align-items: center;

        gap: 2rem;


        > h1 {
            grid-area: movies;
            font-weight: 400;
            font-size: 3.2rem;
            line-height: 4.2rem;
            width: 100%;
        }

        > Input {
            grid-area: search;
        }

        > Button {
            grid-area: button;
        }

    };

    > main {
        display: flex;
        flex-direction: column;
        
        gap: 2rem;

        width: 100rem;
        max-height: 70vh;
        overflow-y: auto;

    };
`;

