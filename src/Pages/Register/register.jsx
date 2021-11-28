import React, { useState } from 'react';
import './register.css';
import styled from 'styled-components';
import  { useNavigate }  from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const submitRegister = () => {
      axios
        .post("http://localhost:5000/api/auth/register", {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          navigate.push("/Login");
          console.log(response);
        });
    };
  
    return (
      <div id="login-box">
        <div class="left">
          <h1>Register</h1>
  
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
  
          <input
            onClick={submitRegister}
            onSubmit={submitRegister}
            type="submit"
            name="signup_submit"
            value="Sign me up"
          />
        </div>
  
        <div class="right"></div>
        <div class="or"></div>
      </div>
    );
  }



// const Container = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: img('');
    
// `;

// const Wrapper = styled.div`
//     width: 30%;
//     padding: 20px;
//     background-color: grey;
// `;

// const Title = styled.h1`
//     font-size: 35px;
//     font-weight: 250;
// `;

// const Form = styled.form``

// const Input = styled.input`
//     flex: 1;
//     min-width: 60%;
//     margin: 15px 30px 0px 0px;
// `;

// const Button = styled.button`  
//     padding: 15px 10px;
//     background-color: blue;
//     color: white;
//     cursor: pointer;
// `;


// const Register = () => {
//     return (
//         <Container>
//             <Wrapper>
//                 <Title>Create an Account:</Title>
//                 <Form>
//                     <Input placeholder = "first name"/>
//                     <Input placeholder = "last name"/>
//                     <Input placeholder = "username"/>
//                     <Input placeholder = "email"/>
//                     <Input placeholder = "password"/>
//                     {/* <Input placeholder = "confirm password"/> */}
//                     <Button>Create Account</Button>
//                 </Form>
//             </Wrapper>
//         </Container>
//     )
// }

export default Register;