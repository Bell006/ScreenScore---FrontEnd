import { Container } from "./styles";

import { Loading } from "../Loading";

export function Button({title, className, onClick, loading = false}) {
    return(
        <Container className={className} type="button" onClick={onClick}>
            {loading ? <Loading/> : title}
        </Container>
    );
}