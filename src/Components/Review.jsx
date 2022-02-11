import React from 'react';
import  styled  from 'styled-components';
import Comments from './Comments';
import DisplayComment from './DisplayComment';
import ReplyComments from './ReplyComments';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: grey;
    position: relative;   
    color: white;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    background-color: teal;
`;

const Image = styled.img`
    border-radius: 8px;
    padding: 10px;
    width: 400px;
 `;

 const Right = styled.div`
flex: 2;
display: flex;
align-items: top;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 15px;
cursor: pointer;
margin-left: 20px;
color: white;

`;

const Review = () => (
   <Container>
              
       <ImgContainer>
           <Image src='https://m.media-amazon.com/images/I/61Se1CwF6YS._AC_SL1500_.jpg'/>
       </ImgContainer>
     Leave a Review for Product
    <Comments  />
    <ul><DisplayComment/></ul>
    <ul><ReplyComments/></ul>
    <Right>

    <MenuItem> <a href="/home">Home</a></MenuItem>
    </Right>

    </Container>
   
 );

 export default Review;