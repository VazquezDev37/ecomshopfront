import React, { useState } from 'react';
import styled from 'styled-components';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from '../Components/PaymentForm';



const Button = styled.button`  
    padding: -10px 60px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


 function Cart({ cart, setCart }) {
    const getTotalSum = () => {
      return cart.reduce(
        (sum, { cost, quantity }) => sum + cost * quantity,
        0
      );
    };
    
    const getTotalDiscount = ({regForm}) => {
      if (regForm.text === promo ) {
        return totalCost.reduce(
          ( { totalCost }) => totalCost -  0.1
        )
      }else { 
        return
      }
       
     }
  
     const promo = "promoCode"

     const totalCost = "0.1"
  
    const [regForm, setRegForm ] = useState({
      
      text: ""
      
    })
  
    const handleChange = (e)=> {
       setRegForm({
         ...regForm, [e.target.name]: e.target.value
       })
    }
  
    const clearCart = () => {
      setCart([]);
    };
  
    const setQuantity = (product, amount) => {
      const newCart = [...cart];
      newCart.find(
        (item) => item.name === product.name
      ).quantity = amount;
      setCart(newCart);
    };
  
    const removeFromCart = (productToRemove) => {
      setCart(
        cart.filter((product) => product !== productToRemove)
      );
    };
  
    return (
      <>
        <h1>My Cart</h1>
        {cart.length > 0 && (
          <button onClick={clearCart}>Clear Cart</button>
        )}
        <div className="product">
          {cart.map((product, id) => (
            <div className="product" key={id}>
              <h3>{product.name}</h3>
              <h4>${product.cost}</h4>
              <input
                value={product.quantity}
                onChange={(e) =>
                  setQuantity(
                    product,
                    parseInt(e.target.value)
                  )
                }
              />
              <img src={product.image} alt={product.name} />
              <button onClick={() => removeFromCart(product)}>
                Remove
              </button>
            </div>
          ))}
        </div>
  
        <div>Total Cost: ${getTotalSum()}

        <form onSubmit={(e) => getTotalDiscount(e)}>
      
      <input
        onChange={ handleChange }
        onCLick={ totalCost}
      data-label="Promo Code" 
      data-msg="Please enter a valid promo code." 
      type="text" name="promo-code" 
      placeholder="Promo Code" 
      pattern="10%off" required
        />     
      <Button>
      <button type = "submit">Apply Discount</button> 
      </Button> 
      </form>
      <>
      <hr />
      <Elements
      stripe={loadStripe('pk_test_51K244WILIR4UakCXmvJkLzKMWz8tkfj7CBqNutsgKBWBoop603GSg0lERekEQp6Uj7iVRjEn1qHqRmQq2gnBDMQ000dAO539vC',
      )}
      >
        <PaymentForm />
      </Elements>
      </>
        </div>
      </>
    );
  }
export default Cart;