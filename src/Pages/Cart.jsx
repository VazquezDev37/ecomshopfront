import React from 'react';
import styled from 'styled-components';
import Announce from '../Components/Announce';
import Navbar from '../Components/Navbar/Navbar';


const Container = styled.div`
   
    
`;

const Wrapper = styled.div`
    
    padding: 20px;
   
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 250;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: black;
    color: white;
`;

const TopTexts = styled.div`
    
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 15px 35px;
    color: blue;
`;
const Bottom = styled.div``;

const Footer = styled.div``

const Cart = () => {
    return (
      <Container>
          <Navbar/>
          <Announce/>
          <Wrapper>
              <Title>Your Shopping Cart</Title>
              <Top>
                  <TopButton>Continue Shopping</TopButton>
                  <TopText>Shopping Cart(3)</TopText>
                  <TopText>Wish List(0)</TopText>
                  <TopButton>Checkout Now</TopButton>
              </Top>
              <Bottom></Bottom>
          </Wrapper>
          <Footer/>
      </Container>
    )
}

export default Cart;