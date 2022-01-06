import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`  
    padding: 15px 10px;
    background-color: grey;
    color: white;
    cursor: pointer;
`;

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

export default Register;