import React, {  useState } from 'react';
import axios from 'axios';
// import  styled  from 'styled-components';



// const Container = styled.div`
//    flex: 1;
//    margin 5px;
//     `;

//     const Image = styled.img`
//     border-radius: 8px;
//     padding: 5px;
//     width: 250px;
//     `;

//     const MenuItem = styled.div`
//     font-size: 25px;
//     cursor: pointer;
//     margin-left: 20px;
//   `;

//   const Right = styled.div`
//     flex: 2;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//   `;

   
//     const Info = styled.div``;

//     const Icon = styled.div``;

    
    
    const Comments = (props) => {
        const [text, setText] = useState  ('')
        const [productId] = useState ('')
         const handleChange = (event) => {
             setText(event.target.value)
             console.log(text)
         }
         const handleSubmit = (event) => {
             event.preventDefault()
             const comment = {
                 text: text,
                 productId: productId
             }
                axios.post('http://localhost:5000/api/comments/', comment)
               .then(response => console.log(response.data))
         }
        return (
            <center>
            <form onSubmit = {handleSubmit}>
                <label>Add a a Review</label>
                <input onChange = {handleChange} value = {text}/>
                <button onClick ="submit">POST REVIEW ON PRODUCT</button>
            </form>
            </center>
        )
    }
    

export default Comments;