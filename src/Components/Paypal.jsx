// import React from 'react';
// import  styled  from 'styled-components';
// import Comments from './Comments';
// import DisplayComment from './DisplayComment';
// import ReplyComments from './ReplyComments';



// const paypal = styled.div``

// const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     background-color: grey;
//     position: relative;   
//     color: white;
// `;

// const Summary = styled.div`
//     flex: 1;
//     border: 0.5px solid grey;
//     border-radius: 25px;
//     height: 50vh;
//     padding: 20px;

// `;

// const SummaryTitle = styled.h1`
//     font-weight: 300;
// `;

// const SummaryItem = styled.div`
//     margin: 30px 0px;
//     display: flex;
//     justify-content: space-between;
//     font-weight: ${props=>props.type === "total" && "400" };
//     font-size: ${props=>props.type === "total" && "25px" };
//     flex-direction: column;
//     justify-content: center;
// `;

// const SummaryItemText = styled.span``;


// const SummaryItemPrice = styled.span`
//     flex: 2;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     justify-content: center;
//     font-size: 15px;
//     margin: 5px 30px;
// `;


// const Paypal = () => {
//     return (
//         <Container>
//             <Summary>
//             <SummaryTitle>Order Summary</SummaryTitle>
//                       <SummaryItem>
//                           <SummaryItemText>Subtotal</SummaryItemText>
//                           <SummaryItemPrice>$ </SummaryItemPrice>
//                           <SummaryItemText>Shipping</SummaryItemText>
//                           <SummaryItemPrice>$ </SummaryItemPrice>
//                           <SummaryItemText type= "total">Total</SummaryItemText>
//                           <SummaryItemPrice>$ </SummaryItemPrice>
//                       </SummaryItem>
                      
//                       <div id="smart-button-container">
//       <div style="text-align: center;">
//         <div id="paypal-button-container"></div>
//       </div>
//     </div>
//   <script src="https://www.paypal.com/sdk/js?client-id=AW-Bd4_vj91Q6TPGE6VUDwFW87OPo7AmJQ6uIiarbZ0m8QZezMKL7hJlswDjdm2OW4Uv4KmRBSlGRS3N&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
//   <script>
//     function initPayPalButton() {
//       paypal.Buttons({
//         style: {
//           shape: 'rect',
//           color: 'gold',
//           layout: 'vertical',
//           label: 'paypal',
          
//         },

//         createOrder: function(data, actions) {
//           return actions.order.create({
//             purchase_units: [{"amount":{"currency_code":"USD","value":6,"breakdown":{"item_total":{"currency_code":"USD","value":1},"shipping":{"currency_code":"USD","value":5},"tax_total":{"currency_code":"USD","value":0}}}}]
//           });
//         },

//         onApprove: function(data, actions) {
//           return actions.order.capture().then(function(orderData) {
            
//             // Full available details
//             console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//             // Show a success message within this page, e.g.
//             const element = document.getElementById('paypal-button-container');
//             element.innerHTML = '';
//             element.innerHTML = '<h3>Thank you for your payment!</h3>';

//             // Or go to another URL:  actions.redirect('thank_you.html');
            
//           });
//         },

//         onError: function(err) {
//           console.log(err);
//         }
//       }).render('#paypal-button-container')
//     }
//     initPayPalButton();
//   </script>

//                 <Comments  />
//             <ul><DisplayComment/></ul>
//           <ul><ReplyComments/></ul>

          
//              </Summary>
//         </Container>
//     )
// }

// export default Paypal;
