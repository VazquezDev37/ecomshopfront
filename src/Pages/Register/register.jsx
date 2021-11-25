import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
`;
const Wrapper = styled.div``
const Form = styled.form``
const Title = styled.h1``
const Input = styled.input``
const Button = styled.button``


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
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