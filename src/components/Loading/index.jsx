import { Container } from "./styles";

export function Loading({}) {
   
    return(
        <Container>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </Container>
    );
};