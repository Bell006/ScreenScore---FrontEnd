import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: "header" "content";

    img {
       width : 3rem;
       height: 3rem;
       border-radius: 50%;
    }
`;

export const Content = styled.div`
    grid-area: content;

    max-width: 115rem;

    margin: 3rem auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    > a {
            display: flex;
            align-items: center;
            gap: .5rem;

            color: ${({ theme }) => theme.COLORS.SALMON_200};
    };
    
    > header {
        .title, .postDetails, .tags {
            display: flex;
            flex-direction: row;

            align-items: center;
            gap: 1rem;

            margin-bottom: 2rem;

            > svg {
                color: ${({ theme }) => theme.COLORS.SALMON_200};
            }
        };

        .title {
            font-weight: 500;
            font-size: 3rem;
            line-height: 4.7rem;

            > h1 {
                margin-right: 1rem;
            }
            
        };
    };

    > main p {
        text-align: justify;
        line-height: 2.5rem;
    };

`;


