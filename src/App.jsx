import React from "react";
import Home from "./Pages/Home/home";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
// import { useNavigate } from 'react-router-dom';
// import Auth from '../src/Components/Auth';




function App() {
    return (
        <div>
            <p></p>
            <Routes>                 
                <Route path="/" element={<Home />}>
                    { <Route path="Register" element= {<Register />}/> }
                
                    { <Route path="login" element= {<Login />}/> }

                    {<Route path="cart" element= {<Cart />}/> }
                                   
                </Route>
            </Routes>
     
        </div>
 
    );
  }

export default App;