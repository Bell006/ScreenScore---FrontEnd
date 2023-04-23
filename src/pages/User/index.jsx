import { Container, Main, Avatar, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { BiLeftArrowCircle } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineMail, AiFillLock, AiOutlineCamera } from "react-icons/ai";

import { Link } from "react-router-dom";

export function User() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <BiLeftArrowCircle/>
                    Voltar
                </Link>
            </header>

            <Main>
                <Avatar>
                    <img src="https://github.com/bell006.png" alt="User's picture" />
                    
                    <label htmlFor='avatar'>
                        <AiOutlineCamera />

                        <input
                            id='avatar'
                            type='file'
                        />
                    </label>
                </Avatar>

                <Form>
                    <Input 
                        placeholder="Bell Amancio" 
                        icon={AiOutlineUser}
                        type="text"
                    />
                    <Input 
                        placeholder="bell@email.com" 
                        icon={AiOutlineMail}
                        type="email"
                    />
                    <Input 
                        placeholder="Senha atual" 
                        icon={AiFillLock}
                        type="password"
                    />
                    <Input 
                        placeholder="Nova senha" 
                        icon={AiFillLock}
                        type="password"
                    />

                    <Button title="Salvar"/>
                </Form>
            </Main>
            
        </Container>
    );
}