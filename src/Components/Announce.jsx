import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 25px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
`;



const Announce = () => {
    return (
        <Container>
            Great Deal!! Free Shipping on orders over $69

        </Container>
    )
}

export default Announce;