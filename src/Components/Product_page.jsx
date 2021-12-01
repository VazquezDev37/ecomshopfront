import React, { useState } from 'react';
import  styled  from 'styled-components';
import './Product_page.css';
import Product from './Product';
import Cart from '../Pages/Cart';




const MenuItem = styled.div`
     font-size: 25px;
     cursor: pointer;
     margin-left: 20px;
 `;


const PAGE_PRODUCT = 'product';
const PAGE_CART = 'cart';

function Product_page() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCT);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCT)}>
          View Products
        </button>
        <button>
        <MenuItem> <a href="/Pay"> Checkout Now </a></MenuItem>
        </button>
      </header>
      {page === PAGE_PRODUCT && (
        <Product cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default Product_page;