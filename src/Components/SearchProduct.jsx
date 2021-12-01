// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Button = styled.button`  
//     padding: 15px 10px;
//     background-color: grey;
//     color: white;
//     cursor: pointer;
// `;



// export default function SearchProduct(props) {
   
//     const [productSearch, setProductSearch] = useState ([]);
//     const [productId, setProductId] = useState ('');

//     const handleChange = (e)=> {
//        setProductSearch(e.target.value)
//     }
 
//    const handleSubmit = (e) => {
//      e.preventDefault();

//      axios.get(`https://api.rainforestapi.com/request?${productSearch}api_key=9E236CC13CD249FFBE801CA2CE133599&type=product&amazon_domain=amazon.com&asin=B073JYC4XM`)
//     //  .then(() => props.setProductId(productId))
//    .then((response) => setProductId (response.data.item[0].id.productId)) 
//    };
 
//    return (

//     <div id = "bar">
      
//     <img src="https://m.media-amazon.com/images/I/81dVtLN-c1L._AC_SL1500_.jpg" width="100" 
//        />

      
//     <div className = "row form-group">
    
//     <form onSubmit =  {handleSubmit}>
    
//       <div className="input-group">
//       <i className="bi bi-list"></i>
      
//       <input type="text" className="form-control" id= "search_field" placeholder="Search" aria-label="Search" onChange = {handleChange} value = {productSearch} onChange = {(e) => setProductSearch(e.target.value)}
//       aria-describedby="search-addon"  />
//       <Button>
//       <button onClick="button" ><i className="bi bi-search">Click Here</i></button>
//       </Button>
//       <div className="searchBar__right">
//       </div>
     
//     </div>
//     </form>
    
//     </div>
     
//     </div>
    
    
//   )
// }