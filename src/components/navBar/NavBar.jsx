import React from "react";
import CartWidget from "./cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { assetsUrl } from "../../context/ImgContext";

const NavBar = () => {
  return (
    <nav className="navBar text-white">
      <ul className="navBar__list text-xl">
        <Link to="/">
          <div className="navBar__logo">
            <img
              src={assetsUrl(`./mate.png`)}
              alt="logo"
              className="navBar__list--img"
            />
            <h1 className="navBar__logo--title"> MATESITO</h1>
          </div>
        </Link>
        <li>
          <Link to="/" className="navBar__list--category">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/categoria/Termos" className="navBar__list--category">
            Termos
          </Link>
        </li>
        <li>
          <Link to="/categoria/Mates" className="navBar__list--category">
            Mates
          </Link>
        </li>
        <li>
          <Link to="/categoria/Bombillas" className="navBar__list--category">
            Bombillas
          </Link>
        </li>
        <li>
          <Link to="/contacto">Contact</Link>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
