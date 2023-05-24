import { Container } from "./styles";

export function Button({title, className, onClick}) {
    return(
        <Container className={className} type="button" onClick={onClick}>
            {title}
        </Container>
    );
}