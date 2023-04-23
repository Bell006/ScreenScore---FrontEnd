import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";

import { Link } from "react-router-dom";

export function Home() {
    return(
        <Container>
            <Header/>
            <Content>
                <header>
                    <h1>Meus FIlmes</h1>

                    <Link to="/newMovie">
                        <Button title="+ Adicionar filme"/>
                    </Link>
                </header>

                <main>
                    <Movie 
                        data={{
                            title: "Fresh",
                            rating: 5,
                            description: "Noa (Daisy Edgar-Jones) é uma jovem adulta que está em busca de um relacionamento. Frustrada com tantos encontros ruins por aplicativos, ela acaba conhecendo Steve (Sebastian Stan), um homem charmoso e o namorado ideal. Entretanto, as coisas não são como parecem e a nossa protagonista corre grande perigo.",
                            tags: [
                                {id: 1, name: "Terror"},
                                {id: 2, name: "Thriller"},
                                {id: 3, name: "Bom pra ela"},
                            ]
                        }}
                    />

                    <Movie 
                        data={{
                            title: "Interstellar",
                            rating: 4.5,
                            description: "Com recursos tecnológicos cada vez mais limitados, a humanidade é obrigada a buscar novos planetas que possam garantir a continuação da espécie. É nesse contexto que Cooper (Matthew McConaughey) é chamado para liderar uma expedição através de um buraco negro.",
                            tags: [
                                {id: 1, name: "Ficção científica"},
                                {id: 2, name: "Drama"},
                                {id: 3, name: "Aventura"},
                            ]
                        }}
                    />

                    <Movie 
                        data={{
                            title: "The Godfather",
                            rating: 4,
                            description: "A saga da família Corleone, liderada pelo patriarca Vito (Marlon Brando) e posteriormente por seu filho Michael (Al Pacino), é uma das histórias mais icônicas do cinema. O filme acompanha a ascensão da família no submundo do crime em Nova York, nos anos 1940 e 1950.",
                            tags: [
                                {id: 1, name: "Crime"},
                                {id: 2, name: "Drama"},
                                {id: 3, name: "Suspense"},
                                {id: 4, name: "Clássico"},
                            ]
                        }}
                    />

                    <Movie 
                        data={{
                            title: "The Dark Knight",
                            rating: 3.5,
                            description: "O segundo filme da trilogia dirigida por Christopher Nolan é considerado um dos melhores filmes de super-heróis já feitos. O Coringa (Heath Ledger) surge como um dos maiores vilões do cinema e Batman (Christian Bale) é obrigado a se desdobrar para derrotá-lo.",
                            tags: [
                                {id: 1, name: "Ação"},
                                {id: 2, name: "Drama"},
                                {id: 3, name: "Suspense"},
                                {id: 4, name: "Super-herói"},
                            ]
                        }}
                    />
                </main>

            </Content>
        </Container>
    );
}