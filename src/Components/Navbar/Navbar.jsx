import styled from 'styled-components'
//import './navbar.css';
import { Search, Person, Notifications } from "@mui/icons-material";

// const Container = styled.div`
//   height: 70px;
// `
// const Wrapper = styled.div`
//   padding: 10px 20px;
//   `

// const Navbar = () => {
//   return (
//     <Container>
//      <Wrapper> Navbar </Wrapper>

//     </Container>
//   )
// }




export default function Navbar() {
    return (
    
      <div className="navbarContainer">
        <div className="navbarLeft">
          <center>
          <span className="logo">Isaac's Ecom Shop</span>
          </center>
        </div>
        
        <center>
        <div className="navbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search"
              className="searchInput"
            />
          </div>
        </div>
        </center>
      
        <div className="navbarRight">
          <div className="navbarLinks">
            <span className="navbarLink">Home</span>
            <span className="navbarLink"> Products</span>
            <span className="navbarLink"> Cart</span>
            
          </div>
          
          <div className="navbarIcons">
            <div className="navbarIconItem">
              <Person />
            </div>
           
            <div className="navbarIconItem">
              <Notifications />
            </div>
          </div>
        </div>
        
      </div>
     
    );
  }

  

