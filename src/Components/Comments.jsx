import React, {  useState } from 'react';
import axios from 'axios';


    // Leave Review on Product
    
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
                <label>Add a Review</label>
                <input onChange = {handleChange} value = {text}/>
                <button onClick ="submit">POST REVIEW ON PRODUCT</button>
            </form>
            </center>
        )
    }
    

export default Comments;