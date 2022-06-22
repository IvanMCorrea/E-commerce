import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import logoImg from "../../img/Fuego.png";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar text-white">
            <ul className='navBar__list text-xl'>
                <Link to="/"><img src={logoImg} alt="logo" className='navBar__list--img'/></Link>
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