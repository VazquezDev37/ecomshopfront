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

const Pay = () => {
    return (
        <Container>
            <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
                      <SummaryItem>
                          <SummaryItemText>Subtotal</SummaryItemText>
                          <SummaryItemPrice>$ </SummaryItemPrice>
                          <SummaryItemText>Shipping</SummaryItemText>
                          <SummaryItemPrice>$0 </SummaryItemPrice>
                          <SummaryItemText type= "total">Total</SummaryItemText>
                          <SummaryItemPrice>$84.99 </SummaryItemPrice>
                      </SummaryItem>

                      <Right>
          
                     <MenuItem>  <a href="/https://buy.stripe.com/test_aEU8y4ban81l2K4cMM">PAY NOW</a></MenuItem>
          
                     <MenuItem> <a href="/home">Home</a></MenuItem>
                     </Right>
                     

                Pay for Products Here!! using Stripe.

                CLick on Pay button to process payment...

                
                

                {/* Leave Reviews for Product */}
                {/* <Comments  />
            <ul><DisplayComment/></ul>
          <ul><ReplyComments/></ul> */}

          
             </Summary>
        </Container>
    )
}

export default Pay;