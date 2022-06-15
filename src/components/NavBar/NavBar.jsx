import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import logoImg from "../../img/Fuego.png";

const NavBar = () => {
    return (
        <nav className="navBar text-white">
            <ul className='navBar__list text-xl'>
                <img src={logoImg} alt="logo" className='navBar__list--img'/>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;