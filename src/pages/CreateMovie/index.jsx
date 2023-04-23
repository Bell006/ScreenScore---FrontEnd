import { Container, Form, TextArea } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TagItem } from "../../components/TagItem";

import { BiLeftArrowCircle } from 'react-icons/bi';

import { Link } from "react-router-dom";

export function CreateMovie() {
    return(
        <Container>
            <Header/>

            <main>
  
                <Form>
                    <header>
                    <Link to="/">
                        <BiLeftArrowCircle/>
                        Voltar
                    </Link>

                        <h1>Novo filme</h1>
                    </header>
                    
                    <section className="movieInfo">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5, com variação de 0.5)" />
                    </section>

                    <TextArea placeholder="O que gostaria de dizer sobre o filme?" />

                    <h2>Marcadores</h2>

                    <section className="tags">
                        <TagItem value="Terror" />
                        <TagItem value="Suspense" />

                        <TagItem isNew placeholder="Nova tag" />
                    </section>

                    <footer>
                        <Button title="Excluir filme" className="delete"/>
                        <Button title="Salvar alterações" />
                    </footer>

                </Form>
            </main>
        </Container>
    );
}