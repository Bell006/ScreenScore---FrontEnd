import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TagItem } from "../../components/TagItem";
import { TextArea } from "../../components/TextArea";

import { BiLeftArrowCircle } from 'react-icons/bi';

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

export function CreateMovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [newTag, setNewTag] = useState("");
    const [tags, setTags] = useState([]);

    const navigate = useNavigate();

    function handleBack() {
            navigate(-1)
    }

    const handleContentChange = (content) => {
        setDescription(content);
    };

    async function handleNewMovie() {
        if(!title || !rating || !description) {
            return alert("Preencha todos os campos para prosseguir.")
        }

        if(newTag) {
            return alert("Parece que você preencheu um campo de tag mas se esqueceu de salvar.")
        }

        try {
            const response = await api.post("/notes", { title, description, rating, tags });
        } catch(error) {
            if(error.response) {
                return alert(error.response.data.message)
            } else {
                return alert("Não foi possível cadastrar a nota.")
            }
        };

        alert("Avaliação cadastrada com sucesso!");
        handleBack()

    }

    function handleAddTag() {
        if(!newTag) {
            return alert("Nomeie uma tag antes de salva-la.")
        }

        if(tags.includes(newTag)) {
            return alert("a tag digitada já existe.")
        }

        setTags(prevState =>  [...prevState, newTag]);
        setNewTag("");
    }

    function handleDeleteTag(deletedTag) {
        setTags(prevTags => prevTags.filter(tag => tag !== deletedTag))
    }

    return(
        <Container>
            <Header/>

            <main>
  
                <Form>
                    <header>
                    <a onClick={() => handleBack()}>
                        <BiLeftArrowCircle/>
                        Voltar
                    </a>

                        <h1>Novo filme</h1>
                    </header>
                    
                    <section className="movieInfo">
                        <Input placeholder="Título" 
                            onChange={e => setTitle(e.target.value)} />
                        <Input 
                            placeholder="Sua nota (de 0 a 5, com variação de 0.5)" 
                            onChange={e => setRating(e.target.value)} />
                    </section>

                    <TextArea 
                        placeholder="O que gostaria de dizer sobre o filme?" 
                        onContentChange={handleContentChange}/>

                    <h2>Marcadores</h2>

                    <section className="tags">
                        
                        {
                            tags.map((tag, index) => (
                                <TagItem value={tag} key={String(index)} onClick={() => handleDeleteTag(tag)}/>
                            ))
                        }

                        <TagItem isNew 
                            placeholder="Nova tag" 
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag} 
                        />

                    </section>

                    <footer>
                        <Button title="Salvar alterações"
                            onClick={handleNewMovie} />
                    </footer>

                </Form>
            </main>
        </Container>
    );
}