import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.Module.css';
import logo from '../../Assests/logo.png'
import { NavLink ,useHistory } from 'react-router-dom';
import { AuthContext } from '../../Store/Auth-Context';
import CartContext from '../../Store/CartContext';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import UserProfile from '../Profile/UserProfile';

const NavBar = (props) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const handleCartClick = () => {
    if (authCtx.isLoggedIn) {
      props.cartShowHandler()
    } 
    else {
      history.push('/login');
    }
  };

  const logoutHandler = ()=>{
    authCtx.logout(); 
    history.push('/login'); 
    alert("Your email has been logged out successfully. Thank you for using our service")
  }
  

  return (
    <Navbar className='navbar-control'  expand="lg">
      <Navbar.Brand className='brand' href="#home">
        <img src={logo} alt="logo" />
        MEN VAN
      </Navbar.Brand>

      <Nav className="nav-details">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to="/about" className="nav-link">AboutUs</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
       
       
      </Nav>
        
      
        <div className='navButtonsContainer'>
            
          <div className='cart-button' onClick={handleCartClick}>
            <FaShoppingCart className='cart-icon' />
            { authCtx.isLoggedIn && <span className='cart-badge'>{ctx.totalquantity}</span>}
            { !authCtx.isLoggedIn && <span className='cart-badge'>{0}</span>}
          </div>
        
          {!authCtx.isLoggedIn && 
          <Button className="login-button" onClick={()=>{history.push('/login')}}> 
          <FaUser className="nav-icon" /> Login
           </Button>}


           {authCtx.isLoggedIn && 
           <Button className="login-button"  onClick={() => logoutHandler()} >
             <FaUser className="nav-icon" />
            Logout
            </Button>}

         
          <div className='profile-Button'>
          <UserProfile/>
          </div>

        </div>
      
    </Navbar>
  );
}

export default NavBar;
