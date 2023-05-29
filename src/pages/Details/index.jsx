import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { Date_Time } from "../../components/Date_Time";
import { Button } from "../../components/Button";

import parse from 'html-react-parser';

import { BiLeftArrowCircle } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Details() {
    const { user } = useAuth();
    const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`;

    const [movie, setMovie] = useState(null);
    const [tags, setTags] = useState([]);

    const params = useParams();
    const movie_id = params.id;

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
    }

    async function handleDeleteMovie() {
        const deleteMovie = window.confirm("Tem certeza que deseja deletar a anotação?");
        if(deleteMovie) {
            const response = await api.delete(`/notes/${movie_id}`);
            handleBack()
        }

        return;
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/notes/${movie_id}`);

            setMovie(response.data);
            setTags(response.data.tags)
        }

        fetchMovie()
    }, [])

    return(
        <Container>
            <Header/>
        { movie && (

            <Content>
                <a href="#" onClick={handleBack}>
                    <BiLeftArrowCircle/>
                    Voltar
                </a>
                
                <header>
                    <section className="title">
                        <h1>{movie.title}</h1>
                        <Stars rating={Number(movie.rating)}/>
                    </section>

                    <section className="postDetails">
                        <img src={avatarUrl} alt="User's picture" />
                        <p>Por {user.name}</p>

                        <AiOutlineClockCircle/>
                        <Date_Time data={movie}/>
                    </section>

                    <section className="tags">
                    {
                        tags && tags.map((tag, index) => (
                            <Tag key={String(index)}
                            title={tag.name} />
                        ))
                    }
                    </section>
                </header>

                <main>
                    <p>
                    {parse(movie.description)}
                    </p>
                </main>

                <Button 
                    title="Excluir filme" 
                    className="delete"
                    onClick={handleDeleteMovie} />
            </Content>
        )                
        }
        </Container>
    );
}