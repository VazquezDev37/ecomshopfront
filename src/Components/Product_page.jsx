import React from 'react';
import  styled  from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
   flex: 1;
   margin 5px;
    `;

    const Image = styled.img`
    border-radius: 8px;
    padding: 5px;
    width: 250px;
    `;

    const MenuItem = styled.div`
    font-size: 25px;
    cursor: pointer;
    margin-left: 20px;
  `;

  const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

   
    const Info = styled.div``;

    const Icon = styled.div``;

const Product_page = () => {
    return (
        <Container>
           
            <Image src= "https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/>
            <Info>
            "SanDisk 16GB Ultra MicroSDXC UHS-I Memory Card with 
            Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-16G-GN6MA"
            
            <Right>
                <Icon>
                <MenuItem> <a href="/Cart"> <ShoppingCartOutlinedIcon /></a></MenuItem>
                </Icon>
                </Right>
            </Info>
           


        </Container>
    )
}

export default Product_page;