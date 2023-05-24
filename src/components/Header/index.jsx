import { Container, Profile, LogOut } from "./styles";

import { Logo } from "../Logo";
import { Input } from "../Input";

import { AiOutlineSearch } from "react-icons/ai";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";


export function Header() {
    
    const { signOut } = useAuth();

    return(
        <Container>
            <Logo/>

            <Input type="text" placeholder="Pesquisar pelo título" icon={AiOutlineSearch}/>

            <Profile>
                <LogOut>
                    <p>Bell Amancio</p>
                    <a href="#" onClick={signOut}>Sair</a>
                </LogOut>
                
                <Link to="/profile">
                    <img src="https://github.com/bell006.png" alt="User's picture" />
                </Link>
            </Profile>
        </Container>
    );
}