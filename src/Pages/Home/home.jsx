import React from 'react';
import Announce from '../../Components/Announce';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider';
// import ProductSearch from '../../Components/SearchProduct';
// import Cart from '../../Pages/Cart';








const Home = () => {
    return (
        <div>
            <Announce/>
            <Navbar/>
            <Slider/>
            {/* <ProductSearch/> */}
            {/* <Cart/> */}
           
            
        </div>
    )
}

export default Home;