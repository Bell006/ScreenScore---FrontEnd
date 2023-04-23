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
    max-width: 112rem;

    display: flex;
    flex-direction: column;

    padding: 0 2rem;
    margin: 2rem auto;

    
    > header {

        width: 100%;
        
        margin-bottom: 4rem;

        display: grid;
        align-items: center;
        grid-template-columns: 80% auto;
        grid-template-areas: "title button";

        > h1 {
            grid-area: title;

            width: 100%;
            white-space: nowrap;

            font-weight: 400;
            font-size: 3.2rem;
            line-height: 4.2rem;

        }

    };

    > main {
        display: flex;
        flex-direction: column;
        
        gap: 2rem;

        max-height: 70vh;
        overflow-y: auto;

    };
`;

