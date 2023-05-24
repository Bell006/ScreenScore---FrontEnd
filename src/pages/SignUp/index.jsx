import { Container, Form, VHS } from "./styles";

import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { BiLeftArrowCircle } from 'react-icons/bi';

import { useState } from "react";
import { api } from "../../services/api";

import backgroundVHS2 from "../../assets/VHS2.png";

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { VerticalLines } from "../../components/VerticalLines";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
    
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos antes de prosseguir.")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate(-1);
        }).catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível realizar o cadastro.")
            }
        });
    }

    function teste() {
         console.log("foi")
    }



    return(
        <Container>
                <div className="topLines">
                    <VerticalLines/>
                </div>
                
            <Form>
                
                <div className="logo">
                    <Logo/>
                    <p>Acompanhe tudo que assistir.</p>
                </div>
                    
                <section>
                    <span>Crie sua conta :)</span>

                    <Input 
                        placeholder="Nome" 
                        type="text" 
                        icon={AiOutlineUser}
                        onChange={e => setName(e.target.value)} />
                    <Input 
                        placeholder="email" 
                        type="email"
                        icon={AiOutlineMail}
                        onChange={e => setEmail(e.target.value)}/>

                    <Input 
                        placeholder="senha" 
                        type="password"
                        icon={AiFillLock}
                        onChange={e => setPassword(e.target.value)}/>

                    <Button title="Cadastrar" onClick={handleSignUp}></Button>

                    <Link to="/">
                        <BiLeftArrowCircle/>
                        Voltar para o Login
                    </Link>
                </section>

            </Form>

                <div className="bottomLines">
                    <VerticalLines/>
                </div>

            <VHS>
                <img src={backgroundVHS2} alt="VHS Tape" />
            </VHS>
        </Container>
    );
}