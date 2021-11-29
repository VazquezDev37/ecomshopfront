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
    left: ${(props)=> props.direction === "left" && "15px"};
    right: ${(props)=> props.direction === "right" && "15px"};
    margin: auto;
    cursor: pointer;
    
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 2.5s ease;
   
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

// const Image = styled.img`
//     height 60%;
// `;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    margin: 30px 0px;
    font-size: 35px;
`;

const Desc = styled.p`
    margin: 40px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    font-size: 15px;
    padding: 10px;
    cursor: pointer;
    background-color: grey;
    cursor: pointer;
`;



const Slider = () => {

   
    const handleClick = (direction) => {

    };

    return (
        <Container>
            <Arrow direction= "left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>       
                <Slide>
                <ImgContainer>          
                {/* <Image src="https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/> */}
                </ImgContainer>
                <InfoContainer>
                    <Title>Black Friday Sale</Title>
                    <Desc>Hurry!! Get a 40% off new arrivals.</Desc>
                    <Button> <a href="/Product_page">Show Me</a></Button>
                </InfoContainer>
                </Slide>
                <Slide>
                <ImgContainer>
                {/* <Image src="https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/> */}
                </ImgContainer>
                <InfoContainer>
                    <Title>Clearance Sale</Title>
                    <Desc>Hurry!! Get a 40% off!!!.</Desc>
                    <Button>Show Me</Button>
                </InfoContainer>
                </Slide>
                <Slide>
                <ImgContainer>
                {/* <Image src="https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg"/> */}
                </ImgContainer>
                <InfoContainer>
                    <Title> Christmas Sale</Title>
                    <Desc>Hurry!! Get a 20% off new arrivals.</Desc>
                    <Button>Show Me</Button>
                </InfoContainer>
                </Slide>          
            </Wrapper>                       
            <Arrow direction= "right" onClick= {()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider;