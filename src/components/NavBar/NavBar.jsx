import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import {Link} from "react-router-dom";

const logoImg = "/img/mate.png"
const NavBar = () => {
    return (
        <nav className="navBar text-white">
            <ul className='navBar__list text-xl'>
                <Link to="/"><div className='navBar__logo'><img src={logoImg} alt="logo" className='navBar__list--img'/><h1> MATESITO</h1></div></Link>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/categoria/Termos">Termos</Link></li>
                <li><Link to="/categoria/Mates">Mates</Link></li>
                <li><Link to="/contacto">Contact</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;