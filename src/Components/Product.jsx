import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const Button = styled.button`  
    padding: -10px 60px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Accessories = 'accessories';
const Storage = 'storage';



export default function Product({ setCart, cart }) {
  const [product] = useState([
    {
      category: Storage,
      name: 'SanDisk 16GB Ultra microSDHC UHS-I Memory Card with Adapter - 98MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUAR-016G-GN6MA ',
      cost: 10.99,
      image:
        'https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg',
    },
    {
      category: Storage,
      name: 'SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter - 100MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUAR-128G-GN6MA',
      cost: 15.99,
      image:
        'https://m.media-amazon.com/images/I/617NtexaW2L._AC_SS450_.jpg',
    },
    {
      category: Storage,
      name: 'SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter - Up to 160MB/s, C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-128G-GN6MA',
      cost: 15.99,
      image:
        'https://m.media-amazon.com/images/I/815cRpgAN3L._AC_SS450_.jpg',
    },
    {
      category: Accessories,
      name: 'REOLINK Argus PT w/ Solar Panel - Wireless Pan Tilt Solar Powered WiFi Security Camera System w/ Rechargeable Battery Outdoor',
      cost: 159.99,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTz1EsMukmbsIEl_e-PuKiqcoaU0RT3Gvmw9UwNGX7vEka0S0NMSG8kVvFgj1paCUudN4y7RIeL51RcXipSWo7UChlAdOZP',
    },
    {
      category: Accessories,
      name: 'Outdoor Security Camera System Wireless, Solar Battery Powered, 1080p Wirefree Waterproof 2-Way Talk Night Vision w/ PIR Moti',
      cost: 84.99,
      image:
        'https://m.media-amazon.com/images/I/61Se1CwF6YS._AC_SL1500_.jpg',
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(Accessories);

  const getProductInCategory = () => {
    return product.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
    <center>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={Accessories}>{Accessories}</option>
        <option value={Storage}>{Storage}</option>
      </select>
      </center>
      <div className="product">
        {getProductInCategory().map((product, id) => (
          <div className="product" key={id}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            
            <Button>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button><a href="/pay"> Checkout </a></button>
            </Button>
           
          </div>
        ))}
      </div>
    </>
  );
}