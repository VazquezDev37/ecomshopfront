import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: grey;
    position: relative;
    
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "15px"};
    right: ${props=> props.direction === "right" && "15px"};
    margin: auto;
    cursor: pointer;
    
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height 60%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1``
const Desc = styled.p``
const Button = styled.button``



const Slider = () => {
    return (
        <Container>
            <Arrow direction= "left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                <ImgContainer>
                {/* <Image src="https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/> */}
                </ImgContainer>
                <InfoContainer>
                    <Title></Title>
                    <Desc></Desc>
                    <Button></Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
                
            <Arrow direction= "right">
                <ArrowRightOutlined/>
            </Arrow>


        </Container>
    )
}

export default Slider;