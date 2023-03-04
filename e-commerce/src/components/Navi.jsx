import React from "react";
import Logo from './logo/logoo.jpg'
import Cart from './logo/cart1.png'
import { Link } from "react-router-dom";

import { cartContext } from "./context/context";
import { useContext } from "react";
// import Badge from '@mui/icons-material';
const NavBar = () => {

    const globalState=useContext(cartContext)
   const state=globalState.state;
    return (
        <div>
            <div className="Nav-container">
                <Link to='/'><img id='logo' src={Logo} alt='logo' /></Link>
                <span>
                <h2>Digital Warrior</h2>
                </span>
                <span>{state.length!==0?state.length:null}
                <Link to='/Cart'><img id='cart' src={Cart} alt='cart' /> </Link>
                </span>
            </div>
        </div>
    )
}
export default NavBar;