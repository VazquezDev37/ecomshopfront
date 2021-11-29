import React from 'react';
import  styled  from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: grey;
    position: relative;   
    color: white;
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

const Pay = () => {
    return (
        <Container>
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

                Pay for Products Here!! using Stripe or PayPal.

          
             </Summary>
        </Container>
    )
}

export default Pay;