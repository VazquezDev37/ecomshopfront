import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
// import { Search } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import { Search, Person, Notifications } from "@mui/icons-material";

const Container = styled.div`
  height: 70px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  `;

  const SearchContainer = styled.div`
    border: 1px solid gray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `;

    const Input = styled.input`
      border: none;
    `;

  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;

  const Logo = styled.h1`
    font-weight: bold;
  `;

  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-left: 20px;
    color: white;
  
  `;

const Navbar = ({ user }) => {
  return (
    <Container>
     <Wrapper>
        <Left>
          <Language></Language>
          <SearchContainer>
            <Input/>
            {/* <Search  /> */}
            <a href="/Product_page">Search</a>
          </SearchContainer>
          </Left>
        <Center><Logo>Isaac's Ecom Shop</Logo></Center>
        <Right>
          
          <MenuItem>  <a href="/Register">REGISTER</a></MenuItem>
          
          <MenuItem> <a href="/Login">LOGIN</a></MenuItem>
           
          <MenuItem> <a href="/Login">LOGOUT</a></MenuItem>
          
          <MenuItem>
            <Badge badgeContent={1} color= "primary"> <MenuItem> <a href="/Product_page"> <ShoppingCartOutlinedIcon /></a></MenuItem>
               
            </Badge> 
          </MenuItem>
        </Right>
     </Wrapper>

    </Container>
  )
}

export default Navbar;




// export default function Navbar() {
//     return (
    
//       <div className="navbarContainer">
//         <div className="navbarLeft">
//           <center>
//           <span className="logo">Isaac's Ecom Shop</span>
//           </center>
//         </div>
        
//         <center>
//         <div className="navbarCenter">
//           <div className="searchbar">
//             <Search className="searchIcon" />
//             <input
//               placeholder="Search"
//               className="searchInput"
//             />
//           </div>
//         </div>
//         </center>
      
//         <div className="navbarRight">
//           <div className="navbarLinks">
//             <span className="navbarLink">Home</span>
//             <span className="navbarLink"> Products</span>
//             <span className="navbarLink"> Cart</span>
            
//           </div>
          
//           <div className="navbarIcons">
//             <div className="navbarIconItem">
//               <Person />
//             </div>
           
//             <div className="navbarIconItem">
//               <Notifications />
//             </div>
//           </div>
//         </div>
        
//       </div>
     
//     );
//   }

  

