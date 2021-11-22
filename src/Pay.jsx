import StripeCheckout from 'react-stripe-checkout';

const Key = ""

const Pay = () => {
    return (
        <div
         style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
         >
            <StripeCheckout 
            name= "Isaac's Ecom Shop"
            img= ""
            billingAddress
            shippingAddress
            description= ""
            amount= {}
            token= {onToken}
            stripeKey= {KEY}>
            <button
            style={{
                border: "none",
                width: 125,
                borderRadius: 5,
                padding: "25px",
                backgroundcolor: "black",
                color: "white",
                fontWeight: "700",
                cursor: "pointer",
            }}
            >
                Pay Now
                
            </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;