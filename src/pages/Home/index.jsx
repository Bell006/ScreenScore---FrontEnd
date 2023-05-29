import { Container, Content } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { Input } from "../../components/Input";

import { Link, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const { user } = useAuth();
    const user_id = useParams(user.id);

    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    function handleDetails(movie_id) {
        return navigate(`/details/${movie_id}`)
    }

    function handleNewMovie() {
        navigate("/newMovie");
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/notes?user_id=${user_id}&title=${search}`);
            setMovies(response.data);
        }
        
        fetchMovies()
    }, [search])
 

    return(
        <Container>
            <Header/>
            <Content>
                <header>
                    <h1>Meus Filmes</h1>

                    <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={AiOutlineSearch}
                    onChange={e => setSearch(e.target.value)}
                    />

                    <Button title="+ Adicionar filme" onClick={handleNewMovie} />
                </header>

                <main>
                    {
                        movies && movies.map((movie) => (
                            <Movie 
                                data={movie}
                                key={String(movie.id)}
                                onClick={() => handleDetails(movie.id)}
                            />
                        ))
                    }   
                </main>

            </Content>
        </Container>
    );
}