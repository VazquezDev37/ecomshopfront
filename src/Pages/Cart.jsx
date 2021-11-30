import React from 'react';
import styled from 'styled-components';
import Announce from '../Components/Announce';
import Navbar from '../Components/Navbar/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


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


const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 15px 35px;
    color: black;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 5;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 3;
    display: flex;
`;

const Image = styled.img`
border-radius: 4px;
padding: 5px;
width: 150px;
`;


const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px

`;

const ProductAmount = styled.div`
    font-size: 30px;
    margin: 15px;
`;

const ProductPrice = styled.div`
    font-size: 40;
    margin: 10px;
`;

const Hr = styled.hr`
    background-color: blue;
`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid grey;
    border-radius: 25px;
    height: 50vh;
    padding: 20px;

`;

const SummaryTitle = styled.h1`
    font-weight: 300;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "400" };
    font-size: ${props=>props.type === "total" && "25px" };
    flex-direction: column;
    justify-content: center;
`;

const SummaryItemText = styled.span``;


const SummaryItemPrice = styled.span`
    flex: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    margin: 5px 30px;
`;


const Button = styled.button`
    width: 50%;
    background-color: black;
    color: grey;
    font-weight: 600;
    padding: 5px;
    cursor: pointer;
    margin: 15px 35px;
`;

const MenuItem = styled.div`
font-size: 15px;
cursor: pointer;
margin-left: 10px;
color: grey;
`;

const Footer = styled.div``;



const Cart = () => {
    return (
      <Container> 
          <Navbar/>
          <Announce/>
          <Wrapper>
              <Title>Your Shopping Cart</Title>
              <Top>
                  <TopButton> Continue Shopping </TopButton>
                  <TopText><a href="/Cart"> Shopping Cart(2) </a></TopText>
                  <TopText>Wish List(0)</TopText>
                  <TopButton>Checkout Now</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      <Product>
                          <ProductDetail>
                              <Image src= "https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/>
                              <Details>
                                  <ProductName>
                                      <b>Product:</b> SanDisk Memory</ProductName>
                                  <ProductId><b>ID:</b><b> B073K14CVB</b></ProductId>
                              </Details>    
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                  <AddIcon/>
                                  <ProductAmount>1</ProductAmount>
                                  <RemoveIcon/>
                              </ProductAmountContainer>
                              <ProductPrice> $ 15</ProductPrice>
                          </PriceDetail>
                      </Product>
                      <Hr/>
                      <Product>
                          <ProductDetail>
                              <Image src= "https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/>
                              <Details>
                                  <ProductName>
                                      <b>Product:</b> SanDisk Memory</ProductName>
                                  <ProductId><b>ID:</b><b> B073K14CVB</b></ProductId>
                              </Details>    
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                  <AddIcon/>
                                  <ProductAmount>1</ProductAmount>
                                  <RemoveIcon/>
                              </ProductAmountContainer>
                              <ProductPrice> $ 15</ProductPrice>
                          </PriceDetail>
                      </Product>
                  </Info>
                  <Summary>
                      <SummaryTitle>Order Summary</SummaryTitle>
                      <SummaryItem>
                          <SummaryItemText>Subtotal</SummaryItemText>
                          <SummaryItemPrice>$ 30</SummaryItemPrice>
                          <SummaryItemText>Shipping</SummaryItemText>
                          <SummaryItemPrice>$ 5</SummaryItemPrice>
                          <SummaryItemText type= "total">Total</SummaryItemText>
                          <SummaryItemPrice>$ 35</SummaryItemPrice>
                      </SummaryItem>
                      <Button>  <MenuItem> <a href="/Pay"> Checkout Now </a></MenuItem></Button>
                  </Summary>
              </Bottom>
          </Wrapper>
          <Footer/>
      </Container>
    )
}

export default Cart;