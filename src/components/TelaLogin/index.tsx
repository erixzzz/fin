import {
    Button,
    Container,
    Form,
    ForwardYourPassword,
    Header, 
    Input, 
    Inputs, 
    Logo,
    Title}
from "./styles";
import LogoImg from "../../assets/logoLogin.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from "zod";
import { UserLogin } from '../../services/user.service';

type FormData = {
    email: string;
    password: string;
};

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string()
});

export function TelaLogin() {
    const { register, handleSubmit, watch } = useForm<FormData>({ 
        resolver: zodResolver(schema)
    });

    async function handleLogin({email, password}: FormData) {
        try {
            await UserLogin(email, password)
        } catch (error) {
            console.log(error);
        }
    }

    const watchPassword = watch("password");
    const watchEmail = watch("email");
    const isSubmitDisabled = !watchPassword || !watchEmail;

    return (
        <Container>
            <Header>
                <Logo src={LogoImg} />
            </Header>
            <Form
                onSubmit={handleSubmit(handleLogin)}
            >
                <Title>Login in Hexa</Title>
                <Inputs>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                        {...register("email")}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        maxLength={12}
                        minLength={8}
                        required
                        {...register("password")}
                    />
                    <Button
                        type="submit"
                        disabled={isSubmitDisabled}
                    >
                        Entrar
                    </Button>
                    <Button
                        onClick={() => {window.location.href = "/SignUp"}}
                        
                    >
                        Cadastrar
                    </Button>
                </Inputs>
                <ForwardYourPassword href="#">
                    Esqueceu sua senha?
                </ForwardYourPassword>
            </Form>
        </Container>
    )
}