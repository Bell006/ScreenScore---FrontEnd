import styled from "styled-components";

export const Container = styled.button`
    max-width: 112rem;

    background-color: ${({ theme }) => theme.COLORS.LIGHT_SALMON};

    border-radius: 1.6rem;
    padding: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    border: none;

    > header h1 {
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 3.2rem;
            color: ${({ theme }) => theme.COLORS.WHITE};

            margin-bottom: 1rem;
        }

    
    
    

    > p {
        font-weight: 400;
        font-style: normal;
        font-size: 1.6rem;
        line-height: 1.9rem;

        max-height: 5.7rem;
        max-width: 105rem;

        
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical; 
        white-space: normal; 
        overflow: hidden; 
        text-overflow: ellipsis;

        text-align: justify;


        color: ${({ theme }) => theme.COLORS.GREY_300};
    }

    > footer {
        width: 100%;

        display: flex;
        gap: 1rem;

        margin-top: 2rem;
    }

`;


export const UserInfo = styled.div`
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;

    > p {
        margin-right: 1.5rem;
    }

    
    > svg {
        color: ${({ theme }) => theme.COLORS.SALMON};

        margin-right: .5rem;
    }
`;



