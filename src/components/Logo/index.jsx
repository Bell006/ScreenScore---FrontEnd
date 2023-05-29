import { Container } from "./styles";

export function Logo({onClick}) {
    return(
        <Container onClick={onClick}>
            ScreenScore
        </Container>
    );
}