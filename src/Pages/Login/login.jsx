import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: img('');
    
`;

const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    background-color: grey;
`;

const Title = styled.h1`
    font-size: 35px;
    font-weight: 250;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 60%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width 30%;
    padding: 10px 10px;
    background-color: blue;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 15px;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>      
                    <Input placeholder = "username"/>      
                    <Input placeholder = "password"/>
                    <Button>LOGIN</Button>
                    <Link>Dont remember your password?</Link>
                    <Link>Create a new account</Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;