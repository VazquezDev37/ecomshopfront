import React from 'react';
import  styled  from 'styled-components';
import Comments from './Components/Comments';
import DisplayComment from './Components/DisplayComment';
import ReplyComments from './Components/ReplyComments';


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
                          <SummaryItemPrice>$ </SummaryItemPrice>
                          <SummaryItemText>Shipping</SummaryItemText>
                          <SummaryItemPrice>$ </SummaryItemPrice>
                          <SummaryItemText type= "total">Total</SummaryItemText>
                          <SummaryItemPrice>$ </SummaryItemPrice>
                      </SummaryItem>
                      

                Pay for Products Here!! using Stripe or PayPal.

                CLick on link below to process payment...

                <Comments  />
            <ul><DisplayComment/></ul>
          <ul><ReplyComments/></ul>

          
             </Summary>
        </Container>
    )
}

export default Pay;