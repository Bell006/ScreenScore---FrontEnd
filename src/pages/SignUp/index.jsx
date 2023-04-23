import { Container, Form, VHS } from "./styles";

import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { BiLeftArrowCircle } from 'react-icons/bi';


import backgroundVHS2 from "../../assets/VHS2.png";

import LINES from "../../styles/theme";

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { VerticalLine } from "../../components/VerticalLine";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function SignUp() {
    return(
        <Container>
                <div className="topLines">
                    <VerticalLine color={LINES.COLORS.YELLOW}/>
                    <VerticalLine color={LINES.COLORS.ORANGE}/>
                    <VerticalLine color={LINES.COLORS.SALMON}/>
                    <VerticalLine color={LINES.COLORS.PURPLE}/>
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
                        icon={AiOutlineUser}/>
                    <Input 
                        placeholder="email" 
                        type="email"
                        icon={AiOutlineMail}/>

                    <Input 
                        placeholder="senha" 
                        type="password"
                        icon={AiFillLock}/>

                    <Button title="Cadastrar"></Button>

                    <Link to="/">
                        <BiLeftArrowCircle/>
                        Voltar para o Login
                    </Link>
                </section>

            </Form>

                <div className="bottomLines">
                    <VerticalLine color={LINES.COLORS.YELLOW}/>
                    <VerticalLine color={LINES.COLORS.ORANGE}/>
                    <VerticalLine color={LINES.COLORS.SALMON}/>
                    <VerticalLine color={LINES.COLORS.PURPLE}/>
                </div>

            <VHS>
                <img src={backgroundVHS2} alt="VHS Tape" />
            </VHS>
        </Container>
    );
}