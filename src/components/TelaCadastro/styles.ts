import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${(props) => props.theme["gray-800"]};
    flex-direction: column;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const Logo = styled.img`
    width: 10rem;
    height: 10rem;
    z-index: 2;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.theme["gray-100"]};
    margin-left: 1rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    background-color: ${(props) => props.theme["gray-700"]};
    border-radius: 0.5rem;
    padding: 2rem;
    gap: 2rem;
    margin-top: -4.5rem;
    z-index: 1;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.05rem;
    width: 100%;
`;


export const Input = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme["gray-500"]};
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    margin-bottom: 1rem;
    transition: border-color 0.2s;
    
    &:focus {
        border-color: ${(props) => props.theme["green-500"]};
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 0;
    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme["gray-100"]};
    font-weight: 500;
    margin-top: 1rem;
    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.9);
    }

    &:disabled {
        cursor: not-allowed;
        filter: brightness(1);
    }
`;

export const ForwardYourPassword = styled.a`
    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.8rem;
    text-decoration: none;
    transition: filter 0.2s;
    font-weight: 500;
    font-size: 0.9rem;

    &:hover {
        filter: brightness(0.9);
    }
`;