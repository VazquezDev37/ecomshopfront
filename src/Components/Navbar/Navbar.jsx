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
            <a href="/Review">Search</a>
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