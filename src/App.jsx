import React, { useState } from "react";
import Home from "./Pages/Home/home";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import Logout from "./Pages/logout";
import Cart from "./Pages/Cart";
import Product_page from "./Components/Product_page";
import { Routes, Route, useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import Auth from '../src/Components/Auth';



function App() {

    const [user, setUser] = useState('');
  
    useEffect(() => {
      const jwt = localStorage.getItem('token');
  
      try {
        const decode = jwtDecode(jwt);
        setUser(decode);
  
      } catch {
  
      }
    }, []);
  
    return (
      <div className="container-fluid">
        
        <Routes>
  
  
          <Route path="/" element={<Home user={user} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' exact element={<Login user={user}/>} />
          <Route path='/cart' element={<Cart user={user}/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/home' element={<Home user={user}/>} />
          <Route path='/product_page' element={<Product_page user={user}/>} />
          <Route path='/reviewProduct' element={<reviewProduct user={user} />} />
  
  
        </Routes>
      </div>
    );
  }






// function App() {
//     return (
//         <div>
//             <p></p>
//             <Routes>                 
//                 <Route path="/" element={<Home />}>
//                     { <Route path="Register" element= {<Register />}/> }
                
//                     { <Route path="login" element= {<Login />}/> }

//                     {<Route path="cart" element= {<Cart />}/> }
                                   
//                 </Route>
//             </Routes>
     
//         </div>
 
//     );
//   }

export default App;