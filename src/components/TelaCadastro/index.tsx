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
from "./styles"
import LogoImg from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from "zod";
import { UserSignUp } from "../../services/created.service";

type FormData = {
    name: string;
    email: string;
    password: string;
};

const schema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string()
});

export function TelaCadastro(){
    const { register, handleSubmit, watch } = useForm<FormData>({ 
        resolver: zodResolver(schema)
    });

    async function handleSignUp({email, password, name}: FormData) {
        try {
            const user = await UserSignUp(name, email, password)
        } catch (error) {
            console.log(error);
        }
    }

    const watchName = watch("name");
    const watchPassword = watch("password");
    const watchEmail = watch("email");
    const isSubmitDisabled = !watchPassword || !watchEmail || !watchName;
    
    return(
        <Container>
            <Header>
                <Logo src={LogoImg} />
            </Header>
            <Form
                onSubmit={handleSubmit(handleSignUp)}
            >
                <Title>Sign Up in Hexa</Title>
                <Inputs>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        required
                        {...register("name")}
                    />
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
                        Cadastrar
                    </Button>
                    <Button
                        onClick={() => {window.location.href = "/"}}
                    >
                        Voltar para Login
                    </Button>
                </Inputs>
            </Form>
        </Container>
    )
}