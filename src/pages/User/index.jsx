import { Container, Main, Avatar, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { BiLeftArrowCircle } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineMail, AiFillLock, AiOutlineCamera } from "react-icons/ai";
import placeHolderImg from "../../assets/avatar_placeholder.svg";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { useState } from "react";


export function User() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        };

        const updatedUser  = Object.assign(user, updated);

        await updateProfile({ user: updatedUser, avatarFile })
    }

    function handleUpdateAvatar(e) {
        const file = e.target.files[0];

        setAvatarFile(file);

        const imgPreview = URL.createObjectURL(file);
        setAvatar(imgPreview);
    }


    return (
        <Container>
            <header>
                <Link to="/">
                    <BiLeftArrowCircle/>
                    Voltar
                </Link>
            </header>

            <Main>
                <Avatar>
                    <img 
                        src={avatarUrl} 
                        alt="User's picture" />
                    
                    <label htmlFor='avatar'>
                        <AiOutlineCamera />

                        <input
                            id='avatar'
                            type='file'
                            onChange={handleUpdateAvatar}
                        />
                    </label>
                </Avatar>

                <Form>
                    <Input  
                        icon={AiOutlineUser}
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input  
                        icon={AiOutlineMail}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Senha atual" 
                        icon={AiFillLock}
                        type="password"
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <Input 
                        placeholder="Nova senha" 
                        icon={AiFillLock}
                        type="password"
                        onChange={e => setNewPassword(e.target.value)}
                    />

                    <Button title="Salvar" onClick={handleUpdate}/>
                </Form>
            </Main>
            
        </Container>
    );
}