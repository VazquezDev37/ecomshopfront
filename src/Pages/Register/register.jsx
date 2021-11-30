import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import styled from 'styled-components';

                                

function Register() {
   
     const [regForm, setRegForm ] = useState({
       
       email: "",
       password: ""
     })

     const handleChange = (e)=> {
        setRegForm({
          ...regForm, [e.target.name]: e.target.value
        })
     }
  
    const submitRegister = (e) => {
      e.preventDefault()
      axios.post("http://localhost:5000/api/auth/register", regForm )
      window.location= "/Login"  
    };
  
    return (
      <div id="login-box">
        <div class="left">
          <h1>Register</h1>
        <form onSubmit={(e) => submitRegister(e)}>
      
          <input
            type="text"
            onChange={ handleChange}
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <input
            type="text"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <Button>
          <button type = "submit">SIGN ME UP</button> 
          </Button>
          
          </form>
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

const Button = styled.button`  
    padding: 15px 10px;
    background-color: grey;
    color: white;
    cursor: pointer;
`;


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