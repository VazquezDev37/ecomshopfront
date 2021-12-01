import styled from 'styled-components';
import React, { useState } from "react";
import axios from "axios";


const Button = styled.button`
    width 50%;
    padding: 10px 10px;
    background-color: grey;
    color: white;
    cursor: pointer;
`;


function Login() {
   
  const [regForm, setRegForm ] = useState({
    
    email: "",
    password: ""
  })

  const handleChange = (e)=> {
     setRegForm({
       ...regForm, [e.target.name]: e.target.value
     })
  }

 const submitLogin = (e) => {
   e.preventDefault()
   axios.post("http://localhost:5000/api/auth/login", regForm )
   window.location= "/Home"  
 };

 return (
   <center>
   <div id="login-box">
     <div class="left">
       <h1>Login</h1>
     <form onSubmit={(e) => submitLogin(e)}>
   
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
       <button type = "submit">Login</button> 
       </Button>
       
       </form>
     </div>
     
     <div class="right"></div>
     <div class="or"></div>
   </div>
   </center>
 );
}


export default Login;