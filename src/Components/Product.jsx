import React from 'react';
import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import  styled  from 'styled-components';


const Container = styled.div`
   flex: 1;
   margin 5px;
    `;

    const Image = styled.img`
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    `;

    // const Circle = styled.div
    // const Image = styled.img
    // const Info = styled.div
    // const Icon = styled.div

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src= "https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
            </Info>
           


        </Container>
    )
}

export default Product;