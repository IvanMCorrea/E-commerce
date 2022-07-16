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
            <h1> MATESITO</h1>
          </div>
        </Link>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/categoria/Termos">Termos</Link>
        </li>
        <li>
          <Link to="/categoria/Mates">Mates</Link>
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
