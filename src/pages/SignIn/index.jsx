import { Container, Form, VHS } from "./styles";

import { AiOutlineUser, AiFillLock } from "react-icons/ai";

import backgroundVHS from "../../assets/VHS.png";

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { VerticalLine } from "../../components/VerticalLine";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function SignIn() {
    return(
        <Container>
                <div className="topLines">
                    <VerticalLine color={({ theme }) => theme.COLORS.YELLOW}/>
                    <VerticalLine color={({ theme }) => theme.COLORS.ORANGE}/>
                    <VerticalLine color={({ theme }) => theme.COLORS.SALMON}/>
                    <VerticalLine color={({ theme }) => theme.COLORS.PURPLE}/>
                </div>
                
            <Form>
                
                <div className="logo">
                    <Logo/>
                    <p>Acompanhe tudo que assistir.</p>
                </div>
                    
                <section>

                    <span>Faça seu Login:</span>
                    <Input 
                        placeholder="Login" 
                        type="text"
                        icon={AiOutlineUser}/>

                    <Input 
                        placeholder="senha" 
                        type="password"
                        icon={AiFillLock}/>

                    <Button title="entrar"></Button>

                    <p>Não possui cadastro?</p>
                    <Link to="/register">
                        Criar conta
                    </Link>

                </section>

            </Form>

                <div className="bottomLines">
                    <VerticalLine color={({ theme }) => theme.COLORS.YELLOW}/>
                    <VerticalLine color={({ theme }) => theme.COLORS.ORANGE}/>
                    <VerticalLine color={({ theme }) => theme.COLORS.SALMON}/>
                    <VerticalLine color={({ theme }) => theme.COLORS.PURPLE}/>
                </div>

            <VHS>
                <img src={backgroundVHS} alt="VHS Tape" />
            </VHS>
        </Container>
    );
}