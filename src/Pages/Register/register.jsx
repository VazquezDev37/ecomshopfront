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
    width: 30%;
    padding: 20px;
    background-color: grey;
`;

const Title = styled.h1`
    font-size: 35px;
    font-weight: 250;
`;

const Form = styled.form``

const Input = styled.input`
    flex: 1;
    min-width: 60%;
    margin: 15px 30px 0px 0px;
`;

const Button = styled.button`  
    padding: 20px 10px;
    background-color: blue;
    color: white;
    cursor: pointer;
`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account:</Title>
                <Form>
                    <Input placeholder = "first name"/>
                    <Input placeholder = "last name"/>
                    <Input placeholder = "username"/>
                    <Input placeholder = "email"/>
                    <Input placeholder = "password"/>
                    <Input placeholder = "confirm password"/>
                    <Button>Create Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;