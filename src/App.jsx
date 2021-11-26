import React from "react";
import Home from "./Pages/Home/home";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
//import jwtDecode from "jwt-decode";



function App() {
    return (
        <div>
            <p></p>
            <Routes>                 
                <Route path="/" element={<Cart />}>
                    {/* <Route path="Register" element= {<Register />}/> */}
                
                    {/* <Route path="login" element= {<Login />}/>

                    <Route path="cart" element= {<Cart />}/> */}
                    
                </Route>
            </Routes>
     
        </div>
 
    );
  }

export default App;