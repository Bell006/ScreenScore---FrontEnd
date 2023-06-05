import { Container, Profile, LogOut } from "./styles";

import { Logo } from "../Logo";
import { Input } from "../Input";

import placeHolderImg from "../../assets/avatar_placeholder.svg";

import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


export function Header() {
    
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg;

    const navigate = useNavigate();

    function handleLogo() {
        return navigate('/');
    }

    function handleSignOut() {
        navigate('/');
        signOut();
    }
    
    return(
        <Container>
            <Logo onClick={handleLogo} />

            <Profile>
                <LogOut>
                    <p>{user.name}</p>
                    <a href="#" onClick={handleSignOut}>Sair</a>
                </LogOut>
                
                <Link to="/profile">
                    <img src={avatarUrl} alt="User's picture" />
                </Link>
            </Profile>
        </Container>
    );
}