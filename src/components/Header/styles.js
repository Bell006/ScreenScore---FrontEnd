import styled from "styled-components";

export const Container = styled.div`
    height: 10.5rem;

    grid-area: header;

    display: flex;
    align-items: center;
    padding: 0 4rem;
    justify-content: space-between;
    gap: 6rem;

    border-bottom-width: .1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GREY_400};
`;

export const Profile = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > a img {
       width : 5.6rem;
       height: 5.6rem;
       border-radius: 50%;
    }
`;

export const LogOut = styled.div`
    display: flex;
    flex-direction: column;
    

    align-items: flex-end;
    white-space: nowrap;

    > a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.SALMON};
    }

`;