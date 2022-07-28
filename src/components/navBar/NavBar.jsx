import React, { useState, useEffect } from "react";
import CartWidget from "./cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { assetsUrl } from "../../context/ImgContext";
import { traerCategorias } from "../../services/firestore";
import Categories from "./categories/Categories";

const NavBar = () => {
  const [categorias, setCategorias] = useState([]);
  const [renderizar, setRenderizar] = useState(false);
  const renderizarCat = () => {
    return (
      <>
        {categorias.map((cat, index) => {
          return <Categories category={cat} key={index} />;
        })}
      </>
    );
  };
  useEffect(() => {
    traerCategorias()
      .then((res) => {
        setCategorias(res);
      })
      .then((res) => {
        setRenderizar(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        {renderizar === true ? renderizarCat() : null}
        <li>
          <Link to="/contacto" className="navBar__list--category">
            Contacto
          </Link>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
