import { Container, Form, VHS } from "./styles";

import { AiOutlineUser, AiFillLock } from "react-icons/ai";

import backgroundVHS from "../../assets/VHS.png";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { VerticalLines } from "../../components/VerticalLines";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function SignIn() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { signIn, loading } = useAuth();

    function handleSignIn(e) {
        signIn({password, email})
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

                    <span>Faça seu Login:</span>

                    <div id="logIn">
                        <Input 
                            placeholder="email" 
                            type="text"
                            icon={AiOutlineUser}
                            onChange={e => setEmail(e.target.value)}/>

                        <Input 
                            placeholder="senha" 
                            type="password"
                            icon={AiFillLock}
                            onChange={e => setPassword(e.target.value)}/>

                      
                        {
                            loading ? <Button title="Entrar" loading/> : <Button title="Entrar" onClick={handleSignIn}/>
                        }
                    </div>

                    <p>Não possui cadastro?</p>
                    <Link to="/users">
                        Criar conta
                    </Link>

                </section>

            </Form>

                <div className="bottomLines">
                    <VerticalLines/>    
                </div>

            <VHS>
                <img src={backgroundVHS} alt="VHS Tape" />
            </VHS>
        </Container>
    );
}