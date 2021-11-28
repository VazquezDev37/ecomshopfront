import styled from 'styled-components';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);
        // localStorage.setItem('username', response.data.username)
        navigate.push("/Home");
      });
  };

  return (
    <div class="wrapper">
      <form class="login" onSubmit={submitLogin}>
        <p class="title">Log In</p>
        <input
          type="text"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="email"
          autoFocus
        />
        <i class="fa fa-user"></i>
        <input
          type="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <i class="fa fa-key"></i>
        <button onClick={(e) => submitLogin(e)} className="loginButton" type="submit">
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </button>
      </form>
      <footer>
        <a target="blank" href="http://boudra.me/">
          Isaac's Ecom Shop
        </a>
      </footer>
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
//     width: 20%;
//     padding: 20px;
//     background-color: grey;
// `;

// const Title = styled.h1`
//     font-size: 35px;
//     font-weight: 250;
// `;

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
// `;

// const Input = styled.input`
//     flex: 1;
//     min-width: 60%;
//     margin: 10px 0;
//     padding: 10px;
// `;

// const Button = styled.button`
//     width 30%;
//     padding: 10px 10px;
//     background-color: blue;
//     color: white;
//     cursor: pointer;
// `;

// const Link = styled.a`
//     margin: 5px 0px;
//     font-size: 15px;
//     cursor: pointer;
// `;

// const Login = () => {
//     return (
//         <Container>
//             <Wrapper>
//                 <Title>SIGN IN</Title>
//                 <Form>      
//                     <Input placeholder = "username"/>      
//                     <Input placeholder = "password"/>
//                     <Button>LOGIN</Button>
//                     <Link>Dont remember your password?</Link>
//                     <Link>Create a new account</Link>

//                 </Form>
//             </Wrapper>
//         </Container>
//     )
// }

// export default Login;